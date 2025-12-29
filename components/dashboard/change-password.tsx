"use client";
import { startTransition, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { changePassword } from "@/actions/user";
import { toast } from "sonner";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(() => {});

    if (newPassword !== confirmPassword) {
      toast.error("Los passwords no coinciden");
      return;
    }
    if (newPassword === currentPassword) {
      toast.error("La nueva contraseña debe ser diferente a la actual");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const data = await changePassword(formData);

      if (data && "message" in data) {
        setErrorMessage(data.message);
      }
      if (data && "errors" in data) {
        const errors = data.errors;
        const firstError =
          errors.oldPassword?.[0] || errors.newPassword?.[0] || "";
        setErrorMessage(firstError);
      }
    } catch {
    } finally {
      setIsLoading(false);
    }
  };
  const isValid =
    currentPassword &&
    newPassword &&
    confirmPassword &&
    newPassword === confirmPassword;

  return (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Cambiar contraseña</h2>
        <p className="text-sm text-gray-500 mt-1">
          Actutualice su contraseña para mantener la seguridad de su cuenta.
        </p>
        {errorMessage && (
          <div className="mt-4 text-red-600 font-medium">{errorMessage}</div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input
            id="current-password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            name="oldPassword"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input
            id="new-password"
            name="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <Input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <Button
          disabled={!isValid || isLoading}
          type="submit"
          className="inline-flex items-center justify-center rounded-lg border border-black/15 bg-white px-3 py-2 text-sm text-third font-medium hover:bg-black/5"
        >
          {isLoading ? "Changing Password..." : "Change Password"}
        </Button>
      </form>
    </div>
  );
}
