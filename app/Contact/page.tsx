"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Flex,
  HStack,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { CiMobile1 } from "react-icons/ci";
import { Submitbutton } from "../Components/Toggle";

export default function Contact() {
  const toast = useToast();
  const borderColor = useColorModeValue("gray", "white");
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
      w={{ base: "90%", md: "70%", lg: "50%" }}
      m="auto"
      p={4}
      mt={50}
      borderRadius="md"
    >
      <Box bg={bgColor} p={4} border={`1px solid ${borderColor}`}>
        <form onSubmit={handleSend}>
          <HStack spacing={4} mb={4}>
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
      <VStack
        border={`1px solid ${borderColor}`}
        p={4}
        mt={10}
        w={{ base: "90%", md: "70%", lg: "50%" }}
        align="start"
      >
        <Text>Support me here</Text>
        <Link href="https://web.facebook.com/monarch.pagcas">
          <HStack>
            <BiLogoFacebookSquare size={24} color="#1877F2" />
            <Text>Monarch Pagcas</Text>
          </HStack>
        </Link>
        <HStack>
          {" "}
          <CiMobile1 size={24} color="#1877F2" />
          <Text>09916390527</Text>
        </HStack>
      </VStack>
    </Box>
  );
}
