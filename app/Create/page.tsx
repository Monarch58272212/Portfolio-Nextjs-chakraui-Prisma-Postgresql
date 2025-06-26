"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { handleSubmission } from "@/app/api/action";
import { Submitbutton } from "@/app/Components/Toggle";

export default function Create() {
  return (
    <>
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        w={{ base: "95%", md: "90%", lg: "95%" }}
        m={"auto"}
        pt={5}
      >
        <Heading
          as="h2"
          fontFamily="Fira Code, monospace"
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={0}
          color="violet"
        >
          Create Project
        </Heading>
        <Link href="/Projects">
          <Button> Back to Projects →</Button>
        </Link>
      </Flex>
      <Box
        w={{ base: "95%", md: "50%", lg: "40%" }}
        m={"auto"}
        mt={5}
        p={6}
        boxShadow="lg"
        border={"1px"}
        borderRadius={"lg"}
      >
        <form action={handleSubmission}>
          <Stack spacing={4}>
            <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
              <FormControl>
                <FormLabel>Upload Image</FormLabel>
                <Input type="file" accept="image/*" name="image" required />
              </FormControl>

              <FormControl>
                <FormLabel>Project Link</FormLabel>
                <Input
                  name="url"
                  placeholder="Enter your Project Link"
                  required
                />
              </FormControl>
            </Flex>

            <FormControl>
              <FormLabel>Language</FormLabel>
              <Input name="language" placeholder="Enter Language" required />
            </FormControl>

            <FormControl>
              <FormLabel>Code</FormLabel>
              <Input name="codeUrl" placeholder="Enter Code URL" required />
            </FormControl>

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input name="title" placeholder="Enter Title" required />
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                name="description"
                placeholder="Enter description"
                required
              />
            </FormControl>

            <Submitbutton />
          </Stack>
        </form>
      </Box>
    </>
  );
}
