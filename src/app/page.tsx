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
            Índice de Derechos Humanos en el Espacio Docente Asistencial
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
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">
              ¿Qué es IDHEDA?
            </h2>

            <div className="space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                El Observatorio de Educación Médica y Derechos Humanos (OBEME) presenta el
                Índice de Derechos Humanos del Espacio Docente Asistencial (IDHEDA). Este
                índice se obtiene de la evaluación del Espacio Docente Asistencial (EDA)
                que hacen los estudiantes de internado y el servicio social de la carrera
                de Medicina, o de la evaluación al mismo que realizan las y los médicos
                residentes.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                El IDHEDA se define como el porcentaje del puntaje obtenido en las escalas
                DERIM (para internos y pasantes) o en la escala DERES (residentes). Un
                índice de 100% equivale a que toda la población de estudiantes de un EDA
                otorga el puntaje máximo a todos los ítems de dichas escalas.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                Además, se presenta la tendencia del IDHEDA que va de menos uno (-1) a más
                uno (+1). La tendencia positiva significa progresividad en el IDHEDA y la
                negativa regresión o retroceso.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                Para conocer la tendencia del IDHEDA es necesario tener por lo menos un
                par de evaluaciones; primero se establece la relación de cada IDHEDA
                respecto a la medición anterior para establecer si aumentó (suma un
                punto), quedó igual (ni suma ni resta) o disminuyó (resta un punto);
                después el resultado se divide entre el número de comparaciones
                realizadas.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed text-justify">
                La tendencia del IDHEDA es un indicador de la progresividad de los
                derechos humanos en el Espacio Docente Asistencial.
              </p>
            </div>

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
