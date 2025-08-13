import React from "react";
import Link from "next/link";

interface CTALinkProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}

export default function CTALink({
  text,
  href,
  variant = "primary",
  className = "",
  onClick,
  target,
  rel,
}: CTALinkProps) {
  const baseClasses =
    "rounded-lg font-semibold text-center transition-all duration-300 inline-flex items-center justify-center no-underline";

  const variantClasses = {
    primary:
      "bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-[var(--color-text-on-primary)] shadow-[var(--shadow-color)]",
    secondary:
      "bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] text-[var(--color-text-on-primary)]",
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-on-primary)]",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <Link
      href={href}
      className={combinedClasses}
      onClick={onClick}
      target={target}
      rel={rel}
    >
      {text}
    </Link>
  );
}
