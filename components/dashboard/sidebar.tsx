"use client";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { logout } from "@/auth/auth";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);

  async function handleLogout() {
    setIsLoggingOut(true);
    try {
      await logout();
    } catch {
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <aside
      aria-label="Sidebar"
      className={cn(
        "w-65 min-h-screen border-r border-black/10 p-4 flex flex-col gap-3",
        className
      )}
    >
      <div className="text-base font-semibold">Dashboard</div>

      <nav aria-label="Primary">
        <ul className="list-none p-0 m-0 grid gap-2">
          <li>
            <Link
              href="/"
              className="block px-3 py-2.5 rounded-lg no-underline"
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full px-3 py-2.5 rounded-lg border border-black/20 bg-white text-left cursor-pointer disabled:cursor-not-allowed disabled:bg-black/5"
        >
          {isLoggingOut ? "Logging out…" : "Logout"}
        </button>
      </div>
    </aside>
  );
}
