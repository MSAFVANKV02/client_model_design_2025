import {
  Checkbox,
  IconButton,
  Button,
//   TextField,
  Collapse,
} from "@mui/material";
import { Button as ButtonDcn } from "@/components/ui/button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useWindowWidth } from "@react-hook/window-size";
import { Stack } from "@mui/joy";
import { Input } from "@/components/ui/input";
const details = [
  {
    size: "S",
    color: "Red",
    price: "$5.68",
    image: "https://via.placeholder.com/40",
    quantity: 1,
  },
  {
    size: "M",
    color: "Blue",
    price: "$5.88",
    image: "https://via.placeholder.com/40",
    quantity: 1,
  },
  {
    size: "L",
    color: "Green",
    price: "$6.00",
    image: "https://via.placeholder.com/40",
    quantity: 1,
  },
];

const ShoppingCart = () => {
  const onlyWidth = useWindowWidth();

  // Initialize all items as not collapsed initially (showing all items by default)
  const [isCollapsed, setIsCollapsed] = useState<boolean[]>(
    new Array(details.length).fill(false) // All items are expanded by default
  );
  const [checkedVariants, setCheckedVariants] = useState<boolean[]>(
    new Array(details.length).fill(false) // Initialize checkedVariants to false
  );

  const mobileWidth = onlyWidth <= 768;
  // Handle checkbox change for product variants
  const handleVariantChange = (index: number) => {
    setCheckedVariants((prevState) =>
      prevState.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  // Handle collapse/expand of product variants
  const toggleCollapse = () => {
    // Toggle the collapse state for all items
    setIsCollapsed((prevState) => prevState.map((collapsed) => !collapsed));
  };

  return (
    <div className="flex md:flex-row flex-col md:p-8 md:space-x-8 min-h-screen my-14">
      {/* Shopping Cart Section */}
      <div className="md:w-3/4 w-full">
        <h1 className="text-2xl font-semibold mb-4">Shopping cart</h1>
        <div className="flex items-center mb-4">
          <Checkbox
            color="default"
            sx={{
              "&.Mui-checked": {
                color: "#5F08B1", // Custom color when checked
              },
            }}
          />
          <span className="text-gray-600">Select all items</span>
        </div>

        {/* Product Section */}
        <div className=" ">
          <div className="flex items-start md:justify-between space-x-4 mb-4 ">
            <div className="flex items-center gap-3">
              <Checkbox
                color="default"
                sx={{
                  "&.Mui-checked": {
                    color: "#5F08B1", // Custom color when checked
                  },
                }}
              />
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="w-20 h-20"
              />
              <div className="">
                <p
                  className="text-gray-800 xl:max-w-[450px]  md:max-w-[300px] sm:max-w-[100px] max-w-[90px] truncate"
                  //    style={{ maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                >
                  Oversized 100% Cotton 190GSM 240GSM Plain White T Shirt
                </p>
                <p className="text-sm text-gray-500">Min. order: 10.0 pieces</p>
              </div>
            </div>

            <IconButton className="ml-auto">
              <DeleteIcon />
            </IconButton>
          </div>

          {/* Product Variants */}
          <div className="">
            {/* Collapse/Expand Button */}
            <div className="flex items-center justify-end mb-4">
              <span className="text-sm text-gray-400">
                {details.length} items
              </span>
              <IconButton onClick={toggleCollapse}>
                {isCollapsed.every((collapsed) => collapsed) ? (
                  <KeyboardArrowDownOutlinedIcon />
                ) : (
                  <KeyboardArrowUpOutlinedIcon />
                )}
              </IconButton>
            </div>

            {details.map((variant, index) => (
              <div className="" key={index}>
                <Collapse in={!isCollapsed[index]} timeout="auto" unmountOnExit>
                  <div className="flex items-center justify-between md:p-4 md:border rounded-lg mb-3 md:ml-7">
                    <div className="flex items-center md:space-x-4">
                      <Checkbox
                        color="default"
                        checked={checkedVariants[index]} // Check state based on array value
                        onChange={() => handleVariantChange(index)}
                        sx={{
                          "&.Mui-checked": {
                            color: "#5F08B1", // Custom color when checked
                          },
                        }}
                      />
                      <img
                        src={variant.image}
                        alt="Variant"
                        className="w-12 h-12"
                      />
                      <div>
                        <p className="text-sm font-medium">
                          Size: {variant.size}; Color: {variant.color}
                        </p>
                        <p className="text-sm text-gray-600">
                          {variant.price} / piece
                        </p>
                      </div>
                    </div>

                    {/* Quantity Control */}
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        border: "1px solid #d0c7c7",
                        padding: mobileWidth ? "" :"3px",
                        borderRadius: "5px",
                      }}
                    >
                      <ButtonDcn
                        variant="noStyle"
                        className="rounded-sm"
                        //   onClick={() => handleDecrease(size)}
                      >
                        -
                      </ButtonDcn>
                      <Input
                        type="number"
                        className="custom-input   text-center text-black border-b"
                        //   value={quantities[size]}
                        //   onChange={(e) => handleInputChange(e, size)}
                      />
                      <ButtonDcn
                        variant="noStyle"
                        className="border-gray-200 text-textMain rounded-sm"
                        //   onClick={() => handleIncrease(size)}
                      >
                        +
                      </ButtonDcn>
                    </Stack>

                    {/* <div className="flex items-center p-1 border">
                      <IconButton size="small" color="primary">
                        <RemoveIcon />
                      </IconButton>
                      <TextField
                        variant="outlined"
                        size="small"
                        value="1"
                        slotProps={{
                          htmlInput: {
                            style: { textAlign: "center" },
                          },
                        }}
                        sx={{
                          width:mobileWidth ? 20 : 50,
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              border: "none", // Remove border
                            },
                            "&.Mui-focused fieldset": {
                              border: "none", // Remove border on focus
                            },
                          },
                        }}
                      />

                      <IconButton size="small" color="primary">
                        <AddIcon />
                      </IconButton>
                    </div> */}

                    {/* Price and Delete */}
                    <p className="text-gray-800 font-semibold">$4.69</p>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </Collapse>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div
        className="md:w-1/4 w-full bg-white p-6 rounded-lg sticky md:top-7 bottom-0 h-fit"
        style={{
          boxShadow: "4px 2px 15px rgba(0, 0, 0, 0.13)", // Custom shadow effect
        }}
      >
        <h2 className="text-lg font-semibold mb-4">Order summary (3 items)</h2>
        <div className="flex justify-between text-gray-600">
          <span>Item subtotal</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between text-gray-600 mt-2 mb-4">
          <span>Subtotal excl. tax</span>
          <span>$0.00</span>
        </div>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#6A0DAD",
            "&:hover": { backgroundColor: "#5A0CAD" },
            borderRadius: "8px",
          }}
          startIcon={<AddIcon />}
        >
          Check out
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
