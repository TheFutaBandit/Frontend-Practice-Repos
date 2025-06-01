import Image from "next/image";
import {ArrowRight} from "lucide-react";

export default function Home() {
  return (
    <div className="main-container">
      <div className ="loader fixed top-0 left-0 w-screen h-svh overflow-hidden z-[2]">
        
        <div className="overlay absolute top-0 w-full h-full flex">
          <div className="block w-full h-full bg-[#303030]"></div>
          <div className="block w-full h-full bg-[#303030]"></div>
        </div>

        <div className="intro-logo absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex gap-[0.25rem]">
          <div className="relative left-[-0.5rem] pr-[0.10rem]" id="word-1">
            <h1 className = "text-[2.5rem]"><span>Futo</span></h1>
          </div>
          <div className="relative right-[-0.95rem]" id="word-2">
            <h1 className = "text-[2.5rem]">Town</h1>
          </div>
        </div>

        <div className="divider absolute top-0 left-1/2 translate-x-[-50%] origin-center origin-top w-[1px] h-full bg-[#fff]"></div>

        <div className="spinner-container absolute bottom-1/10 left-1/2 translate-x-[-50%]">
          <div className="spinner w-[50px] h-[50px] border-[1.4px] border-white border-solid border-t-black/12.5 rounded-[50%] animate-spin"></div>
        </div>

        <div className="counter absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2]">
          <div className="count absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex">
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">0</h1></div>
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">0</h1></div>
          </div>
          <div className="count absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex">
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">2</h1></div>
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">7</h1></div>
          </div>
          <div className="count absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex">
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">6</h1></div>
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">5</h1></div>
          </div>
          <div className="count absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex">
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">9</h1></div>
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">8</h1></div>
          </div>
          <div className="count absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex">
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">9</h1></div>
            <div className="digit flex-1 pt-[1rem]"><h1 className = "text-[15rem] font-normal">9</h1></div>
          </div>
        </div>
      </div>

      <div className="font-pp-neue-montreal relative h-svh w-screen overflow-hidden">
        <div className="hero-img absolute top-0 h-screen w-screen overflow-hidden z-[-1]">
          <img className = "h-full w-full object-cover" src="/hero-image.jpg" alt="" />
        </div>

        <div className="nav absolute translate-y-[-120%] top-0 w-screen py-[1.25em] px-[1.5em] flex items-center gap-[1.5em] will-change-transform">
        <div className="flex-1">
          <a className = "capitalize text-[14px] font-bold" href="#">FutoTown</a>
        </div>
        <div className="flex gap-[1.5em] justify-center">
          <a href="#">Rituals</a>
          <a href="#">Our Roots</a>
          <a href="#">Local Book</a>
          <a href="#">Stories</a>
        </div>
        <div className="btn flex justify-end text-[#fff]">
          <a className = "flex justify-center items-center text-base w-[60px] h-[40px] text-[#000] bg-[#fff] rounded-[40px]" href="">
            O
          </a>
        </div>
        </div>

        <div className="header w-full h-full pt-[25svh] flex direction-col items-center gap-[1.5em]">
          <div className="hero-copy">
            <div className="line">
              <h1><span>Rooted</span> in care,</h1>
            </div>
            <div className="line">
              <h1><span>Grown</span> with Kindness,</h1>
            </div>
            <div className="line">
              <p>Skincare that stays true to the nature and to you</p>
            </div>
          </div>
        </div>

        <div className="cta absolute left-1/2 bottom-[3em] translate-x-[-50%] scale-0 w-1/2 h-[60px] p-[0.5em] flex justify-end bg-[#fff] rounded-[4rem] will-change-transform">
          <div className="cta-label absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <p className = "text-[#000]">View all products</p>
          </div>
          <div className="cta-icon scale-0 relative h-full w-[50px] aspect-1 flex justify-center items-center bg-[#303030] rounded-[60px] will-change-transform">
            <ArrowRight color="white"/>
          </div>
        </div>
      </div>
    </div>
  );
}
