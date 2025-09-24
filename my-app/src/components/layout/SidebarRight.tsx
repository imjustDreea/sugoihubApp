export default function SidebarRight() {
  return (
    <div className="space-y-4 sticky top-6">
      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <h3 className="font-semibold">Tendencias</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-600">
          <li>#IndieGames</li>
          <li>#NuevoManga</li>
          <li>#Concierto</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <h3 className="font-semibold">Personas a seguir</h3>
        <div className="mt-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-200" />
              <div>
                <div className="text-sm font-medium">UsuarioCool</div>
                <div className="text-xs text-gray-500">Música & Retro</div>
              </div>
            </div>
            <button className="text-sm px-3 py-1 rounded-md border">
              Seguir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
