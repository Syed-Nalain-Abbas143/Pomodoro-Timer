import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import themeContext from "../Context/globalContext"

const Navbar = () => {
  const {theme} = useContext(themeContext);

  return (
    <div className="w-full  flex justify-center items-center gap-10 ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-xs font-bold lg:text-lg lg:font-semibold
         ${
           isActive
             ? theme === 'light'
               ? "bg-purple-600 text-white"
               : "bg-[rgb(255,255,255,0.4)] text-white"
             : "text-gray-300 hover:text-white"
         }
          `
        }
      >
        Pomodoro
      </NavLink>
      <NavLink
        to="/short"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-xs font-bold lg:text-lg lg:font-semibold
         ${
           isActive
             ? theme === 'light'
               ? "bg-purple-600 text-white"
               : "bg-[rgb(255,255,255,0.4)] text-white"
             : "text-gray-300 hover:text-white"
         }
          `
        }
      >
        Short Break
      </NavLink>
    </div>
  );
};

export default Navbar;
