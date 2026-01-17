const EmotionalConnection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image placeholder */}
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-muted to-secondary rounded-3xl aspect-square flex items-center justify-center border border-border overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">Imagem emocional</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                <span className="font-display text-2xl md:text-3xl text-primary italic block mb-4">
                  Talvez você já tenha tentado dietas.
                </span>
                Talvez tenha começado animada… e parado cansada.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Não por falta de força de vontade.<br />
                Mas porque a sua <span className="text-foreground font-medium">vida real nunca coube nesses planos</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalho, casa, filhos, cobranças.<br />
                No fim do dia, sobra pouca energia até para você.
              </p>
              
              <div className="h-px bg-border my-6" />
              
              <p className="text-lg text-foreground leading-relaxed">
                E quando o corpo não responde, o que aparece não é só frustração.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">É o <span className="text-foreground font-medium">inchaço que não some</span>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">As <span className="text-foreground font-medium">roupas que apertam</span>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">A sensação de que <span className="text-foreground font-medium">nada muda</span>, mesmo tentando.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalConnection;
