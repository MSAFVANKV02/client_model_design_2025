import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface IBanner {
    _id?: string | number;
    name?: string;
    link: string;
    image: string;
    className?: string;
}

function Banner({name, link, image, className }: IBanner) {
    return (
        <div className={cn("h-full w-full rounded-md overflow-hidden", className)}>
            <Link to={link}>
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </Link>
            {/* <h3 className="text-sm text-textMain font-semibold text-center">{name}</h3> */}
        </div>
    );
}

export default Banner;
