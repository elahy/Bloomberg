import React from "react";

function Tunnels() {
  return (
    <div>
      <div className="grid grid-cols-4 bg-light-green">
        <div className="flex">
          <div className="mt-40 h-1/2 w-20 bg-bd-green rotate-45"></div>
          <div className="mt-64 h-96 w-10 bg-red-500 rotate-45"></div>
        </div>
        <div className="col-span-2 mt-24">
          <div className="mb-10">
            <div className="text-6xl ml-3  text-bd-green">
              <h1 className="font-semibold">New Ports and Tunnels for</h1>
              <h1 className="font-bold">World-Class Connectivity</h1>
            </div>
            <div className="bg-red-500 h-1 w-full m-4"></div>
            <p className="text-xl ml-3 mb-16 font-light">
              Ports are high on the government’s strategy, with the main
              Chattogram Port presenting huge opportunities in terms of
              equipment, the daily volumes it handles and ship turnaround times.
            </p>

            <p className="text-xl ml-3 mb-16 font-light">
              “Port modernization, upgradation and establishment of deep-sea
              ports will have to be in Bangladesh’s long-term agenda,” according
              to Vision 2041.
            </p>
            <p className="text-xl ml-3 mb-16 font-light">
              This is now well underway, with the Matarbari Deep Sea Port set to
              become the nation’s first deep-sea port, strengthening
              Bangladesh’s logistics capacity and boosting GDP.
            </p>
          </div>
          <div className="flex pb-20">
            <div className="bg-bd-green h-36 w-72 rounded-3xl p-4 m-4">
              <p className="text-white">
                Chattogram, Bangladesh’s major port city, is becoming a South
                Asian business hub
              </p>
            </div>
            <div className="bg-green-700 h-36 w-72 rounded-3xl p-4 m-4">
              <p className="text-white">
                Matarbari Deep Sea Port is Bangladesh's 1st deep-sea port
              </p>
            </div>
            <div className="bg-green-900 h-36 w-72 rounded-3xl p-4 m-4">
              <p className="text-white">
                Matabari Port could boost 3% Bangladesh's GDP by up to 3%
              </p>
            </div>
          </div>
          <div className="flex pb-20 justify-center ">
            <div className="bg-red-500 h-72 w-72 rounded-3xl m-4">
              <p className="text-white m-4">
                Bangabandhu Sheikh Mujibur Rahman Tunnel is South Asia's{" "}
                <p className="text-7xl font-bold">1st</p>
                river tunnel
              </p>
            </div>
            <div className="h-80 w-80 rounded-3xl m-4 p-4">
              <p>
                In the same geographical area, the Bangabandhu Sheikh Mujibur
                Rahman Tunnel tunnel will run below the Karnaphuli River to
                connect Anwara and Karnaphuli to Chattogram city, cutting the
                driving distance from Chattogram to Cox's Bazar by 40
                kilometers.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Tunnels;
