import { Box, Grid, Link as MuiLink, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const findId = url => url.slice(url.lastIndexOf('/') + 1);

const Single = ({ image, name, status, species, type, gender, origin, location, episode }) => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={5} lg={4} sx={{ display: 'block' }}>
      <Image src={image} width={300} height={300} alt={name} layout="responsive" />
    </Grid>
    <Grid item xs={12} sm>
      <Grid container>
        <Typography variant="body2">Name:</Typography>
        &nbsp;
        <Typography>{name}</Typography>
      </Grid>
      <Grid container>
        <Typography variant="body2">Status:</Typography>
        &nbsp;
        <Typography>{status}</Typography>
      </Grid>
      <Grid container>
        <Typography variant="body2">Species:</Typography>
        &nbsp;
        <Typography>{species}</Typography>
      </Grid>
      <Grid container>
        <Typography variant="body2">Type:</Typography>
        &nbsp;
        <Typography>{type}</Typography>
      </Grid>
      <Grid container>
        <Typography variant="body2">Gender:</Typography>
        &nbsp;
        <Typography>{gender}</Typography>
      </Grid>
      <Grid container>
        <Typography variant="body2">Origin:</Typography>
        &nbsp;
        <Link href={'/location/' + findId(origin.url)}>
          <MuiLink style={{ cursor: 'pointer' }}>{origin.name}</MuiLink>
        </Link>
      </Grid>
      <Grid container>
        <Typography variant="body2">Location:</Typography>
        &nbsp;
        <Link href={'/location/' + findId(location.url)}>
          <MuiLink style={{ cursor: 'pointer' }}>{location.name}</MuiLink>
        </Link>
      </Grid>
      <Grid container>
        <Typography variant="body2">Episodes:</Typography>
        &nbsp;
        {episode.map((el, index, array) => (
          <Box key={el}>
            <Link href={'/location/' + findId(el)}>
              <MuiLink style={{ cursor: 'pointer' }}>{findId(el)}</MuiLink>
            </Link>
            &nbsp;{index < array.length - 1 ? '/' : ''}&nbsp;
          </Box>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default Single;
