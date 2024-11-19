import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProfileKycDetails() {
  const BD = [
    {
      businessName: "Haash",
      GST_Number: "34534",
      Address: {
        details: "Malayamma, NIT Campus, +919846012078, support@ayaboo.in",
        phone: "+919846012078",
      },
      pinCode: "",
      contactNumber: "",
    },
  ];

  return (
    <div className="bg-bgSoft h-full w-full rounded-lg p-3 space-y-3">
      <div className="flex gap-2 items-center justify-center bg-bgGreen rounded-xl p-2">
        <Icon icon={"si:shield-verified-fill"} className="text-white text-lg" />
        <span className="text-white capitalize">Your account is verified</span>
      </div>

      {/* Details staring here */}
      {BD.map((businessDetail) => (
        <div
          key={businessDetail.businessName}
          className="space-y-3 flex flex-col"
        >
          <div className="flex flex-col gap-2 text-sm">
           <div className="flex flex-col">
                <h6 className="text-textGray">Business Name:</h6>
            <p className="text-">{businessDetail.businessName}</p>
           </div>
        
            {/*  */}
          <div className="flex flex-col">
          <h6 className="text-textGray">GST Number:</h6>
          <p className="text-">{businessDetail.GST_Number}</p>
          </div>
            {/*  */}

            <div className="flex flex-col">
                 <h6 className="text-textGray">Address:</h6>
            <div className="">
              <p className="text-sm">{businessDetail.Address.details}</p>
              <p className="text-sm">
                Phone Number: {businessDetail.Address.phone}
              </p>
            </div>
            </div>

           
            {/*  */}
            <div className="flex flex-col">
                 <h6 className="text-textGray">Pin Code:</h6>
            <p className="text-">{businessDetail.pinCode}</p>
            </div>
           
            {/*  */}
            <div className="flex flex-col">
                 <h6 className="text-textGray">Contact Number:</h6>
            <p className="text-">{businessDetail.contactNumber}</p>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}
