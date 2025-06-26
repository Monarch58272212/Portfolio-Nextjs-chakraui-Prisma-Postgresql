"use server";
import { VStack } from "@chakra-ui/react";
import FirstPage from "./Components/FirstPage";
import { prisma } from "./lib/prisma";
import {
  Projects,
  About,
  Contact,
  Skills,
  Footer,
} from "./Components/DynamicWrapper";
import Experience from "./Components/Experience";

export default async function Home() {
  const data = await getData();
  return (
    <VStack>
      <FirstPage />
      <Projects posts={data} ShowText={false} ShowActions={false} />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </VStack>
  );
}

async function getData() {
  const data = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc", // ayusin ayon sa date mula pinakabago
    },

    select: {
      id: true,
      title: true,
      description: true,
      codeUrl: true,
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
