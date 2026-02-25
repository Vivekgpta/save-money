// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Export from "../components/Export";

// function Dashboard({ wallets, transactions, user }) {
//   const [limit, setLimit] = useState(
//     Number(localStorage.getItem("expenseLimit")) || 0,
//   );

//   const totalExpense = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((sum, t) => sum + Number(t.amount), 0);

//   const remaining = limit - totalExpense;

//   const navigate = useNavigate();
//   const [showExport, setShowExport] = useState(false);
//   return (
//     <div style={{ padding: "30px" }}>
//       {/* 🔹 Top Bar */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         {/* <h1>Dashboard, {user.name}</h1> */}
// <h1>Dashboard, {user?.name || "User"}</h1>
//         {/* 🔹 Profile Icon */}
//         <img
//           src={
//             user?.photo ||
//             "https://cdn-icons-png.flaticon.com/512/149/149071.png"
//           }
//           alt="Profile"
//           style={{
//             width: "40px",
//             height: "40px",
//             borderRadius: "50%",
//             cursor: "pointer",
//           }}
//           onClick={() => navigate("/profile")}
//         />
//       </div>

//       <Link to="/add-wallet">
//         <button>Add Wallet</button>
//       </Link>

//       <Link to="/expense" style={{ marginLeft: "10px" }}>
//         <button>Add Transaction</button>
//       </Link>

//       <Link to="/categories" style={{ marginLeft: "10px" }}>
//         <button>Add Categories</button>
//       </Link>
//       <h2 style={{ marginTop: "30px" }}>My Wallets</h2>

//       {wallets.length === 0 ? (
//         <p>No wallets added</p>
//       ) : (
//         wallets.map((w, index) => (
//           <div key={index} style={{ marginBottom: "10px" }}>
//             <strong>{w.name}</strong> — ₹ {w.balance}
//           </div>
//         ))
//       )}

//       <button onClick={() => setShowExport(true)}>Export</button>

//       {showExport && (
//         <Export
//           transactions={transactions}
//           onClose={() => setShowExport(false)}
//         />
//       )}
//       <Link to="/limit" style={{ marginLeft: "10px" }}>
//         <button>Add Limit</button>
//       </Link>

//       <h2 style={{ marginTop: "30px" }}>Transactions</h2>

//       {transactions.length === 0 ? (
//         <p>No transactions</p>
//       ) : (
//         transactions.map((t, index) => (
//           <div key={index}>
//             {t.type} | {t.wallet} | ₹ {t.amount} | {t.category} | {t.note}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Dashboard;



















// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import Export from "../components/Export";
// // import {
// //   PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
// //   BarChart, Bar, XAxis, YAxis, CartesianGrid,
// // } from "recharts";

// // import {
// //   FaWallet,
// //   FaPlus,
// //   FaTrash,
// //   FaFileExport,
// //   FaChartPie,
// // } from "react-icons/fa";

// // function Dashboard({ wallets, transactions, setTransactions, user }) {
// //   const navigate = useNavigate();
// //   const [showExport, setShowExport] = useState(false);

// //   /* ================= USER CHANGE → RESET DATA ================= */
// //   useEffect(() => {
// //     const lastUser = localStorage.getItem("lastUser");

// //     if (user?.email && lastUser !== user.email) {
// //       localStorage.clear();
// //       localStorage.setItem("lastUser", user.email);
// //       window.location.reload();
// //     }
// //   }, [user]);

// //   /* ================= LIMIT ================= */
// //   const limit = Number(localStorage.getItem("expenseLimit")) || 0;

// //   const totalExpense = transactions
// //     .filter((t) => t.type === "expense")
// //     .reduce((sum, t) => sum + Number(t.amount), 0);

// //   const remaining = limit - totalExpense;

// //   /* ================= DELETE TRANSACTION ================= */
// //   const deleteTransaction = (index) => {
// //     if (!window.confirm("Delete this transaction?")) return;

// //     const updated = transactions.filter((_, i) => i !== index);
// //     setTransactions(updated);
// //     localStorage.setItem("transactions", JSON.stringify(updated));
// //   };

// //   /* ================= CHART DATA ================= */
// //   const categoryData = Object.values(
// //     transactions
// //       .filter((t) => t.type === "expense")
// //       .reduce((acc, curr) => {
// //         if (!acc[curr.category]) {
// //           acc[curr.category] = { name: curr.category, value: 0 };
// //         }
// //         acc[curr.category].value += Number(curr.amount);
// //         return acc;
// //       }, {})
// //   );

// //   const walletData = wallets.map((w) => ({
// //     name: w.name,
// //     balance: Number(w.balance),
// //   }));

// //   const COLORS = ["#6366f1", "#ec4899", "#22c55e", "#f59e0b"];

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-4 md:p-6">

// //       {/* ================= HEADER ================= */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-xl md:text-3xl font-bold">
// //           Dashboard, {user?.name || "User"} 👋
// //         </h1>

// //         <img
// //           src={
// //             user?.photo ||
// //             "https://cdn-icons-png.flaticon.com/512/149/149071.png"
// //           }
// //           alt="Profile"
// //           className="w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer shadow"
// //           onClick={() => navigate("/profile")}
// //         />
// //       </div>

// //       {/* ================= ACTION BUTTONS ================= */}
// //       <div className="flex flex-wrap gap-2 mb-6">
// //         <Link to="/add-wallet"><button className="btn"><FaWallet /> Wallet</button></Link>
// //         <Link to="/expense"><button className="btn"><FaPlus /> Transaction</button></Link>
// //         <Link to="/categories"><button className="btn"><FaChartPie /> Categories</button></Link>
// //         <Link to="/limit"><button className="btn">Limit</button></Link>
// //         <button onClick={() => setShowExport(true)} className="btn bg-green-600">
// //           <FaFileExport /> Export
// //         </button>
// //       </div>

// //       {/* ================= SUMMARY ================= */}
// //       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
// //         <Card title="Limit" value={`₹ ${limit}`} />
// //         <Card title="Expense" value={`₹ ${totalExpense}`} />
// //         <Card
// //           title="Remaining"
// //           value={`₹ ${remaining}`}
// //           color={remaining < 0 ? "text-red-500" : "text-green-600"}
// //         />
// //       </div>

// //       {/* ================= CHARTS ================= */}
// //       <div className="grid md:grid-cols-2 gap-4 mb-6">

// //         <div className="bg-white p-4 rounded-xl shadow">
// //           <h3 className="font-semibold mb-2">Expense by Category</h3>
// //           <ResponsiveContainer width="100%" height={250}>
// //             <PieChart>
// //               <Pie data={categoryData} dataKey="value" outerRadius={90}>
// //                 {categoryData.map((_, i) => (
// //                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
// //                 ))}
// //               </Pie>
// //               <Tooltip />
// //             </PieChart>
// //           </ResponsiveContainer>
// //         </div>

// //         <div className="bg-white p-4 rounded-xl shadow">
// //           <h3 className="font-semibold mb-2">Wallet Balances</h3>
// //           <ResponsiveContainer width="100%" height={250}>
// //             <BarChart data={walletData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="name" />
// //               <YAxis />
// //               <Tooltip />
// //               <Bar dataKey="balance" fill="#6366f1" />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </div>

// //       {/* ================= TRANSACTIONS ================= */}
// //       <h2 className="text-lg font-semibold mb-2">Transactions</h2>

// //       <div className="bg-white rounded-xl shadow overflow-x-auto">
// //         <table className="w-full min-w-[600px]">
// //           <thead className="bg-gray-200">
// //             <tr>
// //               <th className="p-3">Type</th>
// //               <th className="p-3">Wallet</th>
// //               <th className="p-3">Amount</th>
// //               <th className="p-3">Category</th>
// //               <th className="p-3">Note</th>
// //               <th className="p-3">Action</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {transactions.map((t, i) => (
// //               <tr key={i} className="border-t text-center">
// //                 <td className="p-3">{t.type}</td>
// //                 <td className="p-3">{t.wallet}</td>
// //                 <td className="p-3">₹ {t.amount}</td>
// //                 <td className="p-3">{t.category}</td>
// //                 <td className="p-3">{t.note}</td>
// //                 <td className="p-3">
// //                   <button
// //                     onClick={() => deleteTransaction(i)}
// //                     className="text-red-500 hover:text-red-700"
// //                   >
// //                     <FaTrash />
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {showExport && (
// //         <Export
// //           transactions={transactions}
// //           onClose={() => setShowExport(false)}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // /* ================= CARD ================= */
// // function Card({ title, value, color = "text-gray-800" }) {
// //   return (
// //     <div className="bg-white p-4 rounded-xl shadow">
// //       <p className="text-gray-500">{title}</p>
// //       <h2 className={`text-xl font-bold ${color}`}>{value}</h2>
// //     </div>
// //   );
// // }

// // export default Dashboard;




import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Export from "../components/Export";
// import { useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import {
  FaWallet,
  FaPlus,
  FaFileExport,
  FaChartPie,
  FaUserCircle,
  FaRupeeSign,
} from "react-icons/fa";

function Dashboard({ wallets = [], transactions = [], user }) {
  const navigate = useNavigate();
  const [showExport, setShowExport] = useState(false);

  /* ================= LIMIT ================= */
  const limit = Number(localStorage.getItem("expenseLimit")) || 0;

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const remaining = limit - totalExpense;

  /* ================= CHART DATA ================= */
  const categoryData = Object.values(
    transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, curr) => {
        if (!acc[curr.category]) {
          acc[curr.category] = { name: curr.category, value: 0 };
        }
        acc[curr.category].value += Number(curr.amount);
        return acc;
      }, {})
  );

  useEffect(() => {
  const lastUser = localStorage.getItem("lastUser");

  if (user?.email && lastUser !== user.email) {
    localStorage.clear();
    localStorage.setItem("lastUser", user.email);
    window.location.reload();
  }
}, [user]);
  const walletData = wallets.map((w) => ({
    name: w.name,
    balance: Number(w.balance),
  }));

  const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Dashboard, {user?.name || "User"} 👋
        </h1>

        <FaUserCircle
          size={42}
          className="text-gray-600 cursor-pointer hover:text-indigo-600"
          onClick={() => navigate("/profile")}
        />
      </div>

      {/* ================= ACTION BUTTONS ================= */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Link to="/add-wallet" className="btn">
          <FaWallet /> Add Wallet
        </Link>

        <Link to="/expense" className="btn">
          <FaPlus /> Add Transaction
        </Link>

        <Link to="/categories" className="btn">
          <FaChartPie /> Categories
        </Link>

        <Link to="/limit" className="btn">
          <FaRupeeSign /> Set Limit
        </Link>

        <button
          onClick={() => setShowExport(true)}
          className="btn bg-green-600 hover:bg-green-700"
        >
          <FaFileExport /> Export
        </button>
      </div>

      {/* ================= SUMMARY CARDS ================= */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <SummaryCard title="Expense Limit" value={`₹ ${limit}`} />
        <SummaryCard title="Total Expense" value={`₹ ${totalExpense}`} />
        <SummaryCard
          title="Remaining"
          value={`₹ ${remaining}`}
          color={remaining < 0 ? "text-red-500" : "text-green-600"}
        />
      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FaChartPie /> Expense by Category
          </h3>

          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" outerRadius={90}>
                {categoryData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <FaWallet /> Wallet Balances
          </h3>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={walletData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="balance" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= TRANSACTIONS ================= */}
      <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-200 text-sm">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Wallet</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Category</th>
              <th className="p-3">Note</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No transactions yet
                </td>
              </tr>
            ) : (
              transactions.map((t, i) => (
                <tr key={i} className="border-t text-center text-sm">
                  <td className="p-3">{t.type}</td>
                  <td className="p-3">{t.wallet}</td>
                  <td className="p-3">₹ {t.amount}</td>
                  <td className="p-3">{t.category}</td>
                  <td className="p-3">{t.note}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showExport && (
        <Export
          transactions={transactions}
          onClose={() => setShowExport(false)}
        />
      )}
    </div>
  );
}

/* ================= SUMMARY CARD ================= */
function SummaryCard({ title, value, color = "text-gray-800" }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}

export default Dashboard;