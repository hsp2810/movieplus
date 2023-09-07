import type { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(422)
      .json({ message: "Route only supports a POST request" });
  }

  const { name, email, password } = req.body;
  const userExists = await prismadb.user.findUnique({
    where: {
      email,
    },
  });

  if (userExists) {
    return res.status(423).json({
      message: "User with the same email already exists. Try a different one",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prismadb.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  res.status(200).json({ message: "Account created successfully", user });
}
