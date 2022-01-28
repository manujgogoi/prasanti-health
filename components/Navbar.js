import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* Main Nav container */}
      <nav className="shadow-md w-full bg-green-200 uppercase">
        <div className="w-full">
          <div className="flex items-center h-20 w-full py-1">
            {/* First block section outer part */}
            <div className="flex items items-center mx-5 md:mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 space-x-1">
                <Image
                  src="/images/Logo.png"
                  width={70}
                  height={70}
                  alt="Prasanti Healthcare Logo"
                />
                <h1 className="font-bold text-xl cursor-pointer">
                  <span className="text-blue-500">Prasanti</span>{" "}
                  <span className="text-green-500">Healthcare</span>
                </h1>
              </div>

              {/* Menu for greater than medium screens. hidden on small screens */}
              <div className="hidden md:block">
                <div>
                  <Link href="/">
                    <a className="cursor-pointer font-semibold px-3 py-2 hover:text-red-500">
                      Home
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="cursor-pointer font-semibold px-3 py-2 hover:text-red-500">
                      About
                    </a>
                  </Link>
                  <Link href="/why">
                    <a className="cursor-pointer font-semibold px-3 py-2 hover:text-red-500">
                      Why?
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="cursor-pointer bg-green-500 rounded text-white font-semibold px-3 py-2 hover:bg-green-800">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="mr-5 flex md:hidden">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                type="button"
                className="px-5 py-2 min-w-max border rounded bg-indigo-600 text-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isNavOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isNavOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden">
            <div>
              <Link href="/">
                <a className="block m-5 p-3 rounded text-xl hover:bg-blue-600 hover:text-white transition-all duration-100">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="block m-5 p-3 rounded text-xl hover:bg-blue-600 hover:text-white transition-all duration-100">
                  About
                </a>
              </Link>
              <Link href="/why">
                <a className="block m-5 p-3 rounded text-xl hover:bg-blue-600 hover:text-white transition-all duration-100">
                  Why?
                </a>
              </Link>
              <Link href="/contact">
                <a className="block m-5 p-3 rounded text-xl hover:bg-blue-600 hover:text-white transition-all duration-100">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
    // <nav className="bg-gray-100">
    //   {/* navbar wrapper */}
    //   <div className="md:max-w-6xl px-3 mx-auto">
    //     {/* navbar */}
    //     <div className="flex justify-between items-center">
    //       {/* primary nav (Left) */}
    //       <div className="flex items-center">
    //         {/* Logo & Brand Wrapper */}
    //         <div className="flex items-center py-3 space-x-1 mr-10">
    //           <Image
    //             className=""
    //             src="/images/Logo.jpg"
    //             width={80}
    //             height={80}
    //             alt="Prasanti Healthcare Logo"
    //           />
    //           <span className="font-bold text-blue-500">
    //             Prasanti Healthcare
    //           </span>
    //         </div>
    //         {/* Nav items */}
    //         <div className="hidden lg:flex space-x-1">
    //           <Link href="/">
    //             <a className="py-3 px-5 hover:bg-gray-400 transition duration-300">
    //               Home
    //             </a>
    //           </Link>
    //           <Link href="/about">
    //             <a className="py-3 px-5 hover:bg-gray-400 transition duration-300">
    //               About Us
    //             </a>
    //           </Link>
    //           <Link href="/contact">
    //             <a className="py-3 px-5 hover:bg-gray-400 transition duration-300">
    //               Contact Us
    //             </a>
    //           </Link>
    //         </div>
    //       </div>
    //       {/* Secondary Nav (Right) */}
    //       <div className="hidden lg:block">Secondary Nav</div>

    //       {/* Mobile menu goes here */}
    //       <div className="hidden lg:flex item-center">Mobile links</div>
    //     </div>
    //   </div>
    //   <div className="lg:hidden block">
    //     <Link href="/">
    //       <a className="block py-3">Home</a>
    //     </Link>
    //     <Link href="/about">
    //       <a className="block py-3">About us</a>
    //     </Link>
    //     <Link href="/contact">
    //       <a className="block py-3">Contact us</a>
    //     </Link>
    //   </div>
    // </nav>
  );
};

export default Navbar;
