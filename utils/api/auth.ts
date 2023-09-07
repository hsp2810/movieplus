import { signIn } from "next-auth/react";
import type { NextRouter } from "next/dist/client/router";
import axios from "axios";

const URL = `/api`;

export const loginApi = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/profiles",
    });
  } catch (error) {
    console.log(error);
  }
};

export const registerApi = async (
  name: string,
  email: string,
  password: string,
  router: NextRouter
) => {
  try {
    await axios.post(`${URL}/register`, {
      name,
      email,
      password,
    });

    await loginApi(email, password);
  } catch (error) {
    console.log(error);
  }
};
