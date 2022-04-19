import React from "react";
import ReactPlayer from "react-player";

function Videos() {
  return (
    <div className="bg-light-green grid grid-cols-4">
      <div className="hidden xl:flex">
        <div className="mt-40 h-96 w-20 bg-bd-green rotate-45"></div>
        <div className="mt-64 h-80 w-10 bg-red-500 rotate-45"></div>
      </div>
      <div className="col-span-4 xl:col-span-2">
        <div className="flex justify-center mt-4 xl:mt-16">
          <a href="https://roadshow.sec.gov.bd/">
            <img
              className="m-2 h-24 xl:h-36"
              src="./img/final-besc-campaign-logo.webp"
              alt=""
            />
          </a>
          <a href="https://roadshow.sec.gov.bd/">
            <img
              className="m-2 h-20 xl:h-32"
              src="./img/bsec-logo-2.webp"
              alt=""
            />
          </a>
        </div>
        <div>
          <h1 className="text-center text-2xl mx-4 mt-4 py-2 xl:text-6xl font-bold bg-red-500 text-white">
            The Future of Opportunity
          </h1>
          <h1 className="text-center text-2xl mx-4 mb-4 py-2 xl:text-6xl font-bold bg-red-500 text-white">
            in Bangladesh
          </h1>
        </div>
        <div className="flex justify-center">
          <a href="https://www.facebook.com/bsecroadshow/">
            <svg
              className="text-gray-400 m-2 xl:m-8 fill-current h-8 xl:h-12 "
              viewBox="0 0 28 28"
            >
              <path d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10v-9h-3v-3h3v-1.611C16 9.339 17.486 8 20.021 8c1.214 0 1.856.09 2.16.131V11h-1.729C19.376 11 19 11.568 19 12.718V14h3.154l-.428 3H19v9h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
            </svg>
          </a>
          <a href="https://twitter.com/BSECRoadshow/">
            <svg
              className="text-gray-400 m-2 xl:m-8 fill-current h-8 xl:h-12"
              viewBox="0 0 50 50"
            >
              <path d="M50.063 10.438a20.57 20.57 0 0 1-5.91 1.62 10.309 10.309 0 0 0 4.523-5.687 20.648 20.648 0 0 1-6.531 2.492 10.258 10.258 0 0 0-7.504-3.246c-5.68 0-10.286 4.602-10.286 10.281 0 .805.094 1.59.27 2.344-8.547-.43-16.121-4.523-21.195-10.746a10.243 10.243 0 0 0-1.39 5.172c0 3.566 1.812 6.715 4.573 8.562a10.274 10.274 0 0 1-4.66-1.289v.13c0 4.984 3.547 9.136 8.246 10.085a10.29 10.29 0 0 1-4.644.172c1.312 4.082 5.11 7.063 9.605 7.145A20.613 20.613 0 0 1 2.39 41.87c-.831 0-1.648-.047-2.449-.144a29.053 29.053 0 0 0 15.762 4.62c18.914 0 29.258-15.667 29.258-29.253 0-.446-.012-.895-.027-1.332a20.904 20.904 0 0 0 5.129-5.325Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/bsecroadshow/">
            <svg
              className="text-gray-400 m-2 xl:m-8 fill-current h-8 xl:h-12"
              viewBox="0 0 60 60"
            >
              <path d="M48 8H16a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM24 47h-5V27h5v20zm.029-23.991c-.647.66-1.491.991-2.529.991-1.026 0-1.865-.341-2.519-1.023S18 21.458 18 20.468c0-1.02.327-1.852.981-2.498.654-.647 1.493-.97 2.519-.97 1.038 0 1.882.323 2.529.969.647.646.971 1.479.971 2.499 0 1.034-.324 1.881-.971 2.541zM47 47h-5V35.887C42 32.788 40.214 31 38 31c-1.067 0-2.274.648-2.965 1.469S34 34.331 34 35.594V47h-5V27h5v3.164h.078c1.472-2.435 3.613-3.644 6.426-3.652C44.5 26.5 47 29.5 47 34.754V47z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UC_68BbvHTe4RV2WF25BalYw/">
            <svg
              className="text-gray-400 m-2 xl:m-8 fill-current h-8 xl:h-12"
              viewBox="0 0 60 60"
            >
              <path d="M56.456 17.442c-.339-1.44-1.421-2.595-2.866-3.053C49.761 13.174 41.454 12 32 12s-17.761 1.174-21.591 2.389c-1.445.458-2.527 1.613-2.866 3.053C6.903 20.161 6 25.203 6 32s.903 11.839 1.544 14.558c.339 1.44 1.421 2.595 2.866 3.053C14.239 50.826 22.546 52 32 52s17.761-1.174 21.591-2.389c1.445-.458 2.527-1.613 2.866-3.053C57.097 43.839 58 38.797 58 32s-.903-11.839-1.544-14.558zM27 40V24l14.857 8L27 40z" />
            </svg>
          </a>
        </div>
        <div className="flex justify-center">
          <ReactPlayer
            className="adjustme"
            id="adjustme"
            width="320px"
            height="240px"
            url="./vid/file-240k-1.mp4"
            controls={true}
          />
        </div>
        <div className="bg-white rounded-3xl my-20 ">
          <h1 className="text-bd-green font-bold text-3xl pt-8 text-center">
            Explore One of the World's Fastest-Growing Economies
          </h1>
          <div className="flex">
            <div className="mx-2 xl:mx-4 my-8 w-60 xl:w-72">
              <img
                className="rounded p-4"
                src="./img/video2-thumbnail-2.webp"
                alt="Boat"
              />
              <p className="px-3 xl:px-4 text-medium">
                How Mega-Infrastructure Projects Will Power Bangladesh's
                Economic Growth
              </p>
            </div>
            <div className="mx-0 xl:mx-4 my-8 w-60 xl:w-72">
              <img
                className="rounded p-4"
                src="./img/mask-group2.webp"
                alt="Boat"
              />
              <p className="px-3 xl:px-4 text-medium">
                How Sustainable Finance and Green Bonds Will Power Bangladesh's
                Future
              </p>
            </div>
            <div className="mx-0 xl:mx-4 my-8 w-60 xl:w-72">
              <img
                className="rounded p-4"
                src="./img/mask-group.webp"
                alt="Boat"
              />
              <p className="px-3 xl:px-4 text-medium">
                It's Time for Investors to Notice Bangladesh's Innovative Tech
                Sector
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <div className="mt-40 h-1/2 w-20 bg-bd-green rotate-45"></div>
        <div className="mt-64 h-96 w-10 bg-red-500 rotate-45"></div>
      </div> */}
    </div>
  );
}

export default Videos;
