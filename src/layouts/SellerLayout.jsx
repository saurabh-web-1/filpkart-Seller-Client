import { useEffect, useState } from "react";
import SellerOverview from "../pages/seller/SellerOverview";
import SellerOrders from "../pages/seller/SellerOrders";
import AddProduct from "../pages/seller/AddProduct";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { loadSeller, loadDashboard } from "../redux/slices/sellerSlice";

const SellerLayout = () => {
  const [active, setActive] = useState("overview");
  const dispatch = useAppDispatch();
  const seller = useAppSelector((s) => s.seller.profile);

  useEffect(() => {
    dispatch(loadSeller());
    dispatch(loadDashboard());
  }, []);

  const renderContent = () => {
    if (active === "orders") return <SellerOrders />;
    if (active === "add-product") return <AddProduct />;
    return <SellerOverview />;
  };

  const menuItem = (key, label) => (
    <button
      onClick={() => setActive(key)}
      className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition font-medium ${
        active === key
          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow"
          : "hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-5 shadow-sm">

        {/* Seller Profile */}
        <div className="mb-6 border-b pb-6">

          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full
              bg-gradient-to-r from-indigo-600 to-purple-600
              text-white flex items-center justify-center
              text-3xl font-bold shadow-md">
              {seller?.displayName?.charAt(0) || "S"}
            </div>
          </div>

          {/* Info Grid */}
          <div className="text-sm space-y-3">

            <div className="flex justify-between">
              <span className="font-semibold">Seller Name</span>
              <span>{seller?.displayName}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Business Name</span>
              <span>{seller?.businessName}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Phone</span>
              <span>{seller?.phone}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Email</span>
              <span className="truncate max-w-[130px]">
                {seller?.email}
              </span>
            </div>
          </div>
        </div>

        {/* Menu */}
        {menuItem("overview", "Overview")}
        {menuItem("orders", "Orders")}
        {menuItem("add-product", "Add Product")}
        {menuItem("performance", "Performance & Rating")}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        {renderContent()}
      </div>
    </div>
  );
};

export default SellerLayout;
