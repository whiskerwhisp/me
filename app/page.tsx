import Navbar from "@/sections/navbar";
import Hero from "@/sections/hero";
import Project from "@/sections/project";
export default function Home() {
  return (
   <>
   <div className="min-h-screen pt-4 bg-[url('/assets/background.jpg')] bg-cover bg-no-repeat bg-fixed"> 
        <div className="3xl:w-[60%] 3xl:mx-auto 3xl:mt-50">
         <Navbar />
      <div className="md:flex flex-row">
        <Hero/>
          <Project/>
          </div>
     </div>
    </div>
 </>
  );
} 

