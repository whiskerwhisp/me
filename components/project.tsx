// @ts-nocheck
"use client" 
import React from "react"
 export default function Project () { 
  const GlassPanel = ({children, className=""})=>(
    <div className={`
         rounded-xl
        bg-white/10 
         border border-[#cf84a0] 
         shadow-lg
         text-white 
         ${className}
    `} style={{backdropFilter: "blur(12px)",WebkitBackdropFilter: "blur(12px)"}}>
      {children}
    </div>
  )
  return (
     <section className="w-full flex flex-col md:w-1/3 gap-4 px-4 pb-4 md:px-0 md:pt-4 md:pr-4 md:pb-0"> 
     <GlassPanel className="w-full h-80 md:h-[550px] lg:h-[728px]"> 
      <div><h1>Shortify</h1></div>
       <div> <h1>Frozio</h1></div>
        <div> <h1>KuromiTimers</h1></div> 
        </GlassPanel> 
        <GlassPanel className="w-full h-25 md:h-[120px] lg:h-[102px]">
           <a href="">GITHUB</a> 
           <a href="">TWITTER</a> 
           <a href="">LINKEDEN</a>
            </GlassPanel>
             </section>
             
      )
 }


