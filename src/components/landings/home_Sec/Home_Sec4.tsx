import { CheckCheck } from "lucide-react";


function HomeSec4() {
  const cardContentList = [
    {
      id: 1,
      title: "Great wholesale prices",
      description: "Avail best prices on 5 Lakh+ top quality products",
    },
    {
      id: 2,
      title: "Smart returns",
      description: "Enjoy simple & hassle-free returns process",
    },
    {
      id: 3,
      title: "Wide range from top brands",
      description: "Shop from top brands across India",
    },
    {
      id: 4,
      title: "Quick doorstep delivery",
      description: "Get delivery of your orders at your doorstep",
    },
  ];
  return (
    <div className="section_container h-full pb-32">
      <div className="flex gap-14 md:flex-row flex-col">
        <div className="flex-shrink flex justify-center items-center">
          <img src="/src/assets/images/Hero Images/Seamless.png" alt="" className="2xl:w-80 2xl:h-80 w-[17rem] h-[17rem] "/>
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div className="">
            <h4>Seamless Stock</h4>
            <h4>
              Purchases for <span className="text-textMain">Your Store</span>
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-0 mt-auto sm:gap-3">
            {cardContentList.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 sm:items-start sm:mt-0 mt-4 sm:text-center"
              >
                   <CheckCheck className=" text-textSec" size={20}/>
                   <div className="flex flex-col items-start">
                       <h5>{item.title}</h5>
                <p className="text-gray-400 text-xs">{item.description}</p>
                   </div>
             
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSec4;
