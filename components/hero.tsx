import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full flex flex-col gap-4 p-4 md:w-2/3">
      {/* First block */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/5 h-64 md:h-[340px] lg:h-[479px] bg-[#faddd8] rounded-xl flex items-center justify-center">
          <p>Artist Redefining Architecture with AI-Driven Design</p>
        </div>
        <div className="w-full md:w-2/5 h-[220px] md:h-84 lg:h-[476px] flex items-end justify-center bg-[#d5c6ba] rounded-xl overflow-hidden">
          <Image
            src="/assets/hachiNana.png"
            width={360}
            height={120}
            alt="hachiNana"
            className="object-contain w-[170px] md:w-[320px]"
          />
        </div>
      </div>

      {/* Second block */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 h-64 md:h-[330px] lg:h-[351px] bg-[#FADCD9] rounded-xl flex items-center justify-center">
          <p>about me</p>
        </div>
        <div className="w-full md:w-1/2 h-48 md:h-[330px] lg:h-[351px] bg-[#F8AFA6] rounded-xl flex items-center justify-center">
          <p>contact me</p>
        </div>
      </div>
    </section>
  )
}

