import React from "react";
const data = [{ title: "Benefit 1", content: "" }];
const FormSection: React.FC = () => {
 return (
  <div className="flex flex-col w-screen h-screen p-4 sm:p-20 ">
   <div className="w-[90%] sm:w-96 flex flex-col gap-y-28 h-full bg-opacity bg-white bg-opacity-5"></div>
   <div className="w-[90%] sm:w-96 flex flex-col gap-y-28 h-full bg-opacity bg-white bg-opacity-5"></div>
  </div>
 );
};
export default FormSection;
