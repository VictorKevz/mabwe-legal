"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeInUpVariants, FadeInVariants } from "../../variants";

interface HeroClientProps {
  children: React.ReactNode;
}

export const HeroClient = ({ children }: HeroClientProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedContent = ({
  children,
  variant = "fadeInUp",
}: {
  children: React.ReactNode;
  variant?: "fadeInUp" | "fadeIn";
}) => {
  const variants = variant === "fadeInUp" ? FadeInUpVariants : FadeInVariants;

  return (
    <motion.div className="w-full" variants={variants}>
      {children}
    </motion.div>
  );
};
