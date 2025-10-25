const Header = ({ title = "Minha Logomarca" }) => {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-center">
          <h1 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
              {title}
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;