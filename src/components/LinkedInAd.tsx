import { Shield, Eye, Zap, Building2, Users, AlertTriangle, Lock, Unlock } from "lucide-react";

const LinkedInAd = () => {
  return (
    <div className="w-full max-w-[1200px] aspect-[1.91/1] bg-defenz-dark relative overflow-hidden rounded-lg border-glow">
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--defenz-blue)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--defenz-blue)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Subtle red alert line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] subtle-alert-line" />

      {/* Main content container */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
        
        {/* Top section - Headline */}
        <div className="space-y-4 max-w-[75%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-defenz-offwhite leading-tight tracking-tight">
            Não são só empresas grandes<br />
            que sofrem ataques.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            <span className="text-defenz-neon">PMEs são os alvos mais comuns</span>
            <span className="text-defenz-offwhite"> hoje.</span>
          </p>
        </div>

        {/* Middle section - Visual comparison */}
        <div className="flex items-center justify-center gap-6 md:gap-12 my-4">
          {/* Large Enterprise */}
          <div className="flex flex-col items-center gap-3 opacity-60">
            <div className="flex items-center gap-2 text-defenz-offwhite/70">
              <Building2 className="w-8 h-8 md:w-10 md:h-10" />
              <Users className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-5 h-5 text-defenz-blue" />
              <Lock className="w-4 h-4 text-defenz-blue" />
            </div>
            <span className="text-xs md:text-sm text-defenz-offwhite/50 font-medium">
              Time interno
            </span>
          </div>

          {/* Divider with VS */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-[1px] h-8 bg-defenz-blue/30" />
            <span className="text-xs font-bold text-defenz-blue">VS</span>
            <div className="w-[1px] h-8 bg-defenz-blue/30" />
          </div>

          {/* SME without protection */}
          <div className="flex flex-col items-center gap-3 opacity-60">
            <div className="flex items-center gap-2 text-defenz-offwhite/70">
              <Building2 className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex items-center gap-1">
              <Unlock className="w-5 h-5 text-defenz-alert/70" />
              <AlertTriangle className="w-4 h-4 text-defenz-alert/50" />
            </div>
            <span className="text-xs md:text-sm text-defenz-offwhite/50 font-medium">
              Exposição
            </span>
          </div>

          {/* Arrow to solution */}
          <div className="hidden md:flex items-center">
            <div className="w-12 h-[2px] bg-gradient-to-r from-defenz-alert/30 to-defenz-neon" />
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-defenz-neon" />
          </div>

          {/* SME with Defenz */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-defenz-offwhite">
              <Building2 className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-defenz-neon font-bold text-sm">+</span>
              <div className="px-2 py-1 bg-defenz-neon/10 border border-defenz-neon/30 rounded">
                <span className="text-defenz-neon font-bold text-xs md:text-sm">DEFENZ</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-defenz-neon" />
              <Eye className="w-4 h-4 text-defenz-neon" />
              <Zap className="w-4 h-4 text-defenz-neon" />
            </div>
            <span className="text-xs md:text-sm text-defenz-neon font-medium">
              Proteção completa
            </span>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          
          {/* Subheadline */}
          <div className="max-w-[60%]">
            <p className="text-sm md:text-base text-defenz-offwhite/80 leading-relaxed">
              Com a <span className="text-defenz-neon font-semibold">Defenz</span>, pequenas e médias empresas operam a mesma 
              tecnologia de cibersegurança usada por organizações globais — com{" "}
              <span className="text-defenz-blue font-medium">gestão</span>,{" "}
              <span className="text-defenz-blue font-medium">visibilidade</span> e{" "}
              <span className="text-defenz-blue font-medium">decisões claras</span>.
            </p>
          </div>

          {/* Authority + CTA section */}
          <div className="flex flex-col items-end gap-4">
            {/* Bitdefender authority */}
            <div className="text-right">
              <p className="text-xs text-defenz-offwhite/50">
                Tecnologia <span className="font-semibold">Bitdefender</span> — utilizada por 
              </p>
              <p className="text-xs text-defenz-offwhite/50">
                organizações globais, incluindo a <span className="text-defenz-alert/70 font-semibold">Ferrari</span>.
              </p>
            </div>

            {/* CTA */}
            <div className="px-4 py-2 bg-defenz-neon/10 border border-defenz-neon/40 rounded-md glow-neon animate-pulse-glow">
              <span className="text-sm font-medium text-defenz-neon">
                Solicite um diagnóstico estratégico de segurança
              </span>
            </div>
          </div>
        </div>

        {/* Logo placement */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-defenz-neon" />
            <span className="text-xl font-bold text-defenz-offwhite tracking-tight">
              DEFENZ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInAd;
