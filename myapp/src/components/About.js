import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full md:h-screen bg-black text-white px-10 h-full">
      <div className="flex flex-col px-4 w-full h-full md:max-w-screen-lg md:mx-auto">
        <p className="text-3xl font-bold py-6 text-[#950740]">About</p>
        <p className=" text-justify tracking-tighter">
          "Hello, I'm SridharVadla, a passionate full stack blockchain
          developer.With experience as a
          <span className="font-bold text-[#45A29E] tracking-tighter">
          {" "}
            Programmer Analyst at Cognizant Technologies and Solutions
          </span>
          , I have worked extensively as a full stack developer, proficient in  {" "}
           <span className="font-bold tracking-wide text-[#FFD700]">  
              Java, Solidity, Etherjs, Hardhat, SpringBoot, React.js, Data Structures & Algorithms and MySQL
          </span>
          . I completed my Bachelor's degree in{" "}
          <span className="font-bold text-[#45A29E]">
            Electronics and Communication
          </span>{" "}
          from{" "}
          <span className="font-bold text-[#45A29E]">
            {" "}
            VNR Vignana Jyothi Institute of Technology
          </span>
          .
        </p>
        <p className="py-6 text-justify tracking-tight">
          I am dedicated to contributing to the growth and adoption of
          blockchain technology by developing innovative applications that
          address real-world challenges.My fascination with blockchain technology stems from its potential to revolutionize industries by providing transparency, security, and efficiency. I constantly stay updated with the latest advancements in blockchain platforms like Ethereum and Hyperledger. With my experience as a Programmer Analyst at Cognizant, I have successfully delivered projects and developed a strong foundation in both front-end and back-end development
        </p>
        <p className="text-justify tracking-tight pb-6">
          Feel free to explore my portfolio to see examples of the dApps I have
          built. I'm excited to collaborate on projects that push the boundaries
          of what blockchain can achieve. If you have any inquiries or potential
          collaborations, please don't hesitate to reach out. Let's embark on
          this blockchain-powered journey together!"
        </p>
      </div>
    </div>
  );
};

export default About;
