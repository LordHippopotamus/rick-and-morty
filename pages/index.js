import { Box } from '@mui/material';
import { Card, Filters } from '../components/character';
import { Main, Grid, Wrapper, Pagination } from '../components/layout';
import { getCharacter, getFilters } from '../lib/api';

export const getStaticProps = async () => {
  const characters = await getCharacter();
  const filters = await getFilters('character');

  return {
    props: {
      characters: characters,
      filters,
    },
  };
};

const Home = ({ characters, filters }) => (
  <Wrapper>
    <Box display={{ lg: 'flex' }}>
      <Box display={{ xs: 'none', lg: 'block' }} flexBasis="24rem">
        <Filters filters={filters} />
      </Box>
      <Main>
        <Box display={{ lg: 'none' }}>
          <Filters filters={filters} />
        </Box>
        <Grid list={characters.results} Component={Card} />
        <Pagination pages={characters.info.pages} pathname="character" />
      </Main>
    </Box>
  </Wrapper>
);

export default Home;
