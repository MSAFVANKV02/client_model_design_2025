export default function KycHome() {
  return (
    <div className=" flex flex-col justify-center items-center select-none">
      <div className="w-full">
        <img
          src="/src/assets/images/banners/Banner1.png"
          draggable={false}
          alt=""
          className="w-full"
        />
      </div>

      <div className="w-full">
        <img
          src="/src/assets/images/banners/Banner2.png"
          draggable={false}
          alt=""
          className="w-[80%] mb-4"
        />
      </div>

      <div className="w-full">
        <img
          src="/src/assets/images/banners/Banner3.png"
          draggable={false}
          alt=""
          className="w-full object-fill"
        />
      </div>

      <div className="w-full">
        <img
          src="/src/assets/images/banners/Banner4.png"
          draggable={false}
          alt=""
          className="w-full object-fill"
        />
      </div>

      <div className="p-10 bg-gray-100 w-3/4 rounded-3xl my-3 text-center">
      <h2>TOP CATEGORIES FROM TOP BRANDS</h2></div>

      <div className="">
        <img
          src="/src/assets/images/banners/Banner5.png"
          draggable={false}
          alt=""
          className="w-full object-fill"
        />
      </div>

      {/* kyc home 1 */}
      {/* <KycHome_c1/> */}
    </div>
  );
}
