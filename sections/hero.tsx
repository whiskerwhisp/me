// @ts-nocheck
"use client"
import React from "react";
import Image from "next/image";
import Contact from "@/components/contact";

export default function Hero() {
  const GlassPanel = ({children,className=""})=>(
    <div className={`
    rounded-xl
   bg-white/10 
   border border-[#cf84a0] 
   shadow-lg
   text-white 
   flex items-center justify-center ${className}`} style={{backdropFilter: "blur(12px)",WebkitBackdropFilter: "blur(12px)"}}>
      {children}
    </div>
  )
  return (
    <section className="w-full flex flex-col gap-4 p-4 md:w-2/3" id="about">
      {/* First block */}
      <div className="flex flex-col md:flex-row gap-4 ">
        <GlassPanel className="w-full md:w-2/5 min-h-[222px] md:h-84 lg:h-[476px] relative">
          <Image
            src="/assets/portfoliopfp.jpg"
            width={100}
            height={100}
            alt="ria"
            className="w-[100px] md:w-[145px] lg:w-[200px] rounded-full border-3 border-[#cf84a0] absolute top-3.5 lg:top-8"
          />
          <div className="mt-23 md:mt-35 p-2">
            <h1 className="font-bold text-xl lg:text-2xl xl:text-3xl text-center">HIE! I AM RIAᡣ𐭩</h1>
            <p className="md:mt-2 lg:mt-5 xl:text-xl text-center">21-year-old who loves turning ideas into beautiful, user-friendly websites</p>
          </div>
        </GlassPanel>
         <GlassPanel className="w-full md:w-3/5 min-h-64 md:h-[340px] lg:h-[479px]">
          <p className="text-center p-4 xl:p-8 lg:text-xl xl:text-2xl ">A passionate Full Stack Developer in my final year of college. I enjoy working across the stack, but I have a deep interest in frontend because I love making things look beautiful and feel smooth to use. Through this journey I’ve realized that coding isn’t just about logic — it comes with ups and downs, I’m focused on creating user-friendly interfaces✧ <br/>━━━━⊱⋆⊰━━━━</p>
        
        </GlassPanel>
      </div>

      {/* Second block */}
      <div className="flex flex-col md:flex-row gap-4" id="skills">
      <GlassPanel className="w-full md:w-1/2 h-64 md:h-[350px] lg:h-[351px]">
          <div className="space-y-3 text-center lg:text-lg p-4">
  <p>⬩ Front-end: JavaScript, TypeScript, React, Next.js, Redux TailwindCSS</p>
  <p>⬩ Back-end: Node.js, Express.js</p>
  <p>⬩ Database: MongoDB, PostgreSQL</p>
  <p>⬩ DevTools: Git/GitHub, VSCode, Postman</p>
  <p>⬩ Currently learning: Figma</p>
</div>

            
        </GlassPanel>

        <GlassPanel className="w-full md:w-1/2  min-h-64 md:h-[350px] lg:h-[351px]">
         <Contact/>
        </GlassPanel>
      </div>
    </section>
  )
}
