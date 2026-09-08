import React from "react";

const Timer = ({ minutes, sec }) => {
  return (
    <div className="flex justify-center items-center text-white py-10 gap-3">
      <h2 className="text-9xl font-[mono] font-bold">
        {String(minutes).padStart(2, "00")}
      </h2>
      <span className="text-9xl font-[mono] font-bold">:</span>
      <h2 className="text-9xl font-[mono] font-bold">
        {String(sec).padStart(2, "00")}
      </h2>
    </div>
  );
};

export default Timer;
