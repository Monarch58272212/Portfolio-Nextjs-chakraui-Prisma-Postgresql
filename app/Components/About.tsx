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
import { motion } from "framer-motion";

export default function About() {
  const MotionBox = motion(Box);
  return (
    <Box w="95%" mx="auto" pb={10}>
      <VStack align="center" mb={6}>
        {/* Heading Section */}
        <Flex justify="center" align="center" width={"100%"}>
          <Heading size="lg" color="violet">
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
            <Box
              position="relative"
              w={{ base: "200px", md: "350px" }}
              h={{ base: "200px", md: "350px" }}
            >
              {/* Purple Bubble */}
              <MotionBox
                position="absolute"
                bottom="10"
                left="20"
                borderRadius="full"
                bgGradient="linear(to-r, #8e2de2, #4a00e0)"
                boxSize={{ base: "100px", md: "180px", lg: "200px" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                zIndex={0}
              />

              {/* Aqua Bubble */}
              <MotionBox
                position="absolute"
                bottom="18"
                left="38"
                borderRadius="full"
                bg="cyan.300"
                boxSize={{ base: "50px", md: "70px", lg: "70px" }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                zIndex={0}
              />

              {/* Violet Gradient Bubble */}
              <MotionBox
                position="absolute"
                bottom={{ base: "20", md: "58", lg: "48" }}
                left={{ base: "10", md: "10", lg: "8" }}
                borderRadius="full"
                border={"1px solid violet"}
                boxSize={{ base: "20px", md: "20px", lg: "30px" }}
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                zIndex={0}
              />

              {/* Green Gradient Bubble */}
              <MotionBox
                position="absolute"
                top="18"
                right="38"
                boxShadow="0 0 20px rgba(255, 126, 95, 0.6)"
                borderRadius="full"
                bgGradient="linear(to-r, green.300, green.700)"
                boxSize={{ base: "10px", md: "20px", lg: "30px" }}
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                zIndex={0}
              />

              {/* Green Bubble (Large) */}
              <MotionBox
                position="absolute"
                bottom={{ base: "20", md: "30", lg: "40" }}
                left="68"
                borderRadius="full"
                bgGradient="linear(to-r, violet, purple)"
                boxSize={{ base: "100px", md: "180px", lg: "160px" }}
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                zIndex={0}
              />

              {/* Peach Gradient Bubble */}
              <MotionBox
                position="absolute"
                bottom="38"
                right="38"
                borderRadius="full"
                border={"1px solid peachpuff"}
                boxSize={{ base: "40px", md: "60px", lg: "80px" }}
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                zIndex={0}
              />
            </Box>
          </Flex>
        </Stack>
      </VStack>
    </Box>
  );
}
