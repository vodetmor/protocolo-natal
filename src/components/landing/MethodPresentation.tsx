const MethodPresentation = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
                O Protocolo 28 não foi criado para te{" "}
                <span className="text-primary italic">exigir mais</span>.
              </h2>

              <p className="font-display text-xl md:text-2xl text-gold mb-8">
                Foi criado para organizar o que já existe na sua rotina.
              </p>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O{" "}
                  <span className="text-foreground font-semibold">
                    Corpo de Musa | Protocolo 28
                  </span>{" "}
                  é uma estratégia de organização alimentar combinada com
                  treinos possíveis, estruturada em ciclos semanais.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ela foi pensada para{" "}
                  <span className="text-foreground font-medium">
                    mulheres com rotina cheia
                  </span>{" "}
                  que precisam ver resposta do corpo em poucas semanas.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-2 bg-rose-light text-primary rounded-full text-sm font-medium">
                    Nada radical
                  </span>
                  <span className="px-4 py-2 bg-rose-light text-primary rounded-full text-sm font-medium">
                    Nada extremo
                  </span>
                  <span className="px-4 py-2 bg-gold-light text-accent-foreground rounded-full text-sm font-medium">
                    Estrutura clara
                  </span>
                </div>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors"
                >
                  <img
                    src={`/imagens/${i}.png`}
                    alt={`Resultado ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodPresentation;
