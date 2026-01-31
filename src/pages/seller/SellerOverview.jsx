import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadDashboard } from "../../redux/slices/sellerSlice";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

/* ---------- Growing Dot ---------- */
const GrowingDot = ({ cx, cy, stroke }) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={7}
      fill={stroke}
      className="animate-pulse"
    />
  );
};

const SellerOverview = () => {
  const dispatch = useAppDispatch();
  const stats = useAppSelector((s) => s.seller.dashboard);

  useEffect(() => {
    if (!stats) {
      dispatch(loadDashboard());
    }
  }, []);

  if (!stats) return <p>Loading...</p>;

  /* -------- Raw Sales Data -------- */
  const rawData =
    stats.salesData?.length > 1
      ? stats.salesData
      : [
          { month: "Jan", sales: 10 },
          { month: "Feb", sales: 20 },
          { month: "Mar", sales: 15 },
          { month: "Apr", sales: 25 },
          { month: "May", sales: 18 },
          { month: "Jun", sales: 30 },
        ];

  /* -------- Show line only half -------- */
  const halfIndex = Math.ceil(rawData.length / 2);
  const salesData = rawData.slice(0, halfIndex);

  /* -------- Line color -------- */
  const hasSales = stats.totalOrders > 0;
  const lineColor = hasSales ? "#2563eb" : "red";

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Store Overview
      </h1>

      {/* ---------- STAT CARDS ---------- */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Orders" value={stats.totalOrders} />
        <StatCard title="Completed" value={stats.completed} />
        <StatCard title="Returned" value={stats.returned} />
        <StatCard title="Pending" value={stats.pending} />
      </div>

      {/* BIG SALES CHART */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          Total Sales
        </h2>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              {/* Gradient fill */}
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={lineColor} stopOpacity={0.35} />
                  <stop offset="95%" stopColor={lineColor} stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="sales"
                stroke={lineColor}
                strokeWidth={3}
                dot={false}
                activeDot={<GrowingDot stroke={lineColor} />}
                fill="url(#salesGradient)"
                fillOpacity={1}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

/* ---------- MINI CARD ---------- */
const StatCard = ({ title, value }) => {
  const miniData = [
    { sales: 10 },
    { sales: 20 },
    { sales: 15 },
    { sales: 30 },
    { sales: 25 },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-700 text-white p-5 rounded shadow">
      <p className="text-sm opacity-80">{title}</p>
      <h3 className="text-xl font-semibold mt-1">{value}</h3>

      <div className="h-16 mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={miniData}>
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SellerOverview;
