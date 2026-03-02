import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 font-sans">
      <main className="flex flex-col items-center gap-12 p-8 text-center">
        
        {/* Logo OnlyCats stylisé */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl font-black italic tracking-tighter">
            <span className="text-baby-blue">Only</span>
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent ml-1">
              Cats
            </span>
          </h1>
          <p className="text-slate-500 font-medium">
            L'exclusivité féline à portée de patte.
          </p>
        </div>

        {/* Boutons avec l'effet de zoom (scale) et les bonnes couleurs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-baby-pink text-white px-10 py-4 rounded-2xl shadow-lg font-bold hover:scale-105 transition-transform cursor-pointer">
            S'abonner 💖
          </button>

          {/* Ici on utilise bg-baby-blue directement pour être sûr que ça s'affiche */}
          <button className="bg-baby-blue text-white px-10 py-4 rounded-2xl shadow-lg font-bold hover:scale-105 transition-transform cursor-pointer">
            Explorer 💙
          </button>
        </div>

        {/* Footer discret */}
        <footer className="mt-20 text-slate-300 text-xs uppercase tracking-widest font-bold">
          Montréal • 2026
        </footer>
        
      </main>
    </div>
  );
}