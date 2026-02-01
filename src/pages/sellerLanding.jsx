import { ArrowRight, CheckCircle } from "lucide-react";

const SellerLanding = () => {
  return (
    <div className="bg-[#f1f5ff]">

      {/*  HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Ab se <span className="text-[#2874f0]">0%</span> Commission <br />
              pe zyada becho, <br />
              full on nacho!
            </h1>

            <p className="mt-4 text-gray-600">
              Join India’s fastest growing online marketplace and reach
              millions of customers across the country.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="/register"
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
              >
                Start Selling
              </a>

              <a
                href="/login"
                className="border bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 text-white px-6 py-3 rounded font-semibold"
              >
                Login
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dveulcf0v/image/upload/v1769952800/ChatGPT_Image_Feb_1_2026_06_55_28_PM_pawbrg.png"
              alt="Seller Banner"
              className="rounded-lg shadow-lg max-h-[360px]"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white py-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <Stat value="14 Lakh+" label="Seller Community" />
            <Stat value="24×7" label="Online Business" />
            <Stat value="7 days" label="Fast Payments" />
            <Stat value="19000+" label="Pincodes Served" />
          </div>
        </div>
      </section>

      {/*WHY SELL*/}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Why do sellers love selling on Flipkart?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            title="Huge Customer Base"
            text="Reach 45+ crore customers across India."
          />
          <Feature
            title="Easy to Start"
            text="Create your seller account in just a few minutes."
          />
          <Feature
            title="Low Cost Business"
            text="Lowest cost of doing business with 0% commission."
          />
        </div>
      </section>

      {/*  JOURNEY*/}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Your Journey on Flipkart
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Journey
              title="Register"
              text="Create your seller account with basic details."
            />
            <Journey
              title="List Products"
              text="Upload products with images & pricing."
            />
            <Journey
              title="Get Orders"
              text="Receive orders from customers across India."
            />
            <Journey
              title="Get Paid"
              text="Fast & secure payments directly to your bank."
            />
          </div>
        </div>
      </section>

      {/* ================= SHOPSY ================= */}
      <section className="bg-[#eef3ff] py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Your gateway to selling online
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="text-green-500" />
                0 Returns*
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500" />
                Access to budget-friendly customers
              </li>
              <li className="flex gap-2">
                <CheckCircle className="text-green-500" />
                Lowest cost of doing business
              </li>
            </ul>

            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 text-white rounded font-semibold">
              Explore Shopsy <ArrowRight className="inline ml-2" size={16} />
            </button>
          </div>

          <img
            src="https://img.freepik.com/free-photo/indian-couple-standing_23-2148132527.jpg"
            alt="Shopsy"
            className="rounded-lg shadow max-h-[260px]"
          />
        </div>
      </section>

    </div>
  );
};

/* ================= COMPONENTS ================= */

const Stat = ({ value, label }) => (
  <div>
    <h3 className="text-2xl font-bold text-[#2874f0]">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const Feature = ({ title, text }) => (
  <div className="bg-white p-6 rounded shadow">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

const Journey = ({ title, text }) => (
  <div className="bg-[#f8faff] p-6 rounded shadow-sm">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

export default SellerLanding;
