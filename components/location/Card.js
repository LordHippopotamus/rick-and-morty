import { Card as MuiCard, CardActionArea, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

const Card = ({ id, name }) => (
  <MuiCard sx={{ height: '100%' }}>
    <Link href={'/location/' + id}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography variant="h5">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Link>
  </MuiCard>
);

export default Card;
