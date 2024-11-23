import { useState } from "react";


export default function GstDropDown() {
  const [showGstMode, setShowGstMode] = useState(false);

  return (
    <div className="w-[150px] mx-auto relative">
              <span
                className="hover:underline cursor-pointer sm:text-sm text-xs"
                onClick={() => {
                  setShowGstMode(!showGstMode);
                }}
              >
                View TAX details
              </span>
              <div
                className={`absolute bg-white top-7 left-0 right-0 shadow-xl rounded-xl ${showGstMode ? "h-auto p-3 border" : "h-0"}`}
              >
                <div
                  className={`flex flex-col gap-2 ${showGstMode ? "opacity-100" : "opacity-0"}`}
                >
                  <span>IGST</span>
                  <span>CGST</span>
                  <span>SGST</span>
                  <span>CESS</span>
                </div>
              </div>
            </div>
  )
}