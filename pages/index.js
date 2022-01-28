import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prasanti HealthCare Home</title>
      </Head>
      <Layout>
        <main className="relative overflow-hidden">
          <div className="relative min-h-screen flex flex-col space-y-4 justify-center items-center ">
            <h2 className="font-extrabold text-4xl md:text-6xl uppercase text-red-600">
              Prasanti Healthcare
            </h2>
            <h3 className="font-extrabold text-2xl md:text-4xl text-green-600 uppercase">
              The alternative Treatment Centre
            </h3>
            <h4 className="font-semibold px-2 py-1 bg-green-600 text-2xl text-white rounded">
              Doctors Chamber &#38; Therapy Centre
            </h4>

            <div className="absolute -bottom-10 -right-48 -z-10 w-6/12 h-96">
              <Image
                layout="responsive"
                src="/images/autumn-leaf.png"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-2 p-2">
            <div className="bg-red-200 shadow-lg rounded border-2 px-5 py-8 group">
              <h3 className="text-3xl md:text-4xl text-center py-3 uppercase">
                We Care for
              </h3>
              <ul className="text-2xl">
                <li className="py-2">Joint &#38; Backpain</li>
                <li className="py-2">Critical &#38; Cronic Diseases</li>
              </ul>
              <div>
                <Link href="/contact">
                  <button
                    className="bg-green-300 font-semibold group-hover:animate-bounce hover:bg-green-500 hover:text-white my-5 px-5 py-2 rounded shadow-md cursor-pointer"
                    type="button"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-green-300 shadow-lg rounded border-2 px-5 py-8 group">
              <h3 className="text-3xl md:text-4xl text-center py-3 uppercase">
                Our Therapautic Applications
              </h3>
              <ul className="text-2xl">
                <li className="py-2">Physical Therapies</li>
                <li className="py-2">Ayurvedic &#38; Herbal Therapies</li>
              </ul>
              <Link href="/contact">
                <button
                  className="bg-red-200 font-semibold group-hover:animate-bounce hover:bg-red-500 hover:text-white my-5 px-5 py-2 rounded shadow-md cursor-pointer"
                  type="button"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="py-10">
            <h3 className="text-4xl font-semibold text-center mb-10">
              <span className="text-green-500">Special</span>{" "}
              <span className="text-red-400">Care</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-2">
              <div className="p-2 bg-gray-800 text-white shadow-lg rounded-lg hover:rotate-2 cursor-pointer transition-all duration-100">
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
              <div className="p-2 bg-gray-700 text-white shadow-lg rounded-lg hover:rotate-2 cursor-pointer transition-all duration-100">
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
              <div className="p-2 bg-red-400 text-white shadow-lg rounded-lg hover:rotate-2 cursor-pointer transition-all duration-100">
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
      </Layout>
    </div>
  );
}
