"use client";

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
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box w="95%" mx="auto" pb={10}>
      <VStack align="center" spacing={8}>
        {/* Section Header */}
        <Flex w="100%" justify="center" align="center">
          <Heading size="lg" color="violet" mr={4}>
            # Contact Me
          </Heading>
          <Divider borderColor="teal.300" flex="1" />
        </Flex>

        {/* Content Layout */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={10}
          align="flex-start"
          justify="center"
          w="100%"
        >
          {/* Contact Message */}
          <Text
            w={{ base: "100%", md: "60%" }}
            textAlign="justify"
            fontSize="md"
            color={textColor}
          >
            I am actively seeking front-end development opportunities where I
            can contribute and grow. Should you have any questions or other
            collaboration in mind, please don’t hesitate to contact me.
          </Text>

          {/* Contact Info Box */}
          <Flex w={{ base: "100%", md: "35%" }} justify="center" align="center">
            <VStack
              spacing={4}
              p={5}
              mt={2}
              bg={bgColor}
              w={{ base: "100%", sm: "80%", md: "100%" }}
              align="start"
              border={`1px solid ${borderColor}`}
              borderRadius="xl"
              boxShadow="md"
            >
              <Text fontWeight="bold" color="teal.400">
                Reach out to me
              </Text>

              <Link
                href="https://web.facebook.com/monarch.pagcas"
                target="_blank"
              >
                <HStack
                  _hover={{ color: "blue.500", transform: "scale(1.02)" }}
                  transition="all 0.2s"
                >
                  <BiLogoFacebookSquare size={24} color="#1877F2" />
                  <Text>Monarch Pagcas</Text>
                </HStack>
              </Link>

              <HStack>
                <CiMobile1 size={24} color="#1877F2" />
                <Text>0991 639 0527</Text>
              </HStack>

              <HStack>
                <MdEmail size={24} color="#DD4B39" />
                <Text>monarchpagcas@gmail.com</Text>
              </HStack>
            </VStack>
          </Flex>
        </Stack>
      </VStack>
    </Box>
  );
}
