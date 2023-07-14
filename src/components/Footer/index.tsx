import React from "react";
import Logo from "../Hero/assets/Logo";

const Footer: React.FC = () => {
 return (
  <footer className="h-[135px] w-screen flex flex-col justify-between p-10 items-center md:flex-row mt-10 bg-pink-700">
   <Logo color="#A3ACAC" height={20} width={90} />
   <p className="text-l" style={{ color: "#A3ACAC" }}>
    © 2023 Multor Enterprises. All rights reserved.
   </p>
  </footer>
 );
};
export default Footer;
