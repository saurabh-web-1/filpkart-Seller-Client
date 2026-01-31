import { useEffect, useState } from "react";
import { getSellerOrders } from "../../services/sellerApi";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getSellerOrders().then((res) => {
      setOrders(res.data.orders || []);
    });
  }, []);

  /* ---------- Order Stats ---------- */
  const totalOrders = orders.length;
  const completed = orders.filter(
    (o) => o.orderStatus === "delivered"
  ).length;
  const pending = orders.filter(
    (o) => o.orderStatus === "confirmed"
  ).length;
  const shipped = orders.filter(
    (o) => o.orderStatus === "shipped"
  ).length;

  const chartData = [
    { name: "Total", value: totalOrders },
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
    { name: "Shipped", value: shipped },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">
        Orders Dashboard
      </h2>

      {/* ---------- ORDER STATS ---------- */}
      <div className="bg-white p-5 rounded shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Orders Overview
        </h3>

        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ---------- ORDERS LIST ---------- */}
      <div className="space-y-4">
        {orders.map((order) => {
          const item = order.items?.[0]; // first product
          const product = item?.product;

          return (
            <div
              key={order._id}
              className="bg-white p-4 rounded shadow flex gap-4 items-center"
            >
              {/* Product Image */}
              <img
  src={
    product?.images
      ? Object.values(product.images)[0]?.[0]
      : "https://via.placeholder.com/80"
  }
  alt="product"
  className="w-20 h-20 object-cover rounded border"
/>

              {/* Details */}
              <div className="flex-1">
                <h3 className="font-semibold">
                  {product?.title || "Product"}
                </h3>

                <p className="text-sm text-gray-500">
                  Qty: {item?.quantity}
                </p>

                <p className="text-sm">
                  ₹{order.totalAmount}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(
                    order.createdAt
                  ).toLocaleString()}
                </p>
              </div>

              {/* Status */}
              <div className="text-right">
                <p className="font-semibold capitalize">
                  {order.orderStatus}
                </p>

                <p className="text-sm text-gray-500">
                  Payment: {order.paymentStatus}
                </p>

                <p className="text-xs text-gray-400">
                  Txn:{" "}
                  {order.razorpayPaymentId ||
                    "COD Order"}
                </p>
              </div>
            </div>
          );
        })}

        {orders.length === 0 && (
          <p className="text-center text-gray-500">
            No orders yet
          </p>
        )}
      </div>
    </div>
  );
};

export default SellerOrders;
