import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

export function Pricing() {
  const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
      <HStack as="li" spacing="5" {...rest} alignItems="flex-start">
        <Icon as={CheckIcon} w="22px" h="22px" flexShrink={0} />
        <Text textAlign="left">{children}</Text>
      </HStack>
    );
  };
  return (
    <Box as="section" mx="6">
      <Box
        maxW="994px"
        m="auto"
        mt="-160px"
        textAlign="center"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p={["28px", "60px", "60px"]}>
            <Text fontSize="xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]} mt="4">
              $329
            </Heading>
            <Text color="#171923" fontSize="lg" fontWeight="medium" mt="2">
              billed just once
            </Text>
            <Button
              colorScheme="purple"
              size="lg"
              w={["auto", "282px", "282px"]}
              mt="6"
            >
              Get Started
            </Button>
          </Box>
          <Box p={["32px", "32px", "60px"]} bg="white" fontSize="lg">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" pt="6" spacing="5">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
