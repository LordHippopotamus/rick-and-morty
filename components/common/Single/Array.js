import { Box, Grid, Link as MuiLink, Typography } from '@mui/material';
import Link from 'next/link';

const findId = url => url.slice(url.lastIndexOf('/') + 1);

const Array = ({ label, url, array }) => (
  <Grid container>
    <Typography variant="body2">{label}:</Typography>
    &nbsp;
    {array.map((el, index, array) => (
      <Box key={el}>
        <Link href={url + findId(el)}>
          <MuiLink style={{ cursor: 'pointer' }}>{findId(el)}</MuiLink>
        </Link>
        &nbsp;{index < array.length - 1 ? '/' : ''}&nbsp;
      </Box>
    ))}
  </Grid>
);

export default Array;
