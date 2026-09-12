import React, { useContext } from "react";
import themeContext from "../Context/globalContext";

const Header = () => {
  const { theme, setTheme } = useContext(themeContext);

  let btnContent =
    theme === "light" ? (
      <i class="fa-solid fa-moon"></i>
    ) : (
      <i class="fa-regular fa-sun"></i>
    );

  return (
    <div className="flex w-full lg:p-10 p-5 items-center justify-between">
      <div>
        <h1 className="lg:text-3xl text-2xl font-bold text-white">
          Pomodoro Timer.
        </h1>
      </div>
      <div>
        <button
          onClick={() => setTheme(() => (theme === "light" ? "dark" : "light"))}
          className={`text-white font-semibold lg:px-4 lg:py-2 px-2 py-1 rounded-full cursor-pointer
        ${
          theme === "light"
            ? "bg-purple-600"
            : "bg-none border-solid border-2 border-white"
        }
        `}
        >
          {btnContent}
        </button>
      </div>
    </div>
  );
};

export default Header;
