import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";

const Ayurveda = () => {
  return (
    <motion.div>
      <Navbar />
      <main className="overflow-hidden font-roboto">
        <div className="pt-20">
          <div className="relative min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-20 px-3 z-40">
            <h1 className="text-6xl font-bold pb-5">Prasanti Ayurveda</h1>
            <h2 className="text-4xl italic pb-10">
              Doctors, Medicines, Therapies, Panchakarma
            </h2>
            <p className="text-2xl tracking-wide z-20">
              Ayurveda is the traditional Indian system of treatment diseasas.
              Pure Ayurvedic or herbal medicines cannot be harmful though It may
              be less active depending on concentration, mixing, manufacturing
              duration or other some reason but in some times taking the
              advantages of Ayurvedic medicines some fraud manufacturer may uses
              harmful chemicals for quick results. So it is good to know what
              medicines you are taking.
            </p>
            <div className="absolute w-96 h-96 -right-10 top-0 -z-10">
              <Image
                src="/images/leaf.svg"
                layout="fill"
                width={150}
                height={150}
                alt="leaf image"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Ayurveda;
