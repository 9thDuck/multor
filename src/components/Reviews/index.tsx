import Image from "next/image";
import React from "react";

const reviewData = [
 {
  stars: "/5-stars.svg",
  content:
   "Share a real testimonial that hits some of your benefits (but isn't too sales-y).",
  avatar: "/person-1.jpg",
  name: "Claudia Jones",
  location: "Seattle, USA",
 },
 {
  stars: "/4.5-stars.svg",
  content:
   "Include someone talking about how easy it was to sign up and participate.",
  avatar: "/person-2.jpg",
  name: "Mary Jane",
  location: "Fukuoka, Japan",
 },
];

const Reviews: React.FC = () => {
 return (
  <div className="flex flex-col mt-[200px] mx-auto gap-8">
   <h3 className="text-l text-cyan-500 text-center">
    DON&apos;T JUST TAKE OUR WORD FOR IT
   </h3>
   <div className="flex flex-col md:flex-row justify-around gap-10 items-center md:justify-around md:items-around w-full">
    {reviewData.map(({ stars, content, avatar, name, location }, idx) => (
     <div
      className="flex flex-col gap-5 p-2 max-w-[400px]"
      key={`person-${idx + 1}-review`}
     >
      <Image src={stars} alt="review rating" width="69" height="11" />
      <p className="text-xl">{content}</p>
      <div className="flex gap-5">
       <Image src={avatar} width="50" height="50" alt="reviewer avatar" />
       <div className="flex flex-col">
        <p className="text-sm">{name}</p>
        <p className="text-sm">{location}</p>
       </div>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};
export default Reviews;
