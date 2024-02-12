import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Flex justify="space-between"  alignItems="center">
        <Box bg="green" w="100px" h="200px">
          Item 1
        </Box>
        <Box bg="blue" w="100px" h="200px">
          Item 2
        </Box>
        <Box bg="red" w="200px" h="100px">
          Item 3
        </Box>
        <Box bg="tomato" w="100px" h="200px">
          Item 4
        </Box>
      </Flex>
    </div>
  );
}

export default App;
