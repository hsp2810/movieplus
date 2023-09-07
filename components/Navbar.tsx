import LiveTvIcon from "@mui/icons-material/LiveTv";
import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [isIconRotated, setIsIconRotated] = useState(false);

  const toggleIconRotation = () => {
    setIsIconRotated(!isIconRotated);
  };

  const iconRotationClass = isIconRotated ? "-rotate-90" : "";

  return (
    <nav className='py-3 px-6 shadow-lg z-50 relative'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          href={"/"}
          className='text-white text-2xl font-semibold flex items-center'
        >
          MOVIEPLUS
          <LiveTvIcon className='ml-1' />
        </Link>

        <ul className='flex space-x-6 text-white'>
          <li>
            <Link href='#' className='hover:text-gray-400'>
              Home
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:text-gray-400'>
              Movies
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:text-gray-400'>
              Web Series
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:text-gray-400'>
              My List
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:text-gray-400'>
              Browse by Language
            </Link>
          </li>
          <div
            className={`cursor-pointer transition-transform transform ${iconRotationClass}`}
            onClick={toggleIconRotation}
          >
            <SettingsIcon />
          </div>

          {isIconRotated && (
            <ul className='absolute right-6 mt-8 bg-white shadow-lg rounded-md text-black z-50'>
              <li className='w-full hover:bg-slate-300 px-6 py-3 rounded-t-md'>
                <Link href='/profiles' onClick={toggleIconRotation}>
                  Change Profile
                </Link>
              </li>
              <hr className='border-t border-gray-300 w-full' />
              <li className='w-full hover:bg-slate-300 px-6 py-3 rounded-b-md'>
                <button
                  onClick={() => {
                    toggleIconRotation();
                    signOut();
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
