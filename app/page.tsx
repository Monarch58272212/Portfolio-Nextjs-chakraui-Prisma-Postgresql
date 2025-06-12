"use client";
import { VStack } from "@chakra-ui/react";

import Skills from "./Components/Skills";
import About from "./Components/About";
import FirstPage from "./Components/FirstPage";
import Projects from "./Components/Projects";
import ModernSkeleton from "./Components/ModernSkeleton";
import { Suspense } from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <VStack>
      <FirstPage />
      <Suspense fallback={<ModernSkeleton />}>
        <Projects ShowActions={false} ShowText={true} />
      </Suspense>
      <Skills />
      <About />
      <Contact />
      <Footer />
    </VStack>
  );
}
