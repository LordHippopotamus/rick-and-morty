import { TextField, Grid, Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Filters = ({ fields, button = {}, path }) => {
  const router = useRouter();

  const handleSubmit = event => {
    event.preventDefault();

    const query = {};
    for (let el of event.target) {
      if (el.tagName === 'INPUT') {
        query[el.name] = el.value;
      }
    }

    router.push({ pathname: path, query });
  };

  return (
    <Paper sx={{ padding: 2 }} elevation={1}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          {fields.map(el => (
            <Grid item xs={el.xs || 12} sm={el.sm} md={el.md} lg={el.lg || 12} key={el.label}>
              <TextField
                defaultValue={router.query[el.label.toLowerCase()]}
                label={el.label}
                name={el.label.toLowerCase()}
                fullWidth
                size="small"
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={button.sm} md={button.md} lg={12}>
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
