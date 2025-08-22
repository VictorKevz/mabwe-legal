"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useIsHydrated } from "../../hooks/useIsHydrated";
import { CardVariants, FadeInVariants } from "@/app/variants";

interface ServicesClientProps {
  children: React.ReactNode;
}

export const ServicesAnimationWrapper = ({ children }: ServicesClientProps) => {
  const isHydrated = useIsHydrated();

  if (!isHydrated) {
    return (
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-5 justify-between">
        {children}
      </div>
    );
  }

  return (
    <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-5 justify-between">
      {children}
    </div>
  );
};

export const ServiceCardAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isHydrated = useIsHydrated();

  if (!isHydrated) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <motion.div
      className="w-full"
      variants={CardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const ServicesHeaderAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isHydrated = useIsHydrated();

  if (!isHydrated) {
    return <>{children}</>;
  }

  return (
    <motion.div
      variants={FadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
