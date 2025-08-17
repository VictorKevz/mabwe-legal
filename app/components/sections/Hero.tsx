import React from "react";
import Image from "next/image";
import CTALink from "../ui/CTALink";
import { Form } from "../ui/Form";
import { HeroClient, AnimatedContent } from "./HeroClient";

export const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center min-h-[calc(100dvh-5.5rem)] px-4 md:px-6 relative z-20">
      <HeroClient>
        <div className="max-w-xl w-full flex flex-col items-start p-6 rounded-lg">
          <AnimatedContent variant="fadeInUp">
            <h1 className="text-2xl sm:text-4xl font-bold text-[var(--color-text-on-primary)]!">
              Trusted Legal Solutions <br className="hidden sm:block" /> for
              Life's Challenges
            </h1>
          </AnimatedContent>

          <AnimatedContent variant="fadeInUp">
            <p className="text-[var(--color-text-on-primary)]! max-w-2xl text-lg mt-1 opacity-90">
              Mabwe Law Firm is here to protect your rights and guide you
              through complex legal issues with clarity and confidence.
            </p>
          </AnimatedContent>

          <AnimatedContent variant="fadeInUp">
            <div className="max-w-[15rem] w-full mt-4">
              <CTALink
                text="Get Legal Help"
                href="/contact"
                variant="primary"
                className="hover:text-[var(--color-text-on-primary)]!"
              />
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent variant="fadeIn">
          <Form />
        </AnimatedContent>
      </HeroClient>
      <picture className="absolute inset-0 -z-10 w-full h-full pointer-events-none opacity-95">
        <source
          media="(min-width:1024px )"
          srcSet="/home/hero-desktop-bg.webp"
        />
        <Image
          src="/home/hero-mobile-bg.webp"
          fill
          alt="An image of Mabwe's Legal team of lawyers"
          className="object-cover"
        />
      </picture>
      <div className="overlay"></div>
    </section>
  );
};
