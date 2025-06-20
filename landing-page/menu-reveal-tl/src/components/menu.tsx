"use client"

import React, { useEffect, useRef, useState } from "react";
import { MoveUpRight, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import about from "@/app/about/page";

gsap.registerPlugin(useGSAP);

const contacts = ["X", "INSTAGRAM", "LINKEDIN", "BEHANCE", "DRIBBLE"];

const pages = [
  { name: "HOME", src: "./" },
  { name: "WORK", src: "./" },
  { name: "ABOUT", src: "./about" },
  { name: "CONTACT", src: "./" },
  { name: "LAB", src: "./" }
];

const Menu = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null);

  const toggleMenuState = () => {
    console.log("changing state to", `${!menuState}`);
    setMenuState(!menuState);
  }

  useGSAP(
    () => {
      // Set initial state for page items
      gsap.set(".menu-page-item", {y: "100%"});
  
      tl.current = gsap.timeline({paused: true})
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
      })
      .to(".menu-page-item", {
        duration: 1,
        y: "0%",
        stagger: 0.1,
        ease: "power4.inOut"
      }, "-=0.5"); // Start before overlay finishes
    },
    { scope: containerRef}
  );

  useEffect(() => {
    if(menuState) {
      tl.current!.play();
    } else {
      tl.current!.reverse();
    }
  }, [menuState])

  return (
    <div className = "container" ref = {containerRef}>
      <div className="menu-bar w-screen fixed top-0 left-0 z-[1] justify-between align-center flex p-[2em]">
        <div className="menu-logo">
          <p className = "text-[#fff]">CODEGRID</p>
        </div>
        <div onClick = {toggleMenuState} className="menu-open cursor-pointer text-[#fff]">
          MENU
        </div>
      </div>

      <div className="menu-overlay fixed top-0 left-0 h-screen w-screen z-[2] p-[2em] flex bg-[#c5fb45]">

        <div className="menu-nav-overlay fixed top-0 left-0 flex justify-between p-[2em] align-center w-screen">
          <div className="menu-logo">
            <p>CODEGRID</p>
          </div>
          <div onClick = {toggleMenuState} className="menu-close cursor-pointer">
            CLOSE
          </div>
        </div>

        <div className = "menu-close-box flex grow-2 items-end text-[100px]">
          <p className = "">&#x2715;</p>
        </div>
  
        <div className="menu-main-container pt-[2em] flex flex-col justify-between grow-4">
          <div className = "menu-pages-container">
            {pages.map((item) => (
              <div key={item.name} className="menu-page-item-holder text-[80px] leading-none font-light">
                  <Link href = {item.src} className="menu-page-item transform">{item.name}</Link>
              </div>
            ))}
          </div>

          <div className="menu-details-container justify-between flex">
            <div className="details-socials">
              {contacts.map((item) => (
                <div key={item} className="social-row flex">
                  <h1>{item}</h1>
                  <MoveUpRight strokeWidth={"1px"} />
                </div>
              ))}
            </div>
            <div className="details-contacts">
              <div className="contact-row">ALBERQUERE ALBANA</div>
              <div className="contact-row">3973494</div>
            </div>
          </div>
          
        </div>
          
        <div className="menu-footer-container grow-4 flex justify-end items-end">
          <h1>VIEW SHOWREEL</h1>
        </div>

      </div>
    </div>
  );
};

export default Menu;
