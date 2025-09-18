// @ts-nocheck
"use client" 
import React from "react"
import { House,IceCreamBowl, Link} from 'lucide-react';

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
     <GlassPanel className="w-full h-96 md:h-[550px] lg:h-[728px] px-3 py-3">
       <div className="h-1/3 flex">
         <div className="w-1/2 bg-[#de4a55] opacity-[0.3] rounded-xl flex flex-col justify-center items-center">
         <House className="w-16 h-16 text-white"/>
         </div>
         <div className="w-1/2">
         <h1 className="flex justify-center mt-3">CasaCozy</h1>
         <p className="flex justify-center p-4 text-center">A cozy rental platform where users can discover unique stays, create their own listings, and manage them with full CRUD functionality.</p>
         </div>
       </div>

     <div className="h-1/3 flex">
      <div className="w-1/2">
      <h1 className="flex justify-center mt-3">Frozio</h1>
      <p className="flex justify-center p-4 text-center">An ice-cream e-commerce delight 🍦 — browse a variety of flavors, add your favorites to the cart, and enjoy a smooth shopping experience.</p>
      </div>
       <div className="w-1/2 bg-[#a2d2ff] opacity-[0.3] rounded-xl flex flex-col justify-center items-center">
       <IceCreamBowl className="w-16 h-16 text-white"/></div>
       </div>

          <div className="h-1/3 flex">
       <div className="w-1/2 bg-[#a9a9a9] opacity-[0.6] rounded-xl flex flex-col justify-center items-center"><Link className="w-16 h-16 text-white text-bold" /></div>
       <div className="w-1/2">
       <h1 className="flex justify-center mt-3">Shortify</h1>
       <p className="flex justify-center p-4 text-center">A minimal and fast URL shortener that transforms long, messy links into sleek, shareable ones.</p>
       </div>
       </div>
     
        </GlassPanel> 
        <GlassPanel className="w-full h-25 md:h-[120px] lg:h-[102px]">
           <a href="">GITHUB</a> 
           <a href="">TWITTER</a> 
           <a href="">LINKEDEN</a>
        </GlassPanel>
          </section>
      )
 }
