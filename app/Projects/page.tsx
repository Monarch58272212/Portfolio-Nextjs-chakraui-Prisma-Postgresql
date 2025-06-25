import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../lib/prisma";
import Projects from "../Components/ProjectWrapper";

export default async function ProjectsPage() {
  const posts = await getUserPosts();

  return <Projects posts={posts} ShowText={true} ShowActions={true} />;
}

async function getUserPosts() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return [];
  console.log("User posts:", user);

  const data = await prisma.post.findMany({
    where: {
      authorId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data.map((post) => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }));
}
