import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box w="95%" mx="auto">
      <VStack align="center" mb={6}>
        {/* Heading Section */}
        <Flex w="100%" justify="center" align="center">
          <Heading size="lg" color="violet" mr={4}>
            # About Me
          </Heading>
          <Divider borderColor="teal.300" flex="1" />
        </Flex>

        {/* Text + Image Section */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          align="center"
          justify="center"
          w="100%"
        >
          {/* Text Section */}
          <Text w={{ base: "100%", md: "65%" }} textAlign="justify">
            Im a passionate Front-End Developer with a strong eye for design and
            a deep understanding of user experience. I specialize in building
            responsive, user-friendly web interfaces using modern technologies
            like HTML, CSS, JavaScript, React, and Tailwind CSS. With a
            background in both design and development, I enjoy turning complex
            ideas into smooth, interactive, and accessible digital experiences.{" "}
            <br />
            <br />I thrive in fast-paced environments where I can collaborate
            with teams to bring ideas to life. Whether its creating reusable
            components, optimizing performance, or ensuring pixel-perfect
            designs, I always aim for clean and efficient code. Im also
            continuously learning — staying up-to-date with the latest trends
            and best practices in web development to deliver modern, reliable
            solutions.
          </Text>

          {/* Image Section */}
          <Flex
            w={{ base: "100%", md: "35%" }}
            position="relative"
            justify="center"
            align="center"
          >
            <Box
              borderRadius="full"
              p="3px"
              bgGradient="linear(to-r, red.400, orange.400, yellow.300)"
              animation="fireGlow 2s infinite"
              sx={{
                "@keyframes fireGlow": {
                  "0%": {
                    boxShadow: "0 0 10px red",
                  },
                  "50%": {
                    boxShadow: "0 0 25px orange",
                  },
                  "100%": {
                    boxShadow: "0 0 10px yellow",
                  },
                },
              }}
            >
              <Image
                src="/Profile.png"
                alt="About"
                boxSize={{ base: "200px", md: "250px" }}
                borderRadius="full"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Stack>
      </VStack>
    </Box>
  );
}
