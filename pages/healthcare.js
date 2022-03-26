import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInRight = {
  initial: {
    x: -600,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInGrow = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Healthcare = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Navbar />
      <main className="overflow-hidden font-roboto">
        <motion.div
          variants={stagger}
          className="min-h-screen py-20 px-3 flex flex-col md:flex-row"
        >
          <motion.div variants={fadeInRight} className="flex-1 pt-20">
            <h1 className="text-6xl font-bold pb-5">Prasanti Healthcare</h1>
            <h2 className="text-4xl italic pb-10">
              The Alternative Treatment &#38; Therapy Centre
            </h2>
          </motion.div>
          <motion.div variants={fadeInGrow} className="w-96">
            <Image
              src="/images/undraw_doctors_hwty.svg"
              layout="responsive"
              width={100}
              height={100}
              alt="Yoga photo"
            />
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Healthcare;
