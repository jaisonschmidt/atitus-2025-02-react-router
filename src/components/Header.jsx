import React from "react";

const Header = ({ title = "Minha Logomarca", subtitle = "Construído com React + Tailwind" }) => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 dark:from-slate-900 dark:via-indigo-800 dark:to-black text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5
                         flex items-center justify-center text-white shadow-2xl ring-1 ring-white/20 transform transition-transform hover:scale-105"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white drop-shadow-md"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 12h18M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-lg">
                <span className="inline-block">{title}</span>
              </h1>
              <p className="mt-0.5 text-xs text-white/90">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;