import { Flex, Stack } from "@chakra-ui/react";

import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <Stack flex="1" alignItems={"center"}>
        {/* Aca van a ir las rutas */}
      </Stack>
      <Footer />
    </Flex>
  );
}

export default App;
