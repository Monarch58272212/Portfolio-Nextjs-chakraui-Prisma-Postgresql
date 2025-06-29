"use client";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ShowToast() {
  const toast = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const error = searchParams.get("error");
    const shown = sessionStorage.getItem("unauthorized-toast-shown");

    if (error === "unauthorized" && !shown) {
      toast({
        title: "Access Denied",
        description: "Only authorized user can access the protected pages.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      sessionStorage.setItem("unauthorized-toast-shown", "true");

      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete("error");

      const newSearch = current.toString();
      const newPath = `${window.location.pathname}${
        newSearch ? `?${newSearch}` : ""
      }`;

      router.replace(newPath, { scroll: false });
    }

    return () => {
      sessionStorage.removeItem("unauthorized-toast-shown");
    };
  }, [searchParams, toast, router]);

  return null;
}
