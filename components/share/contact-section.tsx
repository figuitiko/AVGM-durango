import { RoundedShape } from "./rounded-shape";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <section id="contact">
      <RoundedShape color="fifth" className="md:flex-row">
        <div className="flex-1 flex flex-col">
          <h2 className="text-3xl text-white font-semibold mb-4">
            Contáctanos
          </h2>

          <ul className="text-white list-inside space-y-4">
            <li>
              <a href="tel:6181374600">
                <strong>Teléfono:</strong> 618 137 4600
              </a>
            </li>
            <li>
              <a href="mailto:avgm.iem@gmail.com">
                <strong>Correo Electrónico:</strong> avgm.iem@gmail.com
              </a>
            </li>
            <li>
              <strong>Dirección:</strong> Zaragosa #526 Sur, Durango, México
            </li>
          </ul>
          {/* <picture>
            <Image
              src="/images/image-contact.png"
              width={426}
              height={181}
              alt="image-contact"
            />
          </picture> */}
        </div>
        <div className="flex-1">
          {/* <h2 className="text-3xl text-white font-semibold mb-4">
            Mándanos tu mensaje
          </h2>
          <RoundedShape className="mt-4 p-6">
            <ContactForm />
          </RoundedShape> */}
          <picture>
            <Image
              src="/images/image-contact.png"
              width={426}
              height={181}
              alt="image-contact"
            />
          </picture>
        </div>
      </RoundedShape>
    </section>
  );
};
