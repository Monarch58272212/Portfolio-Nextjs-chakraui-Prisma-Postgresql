"use client";

import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Box,
  Heading,
  Stack,
  Text,
  Divider,
  Button,
  ButtonGroup,
  HStack,
  Flex,
  LinkBox,
  Avatar,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { DeleteButton } from "./Toggle";
import { TimeIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  language: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  authorName: string | null;
  authorPicture: string | null;
}

export default function Projects({
  posts = [],
  ShowActions = true,
  ShowText = false,
}: {
  posts: Post[];
  ShowActions?: boolean;
  ShowText?: boolean;
}) {
  return (
    <Stack w="100%" spacing={8} px={{ base: 4, md: 8 }} py={10}>
      <Flex direction="column" align="center" justify="center">
        {/* Your heading and create buttons here (same code) */}
        {ShowText ? (
          <HStack justify="space-between" w="95%">
            <Heading fontSize={{ base: "md", md: "xl" }} color="violet">
              # Monarch&apos;s Projects
            </Heading>
            <LinkBox as={Link} href="/Create">
              <Button colorScheme="purple">Create projects →</Button>
            </LinkBox>
          </HStack>
        ) : (
          <HStack justify="space-between" w="95%">
            <Heading fontSize={{ base: "md", md: "xl" }} color="violet">
              # Monarch&apos;s Projects
            </Heading>
            <LinkBox as={Link} href="/Projects">
              <Button colorScheme="purple">Projects →</Button>
            </LinkBox>
          </HStack>
        )}
        {posts.length === 0 && <Text color="red.500">No projects found</Text>}

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          spacing={8}
          px={4}
          py={8}
        >
          {posts.map((post) => (
            <Card
              as={motion.div}
              key={post.id}
              borderRadius="xl"
              boxShadow="lg"
              height="100%"
              display="flex"
              flexDirection="column"
              w="100%" // Responsive width
              maxW="full" // Prevents overflow
            >
              <CardBody flex="1" display="flex" flexDirection="column">
                <Box
                  borderRadius="md"
                  overflow="hidden"
                  h="200px" // consistent image height
                >
                  <Image
                    src={
                      post.image.startsWith("http")
                        ? post.image
                        : "/default-image.jpg"
                    }
                    alt={post.title}
                    width={400}
                    height={250}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>

                <Stack mt={4} spacing={2} flex="1">
                  <Heading size="sm">{post.language}</Heading>
                  <Text fontWeight="semibold" color="purple.600">
                    {post.title}
                  </Text>
                  <Text fontSize="sm">{post.description}</Text>
                </Stack>

                <HStack justify="space-between" mt={2}>
                  {post.authorName && (
                    <HStack spacing={2} alignItems="center">
                      <Text fontWeight="bold" fontSize="xs">
                        {post.authorName.split(" ")[0]}
                      </Text>
                      <Avatar
                        src={post.authorPicture ?? "/default-avatar.png"}
                        size="sm"
                      />
                    </HStack>
                  )}
                  <HStack spacing={1} color="gray.400" fontSize="xs" pt={2}>
                    <TimeIcon />
                    <Text>{new Date(post.createdAt).toLocaleDateString()}</Text>
                  </HStack>
                </HStack>
              </CardBody>

              <Divider />

              <CardFooter>
                <ButtonGroup
                  justifyContent="space-between"
                  spacing={2}
                  w="full"
                >
                  <Button
                    as={Link}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme="blue"
                    size="sm"
                  >
                    Visit Project ↗
                  </Button>
                  {ShowActions && (
                    <HStack>
                      <DeleteButton id={post.id} />
                      <Link href={`/edit/${post.id}`}>
                        <Button>Edit</Button>
                      </Link>
                    </HStack>
                  )}
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}
