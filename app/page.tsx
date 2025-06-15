"use client";
import { VStack } from "@chakra-ui/react";

import Skills from "./Components/Skills";
import About from "./Components/About";
import FirstPage from "./Components/FirstPage";
import Projects from "./Components/Projects";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <VStack>
      <FirstPage />
      <Projects ShowActions={false} ShowText={true} ShowSkeleton={false} />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </VStack>
  );
}
