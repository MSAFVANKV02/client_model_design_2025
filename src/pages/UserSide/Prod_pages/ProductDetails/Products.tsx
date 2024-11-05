
import { IProducts } from "@/types/productTypes";
import ProductDetail from "./ProductDetail";
import ProductImages from "./ProductImages";
import { dummyProduct } from "@/data/dummyData/productsData";

export default function Products() {

  const product: IProducts = dummyProduct;

  return (
    <div className="min-h-screen flex flex-col section_container_cards mt-10">
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
    </div>
  );
}
