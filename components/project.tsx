// @ts-nocheck
"use client";

import React, { useState } from "react";
import {
  House,
  IceCreamBowl,
  Link,
  ChevronDown,
  Github,
  ExternalLink,
} from "lucide-react";

export default function Project() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  
  const GlassPanel = ({ children, className = "" }) => (
    <div
      className={`rounded-xl bg-white/10 border border-[#cf84a0] shadow-lg text-white ${className}`}
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
    >
      {children}
    </div>
  );

  
  const projects = [
    {
      title: "CasaCozy",
      text: "A cozy rental platform where users can discover unique stays, create their own listings, and manage them with full CRUD functionality.",
      icon: <House className="w-6 h-6" />,
      bg: "bg-[#de4a55]/30",
      tech: ["Next.js", "MongoDB", "Tailwind"],
      githubUrl: "https://github.com/yourname/casacozy",
      liveUrl: "https://casacozy.vercel.app",
    },
    {
      title: "Frozio",
      text: "An ice-cream e-commerce delight—browse a variety of flavors, add your favorites to the cart, and enjoy a smooth shopping experience.",
      icon: <IceCreamBowl className="w-6 h-6" />,
      bg: "bg-[#a2d2ff]/30",
      tech: ["Next.js", "Stripe", "Snipcart", "Vercel"],
      githubUrl: "https://github.com/yourname/frozio",
      liveUrl: "https://frozio-demo.vercel.app",
    },
    {
      title: "Shortify",
      text: "A minimal and fast URL shortener that transforms long, messy links into sleek, shareable ones.",
      icon: <Link className="w-6 h-6" />,
      bg: "bg-[#a9a9a9]/60",
      tech: ["React", "Express", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/yourname/shortify",
      liveUrl: "https://shortify-demo.vercel.app",
    },
  ];

  
  const AccordionItem = ({ item, idx }: { item: typeof projects[0]; idx: number }) => {
    const isOpen = openIdx === idx;
    return (
      <GlassPanel className="mb-3 overflow-hidden">
         <div className="w-full flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className={`grid place-items-center w-10 h-10 rounded-lg ${item.bg}`}>
              {item.icon}
            </div>
          <a href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline">{item.title}</a>
          </div>

          <button
            onClick={() => setOpenIdx(isOpen ? null : idx)}
            aria-expanded={isOpen}
            className="ml-auto"
          >
            <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

       
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
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
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </GlassPanel>
    );
  };


  return (
    <section className="w-full flex flex-col md:w-1/3 gap-4 px-4 pb-4 md:px-0 md:pt-4 md:pr-4 md:pb-0">
      <GlassPanel className="w-full h-96 md:h-[550px] lg:h-[728px] px-3 py-3">
        <div className="hidden lg:flex lg:flex-col lg:h-full">
          <div className="h-1/3 flex">
            <div className="w-1/2 bg-[#de4a55]/30 rounded-xl grid place-items-center">
              <House className="w-16 h-16 text-white" />
            </div>
            <div className="w-1/2">
              <h1 className="text-center mt-3">CasaCozy</h1>
              <p className="text-center p-4">
                A cozy rental platform where users can discover unique stays, create their own listings, and manage them with full CRUD functionality.
              </p>
            </div>
          </div>

          <div className="h-1/3 flex">
            <div className="w-1/2">
              <h1 className="text-center mt-3">Frozio</h1>
              <p className="text-center p-4">
                An ice-cream e-commerce delight—browse a variety of flavors, add your favorites to the cart, and enjoy a smooth shopping experience.
              </p>
            </div>
            <div className="w-1/2 bg-[#a2d2ff]/30 rounded-xl grid place-items-center">
              <IceCreamBowl className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="h-1/3 flex">
            <div className="w-1/2 bg-[#a9a9a9]/60 rounded-xl grid place-items-center">
              <Link className="w-16 h-16 text-white" />
            </div>
            <div className="w-1/2">
              <h1 className="text-center mt-3">Shortify</h1>
              <p className="text-center p-4">
                A minimal and fast URL shortener that transforms long, messy links into sleek, shareable ones.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden h-full overflow-y-auto p-2">
          {projects.map((p, i) => (
            <AccordionItem key={p.title} item={p} idx={i} />
          ))}
        </div>
      </GlassPanel>

      <GlassPanel className="w-full h-25 md:h-[120px] lg:h-[102px] flex items-center justify-center gap-6">
        <a className="hover:underline" href="#">GITHUB</a>
        <a className="hover:underline" href="#">TWITTER</a>
        <a className="hover:underline" href="#">LINKEDIN</a>
      </GlassPanel>
    </section>
  );
}
