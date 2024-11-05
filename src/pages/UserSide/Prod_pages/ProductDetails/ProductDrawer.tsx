import * as React from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  Sheet,
} from "@mui/joy";
// import { Close as CloseIcon } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IProducts } from "@/types/productTypes";
import { useWindowWidth } from "@react-hook/window-size";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";

type IDrawerTypes = {
  product?: IProducts;
  setBuyOpen: (open: boolean) => void;
  open: boolean;
  buyNow: boolean;
};

export default function ProductDrawer({
  product,
  buyNow,
  //   open,
  setBuyOpen,
}: IDrawerTypes) {
  const [open, setOpen] = React.useState(false);
  const onlyWidth = useWindowWidth();
  //   const desktopsWidth = onlyWidth >= 1024;
  //   const tabletsWidth = onlyWidth < 900;
  //   const xlScreen = onlyWidth < 1440;
  const mobileWidth = onlyWidth < 768;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <React.Fragment>
      {!buyNow ? (
        <>
          {product?.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={"drawer images"}
              onClick={() => setOpen(true)}
              className="w-14 h-14 object-cover cursor-pointer rounded-sm border border-red-400"
            />
          ))}
        </>
      ) : (
        <Button
          className="w-full rounded-xl h-11"
          variant="b2bStyle"
          onClick={() => setOpen(true)}
        >
          Buy Now
        </Button>
      )}

      <Drawer
        size="lg"
        variant="plain"
        open={open}
        anchor="right"
        onClose={() => {
          setBuyOpen(false);
          setOpen(false);
        }}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",

              boxShadow: "none",

              width: "80%",
            },
          },
        }}
      >
        <Stack
          direction={!mobileWidth ? "row" : "column"}
          gap={!mobileWidth ? "40px" : ""}
          height="100%"
          sx={{}}
        >
          {/* Image Slider on the Left */}
          <Box
            width={!mobileWidth ? "40%" : "100%"}
            sx={{ bgcolor: "transparent" }}
            onClick={() => setOpen(false)}
          >
            <div className="flex justify-center h-full flex-col relative ">
              <div
                className={`absolute z-[999] ${mobileWidth ? "right-2 top-2" : "-right-6 text-white top-10 "}  text-lg cursor-pointer`}
                onClick={() => setOpen(false)}
              >
                <Icon icon={"material-symbols-light:close"} fontSize={30} />
              </div>

              <Slider
                {...sliderSettings}
                className=" border-none active:outline-none"
              >
                {product?.galleryImages.map((image, idx) => (
                  <Box
                    key={idx}
                    height={!mobileWidth ? 600 : 300}
                    sx={{ width: "90%" }}
                    onClick={(e) => e.preventDefault()}
                    bgcolor={"white"}
                    borderRadius={!mobileWidth ? "12px" : ""}
                  >
                    <div className="h-full m-auto  flex items-center justify-center">
                      <img
                        key={idx}
                        src={image}
                        alt={product?.product_name}
                        className="object-cover cursor-pointer  lg:w-[70%] lg:h-[70%] w-[50%] h-[80%]"
                      />
                    </div>
                  </Box>
                ))}
              </Slider>
            </div>
          </Box>

          {/* Drawer Content on the Right */}
          <Sheet
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflow: "auto",
              width: "100%",
              borderTopLeftRadius: !mobileWidth ? "20px" : "",
              borderBottomLeftRadius: !mobileWidth ? "20px" : "",
              bgcolor: "white",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography level="h4">Select variations and quantity</Typography>
            </Box>

            {/* Price Tiers =========== */}
            <Box>
              <Typography level="body-sm" fontWeight="bold" marginTop={"10px"}>
                Price before shipping
              </Typography>

              <Box width="60%">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ my: 1 }}
                >
                  <Box>
                    <Typography level="body-sm">10 - 99 pieces</Typography>
                    <Typography level="h4" fontWeight="00">
                      ₹476.86
                    </Typography>
                  </Box>
                  <Box>
                    <Typography level="body-sm">100 - 499 pieces</Typography>
                    <Typography level="h4" fontWeight="00">
                      ₹459.23
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ my: 1 }}
                >
                  <Box>
                    <Typography level="body-sm">500 - 1999 pieces</Typography>
                    <Typography level="h4" fontWeight="00">
                      ₹411.37
                    </Typography>
                  </Box>
                  <Box>
                    <Typography level="body-sm">{"≥ 2000 pieces"}</Typography>
                    <Typography level="h4" fontWeight="00">
                      ₹393.74
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Color Options */}
            <Typography level="body-sm" fontWeight="bold">
              1. Color (4): Red
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {product?.galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={"drawer images"}
                  onClick={() => setOpen(true)}
                  className="w-14 h-14 object-cover cursor-pointer rounded-sm border border-red-400"
                />
              ))}
            </Stack>

            <Divider sx={{ my: 2 }} />

            {/* Size Options */}
            <Typography level="body-sm" fontWeight="bold">
              2. Size (5)
            </Typography>
            <List sx={{ mt: 1 }}>
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <ListItem
                  key={size}
                  sx={{
                    // display: "flex",
                    // justifyContent: "space-between",
                    // alignItems: "center",
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', placeItems:"flex-start"
                  }}
                  className=""
                >
                   
                  <Typography>{size}</Typography>
                  <Typography textAlign="center" sx={{ gridColumn: 'span 2', textAlign: '' }}>₹287.12</Typography>
                  
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    border="1px solid #d0c7c7"
                    padding="2px"
                    borderRadius="10px"
                    justifyContent="end"
                  >
                    <Button variant="secondary">-</Button>
                    <Typography>0</Typography>
                    <Button variant="outline" className="border-gray-200 text-textMain">+</Button>
                  </Stack>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            {/* Subtotal and Actions */}
            <Box sx={{ mt: "auto" }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Item subtotal (0 items)</Typography>
                <Typography>₹0.00</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ my: 1 }}
              >
                <Typography>Shipping total</Typography>
                <Typography>₹0.00</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                fontWeight="bold"
              >
                <Typography>Subtotal</Typography>
                <Typography>₹0.00</Typography>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button variant="outline" color="neutral">
                  Add to cart
                </Button>
                <Button>Continue to order</Button>
              </Stack>
            </Box>
          </Sheet>
        </Stack>
      </Drawer>
    </React.Fragment>
  );
}
