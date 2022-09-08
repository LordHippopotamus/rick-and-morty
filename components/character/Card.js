import { Box, Card as MuiCard, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ id, name, image, status, species, gender }) => (
  <MuiCard sx={{ height: '100%' }}>
    <Link href={'/character/' + id}>
      <CardActionArea sx={{ height: '100%' }}>
        <Box sx={{ display: 'block' }}>
          <Image src={image} alt={name} width={300} height={300} layout="responsive" />
        </Box>
        <CardContent sx={{ height: '100%' }}>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography>Status: {status}</Typography>
          <Typography>Species: {species}</Typography>
          <Typography>Gender: {gender}</Typography>
        </CardContent>
      </CardActionArea>
    </Link>
  </MuiCard>
);

export default Card;
