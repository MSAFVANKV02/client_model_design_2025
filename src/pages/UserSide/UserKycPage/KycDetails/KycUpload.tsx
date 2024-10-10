import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { clearKycDetails, uploadFile } from "@/redux/userSide/KycSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";
import { pdfjs } from "react-pdf";
import PdfFile from "./PdfFile";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { makeToast, makeToastError } from "@/utils/toaster";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from "@/providers/AuthContext";
import { UploadUserKycDetails } from "@/utils/urlPath";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FILE_SIZE_LIMIT = 11 * 1024 * 1024; // 1 MB

export default function KycUpload() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    businessName,
    emailId,
    buildingName,
    street,
    post,
    pinCode,
    state,
    country,
    proofType,
    uploadedFile,
  } = useAppSelector((state) => state.kyc);
  // const uploadDetails = useAppSelector((state) => state.kyc);

  const [loading, setLoading] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);
  const {  handleLogout} = useAuth();


  const chooseFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.size > FILE_SIZE_LIMIT) {
        setFileError(
          `File size must be less than ${(
            FILE_SIZE_LIMIT /
            (1024 * 1024)
          ).toFixed(2)} MB`
        );
        return;
      }
      if (file.type !== "application/pdf") {
        setFileError("Only PDF files are allowed");
        return;
      }

      setFileError(null);

      // Create the file URL for displaying
      const fileURL = URL.createObjectURL(file);
      setFileURL(fileURL);

      // Dispatch the complete file object to Redux
      dispatch(uploadFile(file));
    }
  };

  const handleSubmit = async () => {
    if (!uploadedFile) {
      makeToastError("Please upload a PDF file");
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      const formData = new FormData();

      // Append all KYC details to FormData
      formData.append("businessName", businessName);
      formData.append("emailId", emailId);
      formData.append("buildingName", buildingName);
      formData.append("street", street);
      formData.append("post", post);
      formData.append("pinCode", pinCode);
      formData.append("state", state);
      formData.append("country", country);
      formData.append("proofType", proofType || ""); // Append proofType, ensure it's a string
      formData.append("proof", uploadedFile); // Append the uploaded file

      const response = await axios.post(UploadUserKycDetails, formData, {
        withCredentials: true,
      }); // Specify the correct endpoint

      if (response.status === 200) {
        makeToast("KYC submitted successfully");
        dispatch(clearKycDetails());
        handleLogout('/dashboard');
        navigate(`/dashboard`);
      }
    } catch (error: unknown) {
      console.log("Unexpected error:", error);
      if (axios.isAxiosError(error)) {
        makeToastError(error.response?.data.message || "Failed to submit KYC");
      } else {
        console.log("Unexpected error:", error);
      }
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <div className="md:p-6">
      <h2 className="text-xl font-semibold mb-4">Complete Shop's KYC</h2>

      {/* file upload section ===== */}

      <div className="flex sm:flex-row flex-col justify-between gap-3 items-center md:p-10 p-4 bg-gray-100 rounded-xl mb-6">
        <div className="flex flex-col sm:items-start items-center gap-5">
          <div>
            <h4 className="font-bold">{proofType}</h4>
            <p>{proofType} verifies in 10 mins.</p>
          </div>

          <div className="flex flex-col gap-2">
            <small>Browse, Gallery or Files.</small>
            <div>
              <input
                type="file"
                accept=".pdf"
                ref={inputRef}
                className="hidden"
                onChange={handleFileUpload}
              />
              <Button
                variant="outline"
                className="p-[10px] w-[205px] h-[48px] bg-white flex items-center gap-2 text-center text-black rounded-lg border"
                onClick={chooseFile}
                type="button"
              >
                <Icon icon="material-symbols-light:upload" fontSize={20} />{" "}
                Upload
              </Button>
            </div>
          </div>
        </div>

        {/* Save to Db button ====== */}
        <Button variant={`b2bStyle`} className="px-11" onClick={handleSubmit}>
          {loading ? <ClipLoader color="#ffff" size={20} /> : " Submit"}
        </Button>
      </div>

      {/* file upload section ===== */}

      {/* File Upload Feedback */}
      {fileError && <p className="text-red-600 mb-4">{fileError}</p>}

      <div className="mt-6 flex sm:flex-row flex-col gap-4 justify-between">
        <div>
          <h4 className="font-medium">Certificate must clearly show:</h4>
          <ul className="list-inside list-disc mt-2">
            <li className="text-sm flex items-center gap-1">
              <Icon
                icon="bitcoin-icons:verify-filled"
                className="text-green-600"
                fontSize={25}
              />
              Registration Number
            </li>
            <li className="text-sm flex items-center gap-1">
              <Icon
                icon="bitcoin-icons:verify-filled"
                className="text-green-600"
                fontSize={25}
              />
              Legal Name
            </li>
            <li className="text-sm flex items-center gap-1">
              <Icon
                icon="bitcoin-icons:verify-filled"
                className="text-green-600"
                fontSize={25}
              />
              Trade Name
            </li>
          </ul>
        </div>

        {/* Show Uploaded File */}
        {fileURL && uploadedFile ? (
          <div>
            <p>See Sample:</p>
            <div className="mt-4 relative float-right">
              <a href={fileURL} target="_blank" rel="noopener noreferrer">
                {/* <p>Uploaded File: {uploadedFile.name}</p> */}

                <PdfFile fileURL={fileURL} />
                <div className="absolute w-16 h-24 bg-black/10 top-0 rounded-md flex items-center justify-center ">
                  <Icon
                    icon="system-uicons:capture"
                    fontSize={25}
                    color="#fff"
                  />
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div className="w-16 h-24 bg-black/20 flex items-center justify-center">
            <Icon icon="system-uicons:capture" />
          </div>
        )}

        {/* <div className="mt-4">
            <p>Uploaded File: {uploadedFile.name}</p>
            <a
              href={fileURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline"
            >
              <PdfFile file={fileURL}/>
            </a>
          </div> */}
      </div>
    </div>
  );
}
