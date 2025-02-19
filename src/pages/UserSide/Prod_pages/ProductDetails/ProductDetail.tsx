import { Button } from "@/components/ui/button";
import { IProducts } from "@/types/productTypes";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProductDrawer from "./ProductDrawer";
import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShareSocial from "@/components/ui/share-social";
import { Divider } from "@mui/joy";
import useNavigateClicks from "@/hooks/useClicks";

function ProductDetail({ product }: { product: IProducts }) {
  const { sizeVariant } = product.variants[0];
  const {handleClick} = useNavigateClicks()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  // const {  size } = sizeVariant[0];

  // const sizeVariants = product.variants.flatMap((variant) =>
  //   variant.sizeVariant.map((sizeVar) => ({
  //     variantId: variant._id,
  //     sizeId: sizeVar._id,
  //     size: sizeVar.size,
  //     prices: sizeVar.price_per_Pieces,
  //   }))
  // );

  const toggleShareOptions = () => {
    setShowShareOptions((prev) => !prev);
  };

  const colors = [
    ...new Set(product.variants.flatMap((variant) => variant.colors)),
  ];

  return (
    <div className="sm:px-4  h-full flex flex-col">
      <div className=" space-y-5">
        <div className="relative">
          <div className=" md:w-3/4 w-[80%]">
             <span className="md:text-[20px] font-bold">
            {product.product_name}
          </span>
          </div>
         
          <div className="flex flex-col absolute top-0 right-0">
            <IconButton onClick={() => setFavorite(!favorite)}>
              {favorite ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <div className="">
              {!showShareOptions ? (
                <IconButton onClick={toggleShareOptions}>
                  <ShareOutlinedIcon />
                </IconButton>
              ) : (
                <div className="absolute top-12 right-0">
                  <ShareSocial toggleShareOptions={toggleShareOptions} data={product.product_name} />
                </div>
              )}
            </div>
          </div>
          {/* <Icon */}
        </div>

        {/* Price Variants */}
        <div className="grid grid-cols-2 sm:w-1/2 w-full gap-3 pb-3">
          {product.variants[0].sizeVariant[0].price_per_Pieces.map(
            (variant) => (
              <div key={variant._id}>
                <p className="text-textGray text-sm">
                  {variant.max_purchase_qty !== Infinity ? (
                    <>
                      {variant.min_purchase_qty && variant.min_purchase_qty} -{" "}
                      {variant.max_purchase_qty}
                    </>
                  ) : (
                    <>
                      {">="}{" "}
                      {variant.min_purchase_qty && variant.min_purchase_qty}
                    </>
                  )}
                  &nbsp; pieces
                </p>
                <span className="text-lg">₹{variant.price}</span>
              </div>
            )
          )}
        </div>
        <Divider sx={{ }} />

        {/* Variations */}
        <h2 className="text-lg ">Variations</h2>

        <div className="flex gap-2 ">
          <span className="text-[16px]">Colors: {colors.length}</span>

          {/* <span className="text-[16px]">Colors: {colors.join(", ")}</span> */}
          <span className="text-[16px]">Size: {sizeVariant.length}</span>
        </div>

        {/* Color Variations */}
        {/* <div className="mt-2">
          <p>1. Colors: ({colors.length}): Red</p>
        </div> */}

        {/* Color images */}
        <div className="flex gap-3 flex-wrap">
          <ProductDrawer
            open={drawerOpen}
            setBuyOpen={setDrawerOpen}
            product={product}
            buyNow={false}
          />
        </div>

        {/* Size section ========= */}

        {/* <div className="">
          <p>2. Size: ({sizeVariant.length})</p>
        </div> */}
        <div className="flex gap-3  flex-wrap justify-between items-center">
          <div className="flex gap-3  flex-wrap">
            {["SM", "XL", "L", "XXL"].map((size) => (
              <div
                key={size}
                className="border border-gray-200 text-sm min-w-10 h-10 rounded cursor-pointer w-fit flex justify-center items-center"
              >
                {size}
              </div>
            ))}
          </div>
          {/* size chart */}
          <div className="">
            <button className="underline text-sm">SizeChart</button>
          </div>
        </div>
      </div>

      {/* Buy and Chat Buttons */}
      {/* lg:mt-auto */}
      <div className="flex sm:gap-4 gap-1  w-full lg:mt-auto mt-7">
        <Button
          className="border px-4 py-2 w-full rounded-xl h-11 border-black"
          variant={"outline"}
          onClick={()=>handleClick('/my-account/chat?enquiry=proId')}
        >
          <Icon icon={"mage:message-dots"} fontSize={20} className="mr-3" />
          Chat with Us
        </Button>

        <ProductDrawer
          buyNow={true}
          setBuyOpen={setDrawerOpen}
          open={drawerOpen}
          product={product}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
