// import React from "react";
import "@/assets/css/home.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function HomeSec3() {
  const cardContentList = [
    {
      id: 1,
      title: "Create an account",
      image: "img/Hero Images/CreateAccount.png",
      description:
        "Register using your mobile number. Enter your Name, Shop name and Pincode.",
    },
    {
      id: 2,
      title: "Complete shop KYC",
      image: "img/Hero Images/CompleteShopKYC.png",
      description:
        "Upload any one of shop's KYC documents like GSTIN, Shop & Establishment Licence",
    },
    {
      id: 3,
      title: "Start Ordering",
      image: "img/Hero Images/StratOrdering.png",
      description:
        "Browse and order products for your shop from top sellers & brands",
    },
  ];
  return (
    <div className="section_container h-full pb-32">
      <div className="flex justify-center items-center flex-col space-y-3">
        <span className="text-black font-semibold">Kickstart trading in</span>
        <h6 className="capitalize font-bold text-textMain">3 quick steps</h6>
      </div>
      {/* ===== card starts ===== */}
      <ul className="grid place-items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-14">
        {cardContentList.map((item, index) => (
          <li key={index} className="card-flow">
            <div className="">
              <div className="flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-center 2xl:w-60  2xl:h-60  md:w-44 md:h-44 w-32 h-32"
                />
              </div>
              <div className="flex items-center space-y-2 flex-col justify-center text-center">
                <h6 className="font-semibold">{item.title}</h6>
                <p className="text-gray-400 text-xs">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <Button variant="b2bStyle" className="f">
          <Link to={""} className="h-full w-full flex items-center justify-center gap-2 text-sm font-normal">
            Register Now  <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HomeSec3;
