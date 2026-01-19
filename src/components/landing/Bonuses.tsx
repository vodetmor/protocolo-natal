import { Clock, Dumbbell, Utensils, CheckSquare, Gift } from "lucide-react";

const Bonuses = () => {
  const bonuses = [
    {
      title: "Cardápio de Emergência",
      description: "Opções rápidas para dias corridos. Não fuja do plano mesmo sem tempo.",
      image: "/imagens/landing/bonus_cardapio.jpeg",
      icon: Clock,
      color: "text-gold"
    },
    {
      title: "Treinos Rápidos",
      description: "30 minutos em casa ou academia. Eficiência para quem tem rotina cheia.",
      image: "/imagens/landing/bonus_treinos.jpeg",
      icon: Dumbbell,
      color: "text-yellow-500"
    },
    {
      title: "Guia de Restaurantes",
      description: "Aprenda a comer fora sem culpa e sem sabotar seus resultados.",
      image: "/imagens/landing/bonus_restaurantes.jpeg",
      icon: Utensils,
      color: "text-green-500"
    },
    {
      title: "Checklist Semanal",
      description: "Acompanhe seu progresso de forma leve e organizada, sem neuras.",
      image: "/imagens/landing/bonus_checklist.jpeg",
      icon: CheckSquare,
      color: "text-blue-500"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:border-primary/30 transition-all hover:translate-y-[-4px]"
              >
                <div className="aspect-square relative overflow-hidden">

                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <bonus.icon className={`w-8 h-8 ${bonus.color}`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-muted/30 p-6 rounded-2xl border border-dashed border-primary/30">
              <p className="text-foreground font-medium">
                + Acesso imediato a todo o material digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
