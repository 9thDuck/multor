import React from "react";
import { Benefit1, Benefit2, Benefit3 } from "./assets";
const data = [
 {
  icon: <Benefit1 />,
  title: "Benefit 1",
  content:
   "Highlight the benefits of signing up for an appointment, online class, or video consultation.",
 },
 {
  icon: <Benefit2 />,
  title: "Benefit 2",
  content:
   "For example, fitness instructors might describe how their routines make people healthier *and* happier.",
 },
 {
  icon: <Benefit3 />,
  title: "Benefit 3",
  content:
   "Remind visitors how easy it is to claim your offer and start enjoying the benefits.",
 },
];

const Benefits: React.FC = () => {
 return (
  <div className="h-1/2 w-[400px] lg:h-1/2 flex flex-col gap-y-10 justify-around">
   {data.map(({ icon, title, content }) => {
    return (
     <div key={title} className="flex gap-8 text-xl">
      {icon}
      <div className="flex flex-col gap-3 w-96">
       <h3 className="font-semibold">{title}</h3>
       <p className="text-m">{content}</p>
      </div>
     </div>
    );
   })}
  </div>
 );
};
export default Benefits;
