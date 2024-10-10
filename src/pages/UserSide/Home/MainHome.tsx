import Banner from "@/components/landings/maniHome/Banners/Banner";
import BannerWrapper from "@/components/landings/maniHome/Banners/BannerWrapper";
import ColorGrid from "@/components/landings/maniHome/Cards/ColorCard";
import ProdCard from "@/components/landings/maniHome/Cards/ProdCard";
import CategoryCard from "@/components/landings/maniHome/Shop_By_Cat/CategoryCard";
import { ProductsDetail } from "@/utils/CardDetails";
import { useWindowSize } from "@react-hook/window-size";


export default function MainHome() {
  const [width] = useWindowSize()
  const BannerDetails = [
    {
      id: 1,
      name: "Home Banner 1",
      link: "#",
      image: "/src/assets/images/banners/image 92.png",
    },
    {
      id: 2,
      name: "Home Banner 2",
      link: "#",
      image: "/src/assets/images/banners/Banner2.png",
    },
    {
      id: 3,
      name: "Home Banner 3",
      link: "#",
      image: "/src/assets/images/banners/Banner3.png",
    },
    {
      id: 4,
      name: "Home Banner 3",
      link: "#",
      image: "/src/assets/images/banners/Banner6.png",
    },
    {
      id: 5,
      name: "Home Banner 3",
      link: "#",
      image: "/src/assets/images/banners/Banner5.png",
    },
    // Add more banners as needed...
  ];
  
  const visibleProducts = width > 1280 ? ProductsDetail.slice(0, 5) : ProductsDetail.slice(0, 4);


  return (
    <div className="min-h-screen space-y-8 py-3">
      {/* ======= Section 01 Banner and Advertise ======= staring */}

      <div
        className="flex m-auto justify-between section_container_dash sm:gap-5 gap-2 sm:py-5 py-3 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/src/assets/images/banners/bgimage1.png)",
        }}
      >
        <BannerWrapper isActive={true} className="w-[80%]" nextBtnClass="">
          {BannerDetails.map((banner) => (
            <Banner
              className="w-full md:h-[360px] sm:h-[200px] h-[110px] rounded-md overflow-hidden" // Consistent height
              _id={banner.id}
              name={banner.name}
              link={banner.link}
              image={banner.image}
              key={banner.id}
            />
          ))}
        </BannerWrapper>

        {/* Ensure same height for AdvertiseBanner */}
        <div className="flex-grow rounded-md md:h-[360px] sm:h-[200px] w-[100px] h-[110px]">
          {/* <AdvertiseBanner /> */}
          <img
            src="/src/assets/images/advertise/adv1.png"
            alt=""
            className="h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* ======= Section 01 Banner and Advertise ======= end */}

      {/* ==----------------------- Section 02 : Shop By Categories -----------------------== starting */}
      <div className="">
        <CategoryCard />
      </div>
      {/* =======-------------- Section 02 : Shop By Categories =======--------------== ending */}

      {/*  */}
      {/* ======= Section 03 : Banner2 ========= starting */}
      <BannerWrapper
        isActive={true}
        className="w-full section_container_dash"
        nextBtnClass=""
        btnClass="sm:left-28 sm:right-28"
      >
        {BannerDetails.map((banner) => (
          <Banner
            className="w-full md:h-auto md:min-h-[370px] md:max-h-[450px] sm:h-[200px] h-[110px] rounded-md overflow-hidden" // Consistent height
            _id={banner.id}
            name={banner.name}
            link={banner.link}
            image={banner.image}
            key={banner.id}
          />
        ))}
      </BannerWrapper>
      {/* --------------------- Section 03 : Banner2 ---------------------== ending */}

      {/* ======= Section 04 :  Products ========= starting */}
      <div className="grid sm:gap-2 xl:grid-cols-5 sm:grid-cols-4  grid-cols-2 w-full section_container_cards">
        {visibleProducts.map((product) => (
          <ProdCard
            key={product.id}
            link="/category/new-jean"
            title={product.title}
            priceRange={product.priceRange}
            image={product.image}
            isFavorite={product.isFavorite}
            sold={product.sold}
          />
        ))}
      </div>

      {/* ======= Section 05 : Color Variants ========= starting */}

      <div className="section_container_dash space-y-1">
        <h5>Shop By Colors</h5>
        <ColorGrid />
      </div>

      {/* ======= Section 05 : Color Variants ========= ENDS */}

      {/* ======= Section 06 : Testimonials ========= starting */}

      <BannerWrapper
        isActive={true}
        className="w-full section_container_dash overflow-hidden"
        nextBtnClass=""
        btnClass="sm:left-28 sm:right-28"
      >
        {BannerDetails.map((banner) => (
          <Banner
            className="w-full md:h-auto md:min-h-[370px] md:max-h-[450px] sm:h-[200px] h-[110px] rounded-md overflow-hidden" // Consistent height
            _id={banner.id}
            name={banner.name}
            link={banner.link}
            image={banner.image}
            key={banner.id}
          />
        ))}
      </BannerWrapper>

      {/* ======= Section 07 : Product Card 2 ========= starting */}

      <div className=" w-full section_container_cards">
        <h5 className="pb-1">Todays Deal</h5>
        <div className="grid sm:gap-2  xl:grid-cols-5 sm:grid-cols-4  grid-cols-2">
          {visibleProducts.map((product, index) => (
            <ProdCard
            link="/category/new-jean"
              key={product.id}
              title={product.title}
              priceRange={product.priceRange}
              image={product.image}
              isFavorite={product.isFavorite}
              sold={product.sold}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* ======= Section 07 : Product Card 2 ========= Ending */}

         {/* ======= Section 08 : Banner4 ========= starting */}
         <BannerWrapper isActive={true} className="w-full section_container_dash" nextBtnClass="" btnClass="sm:left-28 sm:right-28">
          {BannerDetails.map((banner) => (
            <Banner
              className="w-full md:h-auto md:min-h-[370px] md:max-h-[450px] sm:h-[200px] h-[110px] rounded-md overflow-hidden" // Consistent height
              _id={banner.id}
              name={banner.name}
              link={banner.link}
              image={banner.image}
              key={banner.id}
            />
          ))}
        </BannerWrapper>
      {/* --------------------- Section 08 : Banner4 ---------------------== ending */}
    </div>
  );
}
