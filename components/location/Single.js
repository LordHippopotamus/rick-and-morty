import { Box, Grid, Link as MuiLink, Typography } from '@mui/material';
import Link from 'next/link';

const findId = url => url.slice(url.lastIndexOf('/') + 1);

const Single = ({ name, type, dimension, residents }) => (
  <Grid item xs={12} sm>
    <Grid container>
      <Typography variant="body2">Name:</Typography>
      &nbsp;
      <Typography>{name}</Typography>
    </Grid>
    <Grid container>
      <Typography variant="body2">Type:</Typography>
      &nbsp;
      <Typography>{type}</Typography>
    </Grid>
    <Grid container>
      <Typography variant="body2">Dimension:</Typography>
      &nbsp;
      <Typography>{dimension}</Typography>
    </Grid>
    <Grid container>
      <Typography variant="body2">Residents:</Typography>
      &nbsp;
      {residents.map((el, index, array) => (
        <Box key={el}>
          <Link href={'/character/' + findId(el)}>
            <MuiLink style={{ cursor: 'pointer' }}>{findId(el)}</MuiLink>
          </Link>
          &nbsp;{index < array.length - 1 ? '/' : ''}&nbsp;
        </Box>
      ))}
    </Grid>
  </Grid>
);

export default Single;
