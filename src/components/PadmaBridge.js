import React from "react";

function PadmaBridge() {
  return (
    <div className="bg-[url('./img/padmabrid.webp')] xl:bg-[url('./img/padmabridge-1.webp')]">
      <div className="h-screen grid grid-cols-2">
        <div className="mr-24 ml-40 grid grid-cols-2">
          <div></div>
          <div className="ml-8 xl:ml-0 mt-72 xl:pb-60">
            <h1 className="text-white text-4xl xl:text-7xl text-right font-bold">
              The Padma Bridge
            </h1>
          </div>
        </div>
        <div>
          <div className="hidden ml-32 mt-96 xl:grid xl:grid-cols-2 h-full">
            <div>
              <p className="text-white text-2xl font-semibold">
                Spanning more than
              </p>
              <h1 className="text-white text-7xl font-bold">3.7 miles</h1>
              <p className="text-white text-2xl font-semibold">
                to accelerate trade flows between Bangladesh and bustling South
                Asia.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PadmaBridge;
