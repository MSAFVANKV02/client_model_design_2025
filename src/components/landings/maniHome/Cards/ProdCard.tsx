import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/material';
import { Button } from '@/components/ui/button';

interface ProdCardProps {
  title: string;
  priceRange: string;
  image: string;
  isFavorite: boolean;
  sold: number;
}

export default function ProdCard({
  title,
  priceRange,
  image,
  isFavorite,
  sold,
}: ProdCardProps) {
  const [favorite, setFavorite] = React.useState(isFavorite);

  return (
    <Card sx={{ maxWidth: 330 }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          sx={{
            height: 360, // Fixed height
            width: '100%', // Full width
            objectFit: 'cover', // Maintain aspect ratio
            borderTopLeftRadius: 8, // Optional: Add rounded corners
            borderTopRightRadius: 8, // Optional: Add rounded corners
          }}
          image={image}
          alt={title}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '4px',
            padding: '2px 6px',
          }}
        >
          <StarIcon sx={{ fontSize: 14, mr: 0.5 }} />
          <Typography variant="caption">5</Typography>
        </Box>
        <IconButton
          sx={{ position: 'absolute', top: 10, right: 10 }}
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
      <CardContent>
        <Typography variant="body1" component="div">
          {title}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {priceRange}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Min. order: 50 pieces <br />
          Colour: 4, Size: 5 <br />
          {sold.toLocaleString()} sold
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="b2b" variant="b2bStyle" className='w-full'>
          Make order
        </Button>
      </CardActions>
    </Card>
  );
}
