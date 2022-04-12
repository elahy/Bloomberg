import React from "react";

function Ecommerce() {
  return (
    <div>
      <div className="grid grid-cols-4 mb-16">
        <div className="flex">
          <div className="mt-40 h-1/2 w-20 bg-bd-green rotate-45"></div>
          <div className="mt-64 h-96 w-10 bg-red-500 rotate-45"></div>
        </div>
        <div className="col-span-2 mt-24">
          <div className="mb-10">
            <div className="text-6xl ml-3 font-bold text-bd-green">
              <h1>Powering Bangladesh's</h1> <h1>Economic Growth</h1>
            </div>
            <div className="bg-red-500 h-1 w-full m-4"></div>
            <p className="text-xl ml-3 mb-16 font-light">
              Bangladesh’s government has a long-held strategy of moving beyond
              manufacturing to a high-value, knowledge-intensive economy. This
              focus – coupled with strong economic growth and a supportive
              policy environment – means the country is rapidly becoming a
              digital pioneer, with government-backed initiatives including
              Startup Bangladesh, a venture capital fund.
            </p>
          </div>
          <div className="grid grid-cols-5">
            <div className="col-span-3">
              <p className="text-xl ml-3 mb-16 font-light">
                To fuel the country's rapid economic growth, Bangladesh is
                transforming its infrastructure through mega projects spanning
                new ports, rail links and bridges. The Asian Development Bank
                notes that increasing capital flows is critical to improving the
                competitiveness of domestic industries and overall economic
                efficiency – and Bangladesh is doing just that.
              </p>
              <p className="text-xl ml-3 mb-16 font-light">
                To fuel the country's rapid economic growth, Bangladesh is
                transforming its infrastructure through mega projects spanning
                new ports, rail links and bridges. The Asian Development Bank
                notes that increasing capital flows is critical to improving the
                competitiveness of domestic industries and overall economic
                efficiency – and Bangladesh is doing just that.
              </p>
            </div>
            <div className="col-span-2 bg-[url('./img/mask-group-11-million.webp')] bg-no-repeat bg-cover rounded-xl mx-8 w-full">
              <div className="text-white p-9">
                <h1 className="text-center text-4xl font-seminold">
                  E-commerce logistics firm Paperfly attracted in
                </h1>
                <h1 className="text-center text-5xl font-bold">$11 million</h1>
                <p className="text-xl my-4">
                  investments from India’s EcomExpress
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Ecommerce;
