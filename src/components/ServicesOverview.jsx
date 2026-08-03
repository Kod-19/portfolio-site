import { useEffect, useState } from "react";
import { portfolioService } from "../services/portfolioService";
import Title from "./Title";

const ServicesOverview = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      const data = await portfolioService.getServices();
      setServices(data);
      setLoading(false);
    };

    loadServices();
  }, []);

  return (
    <section id="services">
      <Title title="Services" />

      {loading ? (
        <p className="pt-8 text-sm text-slate-400">Loading services...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="interactive-card rounded-lg p-5"
            >
              <h2 className="text-xl font-black text-(--title-color)">
                {service.title}
              </h2>
              <p className="pt-3 text-sm font-medium leading-7 text-(--text-color)">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicesOverview;
