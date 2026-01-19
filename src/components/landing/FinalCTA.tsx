import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Clock } from "lucide-react";

const FinalCTA = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Você não precisa mudar tudo.
          </h2>

          <p className="font-display text-2xl md:text-3xl text-primary italic mb-8">
            Só precisa de 4 semanas com a estratégia certa.
          </p>

          <Button
            variant="cta"
            size="xl"
            onClick={scrollToOffer}
            className="group mb-8"
          >
            Quero começar meu Protocolo Corpo de Musa agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust elements */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm">Garantia de 15 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm">+2.000 mulheres transformadas</span>
            </div>
          </div>

          {/* Final feeling */}
          <div className="mt-16 p-8 bg-card rounded-3xl shadow-card border border-border">
            <p className="font-display text-xl text-foreground mb-4">
              Sensação final da página:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Segurança
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Alívio
              </span>
              <span className="px-4 py-2 bg-rose-light text-primary rounded-full text-sm font-medium">
                Identificação
              </span>
              <span className="px-4 py-2 bg-gold-light text-accent-foreground rounded-full text-sm font-medium">
                Possibilidade real
              </span>
            </div>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Nada de pressão. Nada de culpa. Nada de promessa vazia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
