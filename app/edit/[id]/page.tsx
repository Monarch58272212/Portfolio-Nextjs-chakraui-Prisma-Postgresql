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
  Input,
  Stack,
} from "@chakra-ui/react";

export const dynamicParams = true;

interface PageProps {
  params: {
    id: string;
  };
}

export default async function EditPage({ params }: PageProps) {
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
              <FormLabel>Image URL</FormLabel>
              <Input
                type="text"
                defaultValue={post.image}
                name="image"
                placeholder="Image URL"
              />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              defaultValue={post.description}
              name="description"
              placeholder="Description"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Link</FormLabel>
            <Input
              type="text"
              defaultValue={post.url}
              name="link"
              placeholder="Link"
            />
          </FormControl>

          <Input type="hidden" name="id" value={post.id} />

          <Divider />

          <UpdateButton />
        </Stack>
      </form>
    </Box>
  );
}
