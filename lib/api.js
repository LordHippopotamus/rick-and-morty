const baseUrl = 'https://rickandmortyapi.com/api';

const endpoints = {
  character: baseUrl + '/character',
};

export const getCharacter = async ({
  page = '',
  status = '',
  species = '',
  type = '',
  gender = '',
  name = '',
} = {}) => {
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

export const getFilters = async type => {
  const res = await fetch(process.env.HOST + '/api/filters?type=' + type);
  const data = await res.json();
  return data;
};
