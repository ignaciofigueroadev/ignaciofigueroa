import { useEffect, useState } from "react";

export function ToggleTheme() {
  const getInitialTheme = () => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return (
      localStorage.getItem("theme") || (userPrefersDark ? "dark" : "light")
    );
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    userPrefersDark.addEventListener("change", updateTheme);
    return () => {
      userPrefersDark.removeEventListener("change", updateTheme);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-lg flex justify-center items-center ${
        theme === "dark"
          ? "bg-gradient-to-r from-amber-200 to-yellow-500"
          : "bg-[#000]"
      } hover:scale-105 duration-200 cursor-default md:col-span-1 md:row-span-1 animate-fade animate-duration-[1500ms] animate-normal`}
    >
      <img
        src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
        alt="Theme"
        className="w-20 h-20"
      />
    </button>
  );
}
