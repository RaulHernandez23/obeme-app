import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="p-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Plataforma PIS + OBEME</h1>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-1 items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <ProjectCard
            title="PIS"
            description="Dashboard y datos del proyecto PIS"
            href="/pis"
            color="bg-blue-600 text-white hover:bg-blue-700"
          />
          <ProjectCard
            title="OBEME"
            description="Dashboard y datos del proyecto OBEME"
            href="/obeme"
            color="bg-green-600 text-white hover:bg-green-700"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500 text-sm">
        © 2025 Instituto de Salud Pública UV
      </footer>
    </div>
  );
}
