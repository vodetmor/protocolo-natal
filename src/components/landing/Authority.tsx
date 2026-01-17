import { Briefcase, Home, Heart } from "lucide-react";

const Authority = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            
            {/* Image */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl" />
                <div className="relative rounded-3xl aspect-[3/4] border border-primary/10 overflow-hidden">
                  <img
                    src="/imagens/musaaura.jpeg"
                    alt="Criadora do método"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Essa estrutura foi ajustada para mulheres com{" "}
                <span className="text-primary italic">rotina cheia</span>
              </h2>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-sm text-secondary-foreground">Trabalho</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                  <Home className="w-4 h-4 text-primary" />
                  <span className="text-sm text-secondary-foreground">Casa</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-sm text-secondary-foreground">Filhos</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Que <span className="text-foreground font-medium">não conseguem seguir planos rígidos</span>, 
                mas conseguem seguir algo{" "}
                <span className="text-primary font-medium">claro</span>,{" "}
                <span className="text-primary font-medium">organizado</span> e{" "}
                <span className="text-primary font-medium">possível</span>.
              </p>

              <div className="bg-rose-light/50 rounded-2xl p-6 border border-primary/10">
                <p className="text-foreground italic font-display text-lg">
                  "Criei esse método porque eu mesma precisei de algo que coubesse na minha vida real,
                  não em uma versão idealizada dela."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
