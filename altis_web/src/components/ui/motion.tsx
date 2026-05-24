"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

interface AnimateSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: "fadeInUp" | "fadeIn";
}

export function AnimateSection({
  children,
  className,
  variant = "fadeInUp",
  ...props
}: AnimateSectionProps) {
  const variants = variant === "fadeIn" ? fadeIn : fadeInUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface AnimateStaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function AnimateStagger({
  children,
  className,
  ...props
}: AnimateStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface AnimateItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function AnimateItem({ children, className, ...props }: AnimateItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { fadeInUp, fadeIn, stagger };
