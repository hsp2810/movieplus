import { ServerAuthenticate } from "@/lib/serverAuth";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await ServerAuthenticate({ req, res });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    //Do the API work

    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    console.log(error);
  }
}
