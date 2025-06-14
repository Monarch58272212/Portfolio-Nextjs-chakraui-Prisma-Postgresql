import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import ThemeToggleButton from "./Toggle";

export default function MobileView() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
    </>
  );
}
