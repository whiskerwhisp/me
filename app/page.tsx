import Navbar from "@/sections/navbar";
import Hero from "@/sections/hero";
import Project from "@/sections/project";
export default function Home() {
  return (
   <>
   <div className="pt-4 bg-[url('/assets/background.jpg')] bg-cover bg-no-repeat bg-fixed"> 
      <Navbar />
      <div className="md:flex flex-row">
        <Hero/>
          <Project/>
          </div>
    </div>
 </>
  );
} 
