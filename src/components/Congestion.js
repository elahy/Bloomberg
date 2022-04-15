import React from "react";

function Congestion() {
  return (
    <div className="bg-[url('./img/scroll-infograph.webp')] xl:bg-[url('./img/scroll-infograph-bg-5.webp')] bg-no-repeat bg-cover">
      <div className="h-full bg-black-rgba grid grid-cols-4">
        <div></div>
        <div className="col-span-4 xl:col-span-2">
          <div className="text-white mt-20 text-4xl xl:grid xl:grid-cols-2">
            <h1 className="text-center xl:text-left">
              Cutting down Congestion{" "}
            </h1>
            <h1 className="hidden xl:inline text-right">
              Padma Multipurpose Bridge
            </h1>
          </div>
          <div className="bg-red-500 h-1 w-11/12 xl:w-full m-4"></div>
          <div className="xl:grid grid-cols-2 text-white mt-12">
            <div>
              <p className="m-8 xl:m-0 text-2xl">
                The Padma Multipurpose Bridge is just one of several large-scale
                improvements to transportation that Vision 2041 cites as vital
                for boosting trade, removing bottlenecks around major cities and
                improving connections to rural areas
              </p>
            </div>
            <div className="p-4 m-4">
              <p className="text-3xl">
                <p className="text-6xl">Vision 2041</p> Vital for boosting trade
                and rapid economic growth
              </p>
            </div>
          </div>
          <div className="m-20">
            <img
              src="./img/scroll-infograph-thumbnail-1.webp"
              alt="Padma Bridge"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Congestion;
