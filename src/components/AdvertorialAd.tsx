import { Shield, Check, Eye, Zap, Clock, AlertCircle } from "lucide-react";
import bitdefenderPanel from "@/assets/bitdefender-panel.jpg";

const AdvertorialAd = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Main container - clean rectangle */}
      <div className="w-full max-w-6xl bg-card border border-border shadow-xl overflow-hidden">
        
        {/* Top urgency bar */}
        <div className="bg-defenz-dark text-defenz-offwhite py-2.5 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">
                Análise gratuita de segurança — <span className="text-defenz-neon font-semibold">vagas limitadas para PMEs</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="bg-defenz-blue/30 px-2 py-1 rounded text-center min-w-[36px]">
                <span className="text-xs font-bold">14</span>
                <span className="text-[9px] block text-defenz-offwhite/70">DIAS</span>
              </div>
              <div className="bg-defenz-blue/30 px-2 py-1 rounded text-center min-w-[36px]">
                <span className="text-xs font-bold">08</span>
                <span className="text-[9px] block text-defenz-offwhite/70">HRS</span>
              </div>
              <div className="bg-defenz-blue/30 px-2 py-1 rounded text-center min-w-[36px]">
                <span className="text-xs font-bold">23</span>
                <span className="text-[9px] block text-defenz-offwhite/70">MIN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[1fr,360px]">
          
          {/* Left column - Editorial content */}
          <div className="p-6 lg:p-8 space-y-5">
            
            {/* Main headline */}
            <h1 className="text-2xl md:text-3xl lg:text-[32px] leading-tight font-bold text-primary">
              Por que sua empresa pode ser o próximo alvo de{" "}
              <span className="text-highlight">ataques cibernéticos</span>{" "}
              — mesmo sendo uma PME
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Descubra como pequenas e médias empresas estão operando a mesma tecnologia de cibersegurança da{" "}
              <span className="font-semibold text-foreground">Ferrari</span> — sem precisar de um time interno de TI.
            </p>

            {/* Author + Authority inline */}
            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-border">
              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-defenz-blue/15 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-defenz-blue" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Por Equipe Defenz</p>
                  <p className="text-xs text-muted-foreground">Especialistas em Segurança Gerenciada | Janeiro, 2026</p>
                </div>
              </div>
              
              {/* Authority badge */}
              <div className="badge-authority">
                <div className="w-7 h-7 bg-defenz-dark rounded flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-defenz-neon" />
                </div>
                <div>
                  <p className="font-semibold text-defenz-dark text-sm">TECNOLOGIA BITDEFENDER</p>
                  <p className="text-xs text-muted-foreground">Fornecedora oficial de cibersegurança da Ferrari</p>
                </div>
              </div>
            </div>

            {/* Bitdefender Panel Image */}
            <div className="rounded-lg overflow-hidden border border-border shadow-md">
              <img 
                src={bitdefenderPanel} 
                alt="Painel Bitdefender GravityZone - Dashboard de segurança integrada" 
                className="w-full h-auto object-cover"
              />
              <div className="bg-defenz-dark/5 px-4 py-2 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  <span className="font-medium text-foreground">Bitdefender GravityZone</span> — Painel de segurança integrado operado pela Defenz
                </p>
              </div>
            </div>

            {/* Alert box */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm">O dado que preocupa:</p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">43% dos ataques cibernéticos</strong> são direcionados a pequenas empresas. 
                    Dessas, <strong className="text-foreground">60% fecham as portas</strong> em até 6 meses após um ataque bem-sucedido.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Product sidebar */}
          <div className="bg-muted/30 border-l border-border p-6 flex flex-col">
            
            {/* Header */}
            <div className="text-center mb-5">
              <div className="w-16 h-16 mx-auto mb-3 bg-defenz-dark rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-defenz-neon" />
              </div>
              <p className="text-xs text-muted-foreground mb-1">Tecnologia Bitdefender</p>
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">★</span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-primary leading-tight">
                Segurança Gerenciada<br />
                <span className="text-defenz-blue">Defenz + Bitdefender</span>
              </h3>
            </div>

            {/* Benefits */}
            <div className="space-y-3 flex-grow">
              <div className="benefit-check">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Proteção 24/7</p>
                  <p className="text-muted-foreground text-xs">Monitoramento contínuo e resposta imediata.</p>
                </div>
              </div>

              <div className="benefit-check">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-3 h-3 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Visibilidade Total</p>
                  <p className="text-muted-foreground text-xs">Dashboards claros para decisores.</p>
                </div>
              </div>

              <div className="benefit-check">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-3 h-3 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Sem Time Interno</p>
                  <p className="text-muted-foreground text-xs">Nossa equipe opera tudo para você.</p>
                </div>
              </div>
            </div>

            {/* Urgency + CTA */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs">
                <span className="w-2 h-2 bg-destructive rounded-full urgency-pulse"></span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Vagas limitadas</strong> — diagnóstico gratuito
                </span>
              </div>
              
              <button className="w-full bg-defenz-neon hover:bg-defenz-neon/90 text-defenz-dark font-bold py-3.5 px-4 rounded-lg transition-all text-sm">
                SOLICITAR DIAGNÓSTICO GRATUITO
              </button>
              
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Check className="w-3 h-3 text-accent" />
                Análise estratégica sem compromisso
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdvertorialAd;
