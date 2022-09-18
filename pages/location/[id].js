import { Single } from '../../components/common';
import { Wrapper, Main } from '../../components/layout';
import { getLocation, getLocations } from 'rickmortyapi';

export const getStaticPaths = async () => {
  const { data: location } = await getLocations();
  const count = location.info.count;

  const ids = [];
  for (let i = 0; i < count; i++) ids.push(i);

  const paths = ids.map(el => {
    return { params: { id: String(el) } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data: location } = await getLocation(+params.id);
  return { props: location };
};

const SingleLocation = location => (
  <Wrapper>
    <Main>
      <Single {...location} />
    </Main>
  </Wrapper>
);

export default SingleLocation;
