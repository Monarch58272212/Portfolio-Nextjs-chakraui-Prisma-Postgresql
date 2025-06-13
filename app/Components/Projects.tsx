"use client";

import { useEffect, useState } from "react";
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
  Link,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
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
}

export default function Projects({
  ShowActions = true,
  ShowText = false,
}: {
  ShowActions?: boolean;
  ShowText?: boolean;
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        console.log("Fetched data:", data);

        // Flexible format handling
        const fetchedPosts = Array.isArray(data) ? data : data.posts;

        if (Array.isArray(fetchedPosts)) {
          setPosts(fetchedPosts);
        } else {
          console.error("Invalid posts format:", data);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return null;

  return (
    <Stack spacing={8} px={{ base: 4, md: 8 }} py={10}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection={"column"}
      >
        {ShowText && (
          <HStack justifyContent={"space-between"} w={"95%"}>
            <Heading
              as="h2"
              fontFamily="Fira Code, monospace"
              fontSize={{ base: "2xl", md: "3xl" }}
              mb={0}
              color="violet"
            >
              # My Projects
            </Heading>
            <Box width={{ base: "50px", md: "100px" }}>
              <Divider />
            </Box>
            <Link href="/Projects">
              <Button colorScheme="blue" size="md" _hover={{ bg: "blue.600" }}>
                View all projects →
              </Button>
            </Link>
          </HStack>
        )}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          px={4}
          py={8}
        >
          {posts.map((post) => (
            <Card
              key={post.id}
              maxW="md"
              mx="auto"
              borderRadius="xl"
              boxShadow="lg"
              overflow="hidden"
              _hover={{ shadow: "xl", transform: "scale(1.02)" }}
              transition="all 0.3s ease-in-out"
            >
              <CardBody p={4}>
                <Box borderRadius="md" overflow="hidden">
                  <Image
                    src={
                      post.image &&
                      (post.image.startsWith("http") ||
                        post.image.startsWith("/"))
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
                <Text
                  fontSize="xs"
                  color="gray.400"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  pt={2}
                >
                  <TimeIcon />
                  {new Intl.DateTimeFormat("en-us", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(new Date(post.createdAt))}
                </Text>
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
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(post.url, "_blank", "noopener,noreferrer");
                    }}
                  >
                    Visit Project ↗
                  </Button>
                  <HStack>
                    {ShowActions && (
                      <>
                        <DeleteButton id={post.id} />
                        <Link href={`/edit/${post.id}`}>
                          <Button>Edit</Button>
                        </Link>
                      </>
                    )}
                  </HStack>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}
