import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Projects } from "../Components/Projects";
import { prisma } from "../lib/prisma";
import { Box, Button, LinkBox, Heading, Link, HStack } from "@chakra-ui/react";

async function getData(userId: string) {
  const data = await prisma.post.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: "desc" },
  });
  return data;
}

export default async function ProjectsPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return <Box>Error: User not found.</Box>;

  const data = await getData(user.id);

  return (
    <Box w={"95%"} mt={10}>
      <HStack justifyContent={"space-between"} w={"95%"}>
        <Heading fontSize={{ base: "md", md: "xl" }}>
          Monarch&apos;s Projects
        </Heading>
        <LinkBox as={Link} href="/Create">
          <Button colorScheme="purple" size="md" _hover={{ bg: "purple.600" }}>
            Create projects →
          </Button>
        </LinkBox>
      </HStack>

      {data.map((item) => (
        <Projects data={item} key={item.id} ShowActions={true} />
      ))}
    </Box>
  );
}
