const baseUrl = 'https://rickandmortyapi.com/api';

const endpoints = {
  character: baseUrl + '/character',
  location: baseUrl + '/location',
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

export const getLocation = async ({ page = '', name = '', type = '', dimension = '' } = {}) => {
  // prettier-ignore
  const url = endpoints.location 
              + '?page=' + page 
              + '&name=' + name
              + '&type=' + type
              + '&dimension=' + dimension;

  const location = await fetch(url);
  return await location.json();
};

export const getFilters = async type => {
  const res = await fetch(process.env.HOST + '/api/filters?type=' + type);
  const data = await res.json();
  return data;
};
