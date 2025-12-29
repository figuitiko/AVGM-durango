import { bebasNeue } from "@/lib/fonts";
import Image from "next/image";
import { Fragment } from "react";

const municipalities = [
  "Durango",
  "Gómez Palacio",
  "Lerdo",
  "Mezquital",
  "Pueblo Nuevo",
  "Poanas",
  "Tamazula",
  "Canatlán",
  "General Simón Bolívar",
  "Mapimí",
  "Nombre de Dios",
  "Rodeo",
  "Tlahualilo",
  "Vicente Guerrero",
  "Santiago Papasquiaro",
  "Guadalupe Victoria",
];

export const Municipalities = () => {
  return (
    <section>
      <Image
        src="/images/map-mun.png"
        alt="Municipalities Map"
        width={1200}
        height={800}
      />
      <div className="flex flex-wrap gap-2 justify-center">
        {municipalities.map((mun, idx) => (
          <Fragment key={mun}>
            <h3
              className={`text-5xl font-semibold text-secondary-custom uppercase tracking-tight ${bebasNeue.className}`}
            >
              {mun}
            </h3>
            {idx !== municipalities.length - 1 && (
              <span
                className={`text-2xl md:text-5xl font-semibold text-secondary-custom uppercase tracking-tight ${bebasNeue.className}`}
              >
                |{" "}
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
