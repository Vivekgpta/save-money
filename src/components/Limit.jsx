// import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import "../styles/Limit.css";

// function Limit({ transactions }) {
//   const [limit, setLimit] = useState(
//     Number(localStorage.getItem("walletLimit")) || ""
//   );
//   const [alertSent, setAlertSent] = useState(
//     localStorage.getItem("walletAlertSent") === "true"
//   );

//   const USER_EMAIL = "vg877392@gmail.com"; // 👈 apna email

//   // 💰 Calculate Income
//   const totalIncome = transactions
//     .filter((t) => t.type === "income")
//     .reduce((sum, t) => sum + Number(t.amount), 0);

//   // 💸 Calculate Expense
//   const totalExpense = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((sum, t) => sum + Number(t.amount), 0);

//   // 🏦 Wallet Balance
//   const walletBalance = totalIncome - totalExpense;

//   // 🚨 Check Wallet Limit
//   useEffect(() => {
//     const numericLimit = Number(limit);

//     if (
//       numericLimit > 0 &&
//       walletBalance <= numericLimit &&
//       !alertSent
//     ) {
//       sendEmailAlert();
//     }
//   }, [walletBalance, limit]);

//   // 📧 Send Email
//   const sendEmailAlert = () => {
//     const templateParams = {
//       user_email: USER_EMAIL,
//       wallet_balance: walletBalance,
//       set_limit: limit,
//     };

//     emailjs
//       .send(
//         "service_2jgn7rk",
//         "template_pspr4cw",
//         templateParams,
//         "1o_emk5O8PC5b8fZd"
//       )
//       .then(() => {
//         alert("⚠ Wallet balance reached limit! Email sent.");
//         setAlertSent(true);
//         localStorage.setItem("walletAlertSent", "true");
//       })
//       .catch((error) => {
//         console.error("Email error:", error);
//       });
//   };

//   // 💾 Save Limit
//   const handleLimitChange = (value) => {
//     setLimit(value);
//     localStorage.setItem("walletLimit", value);
//     localStorage.removeItem("walletAlertSent"); // reset alert if limit changes
//     setAlertSent(false);
//   };

//   return (
//     <div className="limit-container">
//       <h2>Set Wallet Minimum Balance Alert</h2>

//       <input
//         type="number"
//         placeholder="Enter minimum balance limit"
//         value={limit}
//         onChange={(e) => handleLimitChange(e.target.value)}
//       />

//       <div className="limit-info">
//         <p>Total Income: ₹ {totalIncome}</p>
//         <p>Total Expense: ₹ {totalExpense}</p>
//         <p>
//           Wallet Balance: ₹{" "}
//           <span className={walletBalance <= limit ? "negative" : "positive"}>
//             {walletBalance}
//           </span>
//         </p>
//         <p>Alert Limit: ₹ {limit || 0}</p>
//       </div>

//       {limit && walletBalance <= Number(limit) && (
//         <p className="warning-text">
//           ⚠ Wallet balance is low!
//         </p>
//       )}
//     </div>
//   );
// }

// export default Limit;







import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaBell, FaExclamationTriangle } from "react-icons/fa";

function Limit({ transactions = [], onClose }) {
  const [limit, setLimit] = useState(
    Number(localStorage.getItem("walletLimit")) || ""
  );

  const [showLimit, setShowLimit] = useState(false);

<button onClick={() => setShowLimit(true)}>
  Set Alert
</button>

{showLimit && (
  <Limit
    transactions={transactions}
    onClose={() => setShowLimit(false)}
  />
)}

  const [alertSent, setAlertSent] = useState(
    localStorage.getItem("walletAlertSent") === "true"
  );

  const USER_EMAIL = "vg877392@gmail.com";

  // ✅ Calculations
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const walletBalance = totalIncome - totalExpense;

  // ✅ Auto Email Alert
  useEffect(() => {
    const numericLimit = Number(limit);

    if (
      numericLimit > 0 &&
      walletBalance <= numericLimit &&
      !alertSent
    ) {
      sendEmailAlert(numericLimit);
    }
  }, [walletBalance, limit]);

  const sendEmailAlert = (numericLimit) => {
    const templateParams = {
      user_email: USER_EMAIL,
      wallet_balance: walletBalance,
      set_limit: numericLimit,
    };

    emailjs
      .send(
        "service_2jgn7rk",
        "template_pspr4cw",
        templateParams,
        "1o_emk5O8PC5b8fZd"
      )
      .then(() => {
        alert("⚠ Wallet balance reached limit! Email sent.");
        setAlertSent(true);
        localStorage.setItem("walletAlertSent", "true");
      })
      .catch((error) => {
        console.error("Email error:", error);
      });
  };

  // ✅ Limit Change Handler
  const handleLimitChange = (value) => {
    setLimit(value);
    localStorage.setItem("walletLimit", value);
    localStorage.removeItem("walletAlertSent");
    setAlertSent(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4 z-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-fadeIn">

        {/* ✅ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600 transition"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
          <FaBell /> Wallet Alert
        </h2>

        <input
          type="number"
          placeholder="Enter minimum balance"
          value={limit}
          onChange={(e) => handleLimitChange(e.target.value)}
          className="w-full mb-5 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
          <p>Total Income: <span className="text-green-600">₹ {totalIncome}</span></p>
          <p>Total Expense: <span className="text-red-600">₹ {totalExpense}</span></p>
          <p>
            Balance:{" "}
            <span
              className={`font-semibold ${
                limit && walletBalance <= Number(limit)
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              ₹ {walletBalance}
            </span>
          </p>
          <p>Alert Limit: ₹ {limit || 0}</p>
        </div>

        {limit && walletBalance <= Number(limit) && (
          <div className="mt-4 flex items-center gap-2 bg-red-100 text-red-600 p-3 rounded-lg text-sm font-medium">
            <FaExclamationTriangle />
            Wallet balance is low!
          </div>
        )}
      </div>
    </div>
  );
}

export default Limit;