import { Box, Container, Grid } from '@mui/material';
import Filters from './Filters';
import Card from './Card';
import Pagination from './Pagination';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Main = ({ fields, list, pages, button, path = '' }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>R&M | {pathname[1].toUpperCase() + pathname.slice(2) + 's'}</title>
      </Head>
      <Box my={4}>
        <Box display={{ lg: 'flex' }}>
          <Box display={{ xs: 'none', lg: 'block' }} flexBasis="24rem">
            <Filters fields={fields} />
          </Box>
          <Container>
            <Box display="flex" flexDirection="column" gap={4}>
              <Box display={{ lg: 'none' }}>
                <Filters fields={fields} button={button} path={path} />
              </Box>
              <Grid container spacing={2}>
                {list.map(el => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={el.id}>
                    <Card {...el} path={path} />
                  </Grid>
                ))}
              </Grid>
              <Pagination pages={pages} path={path} />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Main;
