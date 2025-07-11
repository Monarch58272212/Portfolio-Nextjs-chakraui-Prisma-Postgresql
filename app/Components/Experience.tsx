"use client";

import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Experience() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const HeadingColor = useColorModeValue("black", "violet");
  const CERTIFICATE_URL = process.env.NEXT_PUBLIC_CERTIFICATE_URL;
  return (
    <Box
      w="95%"
      py={{ base: 3, md: 5, lg: 6 }}
      bg={bgColor}
      id="experience"
      scrollMarginTop="80px"
    >
      <Flex
        w="100%"
        justify="center"
        align="center"
        pb={{ base: 5, md: 6, lg: 10 }}
      >
        <Heading size="lg" color={HeadingColor} mr={4}>
          # Experience
        </Heading>
        <Divider borderColor={HeadingColor} flex="1" />
      </Flex>

      <Flex flexDirection={"column"} gap={2}>
        <Flex flexDirection={"column"}>
          <Text>On-the-Job Training (OJT) – IT Support / System Developer</Text>

          <Text>
            Kidapawan City Campus of the University of Southern Mindanao (USM)
          </Text>
          <Flex align={"center"} gap={2}>
            <Text>February 2025 – May 2025</Text>
            <Button
              variant="link"
              fontSize="sm"
              colorScheme="blue"
              onClick={async () => {
                try {
                  const response = await fetch(CERTIFICATE_URL!);
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = "OJTCERTIFICATE.jpg";
                  link.click();
                } catch (error) {
                  console.error("Download failed:", error);
                }
              }}
            >
              Download Certificate
            </Button>
          </Flex>

          <Flex flexDirection={"column"}>
            <Text color={"gray.500"} textAlign={"justify"}>
              During my internship as an IT Support intern, I helped fix broken
              laptops, printers, and other school devices. I also assisted with
              installing fiber internet and Wi-Fi routers around the campus. I
              regularly checked the computers to make sure they were working
              well. I also helped students with ID processing and other
              school-related documents. I also created a Student Profiling
              System to make it easier to manage student records. The system
              lets staff store and view student information like personal
              details, academic background, and ID records. I built it using
              HTML, CSS, JavaScript, and Firebase, and added features like
              search, real-time updates, and secure login. This system helped
              the school organize student data better.
            </Text>
          </Flex>
        </Flex>

        <Flex flexDirection={"column"}>
          <Text fontWeight="bold">
            Capstone Project – Library Holdings Management System
          </Text>
          <Text>MIST - Makilala Institute of Science and Technology</Text>
          <Flex align={"center"} gap={2}>
            <Text>February 2025 – May 2025</Text>
            <Link href={"https://final-library-holding.web.app/"}>
              <Button variant="link" fontSize="sm" colorScheme="blue">
                {" "}
                Visit Project
              </Button>
            </Link>
          </Flex>
          <Text color="gray.500" textAlign="justify">
            As part of our final requirement, I developed a Library Holdings
            Management System to help organize and monitor books and journals in
            the school library. The system supports CRUD operations, report
            generation, and subject-based tracking. Built using React, Firebase,
            and Chakra UI, it improved the way collections were managed and
            aligned with academic subjects.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
