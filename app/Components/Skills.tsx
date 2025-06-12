// src/components/Skills.tsx
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
  ScaleFade,
  Icon,
} from "@chakra-ui/react";
import { skills } from "../data/skills";

export default function Skills() {
  const color = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="section"
      w="95%"
      mx="auto"
      mt={{ base: "20px", lg: "10px" }}
      borderRadius="lg"
      boxShadow="lg"
      p={6}
      bg={bgColor}
      aria-label="Skills Section"
    >
      <Flex align="center" mb={6}>
        <Heading size="lg" color="teal.300" mr={4}>
          # Skills
        </Heading>
        <Divider borderColor="teal.300" flex="1" />
      </Flex>

      <HStack w="100%" justify="center" spacing={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={30}>
          {skills.map((skill, index) => (
            <ScaleFade
              key={skill.title}
              initialScale={0.9}
              in={true}
              delay={index * 0.1}
            >
              <Box
                p={6}
                borderRadius="sm"
                border={`1px solid ${borderColor}`}
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                  borderColor: "teal.300",
                }}
                role="group"
                aria-label={`${skill.title} skills`}
              >
                <VStack align="start" spacing={3}>
                  <Text fontSize="xl" fontWeight="bold" color="teal.300">
                    {skill.title}
                  </Text>
                  <Divider borderColor={color} />
                  <VStack align="start" spacing={2}>
                    {skill.items.map((item) => (
                      <HStack key={item.label} spacing={2}>
                        <Icon as={item.icon} color="teal.300" boxSize={5} />
                        <Text
                          color="gray.500"
                          _groupHover={{ color: "teal.200" }}
                        >
                          {item.label}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </ScaleFade>
          ))}
        </SimpleGrid>
      </HStack>
    </Box>
  );
}
