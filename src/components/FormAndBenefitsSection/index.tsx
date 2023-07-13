import React from "react";
import Form from "./components/Form";
import Benefits from "./components/Benefits";

const FormAndBenefitsSection: React.FC = () => {
 return (
  <div className="flex flex-col-reverse gap-11 justify-between  h-[160vh] lg:h-[87vh] lg:flex-row items-center  md:items-between md:justify-around w-screen p-4 ">
   <Benefits />
   <Form />
  </div>
 );
};
export default FormAndBenefitsSection;
