import React from 'react'
import Image from 'next/image'
export default function hero() {
  return (
    <section className="w-2/3">
      <div className="flex mx-5 gap-4">
        <div className="w-3/5 h-[479px] bg-[#faddd8] rounded-xl">
          <p>hewwo</p>
        </div>
        <div className="w-2/5 h-[476px] flex items-end justify-center  bg-[#d5c6ba] rounded-xl overflow-hidden">
          <Image src={"/assets/hachiNana.png"} height={120} width={"360"} alt="hachiNana" className="object-contain" />
        </div>
      </div>
      <div className="flex mx-5 mt-4 gap-4">
        <div className="w-1/2  h-[351px] bg-[#FADCD9] rounded-xl flex items-center">
          <p>about me</p>
        </div>
        <div className="w-1/2 h-[351px] bg-[#F8AFA6] rounded-xl flex items-center">
          <p>contact me </p>
        </div>
      </div>
    </section>
  )
}

