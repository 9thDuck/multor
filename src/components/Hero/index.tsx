import React from "react";
import Logo from "./assets/Logo";

const Hero: React.FC = () => {
 return (
  <div className="flex flex-col w-screen h-screen bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover p-4 sm:p-20 ">
   <div className="w-[90%] sm:w-96 flex flex-col gap-y-28 h-full bg-opacity bg-white bg-opacity-5">
    <Logo />
    <h2 className="text-6xl font-semibold">
     Describe the value of booking an appointment
    </h2>
    <p className="text-xl">
     No need to get clever. Tell people exactly what you&apos;re offering, then
     use this space to communicate your key value proposition.
    </p>
   </div>
  </div>
 );
};
export default Hero;
