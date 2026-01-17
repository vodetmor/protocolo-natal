import { X, Check } from "lucide-react";

const ExpectationBreak = () => {
  const dontNeed = [
    "Cortar tudo o que gosta",
    "Viver contando calorias",
    "Passar horas na academia",
  ];

  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Você <span className="text-primary">não precisa</span> de mais pressão
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {dontNeed.map((item, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-lg text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-primary/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <p className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Você precisa de uma <span className="text-primary italic">estratégia possível</span>.
            </p>
            <p className="text-lg text-muted-foreground">
              Pensada para funcionar mesmo nos dias corridos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectationBreak;
