import React from "react";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ButtonCustom } from "./button-custom";

export const ContactForm = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <FieldGroup>
        <Field>
          <FieldLabel className="text-sixth" htmlFor="email">
            Correo
          </FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="@"
            required
            className="border-r-0 border-l-0 border-t-0 rounded-none border-b-stone-800"
          />
        </Field>
        <Field>
          <FieldLabel className="text-sixth" htmlFor="message">
            Mensaje
          </FieldLabel>
          <Textarea
            placeholder="Type your message here."
            className="border-r-0 border-l-0 border-t-0 rounded-none border-b-stone-800"
          />
        </Field>
      </FieldGroup>
      <ButtonCustom text="Enviar Mensaje" />
    </form>
  );
};
