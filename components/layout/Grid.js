import { Grid as MuiGrid } from '@mui/material';

const Grid = ({ list, Component, path }) => (
  <MuiGrid container spacing={2}>
    {list.map(el => (
      <MuiGrid item xs={12} sm={6} md={4} lg={3} key={el.id}>
        <Component {...el} path={path} />
      </MuiGrid>
    ))}
  </MuiGrid>
);

export default Grid;
