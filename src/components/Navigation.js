import {
  Flex,
  Box,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  Show
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function App({ pages }) {
  return (
    <Box p={4} borderBottom="1px" borderColor="gray.200">
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as={Link} to="/" size="lg">
          Rick And Morty
        </Heading>
        <Show above="md">
          <Box>
            {pages.map((el) => (
              <Button
                key={el}
                as={Link}
                to={el.toLowerCase()}
                variant="ghost"
                ml={2}
              >
                {el}
              </Button>
            ))}
          </Box>
        </Show>
        <Show below="md">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {pages.map((el) => (
                <MenuItem key={el} as={Link} to={el.toLowerCase()}>
                  {el}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Show>
      </Flex>
    </Box>
  );
}
