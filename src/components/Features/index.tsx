import Image from "next/image";
import React from "react";

const featureData = [
 {
  title: "FEATURE 1",
  content:
   "Talk about some of the details of your offer with a focus on the value people get back.",
  imgUrl: "/feature-1.jpg",
 },
 {
  title: "FEATURE 2",
  content:
   "Is there a pain point that your service resolves? Tell visitors about it here.",
  imgUrl: "/feature-2.jpg",
 },
 {
  title: "FEATURE 3",
  content:
   "Alternatively, you could use this section to address some frequently asked questions.",
  imgUrl: "/feature-3.jpg",
 },
];

const Features: React.FC = () => {
 return (
  <div className="flex flex-col items-center  mx-auto lg:flex-row md:justify-center p-5">
   {featureData.map(({ title, imgUrl, content }, idx) => {
    return (
     <div
      className="flex flex-col gap-8 p-3 pt-5 max-w-[400px]"
      key={`person-${idx + 1}-review`}
     >
      <Image src={imgUrl} alt="review rating" width="300" height="169" />
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-xl text-left w-[80%]">{content}</p>
     </div>
    );
   })}
  </div>
 );
};
export default Features;
