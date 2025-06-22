import Projects from "@/app/Components/Projects";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../lib/prisma";

export default async function ProjectsPage() {
  const posts = await getUserPosts();

  return <Projects posts={posts} ShowText={true} ShowActions={true} />;
}

async function getUserPosts() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return [];

  const data = await prisma.post.findMany({
    where: {
      authorEmail: user.email || "",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
