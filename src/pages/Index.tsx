import LinkedInAd from "@/components/LinkedInAd";
import { Download } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-defenz-dark flex flex-col items-center justify-center p-4 md:p-8">
      {/* Header info */}
      <div className="text-center mb-8 space-y-2">
        <p className="text-defenz-offwhite/50 text-sm uppercase tracking-widest">
          LinkedIn Single Image Ad • 1200×628
        </p>
        <h1 className="text-defenz-offwhite text-xl font-semibold">
          Defenz + Bitdefender
        </h1>
      </div>

      {/* The Ad Creative */}
      <LinkedInAd />

      {/* Footer info */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <p className="text-defenz-offwhite/40 text-xs text-center max-w-md">
          Criativo otimizado para conversão no LinkedIn Ads. 
          Design limpo, corporativo e focado em decisores de PMEs.
        </p>
        
        <div className="flex items-center gap-2 text-defenz-blue/70 text-xs">
          <Download className="w-4 h-4" />
          <span>Preview do anúncio — proporção 1.91:1</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
