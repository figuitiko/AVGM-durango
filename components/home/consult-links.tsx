import React from "react";
import { RoundedShape } from "../share/rounded-shape";
import Image from "next/image";
import { LinkButtonCustom } from "../share/button-custom";

export const ConsultLinks = () => {
  return (
    <section id="consult-links">
      <RoundedShape className="md:flex-row ">
        <RoundedShape
          color="third"
          className="flex items-center justify-center flex-1"
        >
          <picture>
            <Image
              src="/images/consult.png"
              alt="Consult Links"
              width={500}
              height={300}
            />
          </picture>
        </RoundedShape>
        <div className="flex-1 flex flex-col  p-8">
          <p className="text-sm">LINKS DE CONSULTA</p>
          <h2 className="mt-16 mb-4 text-3xl md:text-5xl text-secondary-custom font-bold">
            Consulta información oficial sobre la AVGM.
          </h2>
          <LinkButtonCustom
            href="links"
            text="CONSULTAR LINKS"
            className="w-fit"
          />
        </div>
      </RoundedShape>
    </section>
  );
};
