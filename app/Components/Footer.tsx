import {
  Box,
  Divider,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const borderColor = useColorModeValue("black", "teal.300");
  return (
    <Box w="95%" mt={10} mb={2}>
      <Divider borderColor="teal.300" flex="1" />
      <Flex
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
        w="80%"
        justifyItems="center"
        mx="auto"
      >
        <Box>
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyItems={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Link href="/">
              <Image src="/always.png" alt="My Logo" width={80} height={80} />
            </Link>
            <Link href="https://gusoaxcell@gmail.com">
              <Text fontSize={12} color={borderColor} textAlign={"end"}>
                gusoaxcell@gmail.com
              </Text>
            </Link>
          </Box>
        </Box>

        <VStack
          p={4}
          mt={2}
          w={{ base: "90%", md: "70%", lg: "20%" }}
          align={"center"}
        >
          <Text>Media</Text>
          <Link href="https://github.com/gusoaxcell">
            <HStack>
              <FaGithub size={24} color="#1877F2" />
            </HStack>
          </Link>
        </VStack>
      </Flex>
      <Box textAlign={"center"} mt={4}>
        <Text fontFamily={"Fira Code"}>© Copyright 2022. Made by Monarch</Text>
      </Box>
    </Box>
  );
}
