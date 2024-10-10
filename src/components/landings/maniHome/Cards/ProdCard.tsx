// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import StarIcon from "@mui/icons-material/Star";
// import { Box } from "@mui/material";
// import { Button } from "@/components/ui/button";

// interface ProdCardProps {
//   title: string;
//   priceRange: string;
//   image: string;
//   isFavorite: boolean;
//   sold: number;
//   CardHeading?: string;
//   index?: number;
// }

// // const useStyles = makeStyles({

// // })

// export default function ProductNav({
//   title,
//   priceRange,
//   image,
//   isFavorite,
//   sold,
//   // CardHeading,
//   // index
// }: ProdCardProps) {
//   const [favorite, setFavorite] = React.useState(isFavorite);
//   // const [width] = useWindowSize();
//   // const theme = useTheme();

//   return (
//     <>
//       {/* <h4>
//       {index === 0 &&  CardHeading}
//     </h4> */}
//       <Card
//         // sx={{
//         //   maxWidth: 330,
//         //   boxShadow:
//         //     " 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1)",
//         //     transition: "transform 0.3s ease, background-color 0.3s ease", // Smooth scaling
//         //     "&:hover": {
//         //       transform: "scale(1.02)", // Scales the card slightly on hover
//         //       backgroundColor: theme.palette.grey[100],
//         //     },
//         //     cursor: "pointer"
//         // }}
//         className="max-w-xs bg-white sm:shadow-md sm:rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
//       >
//         <Box sx={{ position: "relative" }}>
//           <CardMedia
//             component="img"
//             sx={{
//               // height: width > 768 ? 350 : 200,
//               height: { xs: 200, sm: 350 },
//               width: "100%", // Full width
//               objectFit: "cover",
//               // borderTopLeftRadius: { xs: 5, sm: 8 } ,
//               // borderTopRightRadius: { xs: 5, sm: 8 },
//             }}
//             className="sm:rounded-lg"
//             image={image}
//             alt={title}
//           />
//           <Box
//             sx={{
//               position: "absolute",
//               top: 10,
//               left: 10,
//               backgroundColor: "green",
//               color: "white",
//               borderRadius: "4px",
//               padding: "2px 6px",
//             }}
//           >
//             <StarIcon sx={{ fontSize: 14, mr: 0.5 }} />
//             <Typography variant="caption">5</Typography>
//           </Box>
//           <IconButton
//             sx={{ position: "absolute", top: 10, right: 10 }}
//             onClick={() => setFavorite(!favorite)}
//           >
//             {favorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
//           </IconButton>
//         </Box>
//         <CardContent
//         sx={{
//           padding:2 ,
//         }}
//         >
//           <Typography
//             sx={{
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//             }}
//             variant="body1"
//             component="div"
//             className="truncate"
//           >
//             {title}
//           </Typography>
//           <Typography variant="inherit" color="text.primary">
//             {priceRange}
//           </Typography>
//           <Typography variant="caption" color="text.secondary" 
//           sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//           }}
//           >
//             Min. order: 50 pieces
//             Colour: 4, Size: 5 
//             {sold.toLocaleString()} sold
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="b2b" variant="b2bStyle" className="w-full">
//             Make order
//           </Button>
//         </CardActions>
//       </Card>
//     </>
//   );
// }

import * as React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProdCardProps {
  title: string;
  priceRange: string;
  image: string;
  isFavorite: boolean;
  sold: number;
  index?: number;
  link: string;
}

export default function ProductNav({
  title,
  priceRange,
  image,
  isFavorite,
  sold,
  link
}: ProdCardProps) {
  const [favorite, setFavorite] = React.useState(isFavorite);

  return (
    <div  className="max-w-xs sm:border-none border-white border bg-white  shadow-md sm:rounded-lg overflow-hidden transition-transform duration-300 sm:hover:scale-105 cursor-pointer">
      <Link to={link}>
       <div className="relative">
        {/* Image */}
        <img
          className="md:h-[380px] sm:h-[350px] h-56 w-full object-cover"
          src={image}
          alt={title}
        />

        {/* Rating Badge */}
        <div className="absolute top-2 left-2 bg-green-500 text-white rounded px-2 py-1 text-xs flex items-center">
          <StarIcon className="text-xs mr-1" />
          5
        </div>

        {/* Favorite Icon */}
        <button
          className="absolute top-2 right-2"
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? (
            <FavoriteIcon className="text-red-500" />
          ) : (
            <FavoriteBorderIcon className="text-white" />
          )}
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{title}</h2>
        <p className="text-sm text-gray-700">{priceRange}</p>
        <p className="text-xs text-gray-500 mt-1">
          Min. order: 50 pieces
          <br />
          Colour: 4, Size: 5, {sold.toLocaleString()} sold
        </p>
      </div>

      {/* Action Button */}
      <div className="p-2">
        <Button variant={`b2bStyle`} size="b2b" className="w-full  rounded-md text-sm">
          Make order
        </Button>
      </div>
      </Link>
     
    </div>
  );
}
