// app/Components/ProjectsWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import ModernSkeleton from "./ModernSkeleton";
import { Box } from "@chakra-ui/react";

const Projects = dynamic(() => import("./Projects"), {
  ssr: false,
  loading: () => (
    <Box w={"full"} mx="auto" p={4}>
      <ModernSkeleton />
    </Box>
  ),
});

export default Projects;
