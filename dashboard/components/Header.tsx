// dashboard/components/Header.tsx
"use client";

import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <Menu className="h-6 w-6 text-gray-700" />
        <h1 className="text-xl font-semibold text-gray-800">Dashboard Guru</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-gray-700" />
        </Button>
        <div className="flex items-center gap-2">
          <img
            src="/avatar.png"
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">Bu Lina</span>
        </div>
      </div>
    </header>
  );
}
