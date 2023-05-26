import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';

const Navbar = () => {
  const list = [
    {
      id: 1,
      Text: "Home",
    },
    {
      id: 1,
      Text: "About",
    },
    {
      id: 1,
      Text: "Portfolio",
    },
    {
      id: 1,
      Text: "Experience",
    },
    {
      id: 1,
      Text: "Contact",
    },
  ];
  const [state, setState] = useState(true);
  return (
    <div className="flex fixed w-full h-20 bg-black  items-center justify-between px-6">
      <div className="font-logo text-2xl   drop-shadow-lg text-white">
        Sridhar
      </div>

      <ul className="hidden md:flex pr-4 opacity-60 ">
        {list.map(({ id, Text }) => (
          <li
            key={id}
            className="  text-white px-4 font-semibold hover:scale-105 duration-200 capitalize cursor-pointer"
          >
          
            <Link to={Text} smooth duration={500}>{Text}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => {
          setState(!state);
        }}
        className="text-white z-10 md:hidden"
      >
        {!state ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {!state && (
        <ul className="md:hidden  w-full h-screen flex flex-col items-center justify-center absolute top-0 left-0 bg-black py-6">
          {list.map(({ id, Text }) => (
            <li
              key={id}
              className="  text-white py-4 font-semibold hover:scale-105 duration-200 capitalize cursor-pointer text-3xl"
            >
              {Text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
