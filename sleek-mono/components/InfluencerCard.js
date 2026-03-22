export default function InfluencerCard({ data }) {
  return (
    <div className="border border-zinc-200 p-6 hover:border-electric-blue transition-all cursor-pointer group">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="font-heading font-bold uppercase text-lg leading-tight">{data.name}</h3>
          <p className="font-mono text-[10px] text-zinc-400 mt-1">{data.handle}</p>
        </div>
        <span className="bg-zinc-100 px-2 py-1 text-[9px] font-mono uppercase tracking-widest border border-zinc-200">
          {data.platform}
        </span>
      </div>
      
      <div className="space-y-6">
        <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">Benchmark Analysis</span>
          <span className="text-electric-blue font-bold font-heading text-xl italic">{data.benchmark}</span>
        </div>
        
        <div className="flex gap-1 flex-wrap">
          {data.tags.map(tag => (
            <span key={tag} className="text-[9px] bg-black text-white px-2 py-0.5 font-mono uppercase tracking-widest">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
