import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// animation properties
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInRight = {
  initial: {
    x: -1200,
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

const fadeInLeft = {
  initial: {
    x: 1200,
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Yogalaya = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Navbar />
      <main className="overflow-hidden font-roboto">
        {/* Div for motion animation */}
        <motion.div
          variants={stagger}
          className="min-h-screen py-20 px-3 bg-gradient-to-l from-blue-900 via-purple-900 to-gray-900 text-gray-50 flex flex-col md:flex-row"
        >
          <motion.div variants={fadeInRight} className="flex-1 pt-20">
            <h1 className="text-6xl font-bold pb-5">Prasanti Yogalaya</h1>
            <h2 className="text-4xl italic pb-10">Rupnagar, Guwahati</h2>
            <p className="text-lg font-light">
              Weight loss, a strong and flexible body, glowing beautiful skin,
              peaceful mind, good health – whatever you may be looking for, yoga
              has it on offer. However, very often, yoga is only partially
              understood as being limited to asanas (yoga poses). As such, its
              benefits are only perceived to be at the body level and we fail to
              realize the immense benefits yoga offers in uniting the body, mind
              and breath. When you are in harmony, the journey through life is
              calmer, happier and more fulfilling. All-round fitness.You are
              truly healthy when you are not just physically fit but also
              mentally and emotionally balanced.
            </p>
          </motion.div>
          <motion.div variants={fadeInLeft} className="w-96">
            <Image
              src="/images/undraw_yoga_-248-n.svg"
              layout="responsive"
              width={100}
              height={100}
              alt="Yoga photo"
            />
          </motion.div>
        </motion.div>
        <div className="min-h-screen py-36 px-3">
          <h2 className="text-5xl py-10 font-bold">Benefits of Meditation</h2>
          <div className="flex flex-col md:flex-row-reverse md:gap-36 ">
            <p className="flex-1 text-lg font-light">
              Meditation has two important benefits: Meditation prevents stress
              from getting into the system. Meditation releases accumulated
              stress that is in the system. Both of these happen simultaneously,
              leaving one refreshed and joyful. Physical Benefits of Meditation:
              With meditation, the physiology undergoes a change and every cell
              in the body is filled with more prana (energy). This results in
              joy, peace, enthusiasm as the level of prana in the body
              increases.
            </p>
            <div>
              <Image
                src="/images/undraw_mindfulness_scgo.svg"
                width={350}
                height={350}
                alt="Meditation"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Yogalaya;
