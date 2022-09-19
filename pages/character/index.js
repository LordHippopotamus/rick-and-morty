import { getCharacters } from 'rickmortyapi';
import { Main } from '../../components/layout';

export const getServerSideProps = async ({ query }) => {
  const { data: characters } = await getCharacters(query);

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

const Character = ({ characters }) => (
  <Main
    fields={fields}
    list={characters.results}
    pages={characters.info.pages}
    button={{ sm: 3 }}
  />
);

export default Character;
