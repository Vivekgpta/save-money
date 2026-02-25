// import React, { useState, useEffect } from "react";

// function Categories() {
//   const [categories, setCategories] = useState(() => {
//     const saved = localStorage.getItem("categories");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [name, setName] = useState("");
//   const [type, setType] = useState("expense");

//   // 💾 Save to localStorage whenever categories change
//   useEffect(() => {
//     localStorage.setItem("categories", JSON.stringify(categories));
//   }, [categories]);

//   const addCategory = () => {
//     if (!name.trim()) return alert("Enter category name");

//     const newCategory = {
//       id: Date.now(),
//       name,
//       type,
//     };

//     setCategories([...categories, newCategory]);
//     setName("");
//   };
  

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Add Category</h2>

//       <input
//         type="text"
//         placeholder="Category name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <div style={{ margin: "10px 0" }}>
//         <label>
//           <input
//             type="radio"
//             value="expense"
//             checked={type === "expense"}
//             onChange={() => setType("expense")}
//           />
//           Expense
//         </label>

//         <label style={{ marginLeft: "15px" }}>
//           <input
//             type="radio"
//             value="income"
//             checked={type === "income"}
//             onChange={() => setType("income")}
//           />
//           Income
//         </label>
//       </div>

//       <button onClick={addCategory}>Add</button>

//       <h3 style={{ marginTop: "20px" }}>All Categories</h3>

//       {categories.length === 0 && <p>No categories added yet</p>}

//       {categories.map((cat) => (
//         <div key={cat.id}>
//           {cat.name} ({cat.type})
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Categories;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUtensils,
//   FaShoppingCart,
//   FaCar,
//   FaMoneyBillWave,
//   FaGift,
//   FaTrash,
// } from "react-icons/fa";

// const iconOptions = [
//   { name: "Food", icon: <FaUtensils /> },
//   { name: "Shopping", icon: <FaShoppingCart /> },
//   { name: "Travel", icon: <FaCar /> },
//   { name: "Salary", icon: <FaMoneyBillWave /> },
//   { name: "Gift", icon: <FaGift /> },
// ];

// function Categories() {
//   const navigate = useNavigate();

//   const [categories, setCategories] = useState(() => {
//     const saved = localStorage.getItem("categories");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [name, setName] = useState("");
//   const [type, setType] = useState("expense");
//   const [selectedIcon, setSelectedIcon] = useState(iconOptions[0]);

//   useEffect(() => {
//     localStorage.setItem("categories", JSON.stringify(categories));
//   }, [categories]);

//   const addCategory = () => {
//     if (!name.trim()) return alert("Enter category name");

//     const newCategory = {
//       id: Date.now(),
//       name,
//       type,
//       icon: selectedIcon.name,
//     };

//     setCategories([...categories, newCategory]);
//     setName("");
//   };

//   const deleteCategory = (id) => {
//     setCategories(categories.filter((cat) => cat.id !== id));
//   };

//   const handleClose = () => {
//     navigate("/dashboard");
//   };

//   const getIcon = (iconName) => {
//     const found = iconOptions.find((i) => i.name === iconName);
//     return found ? found.icon : null;
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start py-10 px-4">
//       <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 relative">

//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold transition"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Manage Categories
//         </h2>

//         {/* Category Name */}
//         <input
//           type="text"
//           placeholder="Category name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//         />

//         {/* Type Toggle */}
//         <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
//           <button
//             onClick={() => setType("expense")}
//             className={`w-1/2 py-2 rounded-lg font-medium transition ${
//               type === "expense"
//                 ? "bg-red-500 text-white shadow"
//                 : "text-gray-600"
//             }`}
//           >
//             Expense
//           </button>

//           <button
//             onClick={() => setType("income")}
//             className={`w-1/2 py-2 rounded-lg font-medium transition ${
//               type === "income"
//                 ? "bg-green-500 text-white shadow"
//                 : "text-gray-600"
//             }`}
//           >
//             Income
//           </button>
//         </div>

//         {/* Icon Selection */}
//         <div className="mb-6">
//           <p className="text-sm font-medium text-gray-600 mb-2">
//             Select Icon
//           </p>

//           <div className="flex gap-3 flex-wrap">
//             {iconOptions.map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedIcon(item)}
//                 className={`p-3 rounded-xl border text-xl transition ${
//                   selectedIcon.name === item.name
//                     ? "bg-indigo-500 text-white"
//                     : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 {item.icon}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Add Button */}
//         <button
//           onClick={addCategory}
//           className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold transition shadow-md"
//         >
//           Add Category
//         </button>

//         {/* Category List */}
//         <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-700">
//           All Categories
//         </h3>

//         {categories.length === 0 && (
//           <p className="text-gray-500">No categories added yet</p>
//         )}

//         <div className="space-y-3">
//           {categories.map((cat) => (
//             <div
//               key={cat.id}
//               className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
//             >
//               <div className="flex items-center gap-3">
//                 <span className="text-lg">{getIcon(cat.icon)}</span>
//                 <span className="font-medium text-gray-700">
//                   {cat.name}
//                 </span>
//                 <span
//                   className={`text-xs px-2 py-1 rounded-full ${
//                     cat.type === "expense"
//                       ? "bg-red-100 text-red-600"
//                       : "bg-green-100 text-green-600"
//                   }`}
//                 >
//                   {cat.type}
//                 </span>
//               </div>

//               <button
//                 onClick={() => deleteCategory(cat.id)}
//                 className="text-red-500 hover:text-red-700 transition"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Categories;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaShoppingCart,
  FaCar,
  FaMoneyBillWave,
  FaGift,
  FaTrash,
} from "react-icons/fa";

const iconOptions = [
  { name: "Food", icon: <FaUtensils /> },
  { name: "Shopping", icon: <FaShoppingCart /> },
  { name: "Travel", icon: <FaCar /> },
  { name: "Salary", icon: <FaMoneyBillWave /> },
  { name: "Gift", icon: <FaGift /> },
];

function Categories() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [type, setType] = useState("expense");
  const [selectedIcon, setSelectedIcon] = useState(iconOptions[0]);

  // save to localStorage whenever change
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const addCategory = () => {
    if (!name.trim()) return alert("Enter category name");

    const newCategory = {
      id: Date.now(),
      name,
      type,
      icon: selectedIcon.name,
    };

    const updated = [...categories, newCategory];
    setCategories(updated);

    setName("");

    // redirect to dashboard after add
    navigate("/dashboard");
  };

  const deleteCategory = (id) => {
    const updated = categories.filter((cat) => cat.id !== id);
    setCategories(updated);
  };

  const handleClose = () => {
    navigate("/dashboard");
  };

  const getIcon = (iconName) => {
    const found = iconOptions.find((i) => i.name === iconName);
    return found ? found.icon : null;
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start py-10 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 relative">

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          Manage Categories
        </h2>

        <input
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
          <button
            onClick={() => setType("expense")}
            className={`w-1/2 py-2 rounded-lg ${
              type === "expense" ? "bg-red-500 text-white" : ""
            }`}
          >
            Expense
          </button>

          <button
            onClick={() => setType("income")}
            className={`w-1/2 py-2 rounded-lg ${
              type === "income" ? "bg-green-500 text-white" : ""
            }`}
          >
            Income
          </button>
        </div>

        <div className="mb-6">
          <p className="text-sm mb-2">Select Icon</p>

          <div className="flex gap-3 flex-wrap">
            {iconOptions.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedIcon(item)}
                className={`p-3 rounded-xl border text-xl ${
                  selectedIcon.name === item.name
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={addCategory}
          className="w-full bg-indigo-500 text-white py-2 rounded-lg"
        >
          Add Category
        </button>

        <h3 className="mt-8 mb-4 font-semibold">All Categories</h3>

        <div className="space-y-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span>{getIcon(cat.icon)}</span>
                <span>{cat.name}</span>
                <span className="text-xs">
                  ({cat.type})
                </span>
              </div>

              <button onClick={() => deleteCategory(cat.id)}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Categories;



