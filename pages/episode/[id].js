import { getEpisode, getEpisodes } from 'rickmortyapi';
import { Single } from 'components';

export const getStaticPaths = async () => {
  const { data: episode } = await getEpisodes();
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

export const getStaticProps = async ({ params }) => {
  let { data: episode } = await getEpisode(+params.id);

  return {
    props: episode,
  };
};

const SingleEpisode = episode => <Single {...episode} />;

export default SingleEpisode;
