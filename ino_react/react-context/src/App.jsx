import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./projects/ThemeContext";
import ThemeToggler from "./projects/ThemeToggler";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <div
        className={`h-screen flex flex-col items-center justify-center ${
          theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
        }`}
      >
        <h1 className="text-3xl font-bold mb-6">Theme Switcher App</h1>
        <ThemeToggler />
      </div>
  
  );
};

export default App;
