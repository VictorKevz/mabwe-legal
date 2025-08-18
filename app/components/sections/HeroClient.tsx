"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeInUpVariants, FadeInVariants } from "../../variants";

interface HeroClientProps {
  children: React.ReactNode;
}

// This component only adds animation wrapper without affecting content
export const HeroAnimationWrapper = ({ children }: HeroClientProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // Render children without animation wrapper on server
  // Add animation only after client hydration
  if (!isMounted) {
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

// Progressive enhancement: content is visible immediately, animation is added progressively
interface AnimatedContentProps {
  children: React.ReactNode;
  variant?: "fadeInUp" | "fadeIn";
}
export const AnimatedContent = ({
  children,
  variant = "fadeInUp",
}: AnimatedContentProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const variants = variant === "fadeInUp" ? FadeInUpVariants : FadeInVariants;

  // Render content immediately without motion wrapper on server
  if (!isMounted) {
    return <div className="w-full">{children}</div>;
  }

  // Add animation only after hydration
  return (
    <motion.div className="w-full" variants={variants}>
      {children}
    </motion.div>
  );
};
