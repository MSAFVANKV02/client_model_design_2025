import OrderSummary from "@/components/checkout/OrderSummary";
import AddressForm from "./AddAddress";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Modal from "react-modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { useEffect, useState } from "react";

import { IconButton } from "@mui/material";

import AddressList from "./AddressList";
import { Icon } from "@iconify/react/dist/iconify.js";
import CheckoutItems from "./CheckoutItems";
import CartLayout from "../layout";
import { makeToastError } from "@/utils/toaster";
import ShippingModal from "./ShippingModal";
Modal.setAppElement("#root"); // Add this line to avoid screen-reader issues with modal

type IShipMethod = {
  id: number;
  label: string;
  value: string;
  icon: string;
}

type AddressType = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type ParcelOptionsType = {
  id: number;
  logo: string;
  serviceName: string;
  pricePerKg: number;
  orderDetails: {
    weight: number;
    parcelPrice: number;
    boxQty: number;
  };
};


export type FormDataType = {
  address: AddressType | null;
  shippingMethod: string;
  parcelOptions: ParcelOptionsType | null;
  parcelMethod: string;
};

// Use more specific types instead of 'any'
export type FormDataValue = string | AddressType | ParcelOptionsType | null;

export default function CheckoutPage() {
  // const { handleClick } = useNavigateClicks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
  const [openShipModal, setOpenShipModal] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    address: null,
    shippingMethod: "",
    parcelOptions: null,
    parcelMethod: "toPay",
  });

  console.log(formData);
  

  // Track a single selected address ID

  const shippingMethods = [
    { id: 1, label: "Pickup from Parcel office", value: "", icon: "material-symbols:storefront-outline-sharp" },
    { id: 2, label: "Door delivery", value: "", icon: "icon-park-outline:delivery" },
    { id: 3, label: "Store pickup", value: "", icon: "carbon:delivery" },
  ];

  const orderExist = true;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleFormDataChange = (field: string, value: FormDataValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };


  const handleSelectShippingMethod = (ship:IShipMethod) => {
 
    handleFormDataChange("shippingMethod", ship.label);
    // if(ship.label === "Pickup from Parcel office" || ship.label === "Door delivery"){
    //   setOpenShipModal(true);
    // }
    if (ship.label === "Store pickup") {
      // handleFormDataChange("parcelOptions", {
      //   id: 0,
      //   logo: "",
      //   serviceName: "",
      //   pricePerKg: 0,
      //   orderDetails: {
      //     weight: 0,
      //     parcelPrice: 0,
      //     boxQty: 0,
      //   },
      // });
      handleFormDataChange("parcelOptions", null);
      // handleFormDataChange("parcelMethod", "");
      setOpenShipModal(false); // Ensure modal stays closed for Store pickup
    } else {
      // Open shipping modal for other options
      setOpenShipModal(true);
    }
  }

  const handleCloseModal = () => {
    if(openShipModal){
       setOpenShipModal(false);
    } else if (addAddress){
      setAddAddress(false);
    }else{
      setIsModalOpen(false);
    }
   
   
  }

  const createOrder = () => {
    if (!formData.shippingMethod) {
      makeToastError("Please select a shipping method");
      return;
    }
  }

  useEffect(()=>{
    if(!openShipModal && !formData.parcelMethod && formData?.parcelOptions?.id === 0 ){
      handleFormDataChange("shippingMethod", "");
    }
  },[openShipModal]);

  return (
    <CartLayout>
      <div className="lg:w-3/4 w-full space-y-3">
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
        <div className="lg:ml-6">
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
            isOpen={isModalOpen || openShipModal}
            onRequestClose={handleCloseModal}
            shouldCloseOnOverlayClick={true}
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
            className="bg-white rounded-lg p-4 max-w-3xl md:max-h-[80vh] h-full w-full overflow-y-auto relative z-[10001]"
          >
             <IconButton
                  className="float-right"
                  sx={{ color: "black" }}
                  onClick={handleCloseModal}
                >
                  <CloseOutlinedIcon />
                </IconButton>
            {addAddress ? (
              <div className="h-full">
                {/* <span className=" text-xl">Add Address</span> */}
               
                <div className="h-full bg-">
                  <AddressForm addAddress={addAddress} />
                </div>
              </div>
            ) : openShipModal ? (
            
                <ShippingModal
                handleFormDataChange={handleFormDataChange}
                formData={formData}
                setOpenShipModal={setOpenShipModal}
                />
          
            ): (
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
          <CheckoutItems />
        </div>

        {/*================= Product Details Ends   ================ */}

        {/* ======= shipping methods ========== */}
        <p className="font-bold flex items-center gap-1">
          {" "}
          <Icon
            icon="carbon:delivery-truck"
            className="text-lg text-textMain"
          />
          Choose shipping method
        </p>
        <div className="md:ml-6">
          <div className="flex flex-wrap gap-4 select-none">
           {
            shippingMethods.map((ship,index)=>(
              <div
                key={index}
                className={`flex gap-1 items-center px-2 py-2 text-sm ${
                  ship.label === formData.shippingMethod? "text-textMain border border-[#5F08B1] bg-bgSoft" : "text-black border border-black"
                } rounded-md cursor-pointer`}
                onClick={() =>handleSelectShippingMethod(ship) }
              >
                <Icon icon={ship.icon} className={` ${ ship.label === formData.shippingMethod? "text-textMain" :""} `} />
                <span>{ship.label}</span>
              </div>
            ))
           }
        
          </div>
        </div>
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
        handleClick={createOrder}
      />
    </CartLayout>
  );
}
