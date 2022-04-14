import React from "react";

function Header() {
  return (
    <div className="bg-[url('./img/tophead-img.webp')] bg-full">
      <div className="grid xl:grid-cols-2 h-full w-full animate">
        <div className="h-96"></div>
        <div className="h-full">
          <div className="bg-white h-20 w-full">
            <div className="bg-bd-green h-full animate-wiggle"></div>
          </div>
          <div className="">
            <p className="text-10xl pl-36 pr-44 pt-24  font-bold bg-white mix-blend-screen">
              THE RISE OF BENGAL TIGER
            </p>
          </div>
          <div className="bg-white px-40 py-16">
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
