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
     <div className="w-screen h-screen absolute top-0 left-0 bg-black">
      <button
       type="button"
       className="bg-white border-solid border-1 border-black"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
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
     </div>,
     document.body
    )
  : null;
};

export default PortalModal;
