
import Header from "./Header";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import Feed from "./Feed";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 font-sans">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 pt-6">
          <aside className="hidden md:block md:col-span-1 lg:col-span-3">
            <div className="rounded-xl shadow-lg bg-white border border-blue-200 p-4 h-full">
              <SidebarLeft />
            </div>
          </aside>

          <main className="md:col-span-3 lg:col-span-6">
            <div className="rounded-xl shadow-lg bg-white border border-purple-200 p-6 min-h-[60vh]">
              <Feed />
            </div>
          </main>

          <aside className="hidden lg:block lg:col-span-3">
            <div className="rounded-xl shadow-lg bg-white border border-pink-200 p-4 h-full">
              <SidebarRight />
            </div>
          </aside>
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
