// motion-chakra.ts
"use client";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Text,
  HStack,
  VStack,
  Flex,
  Stack,
  Grid,
  Heading,
  Image,
} from "@chakra-ui/react";

// I-wrap natin lahat ng gusto mong i-motion na Chakra components
export const MotionBox = motion(Box);
export const MotionButton = motion(Button);
export const MotionText = motion(Text);
export const MotionHStack = motion(HStack);
export const MotionVStack = motion(VStack);
export const MotionFlex = motion(Flex);
export const MotionStack = motion(Stack);
export const MotionGrid = motion(Grid);
export const MotionHeading = motion(Heading);
export const MotionImage = motion(Image);
