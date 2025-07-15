"use client";

import { useEffect, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
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
  const [activeNav, setActiveNav] = useState("home");
  const { user, isLoading } = useKindeBrowserClient();
  console.log("👤 Logged in user:", user?.email);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentScreen = useBreakpointValue({
    base: "mobile",
    sm: "mobile",
    md: "tablet",
    lg: "desktop",
  });

  useEffect(() => {
    if (currentScreen === "desktop" && isOpen) {
      onClose();
    }
  }, [currentScreen, isOpen, onClose]);

  useEffect(() => {
    const sections = [
      "home",
      "skills",
      "projects",
      "experience",
      "about",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveNav(sectionId);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -30% 0px",
      }
    );

    let frameId: number;
    const waitUntilReady = () => {
      const allLoaded = sections.every((id) => document.getElementById(id));
      if (allLoaded) {
        sections.forEach((id) => {
          const section = document.getElementById(id);
          if (section) observer.observe(section);
        });
      } else {
        frameId = requestAnimationFrame(waitUntilReady);
      }
    };

    frameId = requestAnimationFrame(waitUntilReady);

    return () => {
      cancelAnimationFrame(frameId);
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
      px={{ base: 4, md: 5 }}
      py={{ base: 2, md: 3 }}
      mx={{ base: 1, md: 3, lg: 10 }}
      backdropFilter="blur(10px)"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        gap={{ base: 1, md: 4, lg: 5 }}
        alignItems="center"
      >
        <Link href="/" prefetch={true}>
          <Image
            src="/logo.png"
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
              <Button
                variant="outline"
                borderRadius={"none"}
                size="sm"
                py={1.5}
              >
                LogOut
              </Button>
            </LogoutLink>

            <Link href="/Projects">
              <Button
                colorScheme="purple"
                size="sm"
                borderRadius={"none"}
                variant="outline"
              >
                Projects
              </Button>
            </Link>
          </Box>
        ) : (
          <Box
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
            gap={2}
          >
            <Button
              size={{ base: "sm", md: "md", lg: "sm" }}
              py={1.5}
              borderRadius={"none"}
            >
              <LoginLink>Monarch Secure Page</LoginLink>
            </Button>
          </Box>
        )}
      </Box>

      {/* Desktop Menu */}
      <Box display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
        <HStack spacing={3} gap={5} align="center">
          <Link href="#home" prefetch={true}>
            <Box display="flex" alignItems="center">
              <Button
                onClick={() => setActiveNav("home")}
                color={activeNav === "home" ? "violet" : ""}
                variant="ghost"
                fontSize="sm"
                gap={2}
                _hover={{
                  transform: "translateY(-6px)",
                  transition: "all 0.3s ease-in-out",
                  color: "violet",
                }}
              >
                <FaHome />
                Home
              </Button>
            </Box>
          </Link>

          <Link href="#skills">
            <Box display="flex" alignItems="center">
              <Button
                onClick={() => setActiveNav("skills")}
                color={activeNav === "skills" ? "violet" : ""}
                variant="ghost"
                fontSize="sm"
                gap={2}
                _hover={{
                  transform: "translateY(-6px)",
                  transition: "all 0.3s ease-in-out",
                  color: "violet",
                }}
              >
                <FaLaptopCode />
                Skills
              </Button>
            </Box>
          </Link>

          <Link href="#experience">
            <Box display="flex" alignItems="center">
              <Button
                onClick={() => setActiveNav("experience")}
                color={activeNav === "experience" ? "violet" : ""}
                variant="ghost"
                fontSize="sm"
                gap={2}
                _hover={{
                  transform: "translateY(-6px)",
                  transition: "all 0.3s ease-in-out",
                  color: "violet",
                }}
              >
                <MdWorkOutline />
                Experience
              </Button>
            </Box>
          </Link>

          <Link href="#about">
            <Box display="flex" alignItems="center">
              <Button
                onClick={() => setActiveNav("about")}
                color={activeNav === "about" ? "violet" : ""}
                variant="ghost"
                fontSize="sm"
                gap={2}
                _hover={{
                  transform: "translateY(-6px)",
                  transition: "all 0.3s ease-in-out",
                  color: "violet",
                }}
              >
                <IoPersonCircleOutline />
                About
              </Button>
            </Box>
          </Link>

          <Link href="#contact">
            <Box display="flex" alignItems="center">
              <Button
                onClick={() => setActiveNav("contact")}
                color={activeNav === "contact" ? "violet" : ""}
                variant="ghost"
                fontSize="sm"
                _hover={{
                  transform: "translateY(-6px)",
                  transition: "all 0.3s ease-in-out",
                  color: "violet",
                }}
                gap={2}
              >
                <IoMdCall />
                Contact
              </Button>
            </Box>
          </Link>

          <ThemeToggleButton />
        </HStack>
      </Box>

      {/* Mobile Menu Icon */}
      <Box display={{ base: "block", sm: "block", md: "block", lg: "none" }}>
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
                    alignItems="center"
                  >
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: "xs", md: "xm" }}
                      alignItems="center"
                    >
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
                      <Button
                        variant="outline"
                        size="xs"
                        p={0.5}
                        borderRadius={"none"}
                        fontSize={{ base: "xs", md: "xm" }}
                      >
                        LogOut
                      </Button>
                    </LogoutLink>

                    <Link href="/Projects" prefetch={true}>
                      <Button
                        colorScheme="purple"
                        variant="outline"
                        fontSize={{ base: "xs", md: "xm" }}
                        size="xs"
                        borderRadius={"none"}
                        p={0.5}
                      >
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
                    <Button
                      size={{ base: "sm", md: "md", lg: "sm" }}
                      py={1.5}
                      borderRadius={"none"}
                    >
                      <LoginLink>Monarch Secure Page</LoginLink>
                    </Button>
                  </Box>
                )}
              </Heading>
            </DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={4}>
                <Link href="#home" prefetch={true}>
                  <Box display="flex" alignItems="center">
                    <Button
                      onClick={() => {
                        setActiveNav("home");
                        onClose();
                      }}
                      color={activeNav === "home" ? "aqua" : ""}
                      variant="ghost"
                      fontSize="sm"
                      gap={2}
                      _hover={{
                        transform: "translateY(-6px)",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      <FaHome />
                      Home
                    </Button>
                  </Box>
                </Link>

                <Link href="#skills">
                  <Box display="flex" alignItems="center">
                    <Button
                      onClick={() => {
                        setActiveNav("skills");
                        onClose();
                      }}
                      color={activeNav === "skills" ? "aqua" : ""}
                      variant="ghost"
                      fontSize="sm"
                      gap={2}
                      _hover={{
                        transform: "translateY(-6px)",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      <FaLaptopCode />
                      Skills
                    </Button>
                  </Box>
                </Link>

                <Link href="#experience">
                  <Box display="flex" alignItems="center">
                    <Button
                      onClick={() => {
                        setActiveNav("experience");
                        onClose();
                      }}
                      color={activeNav === "experience" ? "aqua" : ""}
                      variant="ghost"
                      fontSize="sm"
                      gap={2}
                      _hover={{
                        transform: "translateY(-6px)",
                        transition: "all 0.3s ease-in-out",
                        color: "purple.400",
                      }}
                    >
                      <MdWorkOutline />
                      Experience
                    </Button>
                  </Box>
                </Link>

                <Link href="#about">
                  <Box display="flex" alignItems="center">
                    <Button
                      onClick={() => {
                        setActiveNav("about");
                        onClose();
                      }}
                      color={activeNav === "about" ? "aqua" : ""}
                      variant="ghost"
                      fontSize="sm"
                      gap={2}
                      _hover={{
                        transform: "translateY(-6px)",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      <IoPersonCircleOutline />
                      About
                    </Button>
                  </Box>
                </Link>

                <Link href="#contact">
                  <Box display="flex" alignItems="center">
                    <Button
                      onClick={() => {
                        setActiveNav("contact");
                        onClose();
                      }}
                      color={activeNav === "contact" ? "aqua" : ""}
                      variant="ghost"
                      fontSize="sm"
                      _hover={{
                        transform: "translateY(-6px)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      gap={2}
                    >
                      <IoMdCall />
                      Contact
                    </Button>
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
