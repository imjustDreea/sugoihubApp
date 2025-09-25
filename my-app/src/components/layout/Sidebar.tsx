import { Home, User } from "lucide-react";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-800 h-full flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">SugoiHub</h1>
      <nav className="flex flex-col gap-4">
        <a href="/" className="flex items-center gap-2 hover:text-purple-400">
          <Home size={20} /> Home
        </a>
        <a href="/profile" className="flex items-center gap-2 hover:text-purple-400">
          <User size={20} /> Perfil
        </a>
      </nav>
    </aside>
  );
}