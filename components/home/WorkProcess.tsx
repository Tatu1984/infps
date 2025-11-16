'use client';

import { WORK_PROCESS } from '@/lib/constants';
import { CheckCircle } from 'lucide-react';

export default function WorkProcess() {
  return (
    <section className="py-32 bg-background/30 relative z-10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text">
            Our Work Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Liquid Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block liquid-flow"
            style={{
              background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--secondary)))',
              boxShadow: '0 0 20px hsl(var(--primary))',
            }}
          />

          {/* Steps */}
          {WORK_PROCESS.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center mb-16 lg:mb-24 relative ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div
                    className="bg-gradient-to-br from-muted/50 to-background p-8 rounded-3xl border-2 border-primary/30 transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 liquid-float"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    {/* Step Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-6xl font-extrabold gradient-text">{step.number}</div>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>

                    {/* Step Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Step Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Circle (Desktop only) */}
                <div className="hidden lg:flex w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center flex-shrink-0 relative z-10 border-4 border-background shadow-lg">
                  <span className="text-2xl font-extrabold text-white">{idx + 1}</span>
                </div>

                {/* Empty Space (Desktop only) */}
                <div className="hidden lg:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
