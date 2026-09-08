import React from "react";

const Buttons = ({isRunning,setisRunning}) => {

  const toggleState = ()=>{
    const audio = new Audio("sounds/click.wav")
    audio.play();
    setisRunning(!isRunning)
  }
  

  return (
    <div className="flex justify-center items-center gap-10 pt-5">
      <button
      className={`pt-2 btn lg:w-50 lg:h-16 w-30 h-16 text-lg   lg:text-[22px] bg-white rounded-sm  cursor-pointer font-bold text-purple-600
        ${isRunning ?`shadow-none translate-y-2`:`shadow-[0px_6px_0px_hsl(358,0%,92%)]`}
        `}
      onClick={toggleState}
      >
        {isRunning===false ?"START":"PAUSE"}
      </button>
    </div>
  );
};

export default Buttons;
