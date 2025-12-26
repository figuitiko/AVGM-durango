import React from "react";
import { RoundedShape } from "../share/rounded-shape";
import Image from "next/image";
import { LinkButtonCustom } from "../share/button-custom";

export const ConsultLinks = () => {
  return (
    <section>
      <RoundedShape className="flex-row">
        <div className="flex items-center justify-center bg-third flex-1">
          <picture>
            <Image
              src="/images/consult.png"
              alt="Consult Links"
              width={500}
              height={300}
            />
          </picture>
        </div>
        <div className="flex-1 flex flex-col  p-8">
          <p className="text-sm">LINKS DE CONSULTA</p>
          <h2 className="mt-16 mb-4 text-5xl text-secondary-custom font-bold">
            Consulta información oficial sobre la AVGM.
          </h2>
          <LinkButtonCustom
            href="https://www.gob.mx/avgm"
            text="CONSULTAR LINKS"
            className="w-fit"
          />
        </div>
      </RoundedShape>
    </section>
  );
};
