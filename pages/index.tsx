import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import useLoginUser from "@/hooks/useLoginUser";
import Hero from "@/components/Hero";
import ContinueWatching from "@/components/ContinueWatching";
import NewReleases from "@/components/NewReleases";

export default function Home() {
  const { data: homeUser } = useLoginUser();

  return (
    <>
      <Hero />
      <ContinueWatching />
      <NewReleases />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session);
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
