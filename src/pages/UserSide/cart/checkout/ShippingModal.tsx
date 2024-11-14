import { Button } from "@/components/ui/button";
import { FormDataType, FormDataValue } from "./page";

type Props = {
  handleFormDataChange: (
    field: keyof FormDataType,
    value: FormDataValue
  ) => void;
  formData: FormDataType;
};

export default function ShippingModal({
  handleFormDataChange,
  formData,
}: Props) {
  const parcelOptions = [
    {
      id: 1,
      logo: "/paymentImg/vrlsrvc.png",
      serviceName: "FlipCart",
      pricePerKg: 25,
      orderDetails: {
        weight: 10,
        parcelPrice: 250,
        boxQty: 100,
      },
    },
    {
      id: 2,
      logo: "/paymentImg/vrlsrvc.png",
      serviceName: "Doha Travel",
      pricePerKg: 25,
      orderDetails: {
        weight: 10,
        parcelPrice: 250,
        boxQty: 100,
      },
    },
    {
      id: 3,
      logo: "/paymentImg/vrlsrvc.png",
      serviceName: "Doha Travel",
      pricePerKg: 25,
      orderDetails: {
        weight: 10,
        parcelPrice: 250,
        boxQty: 100,
      },
    },
    {
      id: 4,
      logo: "/paymentImg/vrlsrvc.png",
      serviceName: "Doha Travel",
      pricePerKg: 25,
      orderDetails: {
        weight: 10,
        parcelPrice: 250,
        boxQty: 100,
      },
    },
  ];

  return (
    <div className="space-y-4">
      <span>Choose a parcel option</span>
      {/* ==== */}
      <div className="w-full flex">
        <Button
          className={`w-full border-n border-b ${formData.parcelMethod === "toPay" ? "border-b-textMain bg-bgSoft text-textMain" : "bg-white text-black"}  rounded-none hover:bg-bgSoft`}
          onClick={() => handleFormDataChange("parcelMethod", "toPay")}
        >
          ToPay
        </Button>
        <Button
          className={`w-full border-n border-b ${formData.parcelMethod === "pay" ? "border-b-textMain bg-bgSoft text-textMain" : "bg-white text-black"}  rounded-none hover:bg-bgSoft`}
          onClick={() => handleFormDataChange("parcelMethod", "pay")}
        >
          Pay
        </Button>
      </div>
      {/* ===== */}
      <div className="">
        <div className="grid grid-cols-3 gap-4">
          {parcelOptions.map((option) => (
            <div
              key={option.id}
              className="border min-h-[250px] rounded-lg overflow-hidden p-3 flex flex-col justify-between"
            >
              <img
                src={option.logo}
                alt={option.serviceName}
                className="w-3/4 mx-auto h-20 object-cover rounded-lg"
              />
              <span className="text-center capitalize">
                {option.serviceName}
              </span>
              <small className="text-gray-400 text-center">
                Price: {option.pricePerKg}/kg
              </small>
              <table className="">
                <tr>
                  <th>Weight</th>
                  <th>{option.orderDetails.weight} kg</th>
                </tr>
                <tr>
                  <th>Parcel Price</th>
                  <th>{option.orderDetails.parcelPrice} AED</th>
                </tr>
                <tr>
                  <th>Box Quantity</th>
                  <th>{option.orderDetails.boxQty}</th>
                </tr>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
