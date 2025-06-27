"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookMessenger, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function FirstPage() {
  const border = useColorModeValue("violet", "white");
  const MotionBox = motion(Box);
  return (
    <VStack w="100%" position={"relative"}>
      <Box
        id="home"
        scrollMarginTop="80px"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        as={motion.div}
        animate={{ y: [0, -100, 0] }}
        style={{
          transition: "all 0.3s ease-in-out",
        }}
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
        <Box
          w={{ base: "100%", md: "45%" }}
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          textAlign={{ base: "center", md: "left" }}
        >
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
          <HStack justifyContent={{ base: "center", md: "center", lg: "left" }}>
            <Link
              href="/Contact"
              style={{ textDecoration: "none" }}
              prefetch={true}
            >
              <Button
                border="1px solid violet"
                mt={4}
                variant="solid"
                size={{ base: "sm", md: "md", lg: "sm" }}
              >
                Contact me!
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                variant="outline"
                mt={4}
                size={{ base: "sm", md: "md", lg: "sm" }}
              >
                See my Projects
              </Button>
            </Link>
          </HStack>
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
            <MotionBox
              position="absolute"
              bottom="10"
              left="20"
              border="1px solid purple"
              boxSize={{ base: "100px", md: "180px", lg: "200px" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <MotionBox
              position="absolute"
              bottom="18"
              left="38"
              border="1px solid aqua"
              boxSize={{ base: "50px", md: "70px", lg: "70px" }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <MotionBox
              position="absolute"
              bottom={{ base: "20", md: "58", lg: "48" }}
              left={{ base: "10", md: "10", lg: "8" }}
              boxSize={{ base: "20px", md: "20px", lg: "30px" }}
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              background={"linear-gradient(to right, violet, purple)"}
            />

            <MotionBox
              position="absolute"
              top="18"
              right="38"
              boxSize={{ base: "10px", md: "20px", lg: "30px" }}
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              background={"linear-gradient(to right, darkgreen, green)"}
            />

            <MotionBox
              position="absolute"
              bottom={{ base: "20", md: "30", lg: "40" }}
              left="68"
              border="1px solid green"
              boxSize={{ base: "100px", md: "180px", lg: "160px" }}
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <MotionBox
              position="absolute"
              bottom="38"
              right="38"
              boxSize={{ base: "40px", md: "60px", lg: "80px" }}
              animate={{ y: [0, -54, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              background={"linear-gradient(to right, #ff7e5f, #feb47b)"}
            />
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
