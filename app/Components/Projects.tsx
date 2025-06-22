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

interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  language: string;
  createdAt: string;
  updatedAt: string;
  authorName: string | null;
  authorPicture: string | null;
  authorEmail: string;
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
        <HStack justify="space-between" w="95%">
          <Heading fontSize={{ base: "md", md: "xl" }}>
            Monarch&apos;s Projects
          </Heading>
          <LinkBox as={Link} href="/Create">
            <Button colorScheme="purple">Create projects →</Button>
          </LinkBox>
        </HStack>
        <ThisProject posts={posts} ShowActions={ShowActions} />
      </Flex>
    </Stack>
  );
}

export function ThisProject({
  posts,
  ShowActions = true,
}: {
  posts: Post[];
  ShowActions?: boolean;
}) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} px={4} py={8}>
      {posts.map((post) => (
        <Card
          key={post.id}
          maxW="md"
          mx="auto"
          borderRadius="xl"
          boxShadow="lg"
        >
          <CardBody>
            <Box borderRadius="md" overflow="hidden">
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
                  height: "200px",
                }}
              />
            </Box>

            <Stack mt={4} spacing={2}>
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
                  <Text fontWeight="bold" fontSize="xs">
                    {post.authorEmail}
                  </Text>
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
            <ButtonGroup justifyContent="space-between" spacing={2} w="full">
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
  );
}
