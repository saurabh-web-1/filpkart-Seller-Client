import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sellerLogin } from "../services/sellerApi";
import { useEffect } from "react";

const SellerLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("sellerToken");
    if (token) {
      navigate("/seller/dashboard");
    }
  }, []);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sellerLogin(form);
      navigate("/seller/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Seller login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 mt-6 rounded-xl shadow-lg">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Seller Login
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Access your seller dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
  <input
    name="email"
    placeholder="Email"
    onChange={handleChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-indigo-500
               focus:border-indigo-500 transition"
  />

  <input
    type="password"
    name="password"
    placeholder="Password"
    onChange={handleChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-indigo-500
               focus:border-indigo-500 transition"
  />

  <button
    className="w-full py-3 rounded-lg font-semibold text-white
               bg-gradient-to-r from-indigo-600 to-purple-600
               hover:from-indigo-700 hover:to-purple-700
               transition shadow-md"
  >
    Login
  </button>
</form>


      </div>
    </div>
  );
};

export default SellerLogin;
