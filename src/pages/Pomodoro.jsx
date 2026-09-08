import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons.jsx";
import Timer from "../components/Timer.jsx";
import { useNavigate } from "react-router-dom";

const Pomodoro = () => {
  const navigate = useNavigate();

  const [isRunning, setisRunning] = useState(false);
  const [time, setTime] = useState(25*60);
  
  const completeTime = () => {
    const audio = new Audio("/sounds/complete.wav");
    audio.play();
    setisRunning(false);
    setTime(25*60);
    navigate("/short");
  };

  useEffect(() => {
    if (!isRunning) return;

    const timeout = setInterval(() => {
     
      setTime((prev)=>{
        if (prev<=1) {
          return 0;
        }

        return prev-1;
      })

    }, 1000);

    return ()=>{
        clearInterval(timeout)
      }
  }, [isRunning]);

  useEffect(() => {
      if (time===0&&isRunning) {
        completeTime();
      }
    }, [time,isRunning]);

  const minutes = Math.floor(time/60);
  const sec = time%60;

  return (

    <div className="my-10 w-full flex justify-center items-center flex-col">

      <Timer minutes = {minutes} sec={sec} />

      <Buttons isRunning={isRunning} setisRunning={setisRunning}/>

    </div>
  );
};

export default Pomodoro;
