import React from "react";

function PMQuote() {
  return (
    <div className="bg-[url('./img/PMQ.webp')] xl:bg-[url('./img/PMQ-scenery.webp')] bg-cover">
      <div className=" bg-black-rgba xl:grid xl:grid-cols-2 ">
        <div className="p-8 xl:h-full">
          <img
            className="bg-bd-green rounded-full justify-center xl:mt-60 xl:ml-60"
            src="./img/hasina-unicef.webp"
            alt="PM hasina"
          />
        </div>
        <div className="h-full ">
          <h1 className="text-white mx-12 xl:mr-80 xl:mt-56 mb-8 text-2xl xl:text-4xl font-bold">
            We have set our vision 2021. To emerge as a middle income, knowledge
            driven digital economy. Then comes our vision 2041 to be a developed
            one. These are to realize the dream of our Father of the nation,
            Bangabandhu Sheikh Mujibur Rahman To build a sonar bangla, The Land
            of Golden Bengal.
          </h1>
          <p className="text-white mx-12 xl:mr-80 xl:ml-80 xl:text-2xl text-right">
            - H.E. Sheikh Hasina,
          </p>
          <p className="text-white mx-12 pl-12 pb-12 xl:mr-80 xl:ml-72 xl:text-2xl text-right">
            Prime Minister of The People's Republic of Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
}

export default PMQuote;
