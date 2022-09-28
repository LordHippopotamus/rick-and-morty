import { getEpisodes } from 'rickmortyapi';
import { Main } from 'components';

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
  <Main
    fields={fields}
    list={episodes.results}
    pages={episodes.info.pages}
    button={{ sm: 6, md: 4 }}
  />
);

export default Episode;
