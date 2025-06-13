"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RefObject, useRef, useState } from "react";
import {SplitText} from "gsap/SplitText"

const image_list = [
  {
    src: '/yellow_girl.jpg',
  },
  {
    src: '/yellow_girl.jpg',
  },
  {
    src: '/yellow_girl.jpg',
  },
]

gsap.registerPlugin(SplitText, useGSAP)

export default function Home() {
  const img_ele = useRef<HTMLDivElement>(null);
  const default_word = useRef<HTMLHeadingElement>(null);
  const first_word = useRef<HTMLHeadingElement>(null);
  const second_word = useRef<HTMLHeadingElement>(null);
  const [currentRef, setCurrentRef] = useState<RefObject<HTMLHeadingElement | null>>();
  const [currentRefS, setCurrentRefS] = useState<string>("first");
  const [splitsState, setSplitsState] = useState<any>();

  //main thing
  const profileImagesContainer = useRef<HTMLDivElement>(null);
  const profileNamesContainer = useRef<HTMLDivElement>(null);
  const teamContainerScope = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {
    const q = gsap.utils.selector(profileNamesContainer);
    const headings = q("h1");

    const images = gsap.utils.selector(profileImagesContainer);

    const splits = headings.map((heading) => 
      SplitText.create(heading, { type: "chars", charsClass: "letter" })
    );
    setSplitsState(splits);
    const defaultLetters = splits[0].chars;
    gsap.set(defaultLetters, { y: "100%" });

    const imageList = images("div");

    if(window.innerWidth >= 100) {
      
    }

    // gsap.set(default_word.current, {y: 0})
    // setCurrentRef(default_word);
  }, {scope: teamContainerScope })
  

  const handleMouseImageHover = contextSafe((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    gsap.to(target, {
      height: 140,
      width: 140,
      duration: 0.5,
      ease: "power4.out"
    })
  })

  const handleMouseImageLeave = contextSafe((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    gsap.to(target, {
      height: 70,
      width: 70,
      duration: 0.5,
      ease: "power4.out"
    })
  })

  const handleMouseProfileContainerHover = contextSafe(() => { 
    const q = gsap.utils.selector(profileNamesContainer);
    const headings = q("h1");
    const defaultLetters = splitsState[0].chars;
    gsap.to(defaultLetters, {
      y: "0%",
      duration: 0.75,
      ease: "power4.out",
      stagger: {
        each: 0.025,
        from: "center"
      }
    })
  })

  const handleMouseProfileContainerLeave = contextSafe(() => {
    const q = gsap.utils.selector(profileNamesContainer);
    const headings = q("h1");
    const defaultLetters = splitsState[0].chars;
    
    gsap.to(defaultLetters, {
      y: "100%",
      duration: 0.75,
      ease: "power4.out",
      stagger: {
        each: 0.025,
        from: "center"
      }
    })
  })

  const handleTextEnter = contextSafe((index: number) => {
    const q = gsap.utils.selector(profileNamesContainer);
    const headings = q("h1");
    const defaultLetters = splitsState[index].chars;
    console.log(defaultLetters);
    gsap.to(defaultLetters, {
      y: "-100%",
      duration: 0.75,
      ease: "power4.out",
      stagger: {
        each: 0.025,
        from: "center"
      }
    })
  })

  const handleTextLeave = contextSafe((index: number) => {
    const q = gsap.utils.selector(profileNamesContainer);
    const headings = q("h1");
    const defaultLetters = splitsState[index].chars;
    gsap.to(defaultLetters, {
      y: "0%",
      duration: 0.75,
      ease: "power4.out",
      stagger: {
        each: 0.025,
        from: "center"
      }
    })
  })

  


  
  return (
    <main ref = {teamContainerScope} className="team relative h-svh w-screen bg-[#0f0f0f] text-[#e3e3db] flex flex-col justify-center items-center overflow-hidden gap-[2.5em] font-[family-name:var(--font-barlow-semi-condensed)]">
      <div 
        ref = {profileImagesContainer} 
        onMouseEnter = {handleMouseProfileContainerHover}
        onMouseLeave = {handleMouseProfileContainerLeave}
        className="profile-images w-max flex justify-center items-center"
      >
          <div 
          onMouseEnter={(e) => {
            handleMouseImageHover(e)
            handleTextEnter(1)
          }} 
          onMouseLeave={(e) => {
            handleMouseImageLeave(e)
            handleTextLeave(1)
          }} className="img w-[70px] h-[70px] p-[5px] relative will-change-[width,height] cursor-pointer ">
            <img src="/yellow_girl.jpg" alt="yellow_girl" className="h-full w-full object-cover rounded"/>
          </div>
        <div onMouseEnter={(e) => {
          handleMouseImageHover(e)
          handleTextEnter(2)
        }} 
        onMouseLeave={(e) => {
          handleMouseImageLeave(e)
          handleTextLeave(2)
        }} className="img w-[70px] h-[70px] p-[5px] relative will-change-[width,height] cursor-pointer">
          <img src="/yellow_girl.jpg" alt="yellow_girl" className="h-full w-full object-cover rounded"/>
        </div>
        <div onMouseEnter={(e) => {
          handleMouseImageHover(e)
          handleTextEnter(3)
        }} 
        onMouseLeave={(e) => {
          handleMouseImageLeave(e)
          handleTextLeave(3)
        }} className="img w-[70px] h-[70px] p-[5px] relative will-change-[width,height] cursor-pointer">
          <img src="/yellow_girl.jpg" alt="yellow_girl" className="h-full w-full object-cover rounded"/>
        </div>
      </div>
      <div ref = {profileNamesContainer} className="profile-names h-[10rem] w-full">
        <div className="name default">
          <h1 className = "absolute text-center w-full uppercase text-[10rem] font-black leading-none tracking-[-0.5rem] text-[#e3e3edb] translate-y-[-100%]">Directors</h1>
        </div>
        <div className="name">
          <h1 className = "absolute text-center w-full uppercase text-[10rem] font-black leading-none tracking-[-0.5rem] text-[#f93535] translate-y-[100%]">Shayla</h1>
        </div>
        <div className="name">
          <h1 className = "absolute text-center w-full uppercase text-[10rem] font-black leading-none tracking-[-0.5rem] text-[#f93535] translate-y-[100%]">Margot</h1>
        </div>
        <div className="name">
          <h1 className = "absolute text-center w-full uppercase text-[10rem] font-black leading-none tracking-[-0.5rem] text-[#f93535] translate-y-[100%]">Ryan</h1>
        </div>
      </div>
    </main> 
  );
}
