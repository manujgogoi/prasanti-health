import Layout from "../components/Layout";
const contact = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full text-center">
        <h1 className="text-6xl py-6">Contact us</h1>
        <h2 className="text-4xl py-3">Office Address</h2>
        <div className="py-3">
          <h3 className="text-3xl font-semibold text-green-500">
            Prasanti Healthcare
          </h3>
          <address className="text-2xl">
            House No-5, Sagarika Path, R.G. Baruah Road, Guwahati-24
          </address>
          <p>Phone No - 9207015089, +9127276699</p>
          <p>Email: prasantihealthcare@gmail.com</p>
        </div>

        <div className="py-3">
          <h3 className="text-3xl font-semibold text-blue-500">Prasanti</h3>
          <address className="text-2xl">
            House No-126, Rajgarh Road, Guwahati-7
          </address>
          <p>Phone No - 0361-2465534, 8486026122</p>
          <p>Email: prasantiiism@yahoo.in</p>
        </div>

        <div className="py-3">
          <h3 className="text-3xl font-semibold text-green-600">
            Prasanti Ayurveda
          </h3>
          <address className="text-2xl">
            House No-10, U.N.B. Path, Gandhibasti Link G.N.B. Road, Silpukhuri,
            Guwahati-3
          </address>
          <p>Phone No - 9207015089, 8486026122</p>
          <p>Email: prasantiiism@yahoo.in</p>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
