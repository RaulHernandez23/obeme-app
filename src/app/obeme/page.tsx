export default function ObemePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard de OBEME</h1>
            <div className="w-full max-w-6xl h-[80vh] border rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    title="Dashboard OBEME"
                    width="100%"
                    height="100%"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMGM4MzdiNDYtNjI3ZS00ODlmLWJkOGUtNTljNDYzNDBiOGQxIiwidCI6IjNjOTA3NjUxLWQ4YzYtNGNhNi1hOGE0LTZhMjQyNDMwZTY1MyIsImMiOjR9&pageName=cdb896e294c13e6ea1f3"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </main>

    );
}
