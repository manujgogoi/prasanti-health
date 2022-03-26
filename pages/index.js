import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <motion.div exit={{ opacity: 1 }}>
      <Head>
        <title>PIISM Home</title>
      </Head>

      <Navbar />
      <main className="overflow-hidden font-roboto">
        <div className="bg-green-400 pb-20 pt-20">
          <div className="flex flex-col lg:flex-row py-5 justify-items-start">
            {/* First Column */}
            <div className="text-slate-900 flex-1 py-20 pl-3">
              <h1 className="font-bold text-6xl md:text-9xl uppercase">
                PIISM
              </h1>
              <h3 className="text-2xl md:text-6xl flex flex-row flex-wrap space-x-2 md:flex-col">
                <p>Prasanti Institute of Indian System of Medicine</p>
              </h3>
            </div>
            {/* Second Column */}
            <div className="flex flex-1 flex-col space-y-6">
              <Link href="/ayurveda">
                <div className="rounded m-2 px-2 py-10 shadow-md shadow-black text-white  bg-green-700 hover:bg-green-600 cursor-pointer">
                  <h2 className="text-5xl font-bold">Prasanti Ayurveda</h2>
                  <p className="text-xl my-2">
                    &#40;Doctors, Medicines, Therapies, Panchakarma&#41;
                  </p>
                </div>
              </Link>
              <Link href="/yogalaya">
                <div className="rounded m-2 px-2 py-10 shadow-md shadow-black text-white  bg-orange-700 hover:bg-orange-600 cursor-pointer">
                  <h2 className="text-5xl font-bold">Prasasti Yogalaya</h2>
                  <p className="text-2xl">Rupnagar, Guwahati</p>
                </div>
              </Link>
              <Link href="/healthcare">
                <div className="rounded m-2 px-2 py-10 shadow-md shadow-black text-white  bg-blue-700 hover:bg-blue-600 cursor-pointer">
                  <h2 className="text-5xl font-bold">Prasasti Healthcare</h2>
                  <p className="text-2xl">
                    &#40;The Alternative Treatment &amp; Therapy Centre&#41;
                  </p>
                </div>
              </Link>
            </div>

            {/* <div className="absolute -bottom-10 -right-48 -z-10 w-6/12 h-96">
              <Image
                layout="responsive"
                src="/images/autumn-leaf.png"
                width={500}
                height={500}
              />
            </div> */}
          </div>
        </div>

        <div className="bg-stone-200 min-h-screen pb-20">
          <h3 className="text-6xl font-light text-center pt-32 pb-20">
            We care for
          </h3>

          <div className=" text-3xl px-3 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <p className="">Gastrities</p>
            <p className="">Arthitis</p>
            <p className="">Diabetes</p>
            <p className="">Joint pain</p>
            <p className="">Back pain</p>
            <p className="">Spinal Problem</p>
            <p className="">Stomach Problem</p>
            <p className="">Hypertension</p>
            <p className="">Neuro Problem</p>
            <p className="">Liver Problem</p>
            <p className="">Constipation</p>
            <p className="">Skin Problem</p>
            <p className="">Tuberoculosis</p>
            <p className="">Cancer</p>
          </div>
        </div>

        <div className="bg-green-500 text-black min-h-screen pb-20">
          <h3 className="text-6xl font-semibold text-center pt-32 pb-20">
            Our Therapautic Applications
          </h3>
          <ul className="text-3xl lg:text-4xl xl:text-5xl px-3 font-light text-center grid grid-cols-1 md:grid-cols-2">
            <li className="py-2">Physical Therapies</li>
            <li className="py-2">Ayurvedic &#38; Herbal Therapies</li>
          </ul>
        </div>

        <div className="min-h-screen pb-20">
          <h3 className="text-6xl font-light text-center my-20">
            Special Care
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-2 font-light">
            <div className="p-2 bg-green-600 text-white shadow-lg rounded-lg hover:rotate-2 cursor-pointer transition-all duration-100">
              <h4 className="text-2xl mb-3">Traditional Indian Massage</h4>
              <div className="w-full">
                <Image
                  className="rounded"
                  src="/images/Massage.jpg"
                  layout="responsive"
                  width={280}
                  height={180}
                />
              </div>
            </div>
            <div className="p-2 bg-green-600 text-white shadow-lg rounded-lg hover:rotate-2 cursor-pointer transition-all duration-100">
              <h4 className="text-2xl mb-3">Steam Bath</h4>
              <div className="w-full">
                <Image
                  src="/images/steam_bath.jpg"
                  layout="responsive"
                  width={280}
                  height={180}
                />
              </div>
            </div>
            <div className="p-2 bg-green-600 text-white shadow-lg rounded-lg hover:rotate-2 cursor-pointer transition-all duration-100">
              <h4 className="text-2xl mb-3">Herbal Bath</h4>
              <div className="w-full">
                <Image
                  src="/images/herbal_bath.jpg"
                  layout="responsive"
                  width={280}
                  height={180}
                />
              </div>
            </div>
            <div className="p-2 bg-green-600 text-white shadow-lg rounded-lg hover:rotate-2 cursor-pointer transition-all duration-100">
              <h4 className="text-2xl mb-3">Physical Fitness Training</h4>
              <div className="w-full">
                <Image
                  src="/images/Yoga.jpg"
                  layout="responsive"
                  width={280}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
