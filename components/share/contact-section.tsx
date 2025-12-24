import React from "react";
import { RoundedShape } from "./rounded-shape";
import Image from "next/image";
import { ContactForm } from "./contact-form";

export const ContactSection = () => {
  return (
    <section>
      <RoundedShape color="fifth" className="flex-row">
        <div className="flex-1 flex flex-col">
          <h2 className="text-3xl text-white font-semibold mb-4">
            Contáctanos
          </h2>

          <ul className="text-white list-inside space-y-4">
            <li>
              <strong>Teléfono:</strong> 01 800 123 4567
            </li>
            <li>
              <strong>Correo Electrónico:</strong> ff@example.com
            </li>
            <li>
              <strong>Dirección:</strong> Calle Falsa 123, Durango, México
            </li>
          </ul>
          <picture>
            <Image
              src="/images/image-contact.png"
              width={426}
              height={181}
              alt="image-contact"
            />
          </picture>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl text-white font-semibold mb-4">
            Mándanos tu mensaje
          </h2>
          <RoundedShape className="mt-4 p-6">
            <ContactForm />
          </RoundedShape>
        </div>
      </RoundedShape>
    </section>
  );
};
