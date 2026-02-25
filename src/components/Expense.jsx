// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Expense.css";
// import Wallet from "./Wallet";
// import Categories from "./Categories";


// function Expense({ wallets, addTransaction,categories }) {
//   const navigate = useNavigate();

//   const [type, setType] = useState("expense");
//   const [wallet, setWallet] = useState("");
//   const [category, setCategory] = useState("");
//   const [date, setDate] = useState("");
//   const [amount, setAmount] = useState("");
//   const [note, setNote] = useState("");
//   const [reference, setReference] = useState("");

//   //   const wallets = ["Cash", "Bank", "UPI"];
//   // const categories = ["Food", "Shopping", "Travel", "Bills"];

//   const handleSubmit = () => {
//     if (!wallet || !category || !amount) {
//       alert("Please fill required fields");
//       return;
//     }

//     const newTransaction = {
//       type,
//       wallet,
//       category,
//       date,
//       amount,
//       note,
//       reference,
//     };

//     addTransaction(newTransaction);
//     navigate("/dashboard"); // go to dashboard
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-header">
//           <h2>New Transaction</h2>
//         </div>

//         <div className="type-toggle">
//           <button
//             className={type === "expense" ? "active" : ""}
//             onClick={() => setType("expense")}
//           >
//             Expense
//           </button>

//           <button
//             className={type === "income" ? "active" : ""}
//             onClick={() => setType("income")}
//           >
//             Income
//           </button>
//         </div>

//         <select
//           className="input-field"
//           value={wallet}
//           onChange={(e) => setWallet(e.target.value)}
//         >
//           <option value="">Select a wallet</option>
//           {wallets.map((w, index) => (
//             <option key={index} value={w.name}>
//               {w.name} (₹ {w.balance})
//             </option>
//           ))}
//         </select>

//        <select
//   className="input-field"
//   value={category}
//   onChange={(e) => setCategory(e.target.value)}
// >
//   <option value="">Select Category</option>

//   {Array.isArray(categories) &&
//     categories
//       .filter((cat) => cat.type === type)
//       .map((cat) => (
//         <option key={cat.id} value={cat.name}>
//           {cat.name}
//         </option>
//       ))}
// </select>

//         <input
//           type="date"
//           className="input-field"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />

//         <input
//           type="number"
//           placeholder="0"
//           className="amount-input"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />

//         <textarea
//           placeholder="Add a note..."
//           className="input-field"
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//         ></textarea>

//         <input
//           type="text"
//           placeholder="Reference number (optional)"
//           className="input-field"
//           value={reference}
//           onChange={(e) => setReference(e.target.value)}
//         />

//         <button className="submit-btn" onClick={handleSubmit}>
//           Add Expense
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Expense;












import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Expense({ wallets, addTransaction, categories }) {
  const navigate = useNavigate();

  const [type, setType] = useState("expense");
  const [wallet, setWallet] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [reference, setReference] = useState("");

  const handleSubmit = () => {
    if (!wallet || !category || !amount) {
      alert("Please fill required fields");
      return;
    }

    const newTransaction = {
      type,
      wallet,
      category,
      date,
      amount,
      note,
      reference,
    };

    addTransaction(newTransaction);
    navigate("/dashboard");
  };

  const handleClose = () => {
    navigate("/dashboard");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          New Transaction
        </h2>

        {/* Type Toggle */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-5">
          <button
            onClick={() => setType("expense")}
            className={`w-1/2 py-2 rounded-lg font-medium transition ${
              type === "expense"
                ? "bg-red-500 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Expense
          </button>

          <button
            onClick={() => setType("income")}
            className={`w-1/2 py-2 rounded-lg font-medium transition ${
              type === "income"
                ? "bg-green-500 text-white shadow"
                : "text-gray-600"
            }`}
          >
            Income
          </button>
        </div>

        {/* Wallet Select */}
        <select
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        >
          <option value="">Select Wallet</option>
          {wallets.map((w, index) => (
            <option key={index} value={w.name}>
              {w.name} (₹ {w.balance})
            </option>
          ))}
        </select>

        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        >
          <option value="">Select Category</option>
          {Array.isArray(categories) &&
            categories
              .filter((cat) => cat.type === type)
              .map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
        </select>

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        {/* Amount */}
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-lg font-semibold"
        />

        {/* Note */}
        <textarea
          placeholder="Add a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
        ></textarea>

        {/* Reference */}
        <input
          type="text"
          placeholder="Reference number (optional)"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`w-full py-3 rounded-lg font-semibold text-white transition shadow-lg ${
            type === "expense"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Add {type === "expense" ? "Expense" : "Income"}
        </button>
      </div>
    </div>
  );
}

export default Expense;
