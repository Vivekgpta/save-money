import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  PieChart,
  TrendingUp,
  Wallet,
  Sparkles,
  Shield,
  Sun,
  Moon,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const features = [
    {
      icon: Wallet,
      title: "Multi-Wallet Tracking",
      description:
        "Manage all your accounts in one place with real-time balance updates",
    },
    {
      icon: PieChart,
      title: "Smart Analytics",
      description:
        "Beautiful charts and insights to understand your spending patterns",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description:
        "Get personalized tips and predictions to optimize your finances",
    },
    {
      icon: TrendingUp,
      title: "Expense Forecasting",
      description: "Predict future spending and stay ahead of your budget",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your financial data is safe and stored securely",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* <div className="min-h-screen bg-background"> */}
        {/* Header */}
        <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-emerald-600 text-xl font-bold text-white shadow-lg shadow-primary/25">
                $
              </div>
              <span className="text-xl font-bold tracking-tight">
                SpendWise
              </span>
            </div>
            <div className="flex items-center gap-4">
              <h3>API Docs</h3>
              <h3>Tools</h3>
              <h3>Blogs</h3>
              <button variant="ghost" size="icon">
                {darkMode === "false" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => navigate("/login")}
                className="mt-0 ml-2 bg-green-600 text-white px-6 py-3 rounded-lg"
              >
                Sign In
              </button>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              AI-Powered Finance Management
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Take Control of Your{" "}
              <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Track expenses, manage multiple wallets, and get AI-powered
              insights to help you save more and spend smarter. Your personal
              finance assistant, always by your side.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => navigate("/login")}
                className="mt-0  bg-green-600 text-white px-6 py-3 rounded-lg"
              >
                Get Started Free
              </button>
              <p className="text-sm text-muted-foreground">
                No credit card required
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Everything You Need to Manage Your Money
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 transition-colors group-hover:from-primary/20 group-hover:to-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-emerald-600 p-12 text-center text-white">
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Start Saving Today
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/80">
                  Join thousands of users who are already taking control of
                  their finances with SpendWise.
                </p>
                {/* <Button
                size="lg"
                variant="secondary"
                
                className="mt-8 bg-white text-primary hover:bg-white/90"
              >
                Create Free Account
              </Button> */}
                <button
                  onClick={() => navigate("/login")}
                  className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg"
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SpendWise. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Login.css";

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Login</h1>

//       <button className="google-button">Login with Google</button>
//       <Link to="/login">
//         <button> Login with Google</button>
//       </Link>
//     </div>
//   );
// }

// export default Home;
