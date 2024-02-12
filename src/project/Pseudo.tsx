import { Box, Text, Button } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Box bg="green" w="300px" h="300px" margin="auto" mt="32px">
        <Text fontSize="32px">This is style props example</Text>
        <Button
          mt="32px"
          colorScheme="red"
          _hover={{ background: "blue" }}
          _focus={{ background: "yellow", color: "black" }}
        >
          Click me
        </Button>
      </Box>
    </div>
  );
}

export default App;
