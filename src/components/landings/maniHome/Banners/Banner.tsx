import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface IBanner {
  _id?: string | number;
  name?: string;
  link?: string | undefined;
  isLink?: boolean;
  image?: string;
  video?: string;
  className?: string;
  imgClass?: string;
}

function Banner({ name, link, image, className, isLink, imgClass, video }: IBanner) {
  // const isVideo = image.endsWith(".mp4") || image.includes("video");
  return (
    <div className={cn("h-full w-full rounded-md overflow-hidden", className)}>
      {isLink && link ? (
        <Link to={link}>
           {video ? (
            <video
              src={video}
              controls
              className={cn("w-full h-full object-cover", imgClass)}
            />
          ) : (
            <img
              src={image}
              alt={name}
              className={cn("w-full h-full object-cover", imgClass)}
            />
          )}
        </Link>
      ) : video ? (
        
        <video
          src={video}
         autoPlay
         muted
          className={cn("w-full h-full object-fill", imgClass)}
        />
      ) : (
        <img
          src={image}
          alt={name}
          className={cn("w-full h-full object-cover", imgClass)}
        />
      )}

      {/* <h3 className="text-sm text-textMain font-semibold text-center">{name}</h3> */}
    </div>
  );
}

export default Banner;
