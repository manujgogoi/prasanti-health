import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
const Healthcare = () => {
  return (
    <Layout>
      <main className="overflow-hidden font-roboto">
        <div className="min-h-screen py-20 px-3 flex flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-6xl font-bold pb-5">Prasanti Healthcare</h1>
            <h2 className="text-4xl italic pb-10">
              The Alternative Treatment &#38; Therapy Centre
            </h2>
          </div>
          <div className="w-96">
            <Image
              src="/images/undraw_doctors_hwty.svg"
              layout="responsive"
              width={100}
              height={100}
              alt="Yoga photo"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Healthcare;
