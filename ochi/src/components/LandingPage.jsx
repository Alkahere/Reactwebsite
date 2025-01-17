import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
    return (
      <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstrcture mt-52 px-20'>
          {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
            <div key={index} className='masker'>
              <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-['FoundersGrotesk-Semibold'] font-medium">{item}</h1>
            </div>
          ))}
        </div>
{/* Section with text below hr and arrow */}
<div className="border-t-[1px] border-zinc-800 mt-32 flex items-center py-5 px-20 justify-between">
        {/* Text content */}
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none mr-10">
            {item}
          </p>
        ))}
        
        {/* Arrow button */}
        <div className="start flex items-center gap-4">
        <div className="px-5 py-2 border-[2px] border-zinc-400 font-light text-md uppercase flex items-center justify-center">
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
