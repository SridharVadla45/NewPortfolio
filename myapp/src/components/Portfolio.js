import React from "react";
import logo from '../assets/ProjectLogo.jpg';
const Portfolio = () => {
  return (
    <div name="Portfolio" className="w-full h-full bg-black text-white flex  flex-col items-start justify-start  ">
      <p className="text-3xl font-bold py-6 text-[#950740] px-12  md:px-40 md:mx-24">Portfolio</p>
      <div className="grid   px-24 md:grid-cols-3  w-full h-full grid-cols-1   md:py-10 gap-8 md:max-w-screen-lg md:mx-auto md:justify-between">
        <div className=" flex flex-col">
          <img src={logo} width={200} height={70}></img>
          <div className="flex items-center justify-center w-[200px]">
            <button className="bg-[#FF69B4]  w-[100px] hover:scale-105">ViewDemo</button>
            <button className="bg-[#047aed]  w-[100px] hover:scale-105">Code</button>
          </div>
        </div>
        <div className="w-[200px] h-[150px]  flex flex-col">
          <img src={logo} width={200} height={70}></img>
          <div className="flex items-center justify-center w-[200px]">
            <button className="bg-[#FF69B4]  w-[100px] hover:scale-105">ViewDemo</button>
            <button className="bg-[#047aed]  w-[100px] hover:scale-105">Code</button>
          </div>
        </div>
        <div className="w-[200px] h-[150px]  flex flex-col">
          <img src={logo} width={200} height={70}></img>
          <div className="flex items-center justify-center w-[200px]">
            <button className="bg-[#FF69B4]  w-[100px] hover:scale-105">ViewDemo</button>
            <button className="bg-[#047aed]  w-[100px] hover:scale-105">Code</button>
          </div>
        </div>
        <div className="w-[200px] h-[150px]  flex flex-col">
          <img src={logo} width={200} height={70}></img>
          <div className="flex items-center justify-center w-[200px]">
            <button className="bg-[#FF69B4]  w-[100px] hover:scale-105">ViewDemo</button>
            <button className="bg-[#047aed]  w-[100px] hover:scale-105">Code</button>
          </div>
        </div>
        <div className="w-[200px] h-[150px]  flex flex-col">
          <img src={logo} width={200} height={70}></img>
          <div className="flex items-center justify-center w-[200px]">
            <button className="bg-[#FF69B4]  w-[100px] hover:scale-105">ViewDemo</button>
            <button className="bg-[#047aed]  w-[100px] hover:scale-105">Code</button>
          </div>
        </div>
        <div className="w-[200px] h-[150px]  flex flex-col">
          <img src={logo} width={200} height={70}></img>
          <div className="flex items-center justify-center w-[200px]">
            <button className="bg-[#FF69B4]  w-[100px] hover:scale-105">ViewDemo</button>
            <button className="bg-[#047aed]  w-[100px] hover:scale-105">Code</button>
          </div>
        </div>
        </div>
      
  
      </div>
    
  );
};

export default Portfolio;
