import { Grid, Typography } from '@mui/material';

const Simple = ({ label, value }) => (
  <Grid container>
    <Typography variant="body2">{label}:</Typography>
    &nbsp;
    <Typography>{value}</Typography>
  </Grid>
);

export default Simple;
