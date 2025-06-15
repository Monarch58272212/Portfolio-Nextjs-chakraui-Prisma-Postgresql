"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookMessenger, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function FirstPage() {
  const border = useColorModeValue("violet", "white");
  return (
    <VStack w="100%" position={"relative"}>
      <Box
        position={"absolute"}
        height={"30%"}
        w={0}
        left={{ base: 13, md: 13, lg: 20 }}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
      >
        <Divider orientation="vertical" border={`1px solid ${border}`} />
        <Box fontSize={{ base: "15", md: "15", lg: "20" }}>
          <FaGithub />
        </Box>
        <Box fontSize={{ base: "15", md: "15", lg: "20" }}>
          <FaFacebookMessenger />
        </Box>
        <Box fontSize={{ base: "15", md: "15", lg: "20" }}>
          <TfiEmail />
        </Box>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        w={{ base: "90%", md: "90%", lg: "80%" }}
        maxW="1200px"
        h={{ base: "auto", md: "423px" }}
        mt={10}
        mx="auto"
        gap={6}
        p={4}
      >
        {/* TEXT SECTION */}
        <Box gap={4} w={{ base: "100%", md: "45%" }}>
          <Heading
            as="h4"
            fontFamily={"fira Code"}
            fontSize={{ base: "2xl", md: "3xl" }}
            w="full"
          >
            Monarch is a{" "}
            <Text as="span" color="violet">
              web designer
            </Text>{" "}
            and{" "}
            <Text as="span" color="violet">
              front-end developer
            </Text>
          </Heading>

          <Text
            fontFamily={"fira Code"}
            mt={4}
            fontSize={{ base: "md", md: "lg" }}
            w="full"
          >
            He crafts responsive websites where technologies meet creativity
          </Text>
          <Link href="/Contact" style={{ textDecoration: "none" }}>
            <Button
              border="1px solid violet"
              mt={4}
              colorScheme="purple"
              variant="outline"
            >
              Contact me!!
            </Button>
          </Link>
        </Box>

        {/* IMAGE SECTION */}
        <VStack
          h="auto"
          w={{ base: "100%", md: "45%" }}
          align="center"
          justify="flex-start"
          px={4}
          pt={0}
          pb={4}
          position="relative"
        >
          <Box
            position="relative"
            w={{ base: "200px", md: "350px" }}
            h={{ base: "200px", md: "350px" }}
          >
            <Box
              position="absolute"
              bottom="10"
              left="20"
              border="1px solid purple"
              boxSize={{ base: "100px", md: "180px", lg: "200px" }}
            />

            <Box
              position="absolute"
              bottom="18"
              left="38"
              border="1px solid aqua"
              boxSize={{ base: "100px", md: "180px", lg: "200px" }}
            />
            <Box
              position="absolute"
              bottom="28"
              left="68"
              border="1px solid green"
              boxSize={{ base: "100px", md: "180px", lg: "200px" }}
            />

            <Image
              src="/monarch.png"
              alt="My Logo"
              fill
              style={{
                objectFit: "cover",
                borderBottom: "1px solid violet",
                borderRadius: "12px",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>

          <Text
            textAlign="center"
            fontFamily={"fira Code"}
            border={`1px solid ${border}`}
            px={10}
          >
            Currently working on Portfolio!
          </Text>
        </VStack>
      </Flex>

      <VStack
        mt={10}
        borderTop={`1px solid ${border}`}
        w={{ base: "90%", md: "80%", lg: "70%" }}
        p={4}
        marginTop={{ base: "20px", md: "40px", lg: "70px" }}
      >
        <Box position={"relative"}>
          <Text
            fontFamily={"Fira Code"}
            fontSize={"2xl"}
            border={`0.2px solid ${border}`}
            p={5}
          >
            &quot; With great power comes great electricity bill &quot;
          </Text>

          {/* Right-aligned author */}
          <Flex justifyContent="flex-end">
            <Text
              fontFamily={"Fira Code"}
              border={`1px solid ${border}`}
              px={6}
              mt={2}
              w="fit-content"
            >
              – Dr. Who
            </Text>
          </Flex>
        </Box>
      </VStack>
    </VStack>
  );
}
