import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#1a1a2e] text-white font-roboto">
            <header className="bg-[#0f3460] px-8 py-4 flex items-center justify-between">
                <div className="font-bold text-2xl tracking-wider">
                    <span role="img" aria-label="logo">🦸‍♂️</span> SUGOIHUB
                </div>
                <nav>
                    <a href="#" className="text-[#e94560] mx-4 no-underline">Inicio</a>
                    <a href="#" className="text-[#e94560] mx-4 no-underline">Comunidades</a>
                    <a href="#" className="text-[#e94560] mx-4 no-underline">Perfil</a>
                </nav>
            </header>
            <main className="flex max-w-[1200px] mx-auto my-8 gap-8">
                <aside className="w-[250px] bg-[#16213e] rounded-lg p-4 min-h-[400px]">
                    <h3 className="text-[#e94560]">Menú</h3>
                    <ul className="list-none p-0">
                        <li><a href="#" className="text-white no-underline">Mi feed</a></li>
                        <li><a href="#" className="text-white no-underline">Amigos</a></li>
                        <li><a href="#" className="text-white no-underline">Eventos</a></li>
                        <li><a href="#" className="text-white no-underline">Ajustes</a></li>
                    </ul>
                </aside>
                <section className="flex-1">
                    {children}
                </section>
                <aside className="w-[250px] bg-[#16213e] rounded-lg p-4 min-h-[400px]">
                    <h3 className="text-[#e94560]">Tendencias</h3>
                    <ul className="list-none p-0">
                        <li>#Anime</li>
                        <li>#Manga</li>
                        <li>#Videojuegos</li>
                        <li>#Cosplay</li>
                    </ul>
                </aside>
            </main>
            <footer className="bg-[#0f3460] text-center py-4 mt-8">
                © {new Date().getFullYear()} SUGOIHUB - Comunidad Friki
            </footer>
        </div>
    );
};

export default Layout;