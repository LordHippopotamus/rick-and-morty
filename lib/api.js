const baseUrl = 'https://rickandmortyapi.com/api';

const endpoints = {
  character: baseUrl + '/character',
  location: baseUrl + '/location',
  episode: baseUrl + '/episode',
};

export const getCharacter = async ({
  page = '',
  status = '',
  species = '',
  type = '',
  gender = '',
  name = '',
  id,
} = {}) => {
  if (id) {
    const character = await fetch(endpoints.character + '/' + id);
    return await character.json();
  }

  // prettier-ignore
  const url = endpoints.character 
              + '?page=' + page 
              + '&status=' + status
              + '&species=' + species
              + '&type=' + type
              + '&gender=' + gender
              + '&name=' + name;

  const res = await fetch(url);
  const character = await res.json();
  return character;
};

export const getLocation = async ({ page = '', name = '', type = '', dimension = '', id } = {}) => {
  if (id) {
    const location = await fetch(endpoints.location + '/' + id);
    return await location.json();
  }
  // prettier-ignore
  const url = endpoints.location 
              + '?page=' + page 
              + '&name=' + name
              + '&type=' + type
              + '&dimension=' + dimension;

  const location = await fetch(url);
  return await location.json();
};

export const getEpisode = async ({ page = '', name = '', airDate = '', episode = '', id } = {}) => {
  if (id) {
    const episode = await fetch(endpoints.episode + '/' + id);
    return await episode.json();
  }
  // prettier-ignore
  const url = endpoints.episode 
              + '?page=' + page 
              + '&name=' + name
              + '&airDate=' + airDate
              + '&episode=' + episode;

  const episodes = await fetch(url);
  return await episodes.json();
};

export const getFilters = async type => {
  const res = await fetch(process.env.HOST + '/api/filters?type=' + type);
  const data = await res.json();
  return data;
};
