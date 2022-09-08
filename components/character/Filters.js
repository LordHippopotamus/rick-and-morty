import {
  Autocomplete as MuiAutocomplete,
  TextField,
  Grid,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UpperCaseFirstChar = str => str[0].toUpperCase() + str.slice(1);

const Autocomplete = ({ property, options, value, handleChange }) => (
  <Grid item xs={12} sm={6} md={3} lg={12}>
    <MuiAutocomplete
      id={property}
      size="small"
      freeSolo
      options={options}
      inputValue={value}
      onInputChange={handleChange}
      renderInput={params => <TextField {...params} label={UpperCaseFirstChar(property)} />}
    />
  </Grid>
);

const Filters = ({ filters }) => {
  const router = useRouter();

  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (router.query.status) setStatus(router.query.status);
    if (router.query.species) setSpecies(router.query.species);
    if (router.query.type) setType(router.query.type);
    if (router.query.gender) setGender(router.query.gender);
    if (router.query.name) setName(router.query.name);
  }, [
    router.query.gender,
    router.query.name,
    router.query.species,
    router.query.status,
    router.query.type,
  ]);

  const handleStatusChange = (event, value) => setStatus(value);
  const handleSpeciesChange = (event, value) => setSpecies(value);
  const handleTypeChange = (event, value) => setType(value);
  const handleGenderChange = (event, value) => setGender(value);
  const handleNameChange = event => setName(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    router.push({
      pathname: '/character',
      query: {
        status,
        species,
        type,
        gender,
        name,
      },
    });
  };

  return (
    <Paper sx={{ padding: 2 }} elevation={1}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Autocomplete
            property="status"
            options={filters.status}
            value={status}
            handleChange={handleStatusChange}
          />

          <Autocomplete
            property="species"
            options={filters.species}
            value={species}
            handleChange={handleSpeciesChange}
          />

          <Autocomplete
            property="type"
            options={filters.type}
            value={type}
            handleChange={handleTypeChange}
          />

          <Autocomplete
            property="gender"
            options={filters.gender}
            value={gender}
            handleChange={handleGenderChange}
          />

          <Grid item xs={12} sm={9} lg={12}>
            <TextField
              value={name}
              onChange={handleNameChange}
              label="Name"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={3} lg={12}>
            <Button sx={{ height: '100%', width: '100%' }} variant="outlined" type="submit">
              search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Filters;
