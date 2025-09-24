export default function SidebarLeft(){
  return (
    <nav className="sticky top-6 space-y-4">
      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            U
          </div>
          <div>
            <div className="font-semibold">Usuaria</div>
            <div className="text-sm text-gray-500">@usuario</div>
          </div>
        </div>
        <div className="mt-4 grid gap-2">
          <a className="text-sm py-2 px-3 rounded-md hover:bg-gray-50">
            Inicio
          </a>
          <a className="text-sm py-2 px-3 rounded-md hover:bg-gray-50">
            Mensajes
          </a>
          <a className="text-sm py-2 px-3 rounded-md hover:bg-gray-50">
            Grupos
          </a>
          <a className="text-sm py-2 px-3 rounded-md hover:bg-gray-50">
            Favoritos
          </a>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <div className="text-sm font-semibold mb-2">Tus intereses</div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-2 py-1 rounded-full border">Música</span>
          <span className="text-xs px-2 py-1 rounded-full border">
            Videojuegos
          </span>
          <span className="text-xs px-2 py-1 rounded-full border">Manga</span>
        </div>
      </div>
    </nav>
  );
}
