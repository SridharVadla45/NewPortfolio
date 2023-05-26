import React from "react";
import logo from '../assets/LogoPic.jpg';
import {BiRightArrowCircle} from 'react-icons/bi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div  name="Home" className="w-full h-screen bg-gradient-to-b from-black via-black to-black text-white">
      <div className="flex justify-center items-center w-full h-full flex-col md:flex-row px-10 md:py-10 gap-20 md:max-w-screen-lg md:mx-auto md:justify-between">
        
        <div className="flex flex-col md:max-w-md p-4">
          <h1 className="text-3xl font-bold py-4 text-[#66FCF1]">I'm Full Stack BlockChain Developer</h1>
          <p className="font-semibold text-justify tracking-tighter">I specialize in designing and implementing decentralized applications (dApps) that leverage the potential of blockchain technology. Decentralized applications are a paradigm shift in application development, utilizing the power of blockchain to create innovative solutions that are secure, transparent, and resistant to censorship</p>
          <div className="py-2 px-1 mt-2 rounded-md flex items-center w-[100px] bg-[#047aed]">
            <Link to="Portfolio" smooth duration={400} className="bg-[#047aed] px-1 py-2 max-w-full capitalize ">portfolio</Link>
          <BiRightArrowCircle size={30} className="hover:rotate-90"/>
          </div>
        </div>
        <div>
          <img src={logo} alt="logopic" width={250} height={250} className="rounded-2xl overflow-auto"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
