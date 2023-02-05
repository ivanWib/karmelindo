import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Logo.png";
import Gc from "../public/GC.png";
import Sc from "../public/SC.png"
import Struktur from "../public/Struktur.png";



export default function Home() {
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
                <Image src="https://cdn.discordapp.com/attachments/887579866025832511/1051895626104848526/images.png" width="100" height="100" alt="" />
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

    {/* HERO */}
    <div className="grid md:flex justify-between bg-gray-300">
      <div className="flex justify-center md:m-28">
        <Image src="https://cdn.discordapp.com/attachments/887579866025832511/1051895626104848526/images.png" alt="" className="w-36 mt-3 md:w-60 h-fit" />
      </div>

      <div className="mx-5 md:w-1/2 text-justify md:mx-10">
        <p className="mt-3">
          PT Karmelino Sarana Utama, selanjutnya disebut Karmelindo, adalah perusahaan jasa
          konstruksi yang telah berbadan hukum sejak tahun 2011. Kami didukung oleh tenaga
          ahli dan tim yang berpengalaman dalam melaksanakan pembangunan low-rise hingga
          high-rise building.

        </p>
        <p className="mt-3">
          Era industri 4.0 telah memasuki bidang konstruksi. Meskipun demikian, peran tenaga
          kerja terampil dan staff yang berpengalaman tetap diperlukan dalam melaksanakan
          pembangunan proyek. Kamelindo memadukan kekuatan teknologi pelaksanaan
          maupun bahan, penggunaan tenaga kerja trampil, serta staff yang professional dan
          berpengalaman dalam mengelola proyek.
        </p>
        <p className="mt-3 mb-3">
          Karmelindo mengutamakan mutu pekerjaan dengan memperhatikan keselamatan dan
          kesehatan kerja serta menciptakan lingkungan kerja yang harmoni. Dengan
          perencanaan manajemen proyek yang matang, kami
        </p>
      </div>

    </div>


    {/* JASA */}
      <div className="text-2xl mt-2 md:text-4xl grid justify-center font-ibm-plex-mono font-bold md:mt-5">Jasa</div>
      <div className="flex justify-center gap-10 md:gap-20 m-5">
        <Link href="/gc">
          <Image src="https://cdn.discordapp.com/attachments/887579866025832511/1051895626104848526/images.png" alt="" />
        </Link>
        
        <Link href="/sc">
          <Image src="https://cdn.discordapp.com/attachments/887579866025832511/1051895626104848526/images.png" alt="" />
        </Link>
      </div>



    {/* VISI & MISI */}
    <div className="text-center bg-gray-300">
      <div>
        <div className="text-2xl md:text-4xl grid justify-center font-ibm-plex-mono font-bold">Visi</div>
        <div>
          Menjadi perusahaan jasa konstruksi yang dapat diandalkan dan terpercaya.
        </div>
      </div>
      
      <div>
        <div className="text-2xl md:text-4xl grid justify-center font-ibm-plex-mono font-bold mt-5">Misi</div>
        <p className="mt-3">
          Memberi pelayanan terbaik, dengan memahami kebutuhan Pemberi Tugas dan
          memberikan solusi pelaksanaan proyek yang tepat, yang mengacu pada standar dan
          spesifikasi teknis.
        </p>
        <p className="mt-3">
          Memenuhi standar kualitas proyek dengan memperhatikan aspek waktu
          pelaksanaan yang efektif, aspek biaya proyek yang efisien, aspek kesehatan dan
          keselamatan kerja, serta aspek lingkungan.
        </p>
        <p className="mt-3">
          Membina relasi yang sehat dan berkelanjutan dengan seluruh pemangku kepentingan.
        </p>
      </div>
    </div>


    {/* VALUES */}
    <div className="mt-10 mb-10">
      <div className="text-2xl md:text-4xl grid justify-center font-ibm-plex-mono font-bold ">Values</div>
      <div className="text-center">
        Nilai-nilai penting berikut kami terapkan untuk menuntun kami dalam mencapai visi dan mengambil keputusan demi terwujudnya kualitas pelayanan kami.
      </div>

      <div className="grid justify-center gap-3 mt-3 md:flex md:m-3 text-justify">

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Integritas</h2>
            <p>Karmelindo menjunjung tinggi kepercayaan yang diberikan dalam menjalankan pelaksanaan proyek dengan berkomitmen, bertanggung jawab, dan berperilaku jujur.</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Kerja Sama</h2>
            <p>Melaksanakan kerja sama yang erat antar pemangku kepentingan, menjalin hubungan baik dan saling percaya, serta menjaga persaingan sehat antar rekan kerja sehingga meningkatkan pekerjaan yang lebih optimal.</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Keamanan, Keselamatan, Kesehatan, dan Keberlanjutan</h2>
            <p>Karmelindo mengutamakan keamanan, kesehatan, keselamatan kerja, dan aspek lingkungan sekitar.</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Kompeten dan Adaptif</h2>
            <p>Karmelindo terus meningkatkan mutu dan kapabilitas pelayanan dengan mengkaji aspek manajemen, sumber daya, teknologi, serta terus meningkatkan kepedulian lingkungan.</p>
          </div>
        </div>
      </div>
    </div>

    {/* STRUKTUR ORGANISASI */}
    <div className="bg-gray-300 grid justify-center gap-3">
      <div className="text-2xl md:text-4xl grid justify-center font-ibm-plex-mono font-bold mt-3">Struktur Organisasi</div>
      <div className="mb-3">
        <Image src="https://cdn.discordapp.com/attachments/887579866025832511/1051895626104848526/images.png" alt="" />
      </div>
    </div>

    {/* FOOTER */}
    <div className="p-3 md:flex bg-red-600 text-white justify-between md:text-lg">
      <div className="md:m-5">
        <Image src="https://cdn.discordapp.com/attachments/887579866025832511/1051895626104848526/images.png" width="100" height="100" alt="" />
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
