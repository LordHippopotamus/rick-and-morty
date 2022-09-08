import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = ({ pages }) => {
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => setOpen(false);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Rick And Morty
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {pages.map(page => (
            <Link href={'/' + page.toLocaleLowerCase()} key={page}>
              <Button color="inherit">{page + 's'}</Button>
            </Link>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Box ref={anchor} onClick={handleOpenMenu}>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu open={open} onClose={handleCloseMenu} anchorEl={anchor.current} keepMounted>
            {pages.map(page => (
              <Link href={'/' + page.toLocaleLowerCase()} key={page}>
                <MenuItem>{page + 's'}</MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
