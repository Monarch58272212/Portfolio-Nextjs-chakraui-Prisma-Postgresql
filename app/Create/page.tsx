"use client";
import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";

export default function Create() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Upload successful!");
      window.location.href = "/";
    } else {
      const data = await res.json();
      alert("Upload failed: " + data.error);
    }

    setIsSubmitting(false);
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Upload Image</FormLabel>
            <Input type="file" accept="image/*" name="image" required />
          </FormControl>

          <FormControl>
            <FormLabel>Project Link</FormLabel>
            <Input name="url" placeholder="Enter your Project Link" required />
          </FormControl>

          <FormControl>
            <FormLabel>Language</FormLabel>
            <Input name="language" placeholder="Enter Language" required />
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

          <Button
            type="submit"
            colorScheme="blue"
            isDisabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
