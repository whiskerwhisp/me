import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import ProjectSection from "@/components/project";
export default function Home() {
  return (
   <>
      <Navbar />
      <div className="md:flex flex-row">
        <HeroSection />
          <ProjectSection />
          </div>
     
 </>
  );
} 

