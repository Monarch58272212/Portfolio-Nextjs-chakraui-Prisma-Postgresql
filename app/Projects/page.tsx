import { getUserPosts } from "@/app/api/action";
import Projects from "@/app/Components/Projects";

export default async function ProjectsPage() {
  const posts = await getUserPosts();

  return <Projects posts={posts} ShowText={true} />;
}
