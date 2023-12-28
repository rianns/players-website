"use client";
import Service from "@/components/Service";
import ServiceHeader from "@/components/ServiceHeader";
import { SERVICES } from "@/utils/data";
import { use, useState } from "react";

const Services = () => {
  const [activeBtn, setActiveBtn] = useState<boolean>(false); // sent to header and service
  const [showService, setShowService] = useState<boolean>(true); // sent to service
  const [hideService, setHideService] = useState<boolean>(true); // sent to service

  return (
    <section className="services flexCenter flex-col">
      <article className="services-headers">
        {SERVICES.map((service) => (
          <ServiceHeader key={service.key} title={service.title} />
        ))}
      </article>
      <article className="services-prices">
        {SERVICES.map((service) => (
          <Service key={service.key} cuts={service.cuts} />
        ))}
      </article>
    </section>
  );
};
export default Services;
