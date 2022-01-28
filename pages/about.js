import React from "react";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full text-center">
        <h1 className="text-6xl py-6">About Us</h1>
        <p className="text-xl text-gray-800 ">
          Prasanti Healthcare, the alternative treatment centre. A unit of
          PIISM, Regn No.-Kam(m)263/k/252 An ISO 9001:2008 Certified
          Organisation{" "}
        </p>
      </div>
    </Layout>
  );
};

export default about;
