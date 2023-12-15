import Service from "@/components/Service";
import ServiceHeader from "@/components/ServiceHeader";
import ServiceTitles from "@/components/ServiceHeader";
import Paper from "@/components/styles/Paper";
import { SERVICES } from "@/utils/data";

const mappingServices = SERVICES.map((service) => service);

const activeBtn = "";

const Services = () => {
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
