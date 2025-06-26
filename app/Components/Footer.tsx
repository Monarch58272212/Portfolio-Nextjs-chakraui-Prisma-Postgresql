"use client";

import { Box, Divider, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box w="95%" mt={10} mb={2}>
      <Divider borderColor="teal.300" flex="1" />

      <Box textAlign={"center"} mt={4}>
        <Text fontFamily={"Fira Code"}>© Copyright 2025. Made by Monarch</Text>
      </Box>
    </Box>
  );
}
