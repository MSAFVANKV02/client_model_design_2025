
import { ProductData } from "@/action/product/productData";
import Banner from "@/components/landings/maniHome/Banners/Banner";
import BannerWrapper from "@/components/landings/maniHome/Banners/BannerWrapper";
import ColorGrid from "@/components/landings/maniHome/Cards/ColorCard";
import ProdCard from "@/components/landings/maniHome/Cards/ProdCard";
import CategoryCard from "@/components/landings/maniHome/Shop_By_Cat/CategoryCard";
// import { ProductsDetail } from "@/utils/CardDetails";
import { useWindowSize } from "@react-hook/window-size";

function MainHome() {
  const [width] = useWindowSize();

  const { products, isFetching } = ProductData();

  // console.log(products, "products");

  const BannerDetails = [
    {
      id: 1,
      name: "Home Banner 1",
      link: "#",
      image: "/img/banners/image 92.png",
    },
    {
      id: 2,
      name: "Home Banner 2",
      link: "#",
      image: "/img/banners/Banner2.png",
    },
    {
      id: 3,
      name: "Home Banner 3",
      link: "#",
      image: "/img/banners/Banner3.png",
    },
    {
      id: 4,
      name: "Home Banner 3",
      link: "#",
      image: "/img/banners/Banner6.png",
    },
    {
      id: 5,
      name: "Home Banner 3",
      link: "#",
      image: "/img/banners/Banner5.png",
    },
    // Add more banners as needed...
  ];

  const visibleProducts =
    width > 1280 ? products.slice(0, 5) : products.slice(0, 4);

  return (
    <div className="min-h-screen sm:space-y-8 space-y-2 py-3">
      {/* ======= Section 01 Banner and Advertise ======= staring */}

      <div
        className="flex m-auto justify-between relative 2xl:px-4 xl:px-24 md:px-16 sm:px-5 px-2 md:gap-5 gap-2 sm:py-5 py-3 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/img/banners/bgimage1.png)",
        }}
      >
        <BannerWrapper
          isActive={true}
          className="sm:w-[80%] w-[70%]"
          nextBtnClass="shadow-md active:scale-90 duration-300 transition-all sm:px-2 sm:py-2 px-1 py-[2px]"
          prevBtnClass="shadow-md active:scale-90 duration-300 transition-all  sm:px-2 sm:py-2 px-1 py-[2px] text-xs"
          btnClass="justify-end  gap-3  right-0 sm:bottom-10 bottom-4"
        >
          {BannerDetails.map((banner) => (
            <Banner
              className="w-full md:h-[360px] sm:h-[200px] h-[100px] rounded-md overflow-hidden " // Consistent height
              _id={banner.id}
              name={banner.name}
              link={banner.link}
              image={banner.image}
              key={banner.id}
            />
          ))}
        </BannerWrapper>

        {/* Ensure same height for AdvertiseBanner */}
        <div className="flex-grow rounded-md md:h-[360px] sm:h-[200px] h-[100px] overflow-hidden w-[100px]">
          {/* <AdvertiseBanner /> */}
          <img
            draggable={false}
            src="/img/advertise/adv1.png"
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
      {/* <BannerWrapper
        isActive={true}
        className="w-full section_spacing"
        nextBtnClass="shadow-md active:scale-90 duration-300 transition-all"
        prevBtnClass="shadow-md active:scale-90 duration-300 transition-all"
        btnClass="sm:left-28 sm:right-28 top-1/2 -translate-y-1/2 left-0  right-0"
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
      </BannerWrapper> */}
      {/* --------------------- Section 03 : Banner2 ---------------------== ending */}

      {/* ======= Section 04 :  Products ========= starting */}
      <div className="section_container_cards space-y-2">
        <h4>Today's Deals</h4>

        <div className="grid sm:gap-2 xl:grid-cols-5 sm:grid-cols-4  grid-cols-2 w-full section_container_cards">
          {visibleProducts.map((product) => (
            <ProdCard
              basePrice={product.product.basePrice}
              products={product.product}
              key={product._id}
              link="/category/new-jean"
              title={product.product.product_name}
              minQty={product.product.minimum_quantity}
              image={product.product.thumbnails}
              isFavorite={true}
              PricePerPiece={product.product.price_per_pieces}
              loading={isFetching}
              // sold={product.sold}
            />
          ))}
        </div>
      </div>
      {/* ======= Section 05 : Color Variants ========= starting */}

      <div className="section_container_dash space-y-1 ">
        <h5 className=" sm:px-0 px-4">Shop By Colors</h5>
        <ColorGrid />
      </div>

      {/* ======= Section 05 : Color Variants ========= ENDS */}

      {/* ======= Section 06 : Testimonials ========= starting */}

      <BannerWrapper
        isActive={true}
        className="w-full section_container_dash overflow-hidden"
        nextBtnClass="shadow-md active:scale-90 duration-300 transition-all"
        prevBtnClass="shadow-md active:scale-90 duration-300 transition-all"
        btnClass="sm:left-28 sm:right-28 top-1/2 -translate-y-1/2 left-0  right-0"
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

      <div className="section_container_cards space-y-2">
      <h4>Top Deals</h4>
        <div className="grid sm:gap-2 xl:grid-cols-5 sm:grid-cols-4  grid-cols-2 w-full section_container_cards">
          {visibleProducts.map((product) => (
            <ProdCard
              basePrice={product.product.basePrice}
              products={product.product}
              key={product._id}
              link="/category/new-jean"
              title={product.product.product_name}
              minQty={product.product.minimum_quantity}
              image={product.product.thumbnails}
              isFavorite={true}
              PricePerPiece={product.product.price_per_pieces}
              loading={isFetching}
              // sold={product.sold}
            />
          ))}
        </div>
      </div>

      {/* ======= Section 07 : Product Card 2 ========= Ending */}

      {/* ======= Section 08 : Banner4 ========= starting */}
      <BannerWrapper
        isActive={true}
        className="w-full section_container_dash overflow-hidden"
        nextBtnClass="shadow-md active:scale-90 duration-300 transition-all"
        prevBtnClass="shadow-md active:scale-90 duration-300 transition-all"
        isAutoFlow={false}
        btnClass="sm:left-28 sm:right-28 top-1/2 -translate-y-1/2 left-0  right-0"
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
      {/* --------------------- Section 08 : Banner4 ---------------------== ending */}
    </div>
  );
}
export default MainHome;
