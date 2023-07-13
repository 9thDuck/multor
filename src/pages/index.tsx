// import FormSection from "@/components/FormSection";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 return (
  <main
   className={`min-h-screen flex-col items-center justify-center ${inter.className} overflow-x-hidden`}
  >
   <Hero />
   {/* <FormSection /> */}
  </main>
 );
}
