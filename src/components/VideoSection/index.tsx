import React from "react";

const VideoSection: React.FC = () => {
 return (
  <div className="bg-cyan-100 h-[60vh] w-screen flex flex-col items-center justify-around">
   <div className="flex flex-col gap-4 w-[70%] max-w-[500px]">
    <h3 className="text-3xl sm:text-4xl md:text-5xl text-thirdSectionText text-center font-semibold mt-10">
     Show visitors what they&apos;re signing up for
    </h3>
    <p className="text-thirdSectionText text-center text-xl">
     Include a video or photo from one of your sessions to help people
     understand your service (or just to hype &apos;em up).
    </p>
   </div>
   <div className="w-[95%] max-w-[500px] relative">
    <video className="absolute w-full top-[-40px] left-0" controls>
     <source src="/video.mp4" type="video/mp4" />
    </video>
   </div>
  </div>
 );
};
export default VideoSection;
