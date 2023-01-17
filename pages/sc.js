import { useState } from "react";

export default function Sc() {
  const [navbar, setNavbar] = useState(false);

    return (
        <>
            
    {/* navbar */}
    <nav className="w-full overflow-hidden z-50 sticky top-0 bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <div className="flex gap-4 items-center cursor-pointer">
                <img src="../assets/Logo.png" width="100" height="100" alt="" />
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
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
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
            </ul>
          </div>
        </div>
      </div>
    </nav>


    {/* DATA */}

<div className="grid gap-3 m-3 md:flex justify-center md:gap-5 md:m-5 text-lg">

    <div className="card bg-base-100 shadow-xl md:w-1/2 ">
      <div className="card-body">
        <div>Structural Repair, diperlukan karena melihat adanya kondisi/kebutuhan, antara lain:</div>
        <ul className="list-disc">
          <li>Saat konstruksi, misal terjadi beton kropos/retak/bocor.</li>
          <li>Perubahan desain struktur.</li>
          <li>Pertambahan usia bangunan sehingga fungsi struktur tidak sesuai dengan rencana awal.</li>
          <li>Perubahan fungsi ruang/bangunan.</li>
          <li>Perubahan peraturan bangunan.</li>
          <li>Kerusakan akibat bencana alam.</li>
          <li>Dan lain - lain.</li>
        </ul>
      </div>
    </div>

    <div className="card bg-base-100 shadow-xl md:w-1/2 ">
      <div className="card-body">
        <div>Karmelindo memberi solusi yang tepat, efektif, dan efisien berdasarkan kebutuhan lapangan. Pekerjaan yang dapat kami lakukan, antara lain:</div>
        <ul className="list-disc">
          <li>Injeksi beton kropos/retak/bocor</li>
          <li>Penambahan fiber carbon</li>
          <li>Jacketing</li>
          <li>Penambahan bracing</li>
          <li>Pemasangan penutup dilatasi antar bangunan</li>
        </ul>
      </div>
    </div>

    </div>

{/* FOOTER */}
<div className="p-3 md:flex bg-red-600 text-white justify-between md:text-lg">
      <div className="md:m-5">
        <img src="../assets/Logo.png" width="100" height="100" alt="" />
        <div className="mt-3 md:mt-5">
          Ruko Sutera Niaga IIE No.2, Raya Serpong KM 2, Tangerang 15325
        </div>
      </div>
      
      <div className="md:m-5">
            <div className="grid">
              <div>
              Phone : 02154214170
              </div>
              <div className="mx-14 md:mx-16">
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