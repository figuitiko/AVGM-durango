"use client";

import { login } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

export function LoginForm() {
  const [state, action, isPending] = useActionState(login, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-2">
        <div>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            name="email"
            placeholder="m@example.com"
            type="email"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-500">{state.errors.email}</p>
          )}
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Contraseña</Label>
          </div>
          <Input id="password" type="password" name="password" />
          {state?.errors?.password && (
            <p className="text-sm text-red-500">{state.errors.password}</p>
          )}
        </div>
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <Button aria-disabled={isPending} type="submit" className="mt-4 w-full">
          {isPending ? "Enviando..." : "Iniciar sesión"}
        </Button>
      </div>
    </form>
  );
}
