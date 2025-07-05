"use client";
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
import { FaFacebookMessenger, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import {
  MotionBox,
  MotionHeading,
  MotionText,
  MotionButton,
} from "../chakraProviders/Motion";

export default function FirstPage() {
  const border = useColorModeValue("violet", "white");
  const TextHeading = useColorModeValue("#EF88AD", "violet");
  const textAccent = useColorModeValue("#7C3AED", "violet");

  return (
    <VStack w="100%" position={"relative"}>
      <MotionBox
        id="home"
        scrollMarginTop="80px"
        viewport={{ once: false, amount: 0.3 }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        position={"absolute"}
        height={"30%"}
        left={{ base: 13, md: 13, lg: 20 }}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
      >
        <Divider orientation="vertical" border={`1px dotted ${border}`} />
        <Box fontSize={{ base: "15", md: "15", lg: "20" }}>
          <FaGithub />
        </Box>
        <Box fontSize={{ base: "15", md: "15", lg: "20" }}>
          <FaFacebookMessenger />
        </Box>
        <Box fontSize={{ base: "15", md: "15", lg: "20" }}>
          <TfiEmail />
        </Box>
      </MotionBox>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        w={{ base: "90%", md: "90%", lg: "70%" }}
        maxW="1200px"
        h={{ base: "auto", md: "423px" }}
        mt={10}
        mx="auto"
        p={4}
      >
        {/* TEXT SECTION */}
        <Box
          w={{ base: "100%", md: "45%, lg: 80%" }}
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          textAlign={{ base: "center", md: "left" }}
        >
          <MotionHeading
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            fontSize={{ base: "2xl", md: "3xl" }}
            w="full"
          >
            Monarch is a{" "}
            <Text as="span" color={TextHeading}>
              web designer
            </Text>{" "}
            and{" "}
            <Text as="span" color="violet">
              front-end developer
            </Text>
          </MotionHeading>

          <MotionText
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            fontFamily={"fira Code"}
            fontSize={{ base: "md", md: "lg" }}
            w="full"
          >
            He crafts responsive websites where technologies meet creativity
          </MotionText>
          <HStack justify={{ base: "center", md: "start" }} spacing={4} pt={4}>
            <Link href="/Contact" passHref>
              <MotionButton
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                colorScheme="purple"
                size="sm"
              >
                Contact me!
              </MotionButton>
            </Link>
            <Link href="#projects" passHref>
              <MotionButton
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                variant="outline"
                borderColor={textAccent}
                color={textAccent}
                size="sm"
              >
                See my Projects
              </MotionButton>
            </Link>
          </HStack>
        </Box>

        {/* IMAGE SECTION */}
        <VStack
          h="auto"
          w={{ base: "100%", md: "45%", lg: "30%" }}
          align="center"
          justify="flex-start"
          px={4}
          pt={8}
          pb={4}
          position="relative"
        >
          <Box
            position="relative"
            w={{ base: "200px", md: "350px" }}
            h={{ base: "200px", md: "350px" }}
          >
            <MotionBox
              viewport={{ once: false, amount: 0.3 }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeInOut",
              }}
              position="absolute"
              bottom="10"
              left="20"
            >
              <MotionBox
                transition={{ duration: 3, repeat: Infinity }}
                border="1px solid purple"
                boxSize={{ base: "100px", md: "180px", lg: "200px" }}
                animate={{ y: [0, -10, 0] }}
              />
            </MotionBox>
            <MotionBox
              viewport={{ once: false, amount: 0.3 }}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeInOut",
              }}
              position="absolute"
              bottom="18"
              left="38"
            >
              <MotionBox
                transition={{ duration: 3, repeat: Infinity }}
                border="1px solid aqua"
                boxSize={{ base: "50px", md: "70px", lg: "70px" }}
                animate={{ y: [0, -20, 0] }}
              />
            </MotionBox>
            <MotionBox
              viewport={{ once: false, amount: 0.3 }}
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeInOut",
              }}
              position="absolute"
              bottom={{ base: "20", md: "58", lg: "148" }}
              left={{ base: "10", md: "10", lg: "8" }}
            >
              <MotionBox
                transition={{ duration: 3, repeat: Infinity }}
                boxSize={{ base: "20px", md: "20px", lg: "30px" }}
                animate={{ y: [0, 30, 0] }}
                background={"linear-gradient(to right, violet, purple)"}
              />
            </MotionBox>
            <MotionBox
              viewport={{ once: false, amount: 0.3 }}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeInOut",
              }}
              position="absolute"
              top="18"
              right="38"
            >
              <MotionBox
                transition={{ duration: 3, repeat: Infinity }}
                boxSize={{ base: "10px", md: "20px", lg: "30px" }}
                animate={{ y: [0, -30, 0] }}
                background={"linear-gradient(to right, darkgreen, green)"}
              />
            </MotionBox>

            <MotionBox
              viewport={{ once: false, amount: 0.3 }}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeInOut",
              }}
              position="absolute"
              bottom={{ base: "20", md: "30", lg: "40" }}
              left="68"
            >
              <MotionBox
                transition={{ duration: 3, repeat: Infinity }}
                border="1px solid green"
                boxSize={{ base: "100px", md: "180px", lg: "160px" }}
                animate={{ y: [0, -50, 0] }}
              />
            </MotionBox>
            <MotionBox
              viewport={{ once: false, amount: 0.3 }}
              initial={{ opacity: 0, x: 250 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeInOut",
              }}
              position="absolute"
              bottom="38"
              right="18"
            >
              <MotionBox
                boxSize={{ base: "40px", md: "60px", lg: "80px" }}
                animate={{ y: [0, -34, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                background={"linear-gradient(to right, #ff7e5f, #feb47b)"}
              />
            </MotionBox>

            <Image
              src="/monarch.png"
              alt="My Logo"
              fill
              priority
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
            Currently working on Portfolio!{" "}
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
