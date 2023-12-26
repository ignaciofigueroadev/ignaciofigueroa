// Hooks
import { useEffect, useState } from "react";

export function ToggleTheme() {
  const initialTheme =
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-lg flex justify-center items-center ${
        theme === "dark"
          ? "bg-gradient-to-r from-amber-200 to-yellow-500"
          : "bg-[#000]"
      } hover:scale-105 duration-200 cursor-default  md:col-span-1 md:row-span-1 animate-fade animate-duration-[1500ms] animate-normal`}
    >
      <img
        src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
        alt="Theme"
        className="w-20 h-20"
      />
    </button>
  );
}
