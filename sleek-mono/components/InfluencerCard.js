import React, { useState } from 'react';
import { Search, Filter, Cpu, Database } from 'lucide-react';
import InfluencerCard from '../components/InfluencerCard';

export default function Home() {
  const [influencers] = useState([
    { id: 1, name: "Melis Erten", handle: "@meliserten", platform: "TikTok", er: "12.4%", benchmark: "Top %1", tags: ["Silent GRWM", "Minimalist"] },
    { id: 2, name: "Caner & Ezgi", handle: "@canergzi", platform: "Instagram", er: "8.2%", benchmark: "x3 Performance", tags: ["Couple Comedy", "Vlog"] }
  ]);

  return (
    <div className="bg-white min-h-screen text-black font-sans">
      <nav className="border-b border-zinc-200 px-8 py-4 flex justify-between items-center sticky top-0 bg-white z-10">
        <h1 className="font-heading font-bold text-xl uppercase tracking-tighter">Sleek Mono <span className="text-electric-blue">AI</span></h1>
        <div className="flex gap-8 font-mono text-xs uppercase">
          <a href="#" className="border-b-2 border-electric-blue pb-1">Directory</a>
          <a href="#" className="text-zinc-400">Command Center</a>
        </div>
      </nav>
      
      <div className="flex">
        <aside className="w-64 border-r border-zinc-200 h-[calc(100vh-64px)] p-8 sticky top-16">
          <div className="space-y-8">
            <div>
              <h4 className="font-mono text-[10px] uppercase text-zinc-400 mb-4">Filters</h4>
              <div className="space-y-2">
                {['TikTok', 'Instagram', 'YouTube'].map(p => (
                  <label key={p} className="flex items-center gap-2 text-xs font-mono cursor-pointer">
                    <input type="checkbox" className="accent-electric-blue" /> {p}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {influencers.map(inf => (
              <InfluencerCard key={inf.id} data={inf} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
