import Service from "@/components/Service";
import Paper from "@/components/styles/Paper";
import { SERVICES } from "@/utils/data";

const Services = () => {
  return (
    <section className="services flexCenter">
      <div className="flex flex-row">
        {SERVICES.map((serv) => {
          const { key: serviceKey, ...services } = serv;
          return <Service key={serviceKey} {...services} />;
        })}
      </div>
    </section>
  );
};
export default Services;
