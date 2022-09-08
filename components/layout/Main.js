import { Box, Container } from '@mui/material';

const Main = ({ children }) => (
  <Container>
    <Box display="flex" flexDirection="column" gap={4}>
      {children}
    </Box>
  </Container>
);

export default Main;
