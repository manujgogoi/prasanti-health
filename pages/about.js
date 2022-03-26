import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const about = () => {
  return (
    <motion.div>
      <Navbar />
      <main className="overflow-hidden font-roboto">
        <div className="min-h-screen pt-20 w-full text-center">
          <h1 className="text-6xl py-6">About Us</h1>
          <p className="text-xl text-gray-800 ">
            Prasanti Healthcare, the alternative treatment centre. A unit of
            PIISM, Regn No.-Kam(m)263/k/252 An ISO 9001:2008 Certified
            Organisation{" "}
          </p>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default about;
