const EmotionalConnection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              <span className="font-display text-3xl md:text-5xl text-primary italic block mb-6">
                Talvez você já tenha tentado dietas.
              </span>
              Talvez tenha começado animada… e parado cansada.
            </p>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Não por falta de força de vontade.<br />
                Mas porque a sua <span className="text-foreground font-medium">vida real nunca coube nesses planos</span>.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalho, casa, filhos, combranças.<br />
              No fim do dia, sobra pouca energia até para você.
            </p>

            <div className="w-24 h-px bg-primary/30 mx-auto my-8" />

            <p className="text-xl text-foreground font-medium leading-relaxed">
              E quando o corpo não responde, o que aparece não é só frustração.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="p-4 rounded-2xl bg-muted/50 border border-border">
                <span className="text-foreground font-medium block mb-1">Inchaço</span>
                <span className="text-sm text-muted-foreground">Que não vai embora</span>
              </div>
              <div className="p-4 rounded-2xl bg-muted/50 border border-border">
                <span className="text-foreground font-medium block mb-1">Roupas</span>
                <span className="text-sm text-muted-foreground">Que apertam</span>
              </div>
              <div className="p-4 rounded-2xl bg-muted/50 border border-border">
                <span className="text-foreground font-medium block mb-1">Progresso</span>
                <span className="text-sm text-muted-foreground">Que parece travado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalConnection;
