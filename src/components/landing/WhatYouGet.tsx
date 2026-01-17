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

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Features */}
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="inline-flex items-center gap-2 bg-gold-light px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent-foreground">Produto Principal</span>
              </div>

              <div className="space-y-4">
                {mainFeatures.map((feature, index) => (
                  <div
                    key={index}
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
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground text-center">
                  Você não precisa decidir tudo todos os dias.<br />
                  <span className="text-foreground font-medium">O protocolo te guia.</span>
                </p>
              </div>
            </div>

            {/* Product mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-rose-light to-gold-light rounded-3xl border border-primary/10 overflow-hidden shadow-2xl">
                <img
                  src="/imagens/landing/user_mockup.jpeg"
                  alt="Mockup do Protocolo 28"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
