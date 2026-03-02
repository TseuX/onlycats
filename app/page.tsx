import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 font-sans">
      <main className="flex flex-col items-center gap-12 p-8 text-center">
        
        {/* Ton nouveau Logo en image */}
        <div className="flex flex-col items-center gap-4">
          <Image 
            src="/logo.jpg" 
            alt="OnlyCats Logo" 
            width={350} 
            height={100} 
            priority
            className="h-auto w-auto"
          />
          <p className="text-slate-500 font-medium -mt-4">
            L'exclusivité féline à portée de patte.
          </p>
        </div>

        {/* Tes boutons préférés avec l'effet de zoom */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-baby-pink text-white px-10 py-4 rounded-2xl shadow-lg font-bold hover:scale-105 transition-transform cursor-pointer">
            S'abonner 💖
          </button>

          <button className="bg-baby-blue text-white px-10 py-4 rounded-2xl shadow-lg font-bold hover:scale-105 transition-transform cursor-pointer">
            Explorer 💙
          </button>
        </div>

        <footer className="mt-20 text-slate-300 text-xs uppercase tracking-widest font-bold">
          Montréal • 2026
        </footer>
        
      </main>
    </div>
  );
}