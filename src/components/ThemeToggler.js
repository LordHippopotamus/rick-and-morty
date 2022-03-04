import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, Button } from "@chakra-ui/react";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      variant="solid"
      bg={colorMode === "light" ? "gray.300" : "gray.700"}
      _hover={{
        bg: colorMode === "light" ? "gray.100" : "gray.900"
      }}
      position="fixed"
      zIndex={10}
      bottom={8}
      right={8}
      h={12}
      w={12}
      borderRadius="full"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggler;
