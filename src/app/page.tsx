import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">

      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">

          <img
            src="/logo_uv.svg"
            alt="Logo UV"
            className="h-10 w-auto object-contain"
          />
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            Visualización de datos OBEME
          </h1>
        </div>
        
      </header>

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-[1920px] mx-auto h-full flex flex-col">

          <div className="flex-1 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative flex flex-col">

            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Vista de los datos
              </h2>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>


            <div className="w-full h-[600px] lg:h-[calc(100vh-180px)] bg-slate-100 relative">
              <iframe
                title="Dashboard OBEME"
                className="w-full h-full absolute inset-0"
                src="https://app.powerbi.com/view?r=eyJrIjoiNWE5ODg3OTYtY2IyYS00OGI5LWEzMTUtZWZkNjBjNjJlOGYzIiwidCI6IjNjOTA3NjUxLWQ4YzYtNGNhNi1hOGE0LTZhMjQyNDMwZTY1MyIsImMiOjR9&pageName=cdb896e294c13e6ea1f3"
                frameBorder="0"
                allowFullScreen={true}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="p-4 text-center text-gray-500 text-sm">
        © 2025 Instituto de Salud Pública UV
      </footer>
    </div>
  );
}
