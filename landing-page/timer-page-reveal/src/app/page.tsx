import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container">
      <div className ="loader">
        
        <div className="overlay">
          <div className="block"></div>
          <div className="block"></div>
        </div>

        <div className="intro-logo">
          <div className="word" id="word-1">
            <h1><span>Futo</span></h1>
          </div>
          <div className="word" id="word-2">
            <h1><span>Town</span></h1>
          </div>
        </div>

        <div className="divider"></div>

        <div className="spinner-container">
          <div className="spinner"></div>
        </div>

        <div className="counter">
          <div className="count">
            <div className="digit">0</div>
            <div className="digit">0</div>
          </div>
          <div className="count">
            <div className="digit">2</div>
            <div className="digit">7</div>
          </div>
          <div className="count">
            <div className="digit">6</div>
            <div className="digit">5</div>
          </div>
          <div className="count">
            <div className="digit">9</div>
            <div className="digit">8</div>
          </div>
          <div className="count">
            <div className="digit">9</div>
            <div className="digit">9</div>
          </div>
        </div>
      </div>

      <div className="font-[pp-neue-montreal] relative h-svh w-screen overflow-hidden">
        <div className="hero-img absolute top-0 h-screen w-screen overflow-hidden z-[-1]">
          <img className = "h-full w-full object-cover" src="/hero-image.jpg" alt="" />
        </div>

        <div className="nav absolute top-0 w-screen py-[1.25em] px-[1.5em] flex items-center gap-[1.5em] will-change-transform">
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

        <div className="header">
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

        <div className="cta">
          <div className="cta-label">
            <p>View all products</p>
          </div>
          <div className="cta-icon"></div>
        </div>
      </div>
    </div>
  );
}
