import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
interface IBannerWrapperProps {
  children: React.ReactNode;
  className?: string;
  prevBtnClass?: string;
  nextBtnClass?: string;
  btnClass?: string;
  isActive?: boolean;
}

const BannerWrapper: React.FC<IBannerWrapperProps> = ({
  children,
  className,
  prevBtnClass,
  nextBtnClass,
  btnClass,
  isActive,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % React.Children.count(children)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  return (
    <div className={cn(`relative flex flex-col items-center`, className)}>
      <div className="w-full">
        {React.Children.toArray(children)[currentIndex]}
      </div>
      {isActive && (
        <div
          className={cn(
            `absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between mx-4`,
            btnClass
          )}
        >
          <button
            onClick={handlePrev}
            className={cn(
              "bg-white text-black px-2 py-2 rounded-md",
              prevBtnClass
            )}
          >
            <Icon icon="material-symbols-light:keyboard-arrow-left" />
          </button>
          <button
            onClick={handleNext}
            className={cn(
              "bg-white text-black px-2 py-2 rounded-md",
              nextBtnClass
            )}
          >
            <Icon icon="material-symbols-light:keyboard-arrow-right" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BannerWrapper;
