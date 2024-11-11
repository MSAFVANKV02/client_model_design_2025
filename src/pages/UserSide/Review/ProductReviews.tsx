import StarRatings from "react-star-ratings";
import { useState } from "react";
import Modal from "react-modal";
import { Icon } from "@iconify/react/dist/iconify.js";
import BannerWrapper from "@/components/landings/maniHome/Banners/BannerWrapper";
import Banner from "@/components/landings/maniHome/Banners/Banner";

Modal.setAppElement("#root"); // Add this line to avoid screen-reader issues with modal

export default function ProductReviews() {
  const [ratings] = useState([
    {
      rating: 4.2,
      text: "Elementum faucibus mi sed non 👍👍.",
      user: "Kumari S",
      date: "1 month ago",
      likes: 1010,
      images: [
        "https://plus.unsplash.com/premium_photo-1682097591321-6cfe09c0e485?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://media.istockphoto.com/id/1009480924/photo/photo-portrait-of-attractive-pretty-cute-lovable-fascinating-delicate-alluring-gorgeous-nice.webp?s=1024x1024&w=is&k=20&c=Sc4UDG1CH-jPocbDQYLL5sl0s6G3egvU7NwbB8IbYhA=",
      ],
      videos: ["/video/WhatsApp Video 2024-09-12 at 15.02.13.mp4"],
    },
    {
      rating: 3.5,
      text: "Elementum mi sed.",
      user: "Kumari S",
      date: "1 month ago",
      likes: 1010,
      images: [
        "https://media.istockphoto.com/id/1009480924/photo/photo-portrait-of-attractive-pretty-cute-lovable-fascinating-delicate-alluring-gorgeous-nice.webp?s=1024x1024&w=is&k=20&c=Sc4UDG1CH-jPocbDQYLL5sl0s6G3egvU7NwbB8IbYhA=",
      ],
    },
    {
      rating: 1.0,
      text: "Sed.",
      user: "Kumari S",
      date: "1 month ago",
      likes: 1010,
      images: [
        "https://plus.unsplash.com/premium_photo-1682097591321-6cfe09c0e485?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  //   const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalReviews, setModalReviews] = useState<typeof ratings>([]);
  const [modalUserDetails, setModalUserDetails] = useState<{
    user: string;
    date: string;
    rating: number;
    text: string;
    images: string[];
    videos?: string[];
  } | null>(null);

  const allCustomerImages = ratings.flatMap((review) => review.images);
  const first11Images = allCustomerImages.slice(0, 3);

  //   const handleCustomerImageClick = () => {
  //     const allImages = ratings.flatMap((review) => review.images);
  //     setModalImages(allImages);
  //     setIsModalOpen(true);
  //   };
  const handleCustomerImageClick = () => {
    setModalReviews(ratings); // Set all review data in modalReviews
    setIsModalOpen(true);
  };

  const handleUserImageClick = (review: (typeof ratings)[0]) => {
    setModalUserDetails(review);
    setIsUserModalOpen(true);
  };

  return (
    <div className="w-full p-4 space-y-7">
      <h3>Ratings & Reviews</h3>
      {/* Overall Rating */}
      <div className="flex flex-col items-start mb-4">
        <h3 className="text-xl font-semibold mb-2">Rate This Product</h3>
        <StarRatings
          rating={4.2}
          starRatedColor="#7C3AED"
          numberOfStars={5}
          starDimension="24px"
          starSpacing="2px"
          name="rating"
        />
        <p className="text-green-600 text-lg mt-2">
          <span className="font-semibold">4.2</span> ★ | 45,223 ratings and
          2,221 reviews
        </p>
      </div>

      {/* Customer Images */}
      <div className="">
        <span className="text-md text-gray-600 font-semibold ">
          Images uploaded by customers
        </span>
        <div className="grid xl:grid-cols-12 md:grid-cols-10 grid-cols-5 gap-2 mt-3">
          {/* {ratings
            .flatMap((review) => review.images.slice(0, 1))
            .map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Customer uploaded"
                className="w-full h-20 object-cover rounded-md cursor-pointer"
                onClick={handleCustomerImageClick}
              />
            ))}
          <div
            className="w-full h-20 bg-gray-200 flex items-center justify-center rounded-md text-gray-600 cursor-pointer"
            onClick={handleCustomerImageClick}
          >
            +221
          </div> */}
          {first11Images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Customer uploaded"
              className="w-full h-20 object-cover rounded-md cursor-pointer"
              onClick={handleCustomerImageClick}
            />
          ))}
          {/* Display '+221' if there are more than 11 images */}
          {allCustomerImages.length > 3 && (
            <div
              className="w-full h-20 bg-gray-200 flex items-center justify-center rounded-md text-gray-600 cursor-pointer"
              onClick={handleCustomerImageClick}
            >
              +{allCustomerImages.length - 3}
            </div>
          )}
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {ratings.map((review, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 mb-4 flex justify-between "
          >
            <div className="">
              <div className="flex items-center space-x-2 mb-2">
                <span
                  className={`text-white text-sm px-2 py-1 rounded-2xl ${
                    review.rating >= 4
                      ? "bg-green-500"
                      : review.rating >= 3
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                >
                  {review.rating} ★
                </span>
                <span className="text-md font-medium">{review.text}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  {review.images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt="review"
                      className="w-16 h-16 object-cover rounded-md cursor-pointer"
                      onClick={() => handleUserImageClick(review)}
                    />
                  ))}
                </div>

                <div className="flex flex-col text-gray-500">
                  <span className="text-sm font-medium">{review.user}</span>
                  <span className="text-sm ">{review.date}</span>
                </div>
              </div>
            </div>

            <div className=" text-gray-500 text-sm flex justify-between items-center mt-auto">
              <span className="cursor-pointer flex items-center gap-3">
                {/* <i className="fas fa-thumbs-up mr-1"></i> {review.likes} */}
                <Icon icon={`bx:like`} />
                {review.likes}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-start ">
        <button
          className="text-gray-600 text-sm font-medium hover:underline"
          onClick={handleCustomerImageClick}
        >
          View All
        </button>
      </div>

      {/* Modal for All Customer Images */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg p-4 max-w-3xl w-full overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Customer Images</h3>
          {/* <div className="grid grid-cols-3 gap-2">
            {modalReviews.map((modal, i) => (
              <img
                key={i}
                src={img}
                alt={`Customer Image ${i + 1}`}
                className="w-full h-32 object-cover rounded-md cursor-pointer"
                onClick={() => handleUserImageClick(ratings[Math.floor(i / 5)])} // Show user details modal on click
              />
            ))}
          </div> */}
          <div className="grid grid-cols-3 gap-2">
            {/* {modalReviews.flatMap((review) => review.images).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Customer Image ${i + 1}`}
                className="w-full h-32 object-cover rounded-md cursor-pointer"
              />
            ))} */}
            {modalReviews.map((review) =>
              review.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Customer Image ${i + 1}`}
                  className="w-full h-32 object-cover rounded-md cursor-pointer"
                  onClick={() => handleUserImageClick(review)} // Open single user's review
                />
              ))
            )}
          </div>
          <button
            className="mt-4 text-blue-600"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Modal for Single User's Images and Details */}
      <Modal
        isOpen={isUserModalOpen}
        onRequestClose={() => setIsUserModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg p-4 max-w-xl w-full overflow-y-auto">
          {modalUserDetails && (
            <>
              <h3 className="text-lg font-semibold mb-4">
                {modalUserDetails.user}'s Review
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {modalUserDetails.date}
              </p>
              <StarRatings
                rating={modalUserDetails.rating}
                starRatedColor="#7C3AED"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
                name="user-rating"
              />
              <p className="my-2">{modalUserDetails.text}</p>
              <div className="grid grid-cols-1 gap-2 mt-4">
                <BannerWrapper
                  isAutoFlow={false}
                  isActive={true}
                  iconSize={29}
                  className="h-full "
                  nextBtnClass=" active:scale-90 duration-300 transition-all bg-transparent "
                  prevBtnClass=" active:scale-90 duration-300 transition-all bg-transparent "
                  btnClass="sm:left-0 sm:right-0 top-1/2 -translate-y-1/2 left-0  right-0"
                >
                  {/* Render images */}
                  {modalUserDetails?.images?.map((img, index) => (
                    <Banner
                      key={index}
                      className="lg:h-[500px] h-[250px] flex items-center justify-center"
                      isLink={false}
                      image={img}
                      imgClass="object-cover cursor-pointer z-50  lg:h-[70%] w-full h-[80%]"
                    />
                  ))}

                  {/* Render videos */}
                  {modalUserDetails?.videos &&
                    modalUserDetails?.videos?.map((video, i) => (
                      <Banner
                        key={i}
                        className="lg:h-[500px] h-[250px] flex items-center justify-center"
                        isLink={false}
                        video={video}
                        imgClass="object-contain cursor-pointer z-50  lg:h-[70%] w-full h-[80%]"
                      />
                    ))}
                </BannerWrapper>
              </div>
              <button
                className="mt-4 text-blue-600"
                onClick={() => setIsUserModalOpen(false)}
              >
                Close
              </button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
