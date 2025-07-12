"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "../chakraProviders/Motion";
import { TbAlertSquareFilled } from "react-icons/tb";
import { FaLightbulb } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

const personalInfo = [
  {
    icon: <FaIdCard fontSize="24px" />,
    label: "Name:",
    value: "Monarch Jerald Pagcas",
  },
  {
    icon: <MdPlace fontSize="24px" />,
    label: "Place of Birth:",
    value: "Kisante, Makilala, Cotabato",
  },
  {
    icon: <FaPhoneSquareAlt fontSize="24px" />,
    label: "Phone:",
    value: "0991-639-0527",
  },
  {
    icon: <IoCalendarSharp fontSize="24px" />,
    label: "Date of Birth:",
    value: "March-29-2000",
  },
  {
    icon: <MdEmail fontSize="24px" />,
    label: "Email:",
    value: "monarchpagcas@gmail.com",
  },
  {
    icon: <FaGraduationCap fontSize="24px" />,
    label: "Education:",
    value: "Bachelor of Science and Information System",
  },
];

export default function About() {
  const HeadingColor = useColorModeValue("black", "violet");
  return (
    <Box
      w="95%"
      mx="auto"
      py={{ base: 3, md: 5, lg: 6 }}
      id="about"
      scrollMarginTop="80px"
    >
      <VStack align="flex-start">
        {/* Heading Section */}
        <Flex justify="center" align="center" width="100%" mb={6}>
          <Divider borderColor={HeadingColor} flex="1" />
          <Heading size="lg" color={HeadingColor} ml={4}>
            # About Me & My Goals
          </Heading>
        </Flex>

        {/* Text + Image Section */}
        <Stack
          direction={{ base: "column", md: "column", lg: "row" }}
          spacing={8}
          align="center"
          justify="center"
          w="100%"
          px={{ base: 4, md: 8 }}
          boxShadow="lg"
        >
          {/* Text Section */}
          <Flex flexDirection="column" w="100%">
            <Flex
              pb={4}
              justify="start"
              align="flex-start"
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: 5, md: 8, lg: 10 }}
            >
              {/* Who Am I */}
              <MotionFlex
                flexDirection="column"
                gap={4}
                w={{ base: "100%", md: "50%" }}
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              >
                <Flex gap={2} align="center" fontWeight="bold">
                  <TbAlertSquareFilled fontSize="24px" />
                  Who Am I
                </Flex>
                <Text textAlign="justify" color={"gray.500"}>
                  I’m a Front-End Developer who loves turning designs into real
                  websites. I started in 2023 and now use tools like React,
                  Next.js, and Chakra UI. I enjoy building clean and responsive
                  interfaces that work well on any device.
                </Text>
              </MotionFlex>

              {/* My Approach */}
              <MotionFlex
                flexDirection="column"
                gap={4}
                w={{ base: "100%", md: "50%" }}
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              >
                <Flex gap={2} align="center" fontWeight="bold">
                  <FaLightbulb fontSize="24px" />
                  My Approach
                </Flex>
                <Text textAlign="justify" color={"gray.500"}>
                  I focus on writing clean, user-friendly code and learning
                  continuously. Right now, I’m improving my React and TypeScript
                  skills. My goal is to become a full-stack developer and help
                  build real-world apps with a team.
                </Text>
              </MotionFlex>
            </Flex>

            {/* Personal Info Section Title */}
            <Flex
              pb={{ base: 4, md: 6 }}
              px={{ base: 3, md: 5, lg: 6 }}
              flexDirection="column"
              borderWidth="1px"
              rounded="2xl"
              borderRadius="lg"
              bg={useColorModeValue("white", "gray.900")}
            >
              {/* Section Header */}
              <MotionFlex
                flexDirection="row"
                align="center"
                fontWeight="bold"
                gap={2}
                py={{ base: 3, md: 4 }}
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              >
                <IoIosAlert fontSize="24px" />
                <Text fontSize={{ base: "md", md: "lg" }}>Personal Info</Text>
              </MotionFlex>

              {/* Personal Info Grid */}
              <SimpleGrid
                columns={{ base: 1, sm: 1, md: 2 }}
                spacing={{ base: 3, md: 4 }}
              >
                {personalInfo.map((info, index) => (
                  <MotionFlex
                    key={index}
                    gap={2}
                    align="center"
                    wrap="wrap"
                    viewport={{ once: false, amount: 0.3 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 * index,
                      ease: "easeInOut",
                    }}
                  >
                    {info.icon}
                    <Text
                      fontWeight="semibold"
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      {info.label}:
                    </Text>
                    <Text color="gray.500" fontSize={{ base: "sm", md: "md" }}>
                      {info.value}
                    </Text>
                  </MotionFlex>
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>

          {/* Image Section with Animated Bubbles */}
          <Flex
            w={{ base: "100%", md: "25%" }}
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
                border="1px solid violet"
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

              {/* Large Violet Bubble */}
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
                border="1px solid peachpuff"
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
