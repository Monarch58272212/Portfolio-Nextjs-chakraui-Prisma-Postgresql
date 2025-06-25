"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
//import Lottie from "lottie-react";
//import AboutMe from "@/public/animations/AboutMe.json";

export default function About() {
  return (
    <Box w="95%" mx="auto">
      <VStack align="center" mb={6}>
        {/* Heading Section */}
        <Flex w="100%" justify="center" align="center" width={"95%"}>
          <Heading size="lg" color="violet" mr={4}>
            # About Me & My Goals
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
          px={{ base: 4, md: 8 }}
          boxShadow={"lg"}
        >
          {/* Text Section */}
          <Text w={{ base: "100%", md: "65%" }} textAlign="justify">
            Hi! Im Monarch, a passionate Front-End Developer who loves turning
            designs into real, functional websites. I enjoy working with
            technologies like React, Chakra UI, and Next.js. I started my
            journey in web development in 2023 and have since been building
            clean and responsive interfaces. My goal is to create user-friendly
            web applications and constantly grow as a developer. When Im not
            coding, I enjoy reading tech blogs and improving my design skills.{" "}
            <br />
            <br />
            My short-term goal is to deepen my knowledge in React and
            TypeScript, and to build more complex UI projects using Chakra UI.
            In the long run, I aim to become a full-stack developer and
            contribute to open-source projects. I also dream of working with a
            collaborative tech team where I can grow, share ideas, and build
            real-world applications that make a difference.
          </Text>

          {/* Image Section */}
          <Flex
            w={{ base: "100%", md: "55%" }}
            position="relative"
            justify="center"
            align="center"
          >
            {/*  <Lottie
              animationData={AboutMe}
              loop
              style={{ width: "auto", height: "auto", margin: "0 auto" }}
            /> */}
          </Flex>
        </Stack>
      </VStack>
    </Box>
  );
}
