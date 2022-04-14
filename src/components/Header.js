import React from "react";

function Header() {
  return (
    <div className="xl:bg-[url('./img/tophead-img.webp')]">
      <div className="grid xl:grid-cols-2 h-full w-full animate">
        <div className="h-80 bg-[url('./img/tophead.webp')] bg-cover xl:bg-none"></div>
        <div className="xl:h-full">
          <div className="bg-white h-10 xl:h-20 w-full">
            <div className="bg-bd-green h-full" id="green"></div>
          </div>
          <div className="">
            <p className="text-5xl xl:text-10xl pl-10 xl:pl-36 pr-10 xl:pr-44 pt-8 xl:pt-24 font-extrabold  xl:font-bold bg-white mix-blend-screen">
              THE RISE OF BENGAL TIGER
            </p>
          </div>
          <div className="bg-white px-28 xl:px-40 py-8 xl:py-16">
            <button className="bg-red-500 text-white font-semibold py-4 px-8 rounded">
              SCROLL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
