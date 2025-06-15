"use client";

import ThemeToggleButton from "../Components/Toggle";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import MobileView from "../Components/MobileView";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

export function Navigation() {
  const { user, isLoading } = useKindeBrowserClient();

  return (
    <Flex
      as="nav"
      position="sticky"
      top={0}
      zIndex="1000"
      borderBottom="1px solid"
      borderColor="gray.200"
      justify="space-between"
      align="center"
      px={{ base: 4, md: 20 }}
      mx={{ base: 1, md: 3, lg: 10 }}
      backdropFilter="blur(10px)"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link href="/">
          <Image src="/always.png" alt="My Logo" width={80} height={80} />
        </Link>

        {!isLoading && user ? (
          <Box display="flex" alignItems="center" gap={2}>
            <Text fontWeight="bold" fontSize="sm">
              {user.given_name}
            </Text>

            <Box w="32px" h="32px" overflow="hidden" borderRadius="full">
              <Avatar
                src={user.picture ?? "/default-avatar.png"}
                name={user.email ?? "User"}
                size="sm"
              />
            </Box>

            <LogoutLink>
              <Button variant="outline" size="sm">
                LogOut
              </Button>
            </LogoutLink>
          </Box>
        ) : (
          <Box display="flex" gap={2}>
            <Button colorScheme="blue">
              <LoginLink>Sign in</LoginLink>
            </Button>
            <Button colorScheme="teal" variant="outline">
              <RegisterLink>Sign up</RegisterLink>
            </Button>
          </Box>
        )}
      </Box>

      {/* Desktop Menu */}
      <Box display={{ base: "none", sm: "block", md: "block" }}>
        <HStack spacing={6} gap={10} align="center">
          <Link href="/">
            <Heading
              as="h1"
              size="sm"
              fontFamily="poppins"
              _hover={{
                color: "green.600",
                cursor: "pointer",
              }}
            >
              Home
            </Heading>
          </Link>
          <Link href="/Create">
            <Heading
              as="h1"
              size="sm"
              fontFamily="poppins"
              _hover={{
                color: "green.600",
                cursor: "pointer",
              }}
            >
              Create
            </Heading>
          </Link>
          <Link href="/Projects">
            <Heading
              as="h1"
              size="sm"
              fontFamily="poppins"
              _hover={{
                color: "green.600",
                cursor: "pointer",
              }}
            >
              Projects
            </Heading>
          </Link>
          <ThemeToggleButton />
        </HStack>
      </Box>

      {/* Mobile Menu Icon */}
      <Box display={{ base: "block", sm: "none", md: "none" }}>
        <MobileView />
      </Box>
    </Flex>
  );
}
