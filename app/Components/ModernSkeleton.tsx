"use client";

import {
  Box,
  SkeletonCircle,
  SkeletonText,
  SimpleGrid,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ModernSkeleton() {
  // Light/Dark mode colors
  const cardBg = useColorModeValue("white", "gray.800");
  const cardShadow = useColorModeValue("md", "dark-lg");

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={6}
      p={6}
      maxW="100%"
    >
      {[...Array(3)].map((_, idx) => (
        <Box
          key={idx}
          padding={6}
          boxShadow={cardShadow}
          bg={cardBg}
          borderRadius="2xl"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minH="70vh" // fixed minimum height for consistency
        >
          <Flex gap={4} alignItems="center" mb={4}>
            <SkeletonCircle size="12" />
            <SkeletonText noOfLines={1} skeletonHeight="3" w="60%" />
          </Flex>

          <SkeletonText noOfLines={10} spacing="4" skeletonHeight="4" />
        </Box>
      ))}
    </SimpleGrid>
  );
}
