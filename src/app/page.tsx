"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">

          <img
            src="/logo_uv.svg"
            alt="Logo UV"
            className="h-10 w-auto object-contain"
          />
          <img
            src="/logo_obeme.jpg"
            alt="Logo OBEME"
            className="h-10 w-auto object-contain"
          />
          <h1 className="text-xl font-bold tracking-tight text-slate-800">
            Visualización de datos de la evaluación de los campos clínicos en medicina
          </h1>
        </div>

        {/* Botón explicación */}
        <button
          onClick={() => setOpen(true)}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
        >
          ¿Qué es IDHEDA?
        </button>
      </header>

      {/* MAIN */}
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
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="p-4 text-center text-gray-500 text-sm">
        © 2025 Observatorio de Educación Médica Y Derechos Humanos
      </footer>

      {/* MODAL EXPLICACIÓN */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">
              ¿Qué es IDHEDA?
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed justify">
              El Índice de Derechos Humanos del Espacio Docente Asistencial (IDHEDA) se define como el porcentaje del puntaje obtenido en el cuestionario OBEME por toda la población de estudiantes.
              <br />
              <br />
              Un puntaje de 100 significa que la institución ofrece un goce pleno del derecho a la educación y del derecho a la protección a la salud de los participantes.
            </p>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm font-medium rounded-md bg-slate-100 hover:bg-slate-200 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
