import { Clock, Dumbbell, Utensils, CheckSquare, Gift } from "lucide-react";

const Bonuses = () => {
  const bonuses = [
    {
      icon: Clock,
      title: "Cardápio de Emergência",
      description: "Para dias corridos, sem sair do plano. Opções rápidas e práticas quando você não tem tempo de pensar no que comer.",
      color: "from-primary/20 to-primary/5",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Dumbbell,
      title: "Treinos Rápidos (30 minutos)",
      description: "Opções eficientes para casa ou academia. Quando não der para fazer o treino completo, você tem alternativas que funcionam.",
      color: "from-gold/20 to-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
    },
    {
      icon: Utensils,
      title: "Guia 'Comi fora, e agora?'",
      description: "Para eliminar culpa e continuar no processo. O que fazer depois de um deslize sem sabotar seu progresso.",
      color: "from-green-500/20 to-green-500/5",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-600",
    },
    {
      icon: CheckSquare,
      title: "Checklist Semanal Simples",
      description: "Para acompanhar sem paranoia. Uma forma leve de monitorar seu progresso sem obsessão por números.",
      color: "from-blue-500/20 to-blue-500/5",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold-light px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold text-accent-foreground">Bônus Exclusivos</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Bônus que <span className="text-gradient">facilitam sua jornada</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os bônus existem para facilitar. <span className="text-foreground font-medium">Não para te pressionar.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden bg-gradient-to-br ${bonus.color} rounded-3xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${bonus.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <bonus.icon className={`w-7 h-7 ${bonus.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {bonus.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>

                {/* Placeholder for bonus image */}
                <div className="mt-6 bg-background/50 rounded-2xl aspect-video flex items-center justify-center border border-border/50">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-muted flex items-center justify-center">
                      <svg className="w-6 h-6 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground/60 text-xs">Imagem do bônus</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
