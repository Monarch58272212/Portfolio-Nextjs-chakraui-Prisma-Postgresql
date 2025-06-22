import { VStack } from "@chakra-ui/react";

import Skills from "./Components/Skills";
import About from "./Components/About";
import FirstPage from "./Components/FirstPage";
import { ThisProject } from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { getUserPosts } from "./api/action";

export default async function Home() {
  const posts = await getUserPosts();
  return (
    <VStack>
      <FirstPage />
      <ThisProject posts={posts} ShowActions={true} />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </VStack>
  );
}
