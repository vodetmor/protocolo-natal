import { Check, BookOpen, Calendar, Dumbbell, MessageCircle } from "lucide-react";

const WhatYouGet = () => {
  const mainFeatures = [
    {
      icon: BookOpen,
      text: "Protocolo completo de 28 dias",
    },
    {
      icon: Calendar,
      text: "Estrutura alimentar flexível",
    },
    {
      icon: Dumbbell,
      text: "Treinos adaptáveis para academia ou casa",
    },
    {
      icon: MessageCircle,
      text: "Orientação clara do que fazer a cada semana",
    },
  ];

  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que você <span className="text-primary">recebe</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para as próximas 4 semanas de transformação
            </p>
          </div>

          <div className="flex justify-center">
            {/* Features - Single Column Centered */}
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border col-span-full max-w-2xl mx-auto">
              {/* Mockup Topo */}
              <div className="mb-6 rounded-2xl overflow-hidden shadow-lg border border-primary/10">
                <img src="/imagens/landing/mockup_protocolo.png" alt="Protocolo Corpo de Musa" className="w-full h-auto" />
              </div>

              <div className="space-y-4">
                {mainFeatures.map((feature, index) => (
                  <div key={index}>
                    <div
                      className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="text-foreground font-medium">{feature.text}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground text-center">
                  Você não precisa decidir tudo todos os dias.<br />
                  <span className="text-foreground font-medium">O protocolo te guia.</span>
                </p>

                <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-primary/10">
                  <img src="/imagens/landing/mockup_estrutura.png" alt="Estrutura Alimentar Flexível" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
