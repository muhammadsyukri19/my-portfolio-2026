"use client";

import { useRef, forwardRef, useImperativeHandle } from "react";
import { motion, useInView } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "transition"
> {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  margin?: string;
  className?: string;
}

const getInitial = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { opacity: 0, y: distance };
    case "down":
      return { opacity: 0, y: -distance };
    case "left":
      return { opacity: 0, x: distance };
    case "right":
      return { opacity: 0, x: -distance };
    case "none":
      return { opacity: 0 };
  }
};

const getAnimate = (direction: Direction) => {
  switch (direction) {
    case "up":
    case "down":
      return { opacity: 1, y: 0 };
    case "left":
    case "right":
      return { opacity: 1, x: 0 };
    case "none":
      return { opacity: 1 };
  }
};

const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  function ScrollReveal(
    {
      children,
      direction = "up",
      delay = 0,
      duration = 0.6,
      distance = 40,
      once = true,
      margin = "-60px",
      className,
      ...rest
    },
    externalRef,
  ) {
    const internalRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(internalRef, {
      once,
      margin: margin as `${number}px`,
    });

    // Expose the internal ref to the parent via forwardRef
    useImperativeHandle(
      externalRef,
      () => internalRef.current as HTMLDivElement,
    );

    return (
      <motion.div
        ref={internalRef}
        initial={getInitial(direction, distance)}
        animate={
          isInView ? getAnimate(direction) : getInitial(direction, distance)
        }
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    );
  },
);

export default ScrollReveal;
