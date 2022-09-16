import { Box, Card as MuiCard, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Card = ({ id, name, image }) => {
  const router = useRouter();

  return (
    <MuiCard sx={{ height: '100%' }}>
      <Link href={router.pathname + '/' + id}>
        <CardActionArea sx={{ height: '100%' }}>
          {image ? (
            <Box display="block">
              <Image src={image} alt={name} width={300} height={300} layout="responsive" />
            </Box>
          ) : (
            ''
          )}
          <CardContent sx={{ height: '100%' }}>
            <Typography variant="h5">{name}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </MuiCard>
  );
};

export default Card;
