import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Expense from "./components/Expense";
import Wallet from "./components/Wallet";
import Profile from "./components/Profile";
import Categories from "./components/Categories";
import Limit from "./components/Limit";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  // const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);

  const [categories, setCategories] = useState(() => {
  const saved = localStorage.getItem("categories");
  return saved ? JSON.parse(saved) : [];
});
  // 🔹 Load from localStorage initially
  const [wallets, setWallets] = useState(() => {
    const savedWallets = localStorage.getItem("wallets");
    return savedWallets ? JSON.parse(savedWallets) : [];
  });

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  // 🔹 Save wallets whenever updated
  useEffect(() => {
    localStorage.setItem("wallets", JSON.stringify(wallets));
  }, [wallets]);

  // 🔹 Save transactions whenever updated
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addWallet = (wallet) => {
    setWallets([...wallets, wallet]);
  };

  const addTransaction = (transaction) => {
    const updatedWallets = wallets.map((w) => {
      if (w.name === transaction.wallet) {
        return {
          ...w,
          balance:
            transaction.type === "expense"
              ? w.balance - Number(transaction.amount)
              : w.balance + Number(transaction.amount),
        };
      }
      return w;
    });

    setWallets(updatedWallets);
    setTransactions([...transactions, transaction]);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home  />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense" element={<Expense />} /> */}
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                user={user}
                wallets={wallets}
                transactions={transactions}
              />
            }
          />
          <Route
            path="/expense"
            element={
              <Expense categories={categories} wallets={wallets} addTransaction={addTransaction} />
            }
          />
          <Route
            path="/add-wallet"
            element={<Wallet addWallet={addWallet} />}
          />
           <Route
            path="/limit"
            element={<Limit addWallet={addWallet} wallets={wallets} transactions={transactions}/>}
          />
          <Route
            path="/categories"
            element={
              <Categories
                categories={categories}
                setCategories={setCategories}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
