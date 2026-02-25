// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Wallet({ addWallet }) {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [balance, setBalance] = useState("");

//   const handleSubmit = () => {
//     if (!name || !balance) {
//       alert("Fill all fields");
//       return;
//     }

//     addWallet({
//       name,
//       balance: Number(balance),
//     });

//     navigate("/dashboard");
//   };

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Add Wallet</h2>

//       <input
//         type="text"
//         placeholder="Bank Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br /><br />

//       <input
//         type="number"
//         placeholder="Initial Balance"
//         value={balance}
//         onChange={(e) => setBalance(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={handleSubmit}>Add Wallet</button>
//     </div>
//   );
// }

// export default Wallet;











import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Wallet({ addWallet }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  const handleSubmit = () => {
    if (!name || !balance) {
      alert("Fill all fields");
      return;
    }

    addWallet({
      name,
      balance: Number(balance),
    });

    navigate("/dashboard");
  };

  const handleClose = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl relative">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Wallet
        </h2>

        {/* Bank Name */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1 text-sm font-medium">
            Bank Name
          </label>
          <input
            type="text"
            placeholder="Enter bank name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Balance */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-1 text-sm font-medium">
            Initial Balance
          </label>
          <input
            type="number"
            placeholder="Enter balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-medium shadow-md transition duration-300"
          >
            Add Wallet
          </button>

          <button
            onClick={handleClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default Wallet;