import { getCharacter, getCharacters } from 'rickmortyapi';
import { Single } from '../../components/common';
import { Wrapper, Main } from '../../components/layout';

export const getStaticPaths = async () => {
  const { data: character } = await getCharacters();
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

export const getStaticProps = async ({ params }) => {
  const { data: character } = await getCharacter(+params.id);
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
