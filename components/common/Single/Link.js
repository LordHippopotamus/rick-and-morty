import { Grid, Link as MuiLink, Typography } from '@mui/material';
import { default as NextLink } from 'next/link';

const Link = ({ label, url, value }) => (
  <Grid container>
    <Typography variant="body2">{label}:</Typography>
    &nbsp;
    <NextLink href={url}>
      <MuiLink style={{ cursor: 'pointer' }}>{value}</MuiLink>
    </NextLink>
  </Grid>
);

export default Link;
