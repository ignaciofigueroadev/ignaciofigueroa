import { useEffect, useState } from "react";

interface ToggleThemeProps {
  className?: string;
}

export function ToggleTheme({ className }: ToggleThemeProps) {
  const getInitialTheme = () => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
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
      className={`flex justify-center items-center p-[1rem] bg-gradient-to-r from-violet-600 to-indigo-600  duration-200  md:col-span-1 md:row-span-1 hover:filter hover:brightness-125 ${className}`}
    >
      <img
        src={theme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
        alt="Theme"
        className="w-20 h-20"
      />
    </button>
  );
}
