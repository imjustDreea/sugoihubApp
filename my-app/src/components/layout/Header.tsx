export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
              S
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold">SugoiHub</h1>
              <p className="text-sm text-gray-500">Tu espacio friki</p>
            </div>
          </div>

          <div className="flex-1 px-4">
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  className="w-full pl-4 pr-10 py-2 rounded-md border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="Buscar..."
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                  ⌕
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-md border">
              Crear
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
              JD
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
