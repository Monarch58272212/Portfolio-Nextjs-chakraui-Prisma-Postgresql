"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import { BiLogoFacebookSquare } from "react-icons/bi";
import { CiMobile1 } from "react-icons/ci";

export default function Contact() {
  const borderColor = useColorModeValue("gray", "white");
  const bgColor = useColorModeValue("gray.50", "gray.650");

  return (
    <Box
      w={{ base: "90%", md: "70%", lg: "50%" }}
      m="auto"
      p={4}
      mt={50}
      borderRadius="md"
    >
      <Box bg={bgColor} p={4} border={`1px solid ${borderColor}`}>
        <HStack w="100%" spacing={4} mb={4}>
          <Input type="text" placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your email" />
        </HStack>
        <Box mt={4} w="100%">
          <Input type="text" placeholder="Title" />
        </Box>
        <Box mt={4} w="100%">
          <Textarea placeholder="Here is a sample placeholder" />
        </Box>
        <Flex mt={4} justifyContent="flex-start">
          <Button border={`1px solid violet`}>Send</Button>
        </Flex>
      </Box>
      <VStack
        border={`1px solid ${borderColor}`}
        p={4}
        mt={10}
        w={{ base: "90%", md: "70%", lg: "50%" }}
        align="start"
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
    </Box>
  );
}
