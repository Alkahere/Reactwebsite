import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
    return (
      <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstrcture mt-52 px-20'>
          {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
            <div key={index} className='masker'>
                <div className="w-fit flex items-end overflow-hidden">
                    {index=== 1 && (<div className="mr-5 w-[9vw] rounded-md h-[6vw] -top-[2.2vw] relative bg-red-500"></div>)}
              <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Test_Founders_Grotesk_Condensed'] font-medium">{item}</h1>
            </div>
            </div>
          ))}
        </div>
<div className="border-t-[2px] border-zinc-800 mt-20 flex items-center py-2 px-20 justify-between">
        {/* Text content */}
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md font-light mr-10">
            {item}
          </p>
        ))}
        
        {/* Arrow button */}
        <div className="start flex items-center gap-4">
        <div className="px-5 py-2 border-[2px] border-zinc-400 font-light text-md uppercase flex items-center justify-center">start project
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
