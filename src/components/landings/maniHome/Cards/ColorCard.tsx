
import { Box,  Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Correct import

interface ColorItem {
  colorCode: string;
  label: string;
}

const colors: ColorItem[] = [
  { colorCode: '#f7c6b7', label: 'Shirts' },
  { colorCode: '#899399', label: 'Shirts' },
  { colorCode: '#7c9954', label: 'Shirts' },
  { colorCode: '#d08c43', label: 'Shirts' },
  { colorCode: '#eb77b3', label: 'Shirts' },
  { colorCode: '#8fd89d', label: 'Shirts' },
  { colorCode: '#e8d49b', label: 'Shirts' },
  { colorCode: '#e99591', label: 'Shirts' },
  { colorCode: '#d14a6b', label: 'Shirts' },
  { colorCode: '#d4da4c', label: 'Shirts' },
  { colorCode: '#7eb8e6', label: 'Shirts' },
  { colorCode: '#55a6a7', label: 'Shirts' },
  { colorCode: '#4970a7', label: 'Shirts' },
  { colorCode: '#a0dfdf', label: 'Shirts' },
  { colorCode: '#f7c6b7', label: 'Shirts' },
  { colorCode: '#899399', label: 'Shirts' },
  { colorCode: '#7c9954', label: 'Shirts' },
  { colorCode: '#d08c43', label: 'Shirts' },
  { colorCode: '#eb77b3', label: 'Shirts' },
  { colorCode: '#8fd89d', label: 'Shirts' },
  { colorCode: '#eb77b3', label: 'Shirts' },
  { colorCode: '#f7c6b7', label: 'Shirts' },
  { colorCode: '#eb77b3', label: 'Shirts' },
  { colorCode: '#8fd89d', label: 'Shirts' },
];

export default function ColorGrid() {
  return (
    <Grid container spacing={1} justifyContent="start" className=''>
      {colors.map((color, index) => (
        <Grid  key={index} className='cursor-pointer'>
          <Box
            sx={{
              width: 64,
              height: 64,
              backgroundColor: color.colorCode,
              borderRadius: '12px',
              marginBottom: '8px',
            }}
          />
          <Typography variant="body2" textAlign="center">
            {color.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
