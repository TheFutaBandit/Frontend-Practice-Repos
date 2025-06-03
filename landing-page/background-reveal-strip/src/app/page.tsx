import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="preloader fixed w-screen h-svh z-[2] bg-[#0a0a0a] text-white">
        <div className="intro-text absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
          <h1>Nullspace studio</h1>
        </div>
        <div className="outro-text absolute top-1/2 left-1/2 translate-x-[calc(-50% + 6rem)] translate-y-[-50%] text-center">
          <h1>10</h1>
        </div>
      </div>

      <div className="split-overlay fixed w-screen h-svh z-[1] bg-[#0a0a0a] text-white">
        <div className="intro-text absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
          <h1>Nullspace studio</h1>
        </div>
        <div className="outro-text absolute top-1/2 left-1/2 translate-x-[calc(-50% + 10rem)] translate-y-[-50%] text-center">
          <h1>10</h1>
        </div>
      </div>

      <div className="tags-overlay fixed w-screen h-svh z-[2] text-[#5a5a5a] absolute w-max overflow-hidden">
        <div className="tag"><p className = "absolute top-9/10 left-2/3">Fusion & Fission</p></div>
        <div className="tag"><p className = "absolute bottom-8/10 right-4/5">Abyss Void</p></div>
        <div className="tag"><p className = "absolute bottom-7/10 left-7/9">Dreiton Alpha</p></div>
      </div>

      <div className="container relative w-full h-full min-h-svh flex flex-col justify-between z-[2]">
        <nav className = "relative flex justify-between items-center p-[2em] z-[2]">
          <div className="logo"><p className = "text-white text-3xl font-bold">N10</p></div>
          <p className = "text-white">Menu</p>
        </nav>

        <div className="hero-img absolute h-full w-full">
          <img src="/hero.jpg" alt="Hero Image" className="hero-image h-full w-full object-cover" />
        </div>

        <div className="card absolute w-3/10 h-7/10 bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[3] flex flex-col justify-center items-center">
          <h1 className = "text-5xl text-center w-full">Nullspace</h1>
        </div>

        <footer className = "relative z-[3] flex justify-between items-center p-[2em] z-[2]">
          <p className = "text-white">Made by bandit</p> 
          <p className = "text-white">Scroll Down</p>
        </footer>
      </div>
    </>
  );
}
