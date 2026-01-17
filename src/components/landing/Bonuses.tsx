import { Clock, Dumbbell, Utensils, CheckSquare, Gift } from "lucide-react";

const Bonuses = () => {
  const bonuses = [
    {
      icon: Clock,
      title: "Cardápio de Emergência",
      description: "Opções rápidas para dias corridos. Não fuja do plano mesmo sem tempo.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Dumbbell,
      title: "Treinos Rápidos",
      description: "30 minutos em casa ou academia. Eficiência para quem tem rotina cheia.",
      color: "text-gold",
      bg: "bg-gold/10"
    },
    {
      icon: Utensils,
      title: "Guia de Restaurantes",
      description: "Aprenda a comer fora sem culpa e sem sabotar seus resultados.",
      color: "text-green-600",
      bg: "bg-green-500/10"
    },
    {
      icon: CheckSquare,
      title: "Checklist Semanal",
      description: "Acompanhe seu progresso de forma leve e organizada, sem neuras.",
      color: "text-blue-600",
      bg: "bg-blue-500/10"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold-light px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-accent-foreground">Bônus Exclusivos</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Tudo o que você precisa <span className="text-gradient">em um só lugar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Além do protocolo principal, você recebe ferramentas práticas para facilitar sua rotina.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bundle Image - Left Side */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-gold/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/10 bg-white/5">
                <img
                  src="/imagens/landing/user_bundle.jpeg"
                  alt="Kit completo de Bônus: Cardápio, Treinos e Checklist"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Didactic List - Right Side */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                {bonuses.map((bonus, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl ${bonus.bg} flex items-center justify-center flex-shrink-0 mt-1`}>
                      <bonus.icon className={`w-6 h-6 ${bonus.color}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">
                        {bonus.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 p-6 rounded-2xl border border-dashed border-primary/30 text-center">
                <p className="text-foreground font-medium">
                  + Acesso imediato a todo o material digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
