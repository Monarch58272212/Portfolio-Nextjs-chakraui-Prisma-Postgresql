"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Experience() {
  const bgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Box w="100%" px={6} py={10} bg={bgColor} id="Experience">
      <Flex justify="center" align="center" mb={10}>
        <Heading size="lg" color="violet" mr={4} scrollMarginTop="80px">
          # Experience
        </Heading>
        <Divider borderColor="teal.300" flex="1" />
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={8}
        justify="center"
        justifyItems={"center"}
        px={{ base: 2, md: 8 }}
      >
        {/* 📄 Certificate Image with hover effect */}
        <Box
          transition="all 0.4s ease"
          _hover={{
            transform: "rotate(-3deg) scale(1.02)",
            boxShadow: "lg",
          }}
          overflow="hidden"
          maxW={{ base: "90%", md: "400px" }}
        >
          <Image
            src="/OJTCERTIFICATE.jpg"
            width={450}
            height={450}
            alt="OJT Certificate"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Box height="200px" w="1px" display={{ base: "none", md: "block" }}>
          <Divider
            orientation="vertical"
            borderColor="teal.300"
            height="100%"
          />
        </Box>

        {/* 📝 Description */}
        <Box maxW="600px" textAlign="left">
          <Text
            color={useColorModeValue("gray.700", "gray.200")}
            lineHeight="1.8"
            textAlign={"justify"}
          >
            As an OJT Intern at <b>XYZ Tech</b>, I worked as a frontend
            developer where I helped build components for a student management
            system using <b>React</b> and <b>Chakra UI</b>. I collaborated with
            a small team, used <b>GitHub</b> for version control, and integrated{" "}
            <b>Firebase</b> for backend services.
            <br />
            <br />
            Through this experience, I developed real-world problem-solving
            skills, improved my coding discipline, and gained confidence in
            building responsive and accessible web apps.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
