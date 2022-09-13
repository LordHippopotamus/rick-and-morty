import { Single } from '../../components/location';
import { Wrapper, Main } from '../../components/layout';
import { getLocation } from '../../lib/api';

export const getStaticPaths = async () => {
  const location = await getLocation();
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

export const getStaticProps = async context => {
  const location = await getLocation({ id: context.params.id });
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
