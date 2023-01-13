import { useState } from "react";
import Image from "next/image";
import Logo from "../asset/logo.png";

export default function Value() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
        
    {/* navbar */}
    <nav className="w-full overflow-hidden z-50 sticky top-0 bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <div className="flex gap-4 items-center cursor-pointer">
                <Image src={Logo} width="100" height="100" alt="" />
              </div>
            </a>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <a href="/">
                <li className="text-gray-600 hover:text-yellow-400 cursor-pointer">
                  Home
                </li>
              </a>
              <a href="/gc">
                <li className="text-gray-600 hover:text-yellow-400 cursor-pointer">
                  General Contractor
                </li>
              </a>
              <a href="/sc">
                <li className="text-gray-600 hover:text-yellow-400 cursor-pointer">
                  Structural Contractor
                </li>
              </a>
              <a href="/value">
                <li className="text-gray-600 hover:text-yellow-400 cursor-pointer">
                  Value
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>

{/* DATA */}







{/* FOOTER */}
<div className="text-sm grid md:flex bg-red-600 text-white justify-between md:text-lg">
      <div className="md:m-5">
        <Image src={Logo} width="100" height="100" alt="" />
        <div className="mt-5">
          Ruko Sutera Niaga IIE No.2, Raya Serpong KM 2, Tangerang 15325
        </div>
      </div>
      
      <div className="md:m-5">
            <div className="grid">
              <div>
              Phone : 02154214170
              </div>
              <div className="mx-16">
                021222222800
              </div>
            </div>
            <div>
              Email : karmelindo@yahoo.con
            </div>
      </div>
    </div>

    </>
  )
}

