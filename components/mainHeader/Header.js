"use client"

import { useState } from "react"
import Link from "next/link"
import MainHeaderBg from "./MainHeaderBg"
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";

export default function Header(){
  const [istoggle, setIstoggle] = useState(false)
  return<div className="fixed top-0 left-0 z-10 w-full mb-2 ">
          <MainHeaderBg/>
          <main >
            <Link href={'/'} className="inline-flex cursor-pointer">
              <p className="absolute top-4 md:top-8  xl:top-12 left-10 text-sm md:text-xl  xl:text-2xl text-white hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-300 hover:via-red-600 hover:to-orange-400 hover:bg-clip-text transition-all duration-500 drop-shadow-lg hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]  translate-0.5 scale-110 font-extrabold align-middle xl:mx-2">NQB8 JOB LISTING</p>
            </Link>
            <div className="hover:text-orange-600 text-white text-3xl cursor-pointer top-4 right-7  absolute " onClick={()=>setIstoggle((istoggle)=> !istoggle)}>
              { istoggle ? <MdOutlineNightlight className="text-xl md:text-2xl lg:text-3xl "/> : <FiSun className="text-xl md:text-2xl lg:text-3xl" />}
            </div>
          </main>
        </div>
}