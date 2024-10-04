import { useScrollContext } from "@/providers/context/ScrollContext";

export default function KycHome() {
  // const navigate = useNavigate();
  // const location = useLocation();

  const { handleKycDetailsClick } = useScrollContext();

  const kycCards = [
    {
      id: 1,
      title: "WOMEN",
      src: "/src/assets/images/kyc/Rectangle 587.png",
    },
    {
      id: 2,
      title: "MEN",
      src: "/src/assets/images/kyc/Rectangle 588.png",
    },
    {
      id: 3,
      title: "BOY",
      src: "/src/assets/images/kyc/Rectangle 588.png",
    },
    {
      id: 4,
      title: "Girls",
      src: "/src/assets/images/kyc/Rectangle 591.png",
    },
    {
      id: 5,
      title: "Infant",
      src: "/src/assets/images/kyc/Rectangle 594.png",
    },
  ];

  // const handleCardClick = () => {
  //   sessionStorage.setItem("scrollPosition", window.scrollY); // Save scroll position
  //   navigate("/kyc/details"); // Navigate to details page
  // };

  // useEffect(() => {
  //   const savedScrollPosition = sessionStorage.getItem("scrollPosition");
  //   if (savedScrollPosition) {
  //     window.scrollTo(0, parseInt(savedScrollPosition, 10)); // Restore scroll position
  //     sessionStorage.removeItem("scrollPosition"); // Clean up the session storage
  //   }
  // }, []);
  // const handleCardClick = () => {
  //   const currentScrollPosition = window.scrollY; // Get current scroll position
  //   navigate("/kyc/details", { state: { scrollPosition: currentScrollPosition } });  // Pass scroll position in navigate state
  // };

  // // Restore scroll position when the page loads
  // useEffect(() => {
  //   if (location.state && location.state.scrollPosition) {
  //     window.scrollTo(0, location.state.scrollPosition);  // Restore scroll position from history state
  //   }
  // }, [location]);

  return (
    <div className=" md:space-y-10  select-none pb-10">
      {/*-------- Section 1 ====== */}

      <div className="w-full relative">
        <img
          src="/src/assets/images/kyc/banner.webp"
          draggable={false}
          alt=""
          className="w-full"
        />

        {/* =====  Button Image =======  */}
        <img
          onClick={handleKycDetailsClick}
          src="/src/assets/images/kyc/button complete kyc.webp"
          draggable={false}
          className="absolute  top-1/2 md:w-[10%] w-[15%] -translate-y-1/2 left-1/2 md:-translate-x-[72%] -translate-x-[45%] active:scale-95 duration-300 transition-all cursor-pointer"
          alt=""
        />
        {/* =====  Button Image =======  */}

        {/* <Button variant={`b2bStyle`} size={`b2b`} className="absolute top-1/2 flex gap-3 -translate-y-1/2 left-1/2 2xl:-translate-x-[72%] xl:-translate-x-[50%] sm:-translate-x-[32%] lg:px-10 md:h-12 lg:py-5 py-2 px-3 h-2">
          Complete Kyc <Icon icon="ph:arrow-right-thin" fontSize={20}/>
        </Button> */}
      </div>

      {/*-------- Section 2 ====== */}

      <div className="section_container_dash relative">
        <img
          src="/src/assets/images/kyc/banner1.webp"
          draggable={false}
          alt=""
          className="w-full mb-4"
        />
        {/* =====  Button Image =======  */}
        <img
          onClick={handleKycDetailsClick}
          src="/src/assets/images/kyc/button complete kyc.webp"
          draggable={false}
          className="absolute sm:rounded-2xl rounded-lsm lg:bottom-10 sm:bottom-5 bottom-2 w-[15%] xl:translate-x-16 md:translate-x-10 sm:translate-x-6 translate-x-3
           active:scale-95 duration-300 transition-all cursor-pointer"
          alt=""
        />
        {/* =====  Button Image =======  */}
      </div>

      {/*-------- Section 3 ====== */}

      <div className="w-full relative">
        <img
          src="/src/assets/images/kyc/banner2.webp"
          draggable={false}
          alt=""
          className="w-full object-fill"
        />
        {/* =====  Button Image =======  */}
        <img
          onClick={handleKycDetailsClick}
          src="/src/assets/images/kyc/button complete kyc.webp"
          draggable={false}
          className="absolute  top-3/4 rounded-2xl md:w-[13%] w-[15%]  left-1/2 md:-translate-x-[55%] -translate-x-[45%] active:scale-95 duration-300 transition-all cursor-pointer"
          alt=""
        />
        {/* =====  Button Image =======  */}
        {/* =====  Button Image 2 =======  */}
        <img
          onClick={handleKycDetailsClick}
          src="/src/assets/images/kyc/button upload kyc.webp"
          draggable={false}
          className="absolute  top-1/2 rounded-2xl md:w-[13%] w-[15%]  right-10 md:-translate-x-[55%] -translate-y-1/2  active:scale-95 duration-300 transition-all cursor-pointer"
          alt=""
        />
        {/* =====  Button Image 2 =======  */}
      </div>

      {/*-------- Section 4 ====== */}

      <div className="section_container_dash flex justify-center gap-7 relative items-center flex-col border-b-2 border-[#5F08B1] py-10">
        <h4>To see wholesale prices & buy products </h4>
        <h3>COMPLETE SHOP'S KYC</h3>
        <h5>
          KYC is needed so that only shop owners like you can see wholesale
          prices and not your shop's customers
        </h5>
        <span>Upload ANY ONE of the following documents</span>
        <span>
          Udyam Aadhar | GST | Cancelled current account cheque | Shop &
          Establishment Licence
        </span>

        <button className="px-10 py-3  absolute left-1/2 bottom-0 translate-y-1/2 border border-[#5F08B1] active:scale-95 duration-300 transition-all cursor-pointer bg-white rounded-3xl act -translate-x-1/2">
          Upload Kyc
        </button>
      </div>

      {/*-------- Section 5 ====== */}

      <div className="p-10 section_container_dash bg-gray-100 w-3/4 rounded-3xl my-3 text-center">
        <h2>TOP CATEGORIES FROM TOP BRANDS</h2>
      </div>

      {/*-------- Section 6 ====== */}

      <div className="section_container_dash">
        <img
          src="/src/assets/images/banners/Banner5.png"
          draggable={false}
          alt=""
          className="w-full object-fill"
        />
      </div>

      {/*-------- Section 7 ====== */}

      <div className="grid mb xl:grid-cols-5 sm:grid-cols-3 gap-3 grid-cols-2 section_container_dash">
        {
          kycCards.map((card) => (
            <div
              key={card.id}
              className=" shadow-md rounded-3xl bg-bgSoft text-center hover:scale-105 scale-95 cursor-pointer duration-300 transform transition-all"
            >
              <img src={card.src} alt={card.title} className="w-full" />
              <h4 className="font-bold text-gray-600 py-5 text-textMain">
                {card.title}
              </h4>
            </div>
          ))
          //  .reverse() // reverse the order to display the cards in reverse order for aesthetic reasons
        }
      </div>

      {/* kyc home 1 */}
      {/* <KycHome_c1/> */}
    </div>
  );
}
