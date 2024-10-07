import { cn } from "@/lib/utils";

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
            <a href={link}>
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </a>
            {/* <h3 className="text-sm text-textMain font-semibold text-center">{name}</h3> */}
        </div>
    );
}

export default Banner;
