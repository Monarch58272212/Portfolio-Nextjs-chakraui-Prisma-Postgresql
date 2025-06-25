"use server";
import { Box, VStack } from "@chakra-ui/react";
import Skills from "./Components/Skills";
import About from "./Components/About";
import FirstPage from "./Components/FirstPage";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { prisma } from "./lib/prisma";
import { Suspense } from "react";
import ModernSkeleton from "./Components/ModernSkeleton";
import Projects from "./Components/Projects";
export default async function Home() {
  const data = await getData();
  return (
    <VStack>
      <FirstPage />
      <Suspense
        fallback={
          <Box w="full" mx="auto" p={4}>
            <ModernSkeleton />
          </Box>
        }
      >
        <Projects posts={data} ShowText={true} ShowActions={true} />
      </Suspense>

      <Skills />
      <About />
      <Contact />
      <Footer />
    </VStack>
  );
}

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
