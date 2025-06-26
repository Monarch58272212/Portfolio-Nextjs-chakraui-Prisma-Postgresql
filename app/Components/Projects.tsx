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
  Tooltip,
  useBreakpointValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { DeleteButton } from "./Toggle";
import { TimeIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import emptyAnimation from "@/public/animations/NoData.json";

// ✅ Wrap Chakra UI's Card with motion
const MotionCard = motion(Card);
const MotionImage = motion(Box);
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
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack w="100%" spacing={8} px={{ base: 4, md: 8 }} py={10}>
      <Flex direction="column" align="center" justify="center">
        {/* Header */}
        <HStack justify="space-between" w="100%">
          <Heading color="violet" size="lg">
            # Monarch&apos;s Projects
          </Heading>
          <Divider borderColor="teal.300" flex="1" />
          <LinkBox
            as={Link}
            prefetch={true}
            href={ShowText ? "/Create" : "./Projects"}
          >
            <Button colorScheme="purple">
              {ShowText ? "Create projects →" : "Projects →"}
            </Button>
          </LinkBox>
        </HStack>

        {/* No posts text */}
        {posts.length === 0 && (
          <Box
            textAlign="center"
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            w={"100%"}
            justifyItems={"center"}
          >
            <Lottie
              animationData={emptyAnimation}
              loop
              style={{ width: 250, height: 250, margin: "0 auto" }}
            />
            <Text mt={4} fontSize="lg" color="gray.500">
              No projects found
            </Text>
          </Box>
        )}

        {/* Cards Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
          spacing={8}
          px={4}
          py={4}
          overflowX="hidden"
        >
          {posts.map((post, index) => (
            <MotionCard
              key={post.id}
              borderRadius="xl"
              boxShadow="lg"
              height="100%"
              display="flex"
              flexDirection="column"
              w="100%"
              maxW="full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CardBody flex="1" display="flex" flexDirection="column">
                <Box borderRadius="md" overflow="hidden" h="200px" w="100%">
                  <MotionImage
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%", height: "100%" }}
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
                  </MotionImage>
                </Box>

                <Stack mt={4} spacing={2} flex="1">
                  <Heading size="sm">{post.language}</Heading>
                  <Text fontWeight="semibold" color="purple.600">
                    {post.title}
                  </Text>
                  {isMobile ? (
                    <Popover>
                      <PopoverTrigger>
                        <Text fontSize="sm" noOfLines={2} cursor="pointer">
                          {post.description}
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent
                        bg="gray.700"
                        color="white"
                        border="1px solid green"
                      >
                        <PopoverArrow />
                        <PopoverBody>{post.description}</PopoverBody>
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Tooltip
                      label={post.description}
                      hasArrow
                      placement="top"
                      bg="gray.700"
                      color="white"
                      border="1px solid green"
                    >
                      <Text fontSize="sm" noOfLines={2}>
                        {post.description}
                      </Text>
                    </Tooltip>
                  )}
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
            </MotionCard>
          ))}
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}
