"use client";

import { useEffect } from "react";
import { useBreakpointValue } from "@chakra-ui/react";

import ThemeToggleButton from "../Components/Toggle";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export function Navigation() {
  const { user, isLoading } = useKindeBrowserClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentScreen = useBreakpointValue({
    base: "mobile",
    md: "desktop",
  });

  useEffect(() => {
    if (currentScreen === "desktop" && isOpen) {
      onClose(); // Close the drawer if we go to desktop
    }
  }, [currentScreen, isOpen, onClose]);

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
      <Box
        display="flex"
        justifyContent="space-between"
        gap={{ base: 1, md: 4, lg: 5 }}
        alignItems="center"
      >
        <Link href="/">
          <Image
            src="/always.png"
            alt="My Logo"
            width={80}
            height={80}
            priority
          />
        </Link>

        {!isLoading && user ? (
          <Box
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
            alignItems="center"
            gap={2}
          >
            <Text fontWeight="bold" fontSize={{ base: "xs", md: "xm" }}>
              {user.given_name?.split(" ")[0]}
            </Text>

            <Box w="32px" h="32px" overflow="hidden" borderRadius="full">
              <Avatar
                src={user.picture ?? "/default-avatar.png"}
                name={user.email ?? "User"}
                size="sm"
              />
            </Box>

            <LogoutLink>
              <Button variant="outline" size="sm" py={1.5}>
                LogOut
              </Button>
            </LogoutLink>

            <Link href="/Projects">
              <Button colorScheme="purple" size="sm" variant="outline">
                Projects
              </Button>
            </Link>
          </Box>
        ) : (
          <Box
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
            gap={2}
          >
            <Button colorScheme="blue" size="sm" py={1.5}>
              <LoginLink>Sign in</LoginLink>
            </Button>
            <Button colorScheme="teal" variant="outline" size="sm" py={1.5}>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
          </Box>
        )}
      </Box>

      {/* Desktop Menu */}
      <Box display={{ base: "none", sm: "none", md: "block" }}>
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
      <Box display={{ base: "block", sm: "block", md: "none", lg: "none" }}>
        {" "}
        <IconButton
          aria-label="Open menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Heading size="md" display="flex" justifyContent="space-between">
                <IconButton
                  aria-label="Open menu"
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  onClick={isOpen ? onClose : onOpen}
                />
                {!isLoading && user ? (
                  <Box
                    gap={2}
                    display={{
                      base: "flex",
                      sm: "flex",
                      md: "flex",
                      lg: "none",
                    }}
                  >
                    <Text fontWeight="bold" fontSize={{ base: "xs", md: "xm" }}>
                      {user.given_name?.split(" ")[0]}
                    </Text>

                    <Box
                      w="32px"
                      h="32px"
                      overflow="hidden"
                      borderRadius="full"
                    >
                      <Avatar
                        src={user.picture ?? "/default-avatar.png"}
                        name={user.email ?? "User"}
                        size="sm"
                      />
                    </Box>

                    <LogoutLink>
                      <Button variant="outline" size="sm" py={1.5}>
                        LogOut
                      </Button>
                    </LogoutLink>

                    <Link href="/Projects">
                      <Button colorScheme="purple" size="sm" variant="outline">
                        Projects
                      </Button>
                    </Link>
                  </Box>
                ) : (
                  <Box
                    display={{
                      base: "flex",
                      sm: "flex",
                      md: "flex",
                      lg: "none",
                    }}
                    gap={2}
                  >
                    <Button colorScheme="blue" size="sm" py={1.5}>
                      <LoginLink>Sign in</LoginLink>
                    </Button>
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      size="sm"
                      py={1.5}
                    >
                      <RegisterLink>Sign up</RegisterLink>
                    </Button>
                  </Box>
                )}
              </Heading>
            </DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={4}>
                <Link href="/">
                  <Box
                    _hover={{
                      color: "green.600",
                      cursor: "pointer",
                      bg: "gray.100",
                    }}
                  >
                    Home
                  </Box>
                </Link>

                <Link href="/Create">
                  <Box
                    _hover={{
                      color: "green.600",
                      cursor: "pointer",
                      bg: "gray.100",
                    }}
                  >
                    Create
                  </Box>
                </Link>

                <Link href="/Projects">
                  <Box
                    _hover={{
                      color: "green.600",
                      cursor: "pointer",
                      bg: "gray.100",
                    }}
                  >
                    Projects
                  </Box>
                </Link>

                <ThemeToggleButton />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
}
