import { VStack } from "@chakra-ui/react";

import Skills from "./Components/Skills";
import About from "./Components/About";
import FirstPage from "./Components/FirstPage";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { prisma } from "./lib/prisma";

export default async function Home() {
  const data = await getData();
  return (
    <VStack>
      <FirstPage />
      <Projects posts={data} ShowText={false} ShowActions={false} />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </VStack>
  );
}

export const revalidate = 60;

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc", // ayusin ayon sa date mula pinakabago
    },

    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      url: true,
      language: true,
      createdAt: true,
      updatedAt: true,
      authorName: true,
      authorPicture: true,
    },
  });

  return data;
}
