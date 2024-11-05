import CategoryProductNavbar from "@/components/landings/Product_Sec/CategoryProductNavbar";
import { Box } from "@mui/material";
import ProdCard from "@/components/landings/maniHome/Cards/ProdCard";
import { ProductsDetail } from "@/utils/CardDetails";
import { useQuery } from "@/utils/QueryParams";
import { ProductState } from "@/utils/Validator/product-validator";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/assets/css/products.css";

const DEFAULT_CUSTOM_PRICE = [0, 10000] as [number, number];

function CategoryProductsPage() {
  const query = useQuery();
  const navigate = useNavigate();

  const getInitialFilterState = (): ProductState => {
    const color = query.get("color")?.split(",") || [];
    const size = query.get("size")?.split(",") || [];
    const sort =
      (query.get("sort") as
        | "none"
        | "price_asc"
        | "price_desc"
        | "best_selling") || "none";
    // const priceRange =
    //   (query.get("price")?.split(",").map(Number) as [number, number]) ||
    //   DEFAULT_CUSTOM_PRICE;
    const priceRangeParam = query.get("price");
    const priceRange = priceRangeParam
      ? (priceRangeParam.split("+").map(Number) as [number, number])
      : DEFAULT_CUSTOM_PRICE;

    const isCustom = query.get("isCustom") === "true";

    return {
      color,
      size,
      sort,
      price: { isCustom, range: priceRange },
    };
  };
  const [filter, setFilter] = useState<ProductState>(getInitialFilterState);

  // console.log(filter,'filter');
  // const updateUrl = () => {
  //   const params = new URLSearchParams();
  //   if (filter.color.length > 0) params.set("color", filter.color.join(","));
  //   if (filter.size.length > 0) params.set("size", filter.size.join(","));
  //   if (filter.sort !== "none") params.set("sort", filter.sort);
  //   if (filter.price.isCustom || filter.price.range !== DEFAULT_CUSTOM_PRICE) {
  //     const [minPrice, maxPrice] = filter.price.range;
  //     params.set("price", `${minPrice}+${maxPrice}`);
  //     params.set("isCustom", filter.price.isCustom.toString());
  //   } else {
  //     params.delete("price");
  //     params.delete("isCustom");
  //   }
  //   navigate(`?${params}`);
  // };
  const updateUrl = () => {
    const params = new URLSearchParams();
    if (filter.color.length > 0) params.set("color", filter.color.join(","));
    if (filter.size.length > 0) params.set("size", filter.size.join(","));
    if (filter.sort !== "none") params.set("sort", filter.sort);

    if (filter.price.isCustom || filter.price.range !== DEFAULT_CUSTOM_PRICE) {
      const [minPrice, maxPrice] = filter.price.range;

      // Safeguard against undefined values
      const safeMinPrice = isNaN(minPrice) ? 0 : minPrice;
      const safeMaxPrice = isNaN(maxPrice) ? 10000 : maxPrice;

      params.set("price", `${safeMinPrice}+${safeMaxPrice}`);
      params.set("isCustom", filter.price.isCustom.toString());
    } else {
      params.delete("price");
      params.delete("isCustom");
    }
    navigate(`?${params}`);
  };

  useEffect(() => {
    updateUrl();
  }, [filter]);

  return (
    <div className="2xl:px-24 xl:px-20 md:px-14 sm:px-10 mb-10  mx-auto min-h-screen">
      {/* Navigation */}
      <CategoryProductNavbar setFilter={setFilter} filter={filter} />

      {/* Product Grid Layout */}
      <Box sx={{ mt: 3 }}>
        <div className="product-container">
          {ProductsDetail.map((product, index) => (
            <div key={index}>
              <ProdCard
                link={`/products/${product.id}`}
                title={product.title}
                priceRange={product.priceRange}
                image={product.image}
                isFavorite={product.isFavorite}
                sold={product.sold}
              />
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}

export default CategoryProductsPage;
