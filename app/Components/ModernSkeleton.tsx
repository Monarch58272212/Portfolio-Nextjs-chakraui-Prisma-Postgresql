"use client";

import {
  Box,
  Flex,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function ModernSkeleton() {
  return (
    <Flex
      justify="center"
      align="center"
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.900")}
      p={4}
    >
      <VStack spacing={8}>
        <Heading color="teal.300" size="lg">
          Loading Projects...
        </Heading>
        <Box
          w="full"
          maxW="md"
          p={6}
          rounded="2xl"
          boxShadow="lg"
          bg={useColorModeValue("white", "gray.800")}
        >
          <Stack spacing={4}>
            <Flex align="center" gap={4}>
              <SkeletonCircle
                size="12"
                startColor="teal.300"
                endColor="teal.500"
              />
              <SkeletonCircle
                size="12"
                startColor="teal.300"
                endColor="teal.500"
              />
              <Box flex="1">
                <Skeleton height="14px" mb="2" />
                <Skeleton height="12px" width="60%" />
              </Box>
            </Flex>

            <Skeleton height="200px" rounded="lg" />

            <SkeletonText mt="4" noOfLines={4} spacing="4" />

            <Flex gap={2}>
              <Skeleton height="40px" flex="1" rounded="md" />
              <Skeleton height="40px" flex="1" rounded="md" />
            </Flex>
          </Stack>
        </Box>
      </VStack>
    </Flex>
  );
}
