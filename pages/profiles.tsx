import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import useLoginUser from "@/hooks/useLoginUser";
import { useRouter } from "next/router";
import { User } from "@prisma/client";

export default function Profiles() {
  const router = useRouter();
  const { data: homeUser }: { data: User } = useLoginUser();

  return (
    <div>
      <h1>Who is watching?</h1>
      <div className='my-5 cursor-pointer' onClick={() => router.push("/")}>
        {homeUser?.name}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
