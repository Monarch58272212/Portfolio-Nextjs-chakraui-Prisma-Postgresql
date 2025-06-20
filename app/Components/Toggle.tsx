"use client";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  chakra,
  Button,
} from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
import { FaSun, FaMoon } from "react-icons/fa";

type SubmitbuttonProps = {
  isLoading?: boolean;
};

const ChakraFaMoon = chakra(FaMoon);
const ChakraFaSun = chakra(FaSun);

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();

  const icon = useColorModeValue(
    <ChakraFaMoon color="gray.600" />,
    <ChakraFaSun color="yellow.300" />
  );

  const label = useColorModeValue(
    "Switch to dark mode",
    "Switch to light mode"
  );

  return (
    <IconButton
      aria-label={label}
      icon={icon}
      onClick={toggleColorMode}
      variant="ghost"
      size="md"
    />
  );
}

export function Submitbutton({ isLoading = false }: SubmitbuttonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      size="sm"
      type="submit"
      colorScheme="teal"
      isLoading={isLoading}
      loadingText="Submitting"
    >
      {pending ? "Submitting.." : "Submit"}
    </Button>
  );
}

export function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button variant="destructive" type="submit" disabled={pending}>
      {pending ? "Deleting..." : "Delete"}
    </Button>
  );
}

export function UpdateButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      size="sm"
      type="submit"
      colorScheme="teal"
      isLoading={pending}
      loadingText="Submitting"
    >
      {pending ? "Submitting.." : "Update"}
    </Button>
  );
}
