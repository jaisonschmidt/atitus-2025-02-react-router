import { NavLink } from "react-router"; // Se estiver usando react-router-dom: import { NavLink } from "react-router-dom";

export function Post({ title, text, link }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {text}
      </p>

      <NavLink
        to={link}
        className={({ isActive }) => {
          const base =
            "group mt-4 inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium " +
            "text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 " +
            "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 " +
            "focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900";
          return isActive
            ? base + " ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-gray-900"
            : base;
        }}
        aria-label={`Ler mais sobre: ${title}`}
      >
        Leia mais
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </NavLink>
    </div>
  );
}