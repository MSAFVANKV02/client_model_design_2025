import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import { Link } from "react-router-dom";

function HomeSec1() {
  const onlyWidth = useWindowWidth();
  const mobileSize = onlyWidth < 768;
  return (
    <div
      className="w-full relative 2xl:pl-24 xl:pl-20 md:pl-14 sm:pl-10 sm:px-0 px-5 mx-auto flex lg:flex-row flex-col gap-4"
      // style={{
      //   background: `url("/src/assets/images/Background Images/Main_image.png")`,
      //   backgroundSize: "fill",
      //   backgroundPosition: "right",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="flex lg:w-[40%]  w-full space-y-6 lg:-translate-y-5  lg:mt-0 sm:mt-24 mt-20 flex-col lg:justify-end justify-center lg:items-start items-center lg:h-screen h-1/2 z-20 text-container font-bold  uppercase">
        <div className="lg:text-start text-center ">
          <h2>Offers a platform</h2>
          <h2>for trade,</h2>
          <h2>focusing on </h2>
          <h2>Indian businesses.</h2>
        </div>
        <div className="sm:w-1/2 w-full ">
          <p className="text-xs font-normal lg:text-start text-center capitalize">
            Our platform streamlines wholesale trade by connecting Indian
            businesses. We simplify transactions and enhance trade opportunities
            within the Indian market.
          </p>
        </div>
        <div className="">
          <Button variant="b2bStyle">
            <Link to={`/register`}>Get Started</Link>
          </Button>
        </div>
      </div>
      {/*  */}
      <div className="lg:h-screen relative lg:w-[60%] w-full">
        <img
          src={`${
            mobileSize
              ? "/src/assets/images/Background Images/Mobile_Main_image.png"
              : "/src/assets/images/Background Images/Main_image.png"
          }`}
          alt="home|B2b"
          draggable={false}
          className="lg:float-end lg:h-screen w-full "
        />
        <div className="lg:absolute  lg:-translate-y-3/4 lg:top-[60%] 2xl:right-40 right-10 flex flex-col items-center lg:gap-10 gap-5">
          <img
            src="/src/assets/images/Background Images/Curvy_arrow_image.png"
            alt=""
            className="lg:w-auto w-28"
          />
          <Link to={`/register`} className="bg-textMain text-center rounded-md active:scale-75 duration-500 transition-all">
            <Button variant="b2bStyle" className="lg:py-6 lg:px-5">
              {" "}
              Register Now
            </Button>
          </Link>
          <img
            src="/src/assets/images/Background Images/Curvy_arrow_image.png"
            alt=""
            className="lg:w-auto w-28 rotate-180 "
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSec1;
