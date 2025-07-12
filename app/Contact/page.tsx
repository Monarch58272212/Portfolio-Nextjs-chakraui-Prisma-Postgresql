"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Flex,
  HStack,
  Input,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { Submitbutton } from "../Components/Toggle";
import Lottie from "lottie-react";

export default function Contact() {
  const toast = useToast();

  const bgColor = useColorModeValue("gray.50", "gray.650");

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

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        toast({
          title: "Message sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setForm({ name: "", email: "", title: "", message: "" });
      })
      .catch((err: unknown) => {
        if (typeof err === "object" && err !== null && "text" in err) {
          toast({
            title: "Error sending message.",
            description: (err as { text: string }).text,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Error",
            description: "Unknown error occurred.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      });
  };
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      px={{ base: 4, md: 10 }}
      py={{ base: 10, md: 16 }}
      gap={10}
    >
      <Box
        bg={bgColor}
        p={{ base: 6, md: 10 }}
        rounded="2xl"
        shadow="2xl"
        w="full"
        maxW="lg"
      >
        <form onSubmit={handleSend}>
          <HStack
            spacing={4}
            mb={4}
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </HStack>
          <Input
            name="title"
            placeholder="Subject"
            value={form.title}
            onChange={handleChange}
            mt={4}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            mt={4}
            required
          />
          <Flex mt={4} justifyContent="flex-start">
            <Submitbutton />
          </Flex>
        </form>
      </Box>
    </Box>
  );
}
