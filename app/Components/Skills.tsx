"use client";

import {
  Box,
  Heading,
  VStack,
  Divider,
  Text,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiPostgresql,
  SiChakraui,
  SiGit,
  SiGithub,
  SiPrisma,
} from "react-icons/si";

const MotionBox = motion(Box);

export default function SkillsSection() {
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const bgColor = useColorModeValue("white", "gray.700");
  const textHoverColor = useColorModeValue("teal.600", "teal.300");

  const skills = {
    Frontend: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "" },
      { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    ],
    Backend: [
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
      { name: "Prisma", icon: SiPrisma, color: "" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
    Others: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "" },
    ],
  };

  return (
    <Box w="95%" mx="auto" id="skills" pt={8} scrollMarginTop="80px">
      <VStack spacing={6} align="start">
        <Flex w="100%" justify="center" align="center">
          <Heading size="lg" color="violet" mr={4}>
            # Skills
          </Heading>
          <Divider borderColor="teal.300" flex="1" />
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
          {Object.entries(skills).map(([category, items], index) => (
            <MotionBox
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
              border={`1px solid ${borderColor}`}
              borderRadius="lg"
              p={5}
              boxShadow="md"
              w="full"
              bg={bgColor}
              textAlign="center"
            >
              <Heading size="md" mb={4} color="teal.400">
                {category}
              </Heading>
              <List spacing={3} textAlign="center">
                {items.map((item) => (
                  <ListItem key={item.name}>
                    <HStack spacing={3} justify="center">
                      <Icon as={item.icon} boxSize={5} color={item.color} />
                      <Text
                        color="gray.500"
                        _hover={{ color: textHoverColor }}
                        transition="0.2s"
                      >
                        {item.name}
                      </Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
