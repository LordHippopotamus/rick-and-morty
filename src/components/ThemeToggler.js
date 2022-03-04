import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, Button, Box } from "@chakra-ui/react";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box zIndex={10} position="fixed" h="100vh" w="100%">
      <Button
        variant="solid"
        bg={colorMode === "light" ? "gray.300" : "gray.700"}
        _hover={{
          bg: colorMode === "light" ? "gray.100" : "gray.900"
        }}
        position="absolute"
        bottom={8}
        right={8}
        onClick={toggleColorMode}
        h={12}
        w={12}
        borderRadius="full"
      >
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Box>
  );
};

export default ThemeToggler;
