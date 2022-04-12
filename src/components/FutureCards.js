import React from "react";

function FutureCards() {
  return (
    <div className="bg-light-green">
      <div>
        <h1 className="text-bd-green text-center py-40 px-96 mx-40 text-bd font-bold">
          Explore the Future of Opportunity in Bangladesh:
        </h1>
      </div>
      <div className="flex mx-96 justify-center pb-40">
        <div className="bg-bd-green m-8 p-8 rounded w-60">
          <h1 className="text-right font-bold text-3xl text-gray-700">01</h1>
          <h1 className="text-white">Building the Future</h1>
          <p className="text-white">
            How Mega-Infrastructure Projects Will Power Bangladesh's Economic
            Growth
          </p>
          <button className="text-white mx-2 px-6 py-2 font-bold rounded-2xl border-2 my-4">
            LEARN MORE
          </button>
          <img
            // className="-mx-8 w-full"
            src="./img/menu-thumbnail-3.webp"
            alt="Infrastructure"
          />
        </div>
        <div className="bg-red-600 m-8 p-8 rounded w-60">
          <h1 className="text-right font-bold text-3xl text-gray-700">02</h1>
          <h1 className="text-white">Building the Future</h1>
          <p className="text-white">
            How Mega-Infrastructure Projects Will Power Bangladesh's Economic
            Growth
          </p>
          <button className="text-white px-6 py-2 font-bold rounded-2xl border-2 my-4">
            LEARN MORE
          </button>
          <img src="./img/menu-thumbnail-3.webp" alt="Infrastructure" />
        </div>
        <div className="bg-green-800 m-8 p-8 rounded w-60">
          <h1 className="text-right font-bold text-3xl text-gray-700">03</h1>
          <h1 className="text-white">Building the Future</h1>
          <p className="text-white">
            How Mega-Infrastructure Projects Will Power Bangladesh's Economic
            Growth
          </p>
          <button className="text-white px-6 py-2 font-bold rounded-2xl border-2 my-4">
            LEARN MORE
          </button>
          <img src="./img/menu-thumbnail-3.webp" alt="Infrastructure" />
        </div>
      </div>
    </div>
  );
}

export default FutureCards;
