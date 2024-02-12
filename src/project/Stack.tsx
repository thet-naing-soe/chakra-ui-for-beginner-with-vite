import { Box, Stack, HStack, VStack } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Stack spacing="24px" direction="row">
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
      </Stack>
    </div>
  );
}

export default App;
