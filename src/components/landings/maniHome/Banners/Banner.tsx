import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface IBanner {
  _id?: string | number;
  name?: string;
  link?: string | undefined;
  isLink?: boolean;
  image: string;
  className?: string;
  imgClass?: string;
}

function Banner({ name, link, image, className, isLink, imgClass }: IBanner) {
  return (
    <div className={cn("h-full w-full rounded-md overflow-hidden", className)}>
      {isLink && link ? (
        <Link to={link}>
          <img src={image} alt={name} className={cn("w-full h-full object-cover",imgClass)} />
        </Link>
      ) : (
        <img src={image} alt={name} className={cn("w-full h-full object-cover",imgClass)} />
      )}

      {/* <h3 className="text-sm text-textMain font-semibold text-center">{name}</h3> */}
    </div>
  );
}

export default Banner;
