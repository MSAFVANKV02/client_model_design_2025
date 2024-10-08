import Banner from "@/components/landings/maniHome/Banners/Banner";
import BannerWrapper from "@/components/landings/maniHome/Banners/BannerWrapper";
import ColorGrid from "@/components/landings/maniHome/Cards/ColorCard";
import ProdCard from "@/components/landings/maniHome/Cards/ProdCard";
import CategoryCard from "@/components/landings/maniHome/Shop_By_Cat/CategoryCard";

export default function MainHome() {
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
    // Add more banners as needed...
  ];

  const products = [
    {
      id: 1,
      title: 'Leggings bottom',
      priceRange: '₹469 - ₹568',
      image: '/src/assets/images/cards/prod1.png',
      isFavorite: true,
      sold: 34454,
    },
    {
      id: 2,
      title: 'T-Shirts',
      priceRange: '₹469 - ₹568',
      image: '/src/assets/images/cards/prod2.png',
      isFavorite: false,
      sold: 34454,
    },
    {
      id: 3,
      title: 'Jeans',
      priceRange: '₹469 - ₹568',
      image: '/src/assets/images/cards/prod3.png',
      isFavorite: false,
      sold: 34454,
    },
    {
      id: 4,
      title: 'Trousers',
      priceRange: '₹469 - ₹568',
      image: '/src/assets/images/cards/prod4.png',
      isFavorite: false,
      sold: 34454,
    },
    {
      id: 5,
      title: 'Jeans',
      priceRange: '₹469 - ₹568',
      image: '/src/assets/images/cards/prod3.png',
      isFavorite: false,
      sold: 34454,
    },
  ];

  return (
    <div className="min-h-screen space-y-5 py-3">
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
          <img src="/src/assets/images/advertise/adv1.png" alt="" className="h-full object-cover rounded-xl"/>
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
      {/* --------------------- Section 03 : Banner2 ---------------------== ending */}



      {/* ======= Section 04 :  Products ========= starting */}
      <div className="grid gap-2 xl:grid-cols-5 sm:grid-cols-4  grid-cols-2 w-full section_container_dash">
          {products.map((product) => (
            <ProdCard
              key={product.id}
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
          <h4>Shop By Colors</h4>
          <ColorGrid />
        </div>

           {/* ======= Section 05 : Color Variants ========= ENDS */}

           {/* ======= Section 06 : Testimonials ========= starting */}

           <BannerWrapper isActive={true} className="w-full section_container_dash overflow-hidden" nextBtnClass="" btnClass="sm:left-28 sm:right-28">
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
          
    </div>
  );
}
