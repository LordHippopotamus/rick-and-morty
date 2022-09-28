import { Box, Container, Grid } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { default as MyArray } from './Array';
import Image from './Image';
import Link from './Link';
import Simple from './Simple';

const findId = url => url.slice(url.lastIndexOf('/') + 1);

const Single = ({
  image,
  name,
  status,
  species,
  type,
  gender,
  dimension,
  air_date,
  origin,
  location,
  episode,
  residents,
  characters,
}) => {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>R&M | {name}</title>
      </Head>
      <Box my={4}>
        <Container>
          <Grid container spacing={2}>
            {image ? <Image image={image} alt={name} /> : null}
            <Grid item xs={12} sm>
              {name ? <Simple label="name" value={name} /> : null}
              {status ? <Simple label="status" value={status} /> : null}
              {species ? <Simple label="species" value={species} /> : null}
              {type ? <Simple label="type" value={type} /> : null}
              {gender ? <Simple label="gender" value={gender} /> : null}
              {dimension ? <Simple label="dimension" value={dimension} /> : null}
              {air_date ? <Simple label="air date" value={air_date} /> : null}
              {episode && !Array.isArray(episode) ? (
                <Simple label="episode" value={episode} />
              ) : null}

              {origin ? (
                <Link label="origin" url={'/location/' + findId(origin.url)} value={origin.name} />
              ) : null}
              {location ? (
                <Link
                  label="location"
                  url={'/location/' + findId(location.url)}
                  value={location.name}
                />
              ) : null}

              {episode && Array.isArray(episode) ? (
                <MyArray label="episodes" url="/episode/" array={episode} />
              ) : null}
              {residents ? <MyArray label="residents" url="/character/" array={residents} /> : null}
              {characters ? (
                <MyArray label="characters" url="/character/" array={characters} />
              ) : null}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Single;
