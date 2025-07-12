"use client";

import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
  Link,
  Button,
} from "@chakra-ui/react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { CiMobile1 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

// Framer Motion wrapper components
const MotionBox = motion(Box);
const MotionInput = motion(Input);
const MotionTextarea = motion(Textarea);

export default function Contact() {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const bgColor = useColorModeValue("white", "gray.800");
  const HeadingColor = useColorModeValue("black", "violet");
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "Message Sent!",
        description: "I'll get back to you as soon as possible.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setForm({ name: "", email: "", title: "", message: "" });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      w="95%"
      mx="auto"
      py={{ base: 8, md: 14 }}
      id="contact"
      scrollMarginTop="80px"
    >
      <Flex gap={8} flexDirection={"column"} alignItems={"center"}>
        <Flex w="100%" justify="center" align="center">
          <Heading size="lg" color={HeadingColor} mr={4}>
            # Contact Me
          </Heading>
          <Divider borderColor={HeadingColor} flex="1" />
        </Flex>

        <Text color="gray.500" textAlign="center" maxW="3xl" fontSize="md">
          Have a question, collaboration, or opportunity? Feel free to reach out
          through the form or contact links below.
        </Text>

        <Flex w="100%" px={{ base: 2, md: 10 }} justifyContent="center">
          <MotionBox
            bg={bgColor}
            p={{ base: 6, md: 10 }}
            rounded="2xl"
            shadow="xl"
            w="full"
            maxW="lg"
            mx="auto"
            border="1px solid"
            borderColor={borderColor}
            backdropFilter="blur(6px)"
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <Heading size="md" color="teal.400" mb={2}>
              Send Me a Message
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={4}>
              I usually respond within 24 hours. Fill in the form below.
            </Text>

            <form onSubmit={handleSend}>
              <VStack spacing={4}>
                <HStack
                  spacing={4}
                  w="100%"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <MotionInput
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    variant="flushed"
                    focusBorderColor="teal.400"
                    _hover={{ borderColor: "teal.300" }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    w="100%"
                  />
                  <MotionInput
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    variant="flushed"
                    focusBorderColor="teal.400"
                    _hover={{ borderColor: "teal.300" }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    w="100%"
                  />
                </HStack>

                <MotionInput
                  name="title"
                  placeholder="Subject"
                  value={form.title}
                  onChange={handleChange}
                  required
                  variant="flushed"
                  focusBorderColor="teal.400"
                  _hover={{ borderColor: "teal.300" }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  w="100%"
                />

                <MotionTextarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  variant="flushed"
                  focusBorderColor="teal.400"
                  _hover={{ borderColor: "teal.300" }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />

                <Flex mt={4} w="100%" justifyContent="flex-start">
                  <Button
                    type="submit"
                    size="sm"
                    isLoading={isLoading}
                    loadingText="Sending..."
                    spinnerPlacement="start"
                    borderRadius={"none"}
                  >
                    Submit
                  </Button>
                </Flex>
              </VStack>
            </form>

            <Flex
              gap={{ base: 2, md: 5, lg: 6 }}
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              justify="center"
              mt={8}
            >
              <Link
                href="mailto:youremail@example.com"
                isExternal
                color="teal.400"
              >
                <HStack>
                  <MdEmail />
                  <Text>Email Me</Text>
                </HStack>
              </Link>
              <Link
                href="https://facebook.com/yourprofile"
                isExternal
                color="teal.400"
              >
                <HStack>
                  <BiLogoFacebookSquare />
                  <Text>Facebook</Text>
                </HStack>
              </Link>
              <HStack color="teal.400">
                <CiMobile1 />
                <Text>+63 912 345 6789</Text>
              </HStack>
            </Flex>
          </MotionBox>
        </Flex>
      </Flex>
    </Box>
  );
}
