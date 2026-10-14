import React from "react";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <header className="px-10 z-20 sticky top-0 bg-white">
      <div className="flex justify-between items-center py-4 text-base ">
        <a href="/">
          <div className="flex justify-center items-center gap-2">
            <img
              src={Logo}
              alt="Sharpener"
              loading="lazy"
              className="w-12 h-12"
              style={{ color: "transparent" }}
            ></img>
            <h3 className="bg-[linear-gradient(90deg,#b00,#000_105.83%)] text-[16px] font-bold text-transparent bg-clip-text font-sans">
              SHARPNER
            </h3>
          </div>
        </a>
        <div>
          <div className="flex justify-center items-center gap-10 font-sans">
            <div>
              <a href="/">
                <h1 className="text-black font-normal">Home</h1>
              </a>
            </div>
            <div>
              <a href="">
                <h1 className="text-black font-normal">Courses</h1>
              </a>
            </div>
            <div>
              <a href="">
                <h1 className="text-black font-normal">Hire With Us</h1>
              </a>
            </div>
            <div>
              <a href="">
                <h1 className="text-black font-normal">Blog</h1>
              </a>
            </div>
            <div>
              <a href="">
                <h1 className="text-black font-normal">Wall Of Love</h1>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <a
            href=""
            className="text-[#6750A4] bg-[#EADDFF] py-2 px-6 rounded-md"
          >
            Go to Dashboard
          </a>

          <div className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-[#21005D] text-white rounded-lg">
            <svg
              stroke="currentColor"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
            </svg>
            <p className=" ">Book a Call</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
