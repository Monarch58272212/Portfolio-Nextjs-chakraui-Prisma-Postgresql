"use client";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  chakra,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useRouter } from "next/navigation";

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

export function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const toast = useToast();

  const handleDelete = async (): Promise<void> => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    startTransition(async () => {
      try {
        const result = await deletePost(id);
        if (result.success) {
          toast({
            title: "Post deleted.",
            description: "Your post has been successfully deleted.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          router.refresh(); // Refresh the current route
        } else {
          toast({
            title: "Deletion failed.",
            description:
              "There was an error deleting the post. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.error("Delete error:", error);
        toast({
          title: "Error",
          description: "An unexpected error occurred while deleting the post.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
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
