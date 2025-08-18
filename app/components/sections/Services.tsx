import { serviceInfo, services } from "@/data/services";
import Link from "next/link";
import React from "react";
import CTALink from "../ui/CTALink";

export const Services = () => {
  return (
    <section className="w-full px-4 md:px-6 relative z-20 py-20">
      <div className=" w-full flex flex-col items-center justify-center">
        <header className="max-w-screen-xl w-full">
          <h2 className="text-2xl md:text-4xl">{serviceInfo.title}</h2>
          <p className="max-w-xl">{serviceInfo.description}</p>
        </header>
        <div className="max-w-screen-xl w-full flex flex-col items-center mt-12">
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-5 justify-between">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="card p-6">
                <header className="flex items-center gap-1">
                  <span className="min-h-10 min-w-10 bg-[var(--color-warning)] flex items-center justify-center text-[var(--color-text-on-primary)] rounded-md">
                    <service.icon />
                  </span>
                  <h3 className="text-lg">{service.title}</h3>
                </header>
                <p className="text-sm lg:text-base my-3">{service.summary}</p>
                <ul className="flex flex-col gap-0.5">
                  {service.characteristics.map((item) => (
                    <li key={item} className="flex items-center gap-1 text-sm">
                      <span className="h-2 w-2 bg-[var(--color-warning)] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="max-w-xl w-full text-center mt-10 flex flex-col items-center gap-2">
            <p className="text-lg">
              Looking for other practices? We have more services
            </p>
            <CTALink
              text="View All Services"
              href="/services"
              variant="primary"
              className="max-w-[15rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
