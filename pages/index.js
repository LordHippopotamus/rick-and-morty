import { Box } from '@mui/material';
import { getCharacters } from 'rickmortyapi';
import { Filters, Card } from '../components/common';
import { Main, Grid, Wrapper, Pagination } from '../components/layout';

export const getStaticProps = async () => {
  const { data: characters } = await getCharacters();

  return {
    props: { characters },
  };
};

const fields = [
  {
    label: 'Status',
    sm: 6,
    md: 3,
  },
  {
    label: 'Species',
    sm: 6,
    md: 3,
  },
  {
    label: 'Type',
    sm: 6,
    md: 3,
  },
  {
    label: 'Gender',
    sm: 6,
    md: 3,
  },
  {
    label: 'Name',
    sm: 9,
    md: 9,
  },
];

const Home = ({ characters }) => (
  <Wrapper>
    <Box display={{ lg: 'flex' }}>
      <Box display={{ xs: 'none', lg: 'block' }} flexBasis="24rem">
        <Filters fields={fields} />
      </Box>
      <Main>
        <Box display={{ lg: 'none' }}>
          <Filters fields={fields} button={{ sm: 3 }} />
        </Box>
        <Grid list={characters.results} Component={Card} />
        <Pagination pages={characters.info.pages} pathname="character" />
      </Main>
    </Box>
  </Wrapper>
);

export default Home;
