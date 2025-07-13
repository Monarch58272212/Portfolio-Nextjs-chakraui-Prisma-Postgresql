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
import { MotionBox } from "../chakraProviders/Motion";

export default function SkillsSection() {
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const bgColor = useColorModeValue("whiteAlpha.700", "whiteAlpha.100");
  const textHoverColor = useColorModeValue("teal.600", "teal.300");

  const headingColor = useColorModeValue("black", "violet");

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
    <Box
      w="95%"
      mx="auto"
      id="skills"
      py={{ base: 4, md: 6, lg: 8 }}
      scrollMarginTop="80px"
    >
      <VStack spacing={8} align="start">
        <Flex w="100%" justify="center" align="center">
          <Divider borderColor={headingColor} flex="1" />
          <Heading size="lg" color={headingColor} ml={4}>
            # Skills
          </Heading>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
          {Object.entries(skills).map(([category, items], index) => (
            <MotionBox
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
              borderRadius="2xl"
              p={6}
              boxShadow="dark-lg"
              bg={bgColor}
              border={`1px solid ${borderColor}`}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "xl",
                transition: "all 0.3s ease-in-out",
              }}
              backdropFilter="blur(10px)"
              textAlign="center"
            >
              <Heading
                size="md"
                mb={4}
                color="teal.300"
                letterSpacing="wide"
                fontWeight="bold"
              >
                {category}
              </Heading>

              <List spacing={4}>
                {items.map((item, i) => (
                  <MotionBox
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <ListItem>
                      <HStack spacing={3} justify="center">
                        <Icon as={item.icon} boxSize={6} color={item.color} />
                        <Text
                          fontWeight="medium"
                          color="gray.500"
                          _hover={{ color: textHoverColor }}
                          transition="0.2s"
                        >
                          {item.name}
                        </Text>
                      </HStack>
                    </ListItem>
                  </MotionBox>
                ))}
              </List>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
