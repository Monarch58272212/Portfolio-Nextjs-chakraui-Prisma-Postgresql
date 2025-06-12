import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { CiMobile1 } from "react-icons/ci";

export default function Contact() {
  const borderColor = useColorModeValue("gray", "white");
  return (
    <Box w="95%" mx="auto">
      <VStack align="center" mb={6}>
        {/* Heading Section */}
        <Flex w="100%" justify="center" align="center">
          <Heading size="lg" color="teal.300" mr={4}>
            # Contact Me
          </Heading>
          <Divider borderColor="teal.300" flex="1" />
        </Flex>

        {/* Text + Image Section */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          align="center"
          justify="center"
          w="100%"
        >
          {/* Text Section */}
          <Text w={{ base: "100%", md: "65%" }} textAlign="justify">
            Im interested in freelance opportunities. However, if you have other
            request or question, dont hesitate to contact me
          </Text>

          {/* Image Section */}
          <Flex
            w={{ base: "100%", md: "35%" }}
            position="relative"
            justify="center"
            align="center"
          >
            <VStack
              p={4}
              mt={2}
              w={{ base: "90%", md: "70%", lg: "50%" }}
              align="start"
              border={`1px solid ${borderColor}`}
            >
              <Text>Support me here</Text>
              <Link href="https://web.facebook.com/monarch.pagcas">
                <HStack>
                  <BiLogoFacebookSquare size={24} color="#1877F2" />
                  <Text>Monarch Pagcas</Text>
                </HStack>
              </Link>
              <HStack>
                {" "}
                <CiMobile1 size={24} color="#1877F2" />
                <Text>09916390527</Text>
              </HStack>
            </VStack>
          </Flex>
        </Stack>
      </VStack>
    </Box>
  );
}
