"use client"
import React from "react";

export default function Navbar() {
  return (
     <nav className="flex justify-between px-8 py-6 m-4  bg-[#faddd8] rounded-xl">
        <h1>RIYA RANA</h1>
        <div className="flex gap-8">
            <a href="">PROJECTS</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
        </div>
     </nav>
  );
}
