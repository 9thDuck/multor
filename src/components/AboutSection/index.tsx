import Image from "next/image";
import React from "react";

const index: React.FC = () => {
 return (
  <div className="flex flex-col items-center justify-start  mx-auto lg:flex-row md:justify-center p-5 gap-8 lg:gap-48">
   <Image
    src="/about-section-person.jpg"
    className="h-[261px]  lg:w-[460px] lg:h-[400px] w-[350px] max-w-[90%] mr-8"
    width="300"
    height="261"
    alt="About Section Person Image"
   />
   <div className="flex flex-col gap-4 justify-start w-[400px] p-1">
    <h3 className="text-cyan-400 text-left w-full font-semibold tracking-widest">
     ABOUT
    </h3>
    <h4 className="text-3xl text-left font-semibold">
     Some more information about your business
    </h4>
    <p className="w-[338px] h-[85px] text-left">
     Share a little about yourself as a business owner, or maybe describe what
     makes your service unique. Give visitors one more reason to care about your
     offer and want to work with you.
    </p>
   </div>
  </div>
 );
};
export default index;
