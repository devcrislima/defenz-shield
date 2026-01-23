import { Shield, Eye, Zap, Check, Clock, AlertCircle } from "lucide-react";

const AdvertorialAd = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top urgency bar */}
      <div className="bg-defenz-dark text-defenz-offwhite py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">
              Análise gratuita de segurança — <span className="text-defenz-neon font-semibold">vagas limitadas para PMEs</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="bg-defenz-blue/20 px-2 py-1 rounded text-center min-w-[40px]">
                <span className="text-sm font-bold">14</span>
                <span className="text-[10px] block text-defenz-offwhite/70">DIAS</span>
              </div>
              <div className="bg-defenz-blue/20 px-2 py-1 rounded text-center min-w-[40px]">
                <span className="text-sm font-bold">08</span>
                <span className="text-[10px] block text-defenz-offwhite/70">HRS</span>
              </div>
              <div className="bg-defenz-blue/20 px-2 py-1 rounded text-center min-w-[40px]">
                <span className="text-sm font-bold">23</span>
                <span className="text-[10px] block text-defenz-offwhite/70">MIN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[1fr,380px] gap-8 lg:gap-12">
          
          {/* Left column - Editorial content */}
          <div className="space-y-6">
            {/* Main headline */}
            <h1 className="font-editorial text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-primary">
              Por que sua empresa pode ser o próximo alvo de{" "}
              <span className="text-highlight">ataques cibernéticos</span>{" "}
              — mesmo sendo uma PME
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Descubra como pequenas e médias empresas estão operando a mesma tecnologia de cibersegurança da{" "}
              <span className="font-semibold text-foreground">Ferrari</span> — sem precisar de um time interno de TI.
            </p>

            {/* Author section */}
            <div className="flex items-center gap-3 py-4 border-y border-border">
              <div className="w-12 h-12 rounded-full bg-defenz-blue/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-defenz-blue" />
              </div>
              <div>
                <p className="font-medium text-foreground">Por Equipe Defenz</p>
                <p className="text-sm text-muted-foreground">Especialistas em Segurança Gerenciada | Janeiro, 2026</p>
              </div>
            </div>

            {/* Authority badge */}
            <div className="badge-authority">
              <div className="w-8 h-8 bg-defenz-dark rounded flex items-center justify-center">
                <Shield className="w-4 h-4 text-defenz-neon" />
              </div>
              <div>
                <p className="font-semibold text-defenz-dark">TECNOLOGIA BITDEFENDER</p>
                <p className="text-xs text-muted-foreground">Fornecedora oficial de cibersegurança da Ferrari</p>
              </div>
            </div>

            {/* Quote/testimonial */}
            <blockquote className="border-l-4 border-defenz-neon pl-4 py-2 italic text-muted-foreground bg-muted/30 rounded-r-md">
              <p className="mb-2">
                "Grandes empresas têm times completos de segurança. PMEs têm o mesmo desafio, mas sem os mesmos recursos. 
                A Defenz existe para equilibrar esse jogo."
              </p>
              <cite className="text-sm font-medium text-foreground not-italic">
                — Metodologia Defenz de Segurança Gerenciada
              </cite>
            </blockquote>

            {/* Content section */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-editorial text-2xl font-bold text-primary mb-4">
                A verdade que ninguém conta sobre ataques cibernéticos
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Existe um mito perigoso no mercado: de que hackers só atacam grandes corporações. 
                A realidade é exatamente o oposto. <strong className="text-foreground">PMEs são hoje os alvos mais frequentes</strong> — 
                não por falta de tecnologia, mas por falta de <em>gestão, visibilidade e operação especializada</em>.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Enquanto grandes empresas investem em times dedicados de segurança, 
                a maioria das PMEs opera no escuro: sem monitoramento contínuo, 
                sem resposta rápida a incidentes, sem visibilidade real do que acontece na rede.
              </p>

              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">O dado que preocupa:</p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">43% dos ataques cibernéticos</strong> são direcionados a pequenas empresas. 
                      Dessas, <strong className="text-foreground">60% fecham as portas</strong> em até 6 meses após um ataque bem-sucedido.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-editorial text-2xl font-bold text-primary mb-4 mt-8">
                A solução que iguala o jogo
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                A Defenz opera a plataforma <strong className="text-foreground">Bitdefender GravityZone</strong> — 
                a mesma tecnologia utilizada por organizações globais como a Ferrari — 
                mas adaptada para a realidade e orçamento de pequenas e médias empresas.
              </p>
            </div>
          </div>

          {/* Right column - Product card */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
              {/* Card header with image placeholder */}
              <div className="bg-defenz-dark p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-defenz-blue/20 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-defenz-neon" />
                </div>
                <p className="text-defenz-offwhite/70 text-sm">Tecnologia Bitdefender</p>
              </div>

              {/* Rating */}
              <div className="px-6 pt-4 flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Líder no Gartner</span>
              </div>

              {/* Product title */}
              <div className="px-6 pt-4 text-center">
                <h3 className="text-xl font-bold text-primary">
                  Segurança Gerenciada<br />
                  <span className="text-defenz-blue">Defenz + Bitdefender</span>
                </h3>
              </div>

              {/* Benefits list */}
              <div className="px-6 py-6 space-y-4">
                <div className="benefit-check">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Proteção 24/7</p>
                    <p className="text-muted-foreground text-sm">Monitoramento contínuo e resposta imediata a ameaças.</p>
                  </div>
                </div>

                <div className="benefit-check">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visibilidade Total</p>
                    <p className="text-muted-foreground text-sm">Dashboards claros para decisores. Sem jargões técnicos.</p>
                  </div>
                </div>

                <div className="benefit-check">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-3 h-3 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sem Time Interno</p>
                    <p className="text-muted-foreground text-sm">Nossa equipe especializada opera tudo para você.</p>
                  </div>
                </div>
              </div>

              {/* Urgency text */}
              <div className="px-6 pb-4">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-destructive rounded-full urgency-pulse"></span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Vagas limitadas</strong> — diagnóstico gratuito para PMEs
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <button className="w-full bg-defenz-dark hover:bg-defenz-dark/90 text-defenz-offwhite font-semibold py-4 px-6 rounded-lg transition-all hover:shadow-lg">
                  SOLICITAR DIAGNÓSTICO GRATUITO
                </button>
              </div>

              {/* Footer note */}
              <div className="px-6 pb-6 text-center">
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Check className="w-3 h-3 text-accent" />
                  Análise estratégica sem compromisso
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdvertorialAd;
