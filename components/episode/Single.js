import { Box, Grid, Link as MuiLink, Typography } from '@mui/material';
import Link from 'next/link';

const findId = url => url.slice(url.lastIndexOf('/') + 1);

const Single = ({ name, air_date, episode, characters }) => (
  <Grid item xs={12} sm>
    <Grid container>
      <Typography variant="body2">Name:</Typography>
      &nbsp;
      <Typography>{name}</Typography>
    </Grid>
    <Grid container>
      <Typography variant="body2">Air Date:</Typography>
      &nbsp;
      <Typography>{air_date}</Typography>
    </Grid>
    <Grid container>
      <Typography variant="body2">Episode:</Typography>
      &nbsp;
      <Typography>{episode}</Typography>
    </Grid>
    <Grid container>
      <Typography variant="body2">Characters:</Typography>
      &nbsp;
      {characters.map((el, index, array) => (
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
