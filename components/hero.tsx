import React from 'react'
import Image from 'next/image'
export default function hero() {
  return (
    <section>
      <div className="flex m-4 gap-4">
        <div className="w-[565px] h-[479px] bg-[#faddd8] rounded-xl">
          <p>hewwo</p>
        </div>
        <div className="flex items-end justify-center w-[330px] h-[476px] bg-[#d5c6ba] rounded-xl overflow-hidden">
          <Image src={"/assets/hachiNana.png"} height={120} width={"400"} alt="hachiNana" className="object-contain" />
        </div>
      </div>
      <div className="flex m-4 gap-4">
        <div className="w-[448px] h-[351px] bg-[#FADCD9] rounded-xl flex flex-col items-center">
          <p>about me</p>
        </div>
        <div className="w-[448px] h-[351px] bg-[#F8AFA6] rounded-xl flex flex-col items-center">
          <p>contact me </p>
        </div>
      </div>
    </section>
  )
}


