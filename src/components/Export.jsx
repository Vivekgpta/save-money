// import React, { useState } from "react";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import "../styles/Export.css";
// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";

// function Export({ transactions, onClose }) {
//   const [type, setType] = useState("all");
//   const [format, setFormat] = useState("excel");

//   // 🔎 Filter Data
//   const getFilteredData = () => {
//     if (type === "all") return transactions;
//     return transactions.filter((t) => t.type === type);
//   };

//   // 📊 Calculate Totals
//   const calculateTotals = (data) => {
//     let totalIncome = 0;
//     let totalExpense = 0;

//     data.forEach((t) => {
//       if (t.type === "income") totalIncome += Number(t.amount);
//       if (t.type === "expense") totalExpense += Number(t.amount);
//     });

//     return { totalIncome, totalExpense };
//   };

//   // 📁 Excel Export
//   const handleExcelExport = () => {
//     const filteredData = getFilteredData();

//     if (filteredData.length === 0) {
//       alert("No data to export");
//       return;
//     }

//     const { totalIncome, totalExpense } = calculateTotals(filteredData);

//     const exportData = [
//       ...filteredData,
//       {},
//       { type: "Total Income", amount: totalIncome },
//       { type: "Total Expense", amount: totalExpense },
//     ];

//     const worksheet = XLSX.utils.json_to_sheet(exportData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });

//     const data = new Blob([excelBuffer], {
//       type: "application/octet-stream",
//     });

//     saveAs(data, "transactions.xlsx");
//   };

//   // 📄 PDF Export
//   const handlePDFExport = () => {
//     const filteredData = getFilteredData();

//     if (filteredData.length === 0) {
//       alert("No data to export");
//       return;
//     }

//     const { totalIncome, totalExpense } = calculateTotals(filteredData);

//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text("Transactions Report", 14, 15);

//     const tableData = filteredData.map((t) => [
//       t.date || "",
//       t.type,
//       t.category,
//       t.wallet,
//       `₹ ${t.amount}`,
//     ]);

//     autoTable(doc, {
//       head: [["Date", "Type", "Category", "Wallet", "Amount"]],
//       body: tableData,
//       startY: 25,
//     });

//     // Totals Section
//     const finalY = doc.lastAutoTable.finalY + 10;

//     doc.setFontSize(12);
//     doc.text(`Total Income: ₹ ${totalIncome}`, 14, finalY);
//     doc.text(`Total Expense: ₹ ${totalExpense}`, 14, finalY + 8);
//     doc.text(
//       `Net Balance: ₹ ${totalIncome - totalExpense}`,
//       14,
//       finalY + 16
//     );

//     doc.save("transactions.pdf");
//   };

//   // 🎯 Main Export Button
//   const handleExport = () => {
//     if (format === "excel") {
//       handleExcelExport();
//     } else {
//       handlePDFExport();
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>Export Transactions</h2>

//         {/* 📌 Format Selection */}
//         <div className="type-toggle">
//           <button
//             className={format === "excel" ? "active" : ""}
//             onClick={() => setFormat("excel")}
//           >
//             Excel
//           </button>

//           <button
//             className={format === "pdf" ? "active" : ""}
//             onClick={() => setFormat("pdf")}
//           >
//             PDF
//           </button>
//         </div>

//         {/* 📌 Type Filter */}
//         <div className="type-toggle">
//           <button
//             className={type === "all" ? "active" : ""}
//             onClick={() => setType("all")}
//           >
//             All
//           </button>

//           <button
//             className={type === "income" ? "active" : ""}
//             onClick={() => setType("income")}
//           >
//             Income
//           </button>

//           <button
//             className={type === "expense" ? "active" : ""}
//             onClick={() => setType("expense")}
//           >
//             Expense
//           </button>
//         </div>

//         {/* Buttons */}
//         <div className="modal-actions">
//           <button onClick={onClose}>Cancel</button>
//           <button onClick={handleExport}>Export</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Export;









import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaFileExcel, FaFilePdf, FaDownload } from "react-icons/fa";

function Export({ transactions, onClose }) {
  const [type, setType] = useState("all");
  const [format, setFormat] = useState("excel");

  const getFilteredData = () => {
    if (type === "all") return transactions;
    return transactions.filter((t) => t.type === type);
  };

  const calculateTotals = (data) => {
    let totalIncome = 0;
    let totalExpense = 0;

    data.forEach((t) => {
      if (t.type === "income") totalIncome += Number(t.amount);
      if (t.type === "expense") totalExpense += Number(t.amount);
    });

    return { totalIncome, totalExpense };
  };

  const handleExcelExport = () => {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) return alert("No data to export");

    const { totalIncome, totalExpense } = calculateTotals(filteredData);

    const exportData = [
      ...filteredData,
      {},
      { type: "Total Income", amount: totalIncome },
      { type: "Total Expense", amount: totalExpense },
      { type: "Net Balance", amount: totalIncome - totalExpense },
    ];

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(data, "transactions.xlsx");
  };

  const handlePDFExport = () => {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) return alert("No data to export");

    const { totalIncome, totalExpense } = calculateTotals(filteredData);
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Transactions Report", 14, 15);

    const tableData = filteredData.map((t) => [
      t.date || "",
      t.type,
      t.category,
      t.wallet,
      `₹ ${t.amount}`,
    ]);

    autoTable(doc, {
      head: [["Date", "Type", "Category", "Wallet", "Amount"]],
      body: tableData,
      startY: 25,
    });

    const finalY = doc.lastAutoTable.finalY + 10;

    doc.text(`Total Income: ₹ ${totalIncome}`, 14, finalY);
    doc.text(`Total Expense: ₹ ${totalExpense}`, 14, finalY + 8);
    doc.text(
      `Net Balance: ₹ ${totalIncome - totalExpense}`,
      14,
      finalY + 16
    );

    doc.save("transactions.pdf");
  };

  const handleExport = () => {
    format === "excel" ? handleExcelExport() : handlePDFExport();
  };

  const filteredData = getFilteredData();
  const { totalIncome, totalExpense } = calculateTotals(filteredData);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Export Transactions
        </h2>

        {/* Format Toggle */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
          <button
            onClick={() => setFormat("excel")}
            className={`w-1/2 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition ${
              format === "excel"
                ? "bg-green-500 text-white shadow"
                : "text-gray-600"
            }`}
          >
            <FaFileExcel /> Excel
          </button>

          <button
            onClick={() => setFormat("pdf")}
            className={`w-1/2 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition ${
              format === "pdf"
                ? "bg-red-500 text-white shadow"
                : "text-gray-600"
            }`}
          >
            <FaFilePdf /> PDF
          </button>
        </div>

        {/* Type Filter */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          {["all", "income", "expense"].map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition ${
                type === item
                  ? "bg-indigo-500 text-white shadow"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Live Summary */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 text-sm space-y-1">
          <p>Total Records: {filteredData.length}</p>
          <p className="text-green-600">
            Total Income: ₹ {totalIncome}
          </p>
          <p className="text-red-600">
            Total Expense: ₹ {totalExpense}
          </p>
          <p className="font-semibold">
            Net Balance: ₹ {totalIncome - totalExpense}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium transition"
          >
            Cancel
          </button>

          <button
            onClick={handleExport}
            className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold shadow-md transition"
          >
            <FaDownload /> Export
          </button>
        </div>

      </div>
    </div>
  );
}

export default Export;