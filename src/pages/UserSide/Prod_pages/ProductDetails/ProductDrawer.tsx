import * as React from "react";
import {
  Box,
  Drawer,
  Button,
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

type IDrawerTypes = {
  src: string;
  alt: string;
  key: number;
  product: IProducts;
};

export default function ProductDrawer({
  src,
  alt,
  key,
  product,
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
      <img
        key={key}
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        className="w-14 h-14 object-cover cursor-pointer rounded-sm border border-red-400"
      />
      <Drawer
        size="lg"
        variant="plain"
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
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
              <div className={`absolute z-[999] ${mobileWidth?"-left-2 top-2":"-right-6 text-white top-10 "}  text-lg cursor-pointer`}onClick={() => setOpen(false)}>
                <Icon
                icon={'material-symbols-light:close'}
                fontSize={30}
                />
              </div>

              <Slider
                {...sliderSettings}
                className=" border-none active:outline-none"
              >
                {product.galleryImages.map((image, idx) => (
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
                        alt={product.product_name}
                        className="object-cover cursor-pointer  w-[70%] h-[70%] "
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

            {/* Price Tiers */}
            <Box>
              <Typography level="body-sm" fontWeight="bold" marginTop={"10px"}>
                Price before shipping
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ my: 1 }}
              >
                <Typography level="body-sm">10 - 99 pieces</Typography>
                <Typography level="body-sm" fontWeight="bold">
                  ₹476.86
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ my: 1 }}
              >
                <Typography level="body-sm">100 - 499 pieces</Typography>
                <Typography level="body-sm" fontWeight="bold">
                  ₹459.23
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ my: 1 }}
              >
                <Typography level="body-sm">500 - 1999 pieces</Typography>
                <Typography level="body-sm" fontWeight="bold">
                  ₹411.37
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ my: 1 }}
              >
                <Typography level="body-sm">{"≥ 2000 pieces"}</Typography>
                <Typography level="body-sm" fontWeight="bold">
                  ₹393.74
                </Typography>
              </Stack>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Color Options */}
            <Typography level="body-sm" fontWeight="bold">
              1. Colour (4)
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Box
                className="w-10 h-10 rounded-full border border-gray-400"
                bgcolor="red"
              />
              <Box
                className="w-10 h-10 rounded-full border border-gray-400"
                bgcolor="pink"
              />
              <Box
                className="w-10 h-10 rounded-full border border-gray-400"
                bgcolor="purple"
              />
              <Box
                className="w-10 h-10 rounded-full border border-gray-400"
                bgcolor="gray"
              />
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
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography>{size}</Typography>
                  <Typography>₹287.12</Typography>
                  <Stack direction="row" spacing={1}>
                    <Button variant="outlined">-</Button>
                    <Typography>0</Typography>
                    <Button variant="outlined">+</Button>
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
                <Button variant="outlined" color="neutral" fullWidth>
                  Add to cart
                </Button>
                <Button fullWidth>Continue to order</Button>
              </Stack>
            </Box>
          </Sheet>
        </Stack>
      </Drawer>
    </React.Fragment>
  );
}
