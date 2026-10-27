import { Transition } from "motion/react";

export const SPRING_SNAPPY: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const SPRING_GENTLE: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 18,
};

export const SPRING_BOUNCY: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 15,
};

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};
