import { Button } from "@/components/ui/button";
import { Check, Star, Clock, Dumbbell, Utensils, CheckSquare, Gift, Sparkles } from "lucide-react";

const Offer = () => {
  const mainFeatures = [
    "Protocolo completo de 28 dias",
    "Estrutura alimentar flexível",
    "Treinos adaptáveis para academia ou casa",
    "Orientação clara do que fazer a cada semana",
  ];

  const bonuses = [
    {
      icon: Clock,
      title: "Cardápio de Emergência",
      description: "Para dias corridos, sem sair do plano",
    },
    {
      icon: Dumbbell,
      title: "Treinos Rápidos (30 min)",
      description: "Opções para casa ou academia",
    },
    {
      icon: Utensils,
      title: "Guia 'Comi fora, e agora?'",
      description: "Elimine culpa e continue no processo",
    },
    {
      icon: CheckSquare,
      title: "Checklist Semanal",
      description: "Acompanhe sem paranoia",
    },
  ];

  return (
    <section id="oferta" className="py-16 md:py-24 gradient-section">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Escolha sua <span className="text-primary">transformação</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Option 1 - Basic */}
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-muted rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Protocolo 28</h3>
                <p className="text-muted-foreground mb-6">Acesso ao método completo</p>

                <div className="mb-6">
                  <span className="text-sm text-muted-foreground line-through">De R$ 97,00</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">R$ 27</span>
                    <span className="text-2xl text-foreground">,90</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento único</p>
                </div>

                <div className="space-y-3 mb-8">
                  {mainFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ctaOutline" size="lg" className="w-full">
                  Quero apenas o protocolo
                </Button>
              </div>
            </div>

            {/* Option 2 - Complete */}
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border-2 border-primary relative">
              {/* Badge (fora do corte + acima de tudo) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gold px-4 py-1 rounded-full flex items-center gap-2 shadow-md">
                  <Star className="w-4 h-4 text-primary-foreground fill-current" />
                  <span className="text-sm font-semibold text-primary-foreground">Mais escolhida</span>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-2xl font-bold text-foreground">Protocolo 28</h3>
                  <span className="text-primary font-bold">+</span>
                  <span className="text-primary font-semibold">Bônus</span>
                </div>
                <p className="text-muted-foreground mb-6">Método completo + todos os materiais extras</p>

                <div className="mb-6">
                  <span className="text-sm text-muted-foreground line-through">De R$ 197,00</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-primary">R$ 37</span>
                    <span className="text-2xl text-primary">,90</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Pagamento único</p>
                </div>

                <div className="space-y-3 mb-6">
                  {mainFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bonuses */}
                <div className="bg-gold-light/50 rounded-2xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-semibold text-foreground">Bônus inclusos:</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-start gap-2">
                       
                        <div>
                          <p className="text-sm font-medium text-foreground leading-tight">{bonus.title}</p>
                          <p className="text-xs text-muted-foreground">{bonus.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="cta" size="lg" className="w-full group">
                  Quero o pacote completo
                  <Sparkles className="w-5 h-5" />
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-3">
                  Economia de R$ 149,10 nos materiais extras
                </p>
              </div>
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-3">Formas de pagamento:</p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <div className="bg-card px-4 py-2 rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Cartão de Crédito</span>
              </div>
              <div className="bg-card px-4 py-2 rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">PIX</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
