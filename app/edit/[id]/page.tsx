import { prisma } from "@/app/lib/prisma";

import { UpdateButton } from "@/app/Components/Toggle";
import { updatePost } from "@/app/api/action";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";

export const dynamicParams = true;

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function EditPage({ params }: Props) {
  const { id } = params;

  const post = await prisma.post.findUnique({
    where: { id: String(id) },
  });

  if (!post) {
    return (
      <Box p={4}>
        <Heading>Post not found</Heading>
      </Box>
    );
  }

  return (
    <Box
      maxW="lg"
      mx="auto"
      mt={10}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Edit Project
      </Heading>

      <form action={updatePost}>
        <Stack spacing={4}>
          <HStack>
            {" "}
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                defaultValue={post.title}
                name="title"
                placeholder="Title"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                defaultValue={post.description}
                name="description"
                placeholder="Description"
              />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel>Language</FormLabel>
            <Input
              type="text"
              defaultValue={post.language}
              name="language"
              placeholder="Language"
            />
          </FormControl>

          <FormControl>
            <FormLabel>URL</FormLabel>
            <Input
              type="text"
              defaultValue={post.url}
              name="url"
              placeholder="Project URL"
            />
          </FormControl>

          <Divider my={4} />

          <FormControl
            w="full"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <FormLabel>Current Image</FormLabel>
            <Image
              src={post.image}
              alt="Current Image"
              borderRadius="md"
              boxSize="200px"
              objectFit="cover"
              mb={2}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Change Image</FormLabel>
            <Input type="file" name="imageFile" accept="image/*" />
            <Input type="hidden" name="image" defaultValue={post.image} />
          </FormControl>

          <Input type="hidden" name="id" defaultValue={post.id} />

          <UpdateButton />
        </Stack>
      </form>
    </Box>
  );
}
