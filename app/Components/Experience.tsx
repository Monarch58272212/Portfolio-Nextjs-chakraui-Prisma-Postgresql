"use client";

import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

import {
  MotionBox,
  MotionButton,
  MotionFlex,
  MotionText,
} from "../chakraProviders/Motion";

export default function Experience() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const HeadingColor = useColorModeValue("black", "violet");
  const CERTIFICATE_URL = process.env.NEXT_PUBLIC_CERTIFICATE_URL;
  const DOCUMENT_URL = process.env.NEXT_PUBLIC_DOCUMENT_URL;

  const handleOJTDownload = async () => {
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
  };

  const handleDocumentsDownload = async () => {
    try {
      const response = await fetch(DOCUMENT_URL!);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "DOCUMENT.pdf";
      link.click();
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <Box
      w="95%"
      py={{ base: 4, md: 8 }}
      bg={bgColor}
      id="experience"
      scrollMarginTop="80px"
    >
      <Flex justify="center" align="center" pb={8}>
        <Heading size="lg" color={HeadingColor} mr={4}>
          # Experience
        </Heading>
        <Divider borderColor={HeadingColor} flex="1" />
      </Flex>

      <Stack spacing={8}>
        {/* OJT Experience */}
        <Box
          borderWidth="1px"
          rounded="2xl"
          p={6}
          bg={useColorModeValue("white", "gray.900")}
        >
          <MotionText
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            fontWeight="bold"
            fontSize="lg"
            mb={1}
          >
            On-the-Job Training – IT Support / System Developer
          </MotionText>
          <MotionText
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            fontSize="sm"
            color="gray.400"
          >
            Kidapawan City Campus of the University of Southern Mindanao (USM) |
            Feb 2025 – May 2025
          </MotionText>
          <MotionText
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            mt={4}
            color={textColor}
            textAlign="justify"
            fontSize="sm"
          >
            I helped fix school laptops, printers, and other devices. I assisted
            in setting up fiber internet and Wi-Fi, maintained computer labs,
            and helped students with ID processing. I also developed a Student
            Profiling System to manage student data like personal, academic, and
            ID details using HTML, CSS, JavaScript, and Firebase with search,
            real-time updates, and secure login.
          </MotionText>
          <Flex
            mt={4}
            gap={3}
            flexDirection={{ base: "column", md: "row", lg: "row" }}
          >
            <MotionButton
              viewport={{ once: false, amount: 0.3 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
              variant="outline"
              size="sm"
              leftIcon={<DownloadIcon />}
              colorScheme="blue"
              onClick={handleOJTDownload}
            >
              Download Certificate
            </MotionButton>
            <Link
              href="https://student-profiling-43f5c.web.app/"
              target="_blank"
            >
              <MotionButton
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                variant="outline"
                size="sm"
                colorScheme="teal"
                leftIcon={<ExternalLinkIcon />}
              >
                Visit Student Profiling
              </MotionButton>
            </Link>
          </Flex>
        </Box>

        {/* Capstone Project */}
        <Box
          borderWidth="1px"
          rounded="2xl"
          p={6}
          bg={useColorModeValue("white", "gray.900")}
        >
          <MotionText
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            fontWeight="bold"
            fontSize="lg"
            mb={1}
          >
            Capstone Project – Library Holdings Management System
          </MotionText>
          <MotionText
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            fontSize="sm"
            color="gray.400"
          >
            Makilala Institute of Science and Technology | May 2024 – January
            2025
          </MotionText>
          <MotionText
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            mt={4}
            color={textColor}
            textAlign="justify"
            fontSize="sm"
          >
            A system built to help manage and track library collections,
            including books and journals. It supports CRUD operations, report
            generation, and subject-based monitoring. Built using HTML, CSS,
            JavaScript, and Firebase.
          </MotionText>

          <Flex
            mt={4}
            gap={3}
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            align={"left"}
          >
            <MotionButton
              viewport={{ once: false, amount: 0.3 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
              variant="outline"
              size="sm"
              leftIcon={<DownloadIcon />}
              colorScheme="blue"
              onClick={handleDocumentsDownload}
            >
              Download Document
            </MotionButton>
            <Link href="https://final-library-holding.web.app/" target="_blank">
              <MotionButton
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
                variant="outline"
                size="sm"
                colorScheme="teal"
                leftIcon={<ExternalLinkIcon />}
              >
                Visit Project
              </MotionButton>
            </Link>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
}
