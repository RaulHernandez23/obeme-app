export default function PisPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard de PIS</h1>
            <div className="w-full max-w-6xl h-[80vh] border rounded-2xl overflow-hidden shadow-lg">
                <iframe title="DashboardPIS" 
                width="100%" 
                height="100%" 
                src="https://app.powerbi.com/view?r=eyJrIjoiMzczZDQwYWQtZGQ2OS00ZmYyLTg1MjgtNTVkY2FkODliZDQ0IiwidCI6IjNjOTA3NjUxLWQ4YzYtNGNhNi1hOGE0LTZhMjQyNDMwZTY1MyIsImMiOjR9" 
                frameBorder="0"
                allowFullScreen></iframe>
            </div>
        </main>
    );
}
