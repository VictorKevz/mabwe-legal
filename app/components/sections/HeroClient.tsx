"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeInUpVariants, FadeInVariants } from "../../variants";
import { useIsHydrated } from "../../hooks/useIsHydrated";

interface HeroClientProps {
  children: React.ReactNode;
}

export const HeroAnimationWrapper = ({ children }: HeroClientProps) => {
  const isHydrated = useIsHydrated();

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

  if (!isHydrated) {
    return (
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-center gap-5">
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-5"
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
  const isHydrated = useIsHydrated();

  const variants = variant === "fadeInUp" ? FadeInUpVariants : FadeInVariants;

  if (!isHydrated) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <motion.div className="w-full" variants={variants}>
      {children}
    </motion.div>
  );
};
