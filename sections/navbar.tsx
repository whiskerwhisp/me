"use client"
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-2 py-6 mx-4 bg-white/10 border border-[#cf84a0] rounded-xl shadow-md text-white" style={{backdropFilter: "blur(12px)",WebkitBackdropFilter: "blur(12px)"}}>
        <h1>RIA'S</h1>
        <div className="gap-8 space-x-3 pr-5">
            <a href="">PROJECTS</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
        </div>
     </nav>
  );
}


