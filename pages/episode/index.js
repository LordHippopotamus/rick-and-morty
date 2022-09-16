import { Box } from '@mui/material';
import { Filters, Card } from '../../components/common';
import { Main, Grid, Wrapper, Pagination } from '../../components/layout';
import { getEpisodes } from 'rickmortyapi';

export const getServerSideProps = async ({ query }) => {
  const { data: episodes } = await getEpisodes(query);

  return {
    props: { episodes },
  };
};

const fields = [
  {
    label: 'Name',
    sm: 12,
    md: 4,
  },
  {
    label: 'Episode',
    sm: 6,
    md: 4,
  },
];

const Episode = ({ episodes }) => (
  <Wrapper>
    <Box display={{ lg: 'flex' }}>
      <Box display={{ xs: 'none', lg: 'block' }} flexBasis="24rem">
        <Filters fields={fields} />
      </Box>
      <Main>
        <Box display={{ lg: 'none' }}>
          <Filters fields={fields} button={{ sm: 6, md: 4 }} />
        </Box>
        <Grid list={episodes.results} Component={Card} />
        <Pagination pages={episodes.info.pages} pathname="episode" />
      </Main>
    </Box>
  </Wrapper>
);

export default Episode;
