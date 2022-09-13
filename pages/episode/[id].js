import { Single } from '../../components/episode';
import { Wrapper, Main } from '../../components/layout';
import { getEpisode } from '../../lib/api';

export const getStaticPaths = async () => {
  const episode = await getEpisode();
  const count = episode.info.count;

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
  let episode = await getEpisode({ id: context.params.id });
  episode = {
    name: episode.name,
    airDate: episode.air_date,
    code: episode.episode,
    characters: episode.characters,
  };
  return {
    props: episode,
  };
};

const SingleEpisode = episode => (
  <Wrapper>
    <Main>
      <Single {...episode} />
    </Main>
  </Wrapper>
);

export default SingleEpisode;
