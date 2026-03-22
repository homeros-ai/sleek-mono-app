import React from 'react';

const influencers = [
  { id: 1, name: "Melis Erten", handle: "@meliserten", platform: "TikTok", er: "12.4%", benchmark: "Top %1", tags: ["Silent GRWM", "Minimalist"] },
  { id: 2, name: "Caner & Ezgi", handle: "@canergzi", platform: "Instagram", er: "8.2%", benchmark: "x3 Performance", tags: ["Couple Comedy", "Vlog"] }
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black">
      <nav className="border-b border-zinc-200 px-8 py-4 flex justify-between items-center bg-white sticky top-0 z-50">
        <h1 className="font-bold text-xl uppercase tracking-tighter">Sleek Mono <span className="text-[#0500FF]">AI</span></h1>
        <div className="flex gap-8 text-[10px] font-mono uppercase">
          <span className="border-b-2 border-[#0500FF] pb-1 cursor-pointer text-black">Directory</span>
          <span className="text-zinc-400 cursor-pointer">Command Center</span>
        </div>
      </nav>
      
      <main className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {influencers.map(inf => (
          <div key={inf.id} className="border border-zinc-200 p-6 hover:border-[#0500FF] transition-all cursor-pointer group bg-white shadow-sm">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-bold uppercase text-lg leading-tight">{inf.name}</h3>
                <p className="font-mono text-[10px] text-zinc-400 mt-1">{inf.handle}</p>
              </div>
              <span className="bg-zinc-100 px-2 py-1 text-[9px] font-mono uppercase tracking-widest border border-zinc-200">
                {inf.platform}
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter text-left">Benchmark Analysis</span>
                <span className="text-[#0500FF] font-bold text-xl italic">{inf.benchmark}</span>
              </div>
              
              <div className="flex gap-1 flex-wrap">
                {inf.tags.map(tag => (
                  <span key={tag} className="text-[9px] bg-black text-white px-2 py-0.5 font-mono uppercase tracking-widest">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
