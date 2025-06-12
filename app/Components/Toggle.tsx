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

  const handleDelete = () => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    startTransition(() => {
      deletePost(id);
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
