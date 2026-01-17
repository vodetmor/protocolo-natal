import { Utensils, Dumbbell, Calendar, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Utensils,
      title: "Alimentação organizada",
      description: "Sem restrição extrema",
    },
    {
      icon: Dumbbell,
      title: "Treinos possíveis",
      description: "Até 1 hora por dia",
    },
    {
      icon: Calendar,
      title: "Ciclos semanais",
      description: "Ajudam o corpo a desinchar e responder",
    },
    {
      icon: Sparkles,
      title: "Foco em resultados",
      description: "Reduzir inchaço, sentir leveza e notar diferença nas roupas",
    },
  ];

  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Durante <span className="text-primary">28 dias</span>, você segue uma estrutura simples:
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-card border border-primary/10">
            <p className="font-display text-xl md:text-2xl text-foreground mb-4">
              Não é sobre <span className="text-muted-foreground line-through">perfeição</span>.
            </p>
            <p className="font-display text-2xl md:text-3xl text-primary italic">
              É sobre constância possível por tempo suficiente para o corpo reagir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
