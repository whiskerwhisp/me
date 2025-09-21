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
    <section className="w-full flex flex-col gap-4 p-4 md:w-2/3">
      {/* First block */}
      <div className="flex flex-col md:flex-row gap-4 ">
        <GlassPanel className="w-full md:w-2/5 h-[220px] md:h-84 lg:h-[476px] relative">
          <Image
            src="/assets/portfoiliopfp.jpg"
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
         <GlassPanel className="w-full md:w-3/5 h-64 md:h-[340px] lg:h-[479px]">
          <p>Artist Redefining Architecture with AI-Driven Design</p>
        </GlassPanel>
      </div>

      {/* Second block */}
      <div className="flex flex-col md:flex-row gap-4">
        <GlassPanel className="w-full md:w-1/2 h-64 md:h-[350px] lg:h-[351px]">
          <p>currently learning</p>
        </GlassPanel>
        <GlassPanel className="w-full md:w-1/2  min-h-64 md:h-[350px] lg:h-[351px]">
         <Contact/>
        </GlassPanel>
      </div>
    </section>
  )
}
