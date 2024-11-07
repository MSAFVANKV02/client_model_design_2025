import { IProducts } from "@/types/productTypes";
import ProductDetail from "./ProductDetail";
import ProductImages from "./ProductImages";
import { dummyProduct } from "@/data/dummyData/productsData";
import CustomizeSamplePurchase from "./Customize_SamplePurchase";
import ProductTabs from "./ProductTabs";
import ProdCard from "@/components/landings/maniHome/Cards/ProdCard";
import "@/assets/css/products.css";

export default function ProductsPage() {
  const product: IProducts = dummyProduct;

  const similarProduct =
    product.variants[0].sizeVariant[0].price_per_Pieces.filter((price) => {
      return price.min_purchase_qty;
    });
  // console.log(similarProduct);

  return (
    <div className="min-h-screen flex flex-col section_container_dash space-y-10 my-10">
      <div className="flex flex-col lg:flex-row gap-6 w-full   h-full">
        {/* Product Image Section */}
        <div className="lg:w-[45%] lg:sticky lg:top-0 rounded-lg border min-h-[50vh] lg:h-[80vh] bg-white/10 filter backdrop-blur-lg">
          <ProductImages images={product.galleryImages} />
        </div>

        {/* Product Details Section */}
        <div className="lg:flex-grow min-h-[50vh] lg:min-h-[75vh]">
          <ProductDetail product={product} />
        </div>
      </div>
      {/* ====== details Ends ======= */}

      {/* customization and Sample purchase */}
      <div className="">
        <CustomizeSamplePurchase />
      </div>

      {/* Product Features tabs */}
      <div className="">
        <ProductTabs />
      </div>

      <div className="">
        <h5>Similar Products</h5>
        <div className="grid sm:gap-2 xl:grid-cols-5 sm:grid-cols-4  grid-cols-2 w-full mt-3">
          {similarProduct.map((similarProduct) => (
            <ProdCard
              key={product._id}
              link="/products/new-jean"
              title={product.product_name}
              priceRange={similarProduct.max_purchase_qty}
              image={product.product_images[0]}
              isFavorite={false}
              sold={34454}
            />
          ))}
        </div>
      </div>
      {/* Recent Viewed Products */}
      <div className="">
        <h5>Recent viewed</h5>
        <div className="grid sm:gap-2 xl:grid-cols-5 sm:grid-cols-4  grid-cols-2 w-full mt-3">
          {similarProduct.map((similarProduct) => (
            <ProdCard
              key={product._id}
              link="/products/new-jean"
              title={product.product_name}
              priceRange={similarProduct.max_purchase_qty}
              image={product.product_images[0]}
              isFavorite={false}
              sold={34454}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
