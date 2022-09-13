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

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [dimension, setDimension] = useState('');

  useEffect(() => {
    if (router.query.name) setName(router.query.name);
    if (router.query.type) setType(router.query.type);
    if (router.query.dimension) setDimension(router.query.dimension);
  }, [router.query.name, router.query.type, router.query.dimension]);

  const handleNameChange = event => setName(event.target.value);
  const handleTypeChange = (event, value) => setType(value);
  const handleDimensionChange = (event, value) => setDimension(value);

  const handleSubmit = event => {
    event.preventDefault();
    router.push({
      pathname: '/location',
      query: { name, type, dimension },
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
            property="type"
            options={filters.type}
            value={type}
            handleChange={handleTypeChange}
          />

          <Autocomplete
            property="dimension"
            options={filters.dimension}
            value={dimension}
            handleChange={handleDimensionChange}
          />

          <Grid item xs={12} sm={6} md={3} lg={12}>
            <TextField
              value={name}
              onChange={handleNameChange}
              label="Name"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={12}>
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
