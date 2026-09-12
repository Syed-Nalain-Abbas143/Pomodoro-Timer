import React, { useEffect, useState } from "react";
import Timer from "../components/Timer.jsx";
import Buttons from "../components/Buttons.jsx";

const Shortbreak = () => {

  const [isRunning, setisRunning] = useState(false);
  const [time, setTime] = useState(5*60);

  const completeTime = () => {
    const audio = new Audio("/sounds/complete.wav");
    audio.play();
    setisRunning(false);
    setTime(5*60);
  };

  useEffect(() => {
    if (!isRunning) return;

    const timeout = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timeout);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [isRunning]);


  useEffect(() => {
    if (time===0&&isRunning) {
      completeTime();
    }
  }, [time,isRunning]);

  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const sec = time % 60;

    document.title = `${String(minutes).padStart(2, "00")}:${String(sec).padStart(2, "00")} - Time for a break!`;
  }, [time]);

  const minutes = Math.floor(time / 60);
  const sec = time % 60;

  return (
    <div className="my-10 w-full flex justify-center items-center flex-col">
      <Timer minutes={minutes} sec={sec} />

      <Buttons isRunning={isRunning} setisRunning={setisRunning}  />
    </div>
  );
};

export default Shortbreak;
