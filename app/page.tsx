import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Project from "@/components/project";
export default function Home() {
  return (
   <>
   <div className="pt-4 bg-[url('/assets/background.jpg')] bg-cover bg-no-repeat bg-fixed"> 
      <Navbar />
      <div className="md:flex flex-row">
        <Hero/>
          <Project />
          </div>
    </div>
 </>
  );
} 
