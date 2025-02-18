import { NumberTicker } from "@/components/magicui/number-ticker";
import { Button } from "@/components/ui/button";
import useNavigateClicks from "@/hooks/useClicks";
import { ArrowRight } from "lucide-react";

function HomeSec5() {
  const { handleClick } = useNavigateClicks();

  return (
    <div className="w-full bg-black ">
      <div
        className="min-h-[300px]  w-full flex justify-center items-center flex-col space-y-6"
        style={{
          backgroundImage: `url('img/Background Images/bg-cloth-particles.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span className="text-white text-lg">Trendsetting fashion gems</span>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex flex-col text-center">
            <div className="flex items-center gap-2">
              <NumberTicker
                value={5}
                className="whitespace-pre-wrap font-medium tracking-tighter text-textSec text-4xl"
              />
              <h3 className="text-textSec"> Lakh+ </h3>
            </div>
            {/* ====== */}
            <p className="text-white text-sm">of products</p>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
              <NumberTicker
                value={150}
                className="whitespace-pre-wrap font-medium tracking-tighter text-textSec text-4xl"
              />
              <h3 className="text-textSec">+</h3>
            </div>
            <p className="text-white text-sm">Varieties of Categories</p>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
              <NumberTicker
                value={1000}
                className="whitespace-pre-wrap font-medium tracking-tighter text-textSec text-4xl"
              />
              <h3 className="text-textSec">+</h3>
            </div>
            <p className="text-white text-sm">of Customers</p>
          </div>
        </div>
        <Button variant="b2bStyle" onClick={() => handleClick("/login")}>
          Join Now <ArrowRight />
        </Button>
      </div>
      {/* ======= */}
      <div className="h-fit py-3 bg-combined-gradients ">
        <div className="section_container  flex md:flex-row flex-col space-y-3 justify-between items-center ">
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold capitalize">Download</h4>
            <h4 className="font-semibold capitalize">ODIO App Now!</h4>
            <div className="flex gap-3">
              <img
                src="img/icons/Appstore.png"
                alt="appStore | Odio"
                className="w-28"
              />
              <img
                src="img/icons/PlayStore.png"
                alt="playStore | Odio"
                className="w-28"
              />
            </div>
          </div>
          <div className="md:block hidden">
            <Button variant="b2bStyle" onClick={() => handleClick("/login")}>
              Join Now <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSec5;
