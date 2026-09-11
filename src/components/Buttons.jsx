import React from "react";

const Buttons = ({ isRunning, setisRunning, lightTheme }) => {
  const toggleState = () => {
    const audio = new Audio("sounds/click.wav");
    audio.play();
    setisRunning(!isRunning);
  };

  return (
    <div className="flex justify-center items-center gap-10 pt-5">
      <button
        className={`pt-2 btn lg:w-50 lg:h-16 w-30 h-16 text-lg lg:text-[22px] rounded-sm  cursor-pointer font-bold
          ${
            lightTheme
            ? "bg-white text-purple-600"
            : "bg-[rgb(255,255,255,0.4)] text-white"
          }
        ${
          isRunning
            ? `shadow-none translate-y-2`
            : `shadow-[0px_6px_0px_rgb(255,255,255,0.4)]`
        }
        `}
        onClick={toggleState}
      >
        {isRunning === false ? "START" : "PAUSE"}
      </button>
    </div>
  );
};

export default Buttons;
