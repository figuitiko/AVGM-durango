import { LoginForm } from "@/components/login/login-form";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-150">
      <div className="flex flex-col p-4 lg:w-1/3">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Iniciar sesión</h1>
          <p className="text-gray-500">
            Entre su correo electrónico y contraseña para iniciar sesión.
          </p>
        </div>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
