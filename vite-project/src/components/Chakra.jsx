import React, { createContext, useContext, useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Text,
  Button,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

// ---------------- CONTEXT SETUP ---------------- //

const AuthContext = createContext();
const ThemeContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleAuth = () => setIsLoggedIn((prev) => !prev);
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const ThemeProviderCustom = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ---------------- COMPONENTS ---------------- //

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      p="4"
      bg={theme === "light" ? "gray.100" : "gray.700"}
      color={theme === "light" ? "black" : "white"}
    >
      <Text fontWeight="bold">Dashboard</Text>
      <Stack direction="row" spacing={4}>
        <Text>{isLoggedIn ? "Logged In" : "Logged Out"}</Text>
        <Button size="sm" onClick={toggleAuth}>
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
        <Button size="sm" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </Stack>
    </Flex>
  );
};

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      w={{ base: "100%", md: "200px" }}
      bg={theme === "light" ? "gray.200" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
      p="4"
    >
      <Text fontSize="lg" fontWeight="bold">
        Sidebar
      </Text>
      {isLoggedIn && (
        <Text mt="2" fontStyle="italic">
          Welcome back, User!
        </Text>
      )}
      {isMobile && (
        <Text mt="2" fontSize="sm">
          (Visible only on small screens)
        </Text>
      )}
    </Box>
  );
};

const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  const products = ["Product A", "Product B", "Product C", "Product D"];

  return (
    <Box
      flex="1"
      p="4"
      bg={theme === "light" ? "white" : "gray.900"}
      color={theme === "light" ? "black" : "white"}
      minHeight="calc(100vh - 140px)" // for sticky footer
    >
      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={4}
      >
        {products.map((product) => (
          <Box
            key={product}
            p="4"
            borderRadius="md"
            boxShadow="md"
            bg={theme === "light" ? "gray.100" : "gray.700"}
          >
            {product}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box
      as="footer"
      p="4"
      bg={theme === "light" ? "gray.300" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
      textAlign="center"
    >
      &copy; 2025 Chakra Dashboard
    </Box>
  );
};

// ---------------- MAIN APP ---------------- //

const Layout = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Navbar />
      <Flex direction={["column", "row"]} flex="1">
        <Sidebar />
        <MainContent />
      </Flex>
      <Footer />
    </Flex>
  );
};

const Chakra = () => (
  <ChakraProvider>
    <AuthProvider>
      <ThemeProviderCustom>
        <Layout />
      </ThemeProviderCustom>
    </AuthProvider>
  </ChakraProvider>
);

export default Chakra;