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
  Avatar,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { DeleteButton } from "./Toggle";
import { deletePost } from "../api/action";
import { TimeIcon } from "@chakra-ui/icons";

export interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
  authorImage: string;
  authorName: string;
}

type BlogpostCardProps = {
  data: Post | null;
  ShowActions?: boolean;
};

export function Projects({ data, ShowActions = true }: BlogpostCardProps) {
  if (!data) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} px={4} py={8}>
      <Card
        key={data.id}
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
              src={data.image || "/default-image.jpg"}
              alt={data.title}
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
            <Heading size="sm">{data.language}</Heading>
            <Text fontWeight="semibold" color="purple.600">
              {data.title}
            </Text>
            <Text fontSize="sm">{data.description}</Text>
          </Stack>

          <HStack justifyContent="space-between" mt={2}>
            <HStack spacing={2} alignItems="center">
              <Text fontWeight="bold" fontSize="xs">
                {data.authorName?.split(" ")[0]}
              </Text>
              <Avatar
                src={data.authorImage ?? "/default-avatar.png"}
                name={data.authorName ?? "User"}
                size="sm"
              />
            </HStack>

            <HStack spacing={1} color="gray.400" fontSize="xs" pt={2}>
              <TimeIcon />
              <Text>
                {new Intl.DateTimeFormat("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(new Date(data.createdAt))}
              </Text>
            </HStack>
          </HStack>
        </CardBody>

        <Divider />

        <CardFooter>
          <ButtonGroup justifyContent="space-between" spacing={2} w="full">
            <Button
              as={Link}
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                window.open(data.url, "_blank", "noopener,noreferrer");
              }}
            >
              Visit Project ↗
            </Button>
            {ShowActions && (
              <HStack>
                <form action={deletePost}>
                  <input type="hidden" name="id" value={data.id} />
                  <DeleteButton id={data.id} />
                </form>
                <Link href={`/edit/${data.id}`}>
                  <Button>Edit</Button>
                </Link>
              </HStack>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
