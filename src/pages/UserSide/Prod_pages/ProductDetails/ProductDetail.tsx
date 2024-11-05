import { Button } from "@/components/ui/button";
import { IProducts } from "@/types/productTypes";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProductDrawer from "./ProductDrawer";
import React from "react";

function ProductDetail({ product }: { product: IProducts }) {
  const { sizeVariant } = product.variants[0];
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // const {  size } = sizeVariant[0];

  // const sizeVariants = product.variants.flatMap((variant) =>
  //   variant.sizeVariant.map((sizeVar) => ({
  //     variantId: variant._id,
  //     sizeId: sizeVar._id,
  //     size: sizeVar.size,
  //     prices: sizeVar.price_per_Pieces,
  //   }))
  // );

  const colors = [
    ...new Set(product.variants.flatMap((variant) => variant.colors)),
  ];

  return (
    <div className="sm:px-4 sm:p-0 p-4 h-full flex flex-col">
      <div className=" space-y-3">
        <h1 className="text-2xl font-bold ">{product.product_name}</h1>

        {/* Price Variants */}
        <div className="grid grid-cols-2 gap-3 border-b pb-3">
          {product.variants[0].sizeVariant[0].price_per_Pieces.map(
            (variant) => (
              <div key={variant._id}>
                <p className="text-textGray">
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
                <span>₹{variant.price}</span>
              </div>
            )
          )}
        </div>

        {/* Variations */}
        <h2 className="text-lg font-semibold">Variations</h2>

        <div className="flex gap-2">
          <p>Colors: {colors.length}</p>

          {/* <p>Colors: {colors.join(", ")}</p> */}
          <p>Size: {sizeVariant.length}</p>
        </div>

        {/* Color Variations */}
        <div className="">
          <p>1. Colors: ({colors.length}): Red</p>
        </div>

        {/* Color images */}
        <div className="flex gap-3 overflow-auto">
          <ProductDrawer
            open={drawerOpen}
            setBuyOpen={setDrawerOpen}
            product={product}
            buyNow={false}
          />
        </div>

        {/* Size section ========= */}

        <div className="">
          <p>2. Size: ({sizeVariant.length})</p>
        </div>
        <div className="flex gap-3  flex-wrap justify-between items-center">
          <div className="flex gap-3  flex-wrap">
            {["SM", "XL", "L", "XXL"].map((size) => (
              <div
                key={size}
                className="border border-black text-sm min-w-10 h-10 rounded cursor-pointer w-fit flex justify-center items-center"
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
      <div className="flex gap-4 lg:mt-auto w-full mt-5">
        <Button
          className="border px-4 py-2 w-full rounded-xl h-11 border-black"
          variant={"outline"}
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
