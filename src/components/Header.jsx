import React from "react";

const Header = ({ lightTheme, setLightTheme }) => {

  let theme = lightTheme ? <i class="fa-solid fa-moon"></i> : <i class="fa-regular fa-sun"></i>
  
  return (
    <div className="flex w-full p-10 items-center justify-between">
      <div>
        <h1 className="lg:text-3xl text-2xl font-bold text-white">
          Pomodoro Timer.
        </h1>
      </div>
      <div>
        <button
          onClick={() => setLightTheme(!lightTheme)}
          className={`text-white font-semibold px-4 py-2 rounded-full cursor-pointer active:scale-90
        ${
          lightTheme
            ? "bg-purple-600"
            : "bg-none border-solid border-2 border-white"
        }
        `}
        >
          {theme}
        </button>
      </div>
    </div>
  );
};

export default Header;
