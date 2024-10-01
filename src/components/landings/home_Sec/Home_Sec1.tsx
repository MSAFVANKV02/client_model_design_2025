import { Button } from '@/components/ui/button';
import { useWindowWidth } from '@react-hook/window-size';
import React from 'react'

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
          <Button variant="b2bStyle">Get Started</Button>
        </div>
      </div>
      {/*  */}
      <div className="lg:h-screen lg:w-[60%] w-full">
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
      </div>
    </div>
  )
}

export default HomeSec1