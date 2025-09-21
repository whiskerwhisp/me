"use client";

import React from "react";
import {useState} from "react"
import GlassPanel from "@/components/glassPanel"
import ProjectData from "@/components/projectData"
import { ChevronDown, Github, ExternalLink, } from "lucide-react";

export default function Project() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // accordian for small screens
  const AccordionItem = ({ item, idx }: { item: typeof ProjectData[0]; idx: number }) => {
    const isOpen = openIdx === idx;
    return (
      <GlassPanel className="mb-3 overflow-hidden">
         <div className="w-full flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className={`grid place-items-center w-10 h-10 rounded-xl ${item.bg}`}>
             {React.cloneElement(item.icon, { className: "w-6 h-6 text-white" })}
            </div>
          <a href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline">{item.title}</a>
          </div>

          <button
            onClick={() => setOpenIdx(isOpen ? null : idx)}
            aria-expanded={isOpen}
            className="ml-auto">
            <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}>
          <div className="overflow-hidden">
            <p className="px-4 pb-3 text-sm leading-relaxed">{item.text}</p>
         <div className="px-4 pb-3 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border border-white/20 bg-white/10">
                  {t}
                </span>
              ))}
            </div>

            <div className="px-4 pb-4 flex items-center gap-4 text-sm">
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline">
                <Github className="w-4 h-4"/> GitHub
              </a>
              <a href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline">
                <ExternalLink className="w-4 h-4"/> Live Demo
              </a>
            </div>
          </div>
        </div>
      </GlassPanel>
    );
  };

// for large screens
  return (
    <section className="w-full flex flex-col md:w-1/3 gap-4 px-4 pb-4 md:px-0 md:pt-4 md:pr-4 md:pb-0">
      <GlassPanel className="w-full h-96 md:h-[560px] lg:h-[728px] px-3 py-3">
        <div className="hidden xl:flex xl:flex-col xl:h-full space-y-3">
        {ProjectData.map((item, i) => (
        <div key={item.title} className="h-1/3 flex">
          {i % 2 === 0 ? (
          <>
     {/* on leftside */}
        <div className={`w-1/2 ${item.bg} rounded-xl flex flex-col items-center p-4`}>
          {React.cloneElement(item.icon, { className: "w-20 h-20 text-white mt-3" })}
          <div className="mt-2 flex gap-2 flex-wrap">
            {item.tech.map((t) => (
              <button
                key={t}
                className="px-2 py-1 bg-black/30 rounded text-xs mt-5">
                {t}
              </button>
            ))}
          </div>

          <div className="px-2 pt-2 flex items-center gap-4 text-sm mt-5">
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>

       {/* rightside description */}
        <div className="w-1/2 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <p className="mt-2">{item.text}</p>
        </div>
      </>
    ) : (
      <>
        {/* Left side description */}
        <div className="w-1/2 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <p className="mt-2">{item.text}</p>
        </div>

        {/*on rightside */}
        <div className={`w-1/2 ${item.bg} rounded-xl flex flex-col items-center p-4`}>
           {React.cloneElement(item.icon, { className: "w-20 h-20 text-white mt-3" })}
          <div className="mt-2 flex gap-2 flex-wrap">
            {item.tech.map((t) => (
              <button key={t} className="px-2 py-1 bg-black/30 rounded text-xs mt-5">{t}</button>
            ))}
          </div>

          <div className="px-2 pt-2 flex items-center gap-4 text-sm mt-5">
            <a href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </>
    )}
  </div>
))}
</div>
<div className="xl:hidden h-full overflow-y-auto p-2">
    {ProjectData.map((p, i) => (
    <AccordionItem key={p.title} item={p} idx={i} />))}
</div>
</GlassPanel>

      <GlassPanel className="w-full h-25 md:h-[130px] lg:h-[102px] flex items-center justify-center gap-6">
        <a className="hover:underline" href="#">GITHUB</a>
        <a className="hover:underline" href="#">TWITTER</a>
        <a className="hover:underline" href="#">LINKEDIN</a>
      </GlassPanel>
    </section>
  );
}


