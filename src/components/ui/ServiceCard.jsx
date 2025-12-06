import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div
      className="group relative rounded-xl bg-white/5 border border-white/10 
                 overflow-hidden transition-all duration-300
                 hover:border-Green4/50 hover:-translate-y-2 
                 flex flex-col h-full"
    >
      {/* Header & Icon */}
      <div className="p-6 pb-0 flex items-center justify-between">
        {/* กล่อง Icon เรืองแสง */}
        <div
          className="w-14 h-14 rounded-lg bg-Green4/10 flex items-center justify-center 
            text-3xl text-Green4 border border-Green4/20
            group-hover:scale-110 transition-transform duration-300"
        >
          {service.icon}
        </div>

        {/* (Optional) เลขลำดับ */}
        <span className="text-white/10 text-4xl font-bold font-mono">
          0{service.id}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-Green4 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Tools Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {service.tools.map((tool, index) => (
            <span
              key={index}
              className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md 
                bg-white/5 text-gray-300 border border-white/5
                group-hover:border-Green4/30 group-hover:text-Green4 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
