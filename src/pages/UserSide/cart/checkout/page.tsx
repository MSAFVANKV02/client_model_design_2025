import OrderSummary from "@/components/checkout/OrderSummary";
import useNavigateClicks from "@/hooks/useClicks";
import AddressForm from "./AddAddress";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Modal from "react-modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { useEffect, useState } from "react";

import { IconButton } from "@mui/material";

import AddressList from "./AddressList";
import { Icon } from "@iconify/react/dist/iconify.js";
import CheckoutItems from "./CheckoutItems";
Modal.setAppElement("#root"); // Add this line to avoid screen-reader issues with modal

export default function CheckoutPage() {
  const { handleClick } = useNavigateClicks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addAddress, setAddAddress] = useState(false);

  const orderExist = true;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex md:flex-row flex-col justify-between  min-h-screen section_container2 md:my-10 my-5">
      <div className="md:w-3/4 w-full space-y-3">
        <div className="space-y-1 mb-2">
          <p className="font-bold ">
            {" "}
            <LocationOnOutlinedIcon
              sx={{
                fontSize: "1.2rem",
              }}
              fontSize="small"
              className="text-textMain"
            />{" "}
            Shipping Address
          </p>
        </div>

        {/*================= ----------------------   ================ */}
        {/*================= starting Address   ================ */}
        {/*================= ----------------------   ================ */}
        <div className="md:ml-6">
          {orderExist ? (
            <div className="flex  flex-col gap-1 ">
              <span className="flex gap-1 items-center">
                <p>Name</p>
              </span>
              {/* ======== */}
              <span className="flex gap-1 items-center">
                <p>Address</p>,<p>City</p>,<p>State</p>,<p>Pincode</p>,
                <p>Country</p>
              </span>
              {/* ======= */}
              <span className="flex gap-1 items-center">
                <p>Kerala</p>,<p>67890</p>,<p>9067439020</p>
              </span>
              <div className="flex gap-2 items-center">
                <span className="bg-bgSoft text-sm p-1 text-textMain rounded-md">
                  {" "}
                  Default shipping address{" "}
                </span>{" "}
                <IconButton
                  sx={{
                    color: "#93c5fd",
                    fontSize: "1rem",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                    borderRadius: "12px",
                  }}
                  onClick={handleOpenModal}
                >
                  Change
                </IconButton>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl">
              <AddressForm addAddress={addAddress} />
            </div>
          )}

          {/* ===== modal address starts */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={true}
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]"
            className="bg-white rounded-lg p-4 max-w-3xl md:max-h-[70vh] h-full w-full overflow-y-auto relative z-[10001]"
          >
            {addAddress ? (
              <div className="h-full">
                {/* <span className=" text-xl">Add Address</span> */}
                <IconButton
                  className="float-right"
                  sx={{ color: "black" }}
                  onClick={() => setAddAddress(false)}
                >
                  <CloseOutlinedIcon />
                </IconButton>
                <div className="h-full bg-">
                  <AddressForm addAddress={addAddress} />
                </div>
              </div>
            ) : (
              <AddressList
                setIsModalOpen={setIsModalOpen}
                setAddAddress={setAddAddress}
              />
            )}
          </Modal>
          {/* ===== modal address Ends */}
        </div>
        {/* --------     Ends Address --------- */}

        {/*================= ----------------------   ================ */}
        {/*================= Product Details Starts   ================ */}
        {/*================= ----------------------   ================ */}
        <p className="font-bold flex items-center gap-1">
          {" "}
          <Icon
            icon="material-symbols-light:box-outline"
            className="text-lg text-textMain"
          />
          Items
        </p>
        <div className="md:ml-6">
          <CheckoutItems/>
        </div>

          {/*================= Product Details Ends   ================ */}
      </div>
      <OrderSummary
        gst={18}
        discount={20}
        btnLabel="Pay & Submit Order"
        cess={2}
        itemSubTotal={500}
        shippingCharge={20}
        subTotal={550}
        totalPrice={600}
        totalItems={3}
        isCoupon
        handleClick={() => handleClick("/cart/checkout")}
      />
    </div>
  );
}
