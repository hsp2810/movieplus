import React, { useCallback, useState } from "react";
import { loginApi } from "@/utils/api/auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("harshit123@gmail.com");
  const [password, setPassword] = useState("password");

  const login = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      await loginApi(email, password);
    },
    [email, password]
  );

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-[#0c4149] p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-semibold mb-6'>Login</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-white'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border rounded-md border-gray-400 text-black focus:outline-none'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-white'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border rounded-md border-gray-400 text-black focus:outline-none'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-white text-[#0c4149] hover:bg-slate-300 py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-100'
            onClick={login}
          >
            Login
          </button>
        </form>
        <p className='mt-4 text-white'>
          Do not have an account?
          <Link href='/register' className='text-blue-300 hover:underline ml-1'>
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
