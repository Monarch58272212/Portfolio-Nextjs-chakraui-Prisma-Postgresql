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

import { useTransition } from "react";
import { deletePost } from "../api/action";

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
      className="w-fit"
      type="submit"
      colorScheme="teal"
      isLoading={isLoading}
      loadingText="Submitting"
    >
      {pending ? "Submitting.." : "Submit"}
    </Button>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    startTransition(async () => {
      try {
        const result = await deletePost(id);
        if (result.success) {
          // Optional: Add a success message or toast notification here
          window.location.reload(); // Force refresh to show updated list
        }
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("Failed to delete post. Please try again.");
      }
    });
  };

  return (
    <Button
      onClick={handleDelete}
      colorScheme="red"
      size="sm"
      isLoading={isPending}
    >
      Delete
    </Button>
  );
}

export function UpdateButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-fit"
      type="submit"
      colorScheme="teal"
      isLoading={pending}
      loadingText="Submitting"
    >
      {pending ? "Submitting.." : "Update"}
    </Button>
  );
}
