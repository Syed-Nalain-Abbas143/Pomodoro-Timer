import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons.jsx";
import Timer from "../components/Timer.jsx";
import { useNavigate } from "react-router-dom";
import PomoCount from "../components/PomoCount.jsx";


const Pomodoro = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(()=>{
    const pomoCount = localStorage.getItem("pomoCount");

    return pomoCount ?Number(pomoCount):0;
  });

  const [time, setTime] = useState(()=>{
    const savedTime = localStorage.getItem("pomodorotime");

   return savedTime ?Number(savedTime):25*60
  });

  const [isRunning, setisRunning] = useState(false);


  useEffect(() => {
    localStorage.setItem("pomodorotime",time)
  }, [time]);

  useEffect(() => {
    localStorage.setItem("pomoCount",count)
  }, [count]);

  const completeTime = () => {
    const audio = new Audio("/sounds/complete.wav");
    audio.play();
    setisRunning(false);
    setTime(25 * 60);
    navigate("/short");
  };

  useEffect(() => {
    if (!isRunning) return;

    const timeout = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
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
    if (time === 0 && isRunning) {
      setCount((prev)=>prev+1);
      completeTime();
    }
  }, [time, isRunning]);

  
  useEffect(() => {
    const minutes = Math.floor(time / 60);
    const sec = time % 60;

    document.title = `${String(minutes).padStart(2, "00")}:${String(sec).padStart(2, "00")} - Time to focus!`;
  }, [time]);

  const minutes = Math.floor(time / 60);
  const sec = time % 60;

  return (
    <div className="my-10 w-full flex justify-center items-center flex-col">
      <Timer minutes={minutes} sec={sec} />
      <Buttons isRunning={isRunning} setisRunning={setisRunning}  />
      <PomoCount count={count} />
    </div>
  );
};

export default Pomodoro;
