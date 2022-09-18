import { Grid } from '@mui/material';
import { default as NextImage } from 'next/image';

const Image = ({ image, alt }) => (
  <Grid item xs={12} sm={6} md={5} lg={4} sx={{ display: 'block' }}>
    <NextImage src={image} width={300} height={300} alt={alt} layout="responsive" />
  </Grid>
);

export default Image;
