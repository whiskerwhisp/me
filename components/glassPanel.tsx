// @ts-nocheck
import React from "react";

const GlassPanel = ({ children, className = "" }) => (
  <div
    className={`rounded-xl bg-white/10 border border-[#cf84a0] shadow-lg text-white ${className}`}
    style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
  >
    {children}
  </div>
);

export default GlassPanel;
