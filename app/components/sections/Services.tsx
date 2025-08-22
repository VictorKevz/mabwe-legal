import { serviceInfo, services } from "@/data/services";
import React from "react";
import CTALink from "../ui/CTALink";
import { ArrowForward } from "@mui/icons-material";
import {
  ServicesAnimationWrapper,
  ServiceCardAnimation,
  ServicesHeaderAnimation,
} from "./ServicesClient";

export const Services = () => {
  return (
    <section className="w-full px-4 md:px-6 relative z-20 py-20">
      <div className=" w-full flex flex-col items-center justify-center">
        <ServicesHeaderAnimation>
          <header className="max-w-screen-xl w-full text-center">
            <h2 className="text-2xl md:text-4xl">{serviceInfo.title}</h2>
            <p className="max-w-xl">{serviceInfo.description}</p>
          </header>
        </ServicesHeaderAnimation>
        <div className="max-w-screen-xl w-full flex flex-col items-center mt-12">
          <ServicesAnimationWrapper>
            {services.slice(0, 6).map((service) => (
              <ServiceCardAnimation key={service.title}>
                <article className="card px-6 pt-6 pb-4 w-full">
                  <header className="flex items-center gap-1">
                    <span className="min-h-10 min-w-10 bg-[var(--color-warning)] flex items-center justify-center text-[var(--color-text-on-primary)] rounded-md">
                      <service.icon />
                    </span>
                    <h3 className="text-lg">{service.title}</h3>
                  </header>
                  <p className="text-sm lg:text-base my-3">{service.summary}</p>
                  <ul className="flex flex-col gap-0.5">
                    {service.characteristics.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1 text-sm"
                      >
                        <span className="h-2 w-2 bg-[var(--color-warning)] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <CTALink
                      text="Learn More"
                      href="/services"
                      variant="outline"
                      icon={ArrowForward}
                    />
                  </div>
                </article>
              </ServiceCardAnimation>
            ))}
          </ServicesAnimationWrapper>
          <div className="max-w-xl w-full text-center mt-10 flex flex-col items-center gap-2">
            <p className="text-lg">
              Looking for other practices? We have more services
            </p>
            <CTALink
              text="View All Services"
              href="/services"
              variant="primary"
              className="max-w-[15rem]"
              icon={ArrowForward}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
