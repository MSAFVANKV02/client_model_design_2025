import { makeToast } from "@/utils/toaster";
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from "react";
type Props = {
  toggleShareOptions: () => void;
  data: string;
};

export default function ShareSocial({ toggleShareOptions, data }: Props) {
    const [isCopied, setIsCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(data).then(
      () => {
        makeToast("URL copied to clipboard!");
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
            toggleShareOptions();
          }, 3000);
        // setShowShareOptions(false);
      },
    //   (err: Error) => console.error("Failed to copy URL: ")
    );
  };
  return (
    <div className="md:p-4 p-1 bg-white md:w-[150px] rounded-md w-fit border relative">
        <div className="w-full bg-slate-100 ">
            <CloseOutlinedIcon className=" ml-auto absolute -top-3 -right-3 cursor-pointer"
            onClick={toggleShareOptions}
            />
        </div>
        
      <div className="flex gap-3 md:flex-row items-center flex-col ">
        <div className="">
          <EmailShareButton url={data} className="share-btn">
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <div className="">
          <FacebookShareButton url={data} className="share-btn">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="">
          <WhatsappShareButton url={data} className="share-btn">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleCopyUrl} disabled={isCopied} className="w-full">
            {
                isCopied ? "Copied!" :" Copy URL"
            }
         
        </button>
      </div>
    </div>
  );
}
