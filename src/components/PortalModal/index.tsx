import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalModalProps extends React.PropsWithChildren {
 closeHandler: () => void;
}

const PortalModal = ({ children, closeHandler }: PortalModalProps) => {
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  setMounted(true);
 }, []);

 return mounted
  ? createPortal(
     <div className="w-screen h-full absolute top-0 left-0 bg-black bg-opacity-80 ">
      <div className="w-64 sm:w-72 lg:w-96 h-48 absolute top-[40%] left-[22%] sm:left-[32%] md:left-[37%] lg:left-[40%] bg-white border-t-submitBtn border-t-4 border-solid">
       <div className="relative h-full w-full bg-formBg flex flex-col justify-center items-center">
        <button
         type="button"
         className="absolute rounded-[50%] bg-black overflow-hidden border-white border-solid border-2 top-[-13px] right-[-13px]"
        >
         <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
          onClick={closeHandler}
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="M6 18L18 6M6 6l12 12"
          />
         </svg>
        </button>
        {children}
       </div>
      </div>
     </div>,
     document.body
    )
  : null;
};

export default PortalModal;
