import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { registerApi } from "@/utils/api/auth";

export default function Register() {
  const [name, setName] = useState("Harshit");
  const [email, setEmail] = useState("harshit123@gmail.com");
  const [password, setPassword] = useState("password");
  const router = useRouter();

  const register = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      await registerApi(name, email, password, router);
    },
    [name, email, password]
  );

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-[#0c4149] p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-semibold mb-6'>Register</h2>
        <form>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-white'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-2 border rounded-md border-gray-400 text-black focus:outline-none'
              placeholder='Enter your name'
              required
            />
          </div>
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
            onClick={register}
          >
            Register
          </button>
        </form>
        <p className='mt-4 text-white'>
          Already a user?{" "}
          <Link href='/login' className='text-blue-300 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
