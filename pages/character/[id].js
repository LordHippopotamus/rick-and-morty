import { Single } from '../../components/character';
import { Wrapper, Main } from '../../components/layout';
import { getCharacter } from '../../lib/api';

export const getStaticPaths = async () => {
  const character = await getCharacter();
  const count = character.info.count;

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
  const character = await getCharacter({ id: context.params.id });
  return { props: character };
};

const SingleCharacter = character => (
  <Wrapper>
    <Main>
      <Single {...character} />
    </Main>
  </Wrapper>
);

export default SingleCharacter;
