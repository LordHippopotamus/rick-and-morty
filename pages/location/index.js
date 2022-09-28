import { getLocations } from 'rickmortyapi';
import { Main } from 'components';

export const getServerSideProps = async ({ query }) => {
  const { data: locations } = await getLocations(query);

  return {
    props: { locations },
  };
};

const fields = [
  {
    label: 'Name',
    sm: 6,
    md: 3,
  },
  {
    label: 'Type',
    sm: 6,
    md: 3,
  },
  {
    label: 'Dimension',
    sm: 6,
    md: 3,
  },
];

const Location = ({ locations }) => (
  <Main
    fields={fields}
    list={locations.results}
    pages={locations.info.pages}
    button={{ sm: 6, md: 3 }}
  />
);

export default Location;
