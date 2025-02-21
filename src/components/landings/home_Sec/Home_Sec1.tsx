import AyButton from "@/components/myUi/AyButton";
import useNavigateClicks from "@/hooks/useClicks";
import { useWindowWidth } from "@react-hook/window-size";
import { motion } from "framer-motion";

function HomeSec1() {
  const onlyWidth = useWindowWidth();
  const mobileSize = onlyWidth < 768;
  const { handleClick } = useNavigateClicks();

  return (
    <motion.section
      className="relative "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="w-full section_container  flex lg:flex-row flex-col gap-4"
        // style={{
        //   background: `url("img/Background Images/Main_image.png")`,
        //   backgroundSize: "fill",
        //   backgroundPosition: "right",
        //   backgroundRepeat: "no-repeat",
        // }}2xl:pl-24 xl:pl-20 md:pl-14 sm:pl-10 sm:px-0 px-5 mx-auto
      >
        <img
          src={`${
            mobileSize
              ? "img/Background Images/Mobile_Main_image.png"
              : "img/Background Images/Main_image.png"
          }`}
          alt="home|B2b"
          draggable={false}
          className="lg:absolute lg:h-screen  right-0 sm:pt-0 pt-[80px]"
        />

        <div
          className="flex lg:w-[40%]  w-full space-y-6 lg:-translate-y-5  
      lg:mt-0 2xl:pb-14 sm:mt-24 mt-20 flex-col lg:justify-end justify-center lg:items-start items-center
       lg:h-screen h-1/2 z-20 text-container font-bold  uppercase"
        >
          <div className="lg:text-start text-center font-semibold ">
            {[
              " Offers a platform",
              "for trade,",
              "focusing on",
              "Indian businesses.",
            ].map((item, index) => (
              <motion.h2
                className={` ${item === "Indian businesses." ? "text-white" : "text-textMain"}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + 0.2 * index, duration: 0.8 }}
              >
                {item}
              </motion.h2>
            ))}
          </div>
          <div className="sm:w-1/2 w-full ">
            <p className="text-xs font-normal lg:text-start text-center capitalize">
              Our platform streamlines wholesale trade by connecting Indian
              businesses. We simplify transactions and enhance trade
              opportunities within the Indian market.
            </p>
          </div>
          <div className="">
            <AyButton
              iconSize={35}
              title="Get Started"
              icon="stash:arrow-right-light"
              sx={{
                height: "53px",
                width: "160px",
                borderRadius: "10px",
                bgcolor: "#8817EC",
                flexDirection: "row-reverse",
                justifyContent: "center",
                gap: "10px",
              }}
              onClick={() => {
                handleClick("/login");
              }}
            />
          </div>
        </div>
        {/*  */}
        <div className="lg:h-screen relative lg:w-[60%] w-full">
          {/* <img
          src={`${
            mobileSize
              ? "img/Background Images/Mobile_Main_image.png"
              : "img/Background Images/Main_image.png"
          }`}
          alt="home|B2b"
          draggable={false}
          className="lg:float-end lg:h-screen w-full "
        /> */}
          <div className="lg:absolute  lg:-translate-y-1/2 lg:top-1/2  right-0 flex flex-col items-center lg:gap-10 gap-5">
            <img
              src="img/Background Images/Curvy_arrow_image.png"
              alt=""
              className="lg:w-auto w-28"
            />
            <motion.div
              className=""
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            >
              <AyButton
                iconSize={35}
                title="Join Now"
                icon="stash:arrow-right-light"
                sx={{
                  height: "53px",
                  width: "160px",
                  borderRadius: "10px",
                  bgcolor: "#8817EC",
                  flexDirection: "row-reverse",
                  justifyContent: "center",
                  gap: "10px",
                }}
                onClick={() => {
                  handleClick("/login");
                }}
              />
            </motion.div>

            <img
              src="img/Background Images/Curvy_arrow_image.png"
              alt=""
              className="lg:w-auto w-28 rotate-180 "
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default HomeSec1;
