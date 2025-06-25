// app/Components/ProjectsWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import ModernSkeleton from "./ModernSkeleton";
import { Box } from "@chakra-ui/react";

export const Projects = dynamic(() => import("./Projects"), {
  ssr: false,
  loading: () => (
    <Box w="full" mx="auto" p={4}>
      <ModernSkeleton />
    </Box>
  ),
});

export const About = dynamic(() => import("./About"), { ssr: false });
