import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative gradient-hero overflow-hidden">
      {/* Login Button - Top Right */}


      {/* Decorative elements - hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="hidden md:block absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float delay-300" />

      <div className="container relative z-10 py-12 md:py-20 px-4 max-w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">


          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-[300px] mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/20 rounded-3xl blur-2xl" />

              <div className="relative bg-gradient-to-br from-rose-light to-gold-light rounded-3xl aspect-[4/5] border border-primary/10 overflow-hidden">
                <img
                  src="/imagens/antesdepoishero.png"
                  alt="Antes e depois do Protocolo Corpo de Musa"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* Floating cards - ajustados para não sair da tela */}
              {/*  <div className="absolute bottom-1/4 left-0 sm:-left-4 bg-card p-3 sm:p-4 rounded-2xl shadow-card animate-float">
                <p className="text-xl sm:text-2xl font-bold text-primary">-9cm</p>
                <p className="text-xs text-muted-foreground">de cintura</p>
              </div>
*/}
              <div className="absolute bottom-1/4 right-0 sm:-right-4 bg-card p-3 sm:p-4 rounded-2xl shadow-card animate-float delay-200">
                <p className="text-xl sm:text-2xl font-bold text-gold">28</p>
                <p className="text-xs text-muted-foreground">Dias</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left w-full px-2 sm:px-0">
            <div className="inline-flex items-center gap-2 bg-rose-light px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-primary">
                Transformação em 28 dias
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 animate-fade-up delay-100">
              Corpo de Musa
            </h1>

            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary italic leading-snug mb-6 animate-fade-up delay-200 break-words">
              4 semanas de estratégia para ver no espelho
              <span className="block">o que parecia não acontecer nunca</span>
            </p>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up delay-300 break-words">
              Um protocolo criado para mulheres que já tentaram de tudo e querem, em poucas semanas,
              <span className="text-foreground font-medium"> menos inchaço abdominal</span>,
              <span className="text-foreground font-medium"> roupas mais folgadas</span> e
              <span className="text-foreground font-medium"> um corpo visivelmente mais leve</span>,
              sem dietas rígidas e sem viver para a academia.
            </p>

          

            {/* Trust */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 animate-fade-up delay-500 text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Garantia de 15 dias</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">+2.000 mulheres transformadas</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
