"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../Components/Toggle";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Box>
        <Link href="/">
          <Image src="/always.png" alt="My Logo" width={80} height={80} />
        </Link>
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
        <IconButton
          aria-label="Open menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
        />
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Heading size="md">
                <IconButton
                  aria-label="Open menu"
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  onClick={isOpen ? onClose : onOpen}
                />
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

export default Navigation;
