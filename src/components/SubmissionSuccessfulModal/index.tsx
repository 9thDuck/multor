import React from "react";

const SubmissionSuccessfulModal: React.FC = () => {
 return (
  <div className="flex flex-col justify-between items-center h-1/2 w-[60%]">
   <h3 className="text-3xl text-white">Thank You!</h3>
   <p className="text-sm md:text-l text-white text-center">
    We&apos;ll reach out to confirm your appointment shortly.
   </p>
  </div>
 );
};
export default SubmissionSuccessfulModal;
