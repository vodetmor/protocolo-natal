import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const textTestimonials = [
    {
      quote: "Notei menos inchaço já nas primeiras semanas.",
      name: "Ana Paula",
      role: "Empresária, 38 anos",
      image: "/imagens/landing/avatar_ana.jpg"
    },
    {
      quote: "As roupas começaram a vestir melhor.",
      name: "Carla Santos",
      role: "Professora, 42 anos",
      image: "/imagens/landing/avatar_carla.jpg"
    },
    {
      quote: "Consegui seguir mesmo com a rotina corrida.",
      name: "Juliana Melo",
      role: "Mãe de 2, 35 anos",
      image: "/imagens/landing/avatar_juliana.jpg"
    },
    {
      quote: "Foi a primeira vez que algo coube na minha vida.",
      name: "Fernanda Lima",
      role: "Advogada, 40 anos",
      image: "/imagens/landing/avatar_fernanda.jpg"
    },
  ];

  const photoTestimonials = [
    {
      before: "/imagens/landing/maria_antes.png",
      after: "/imagens/landing/maria_depois.png",
      name: "Maria S.",
      result: "-4kg em 28 dias",
    },
    {
      before: "/imagens/landing/patricia_antes.jpg",
      after: "/imagens/landing/patricia_depois.png",
      name: "Patricia R.",
      result: "-5cm de cintura",
    },
    {
      before: "/imagens/landing/claudia_antes.jpg",
      after: "/imagens/landing/claudia_depois.jpg",
      name: "Claudia M.",
      result: "Menos inchaço",
    },
  ];

  return (
    <section className="py-16 md:py-24 gradient-section">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que elas estão <span className="text-primary">dizendo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de mulheres que seguiram o Protocolo 28
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="mb-16">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
              Depoimentos em Vídeo
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { file: "MUSA11.MP4", name: "Marcia, 45 anos", profissao: "Recepcionista" },
                { file: "MUSA13.MP4", name: "Cátia, 32 anos", profissao: "Contadora" },
                { file: "MUSA155.MP4", name: "Milena, 27 anos", profissao: "Vendedora" },
              ].map((video, i) => (
                <div
                  key={i}
                  className="bg-card rounded-2xl overflow-hidden shadow-card border border-border"
                >
                  <div className="relative aspect-[9/16] bg-black">
                    <video
                      src={`/videos/${video.file}`}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-foreground">{video.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {video.profissao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Before/After Photos */}
          <div className="mb-16">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
              Resultados Reais
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {photoTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden shadow-card border border-border"
                >
                  <div className="grid grid-cols-2 gap-1 p-2">
                    <div className="aspect-[9/16] bg-muted rounded-xl overflow-hidden relative">
                      <span className="absolute top-2 left-2 bg-foreground/70 text-background text-xs px-2 py-1 rounded z-10">Antes</span>
                      <img src={item.before} alt="Antes" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[9/16] bg-rose-light rounded-xl overflow-hidden relative">
                      <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded z-10">Depois</span>
                      <img src={item.after} alt="Depois" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-primary font-medium">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {textTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card border border-border relative"
              >
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-light to-gold-light flex items-center justify-center flex-shrink-0 border border-primary/10 overflow-hidden">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    {/* Fallback SVG - shown via class logic or default if image missing */}
                    <svg
                      className={`w-6 h-6 text-primary/40 ${testimonial.image ? 'hidden' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-current" />
                      ))}
                    </div>
                    <p className="font-display text-lg text-foreground italic mb-3">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

export default Testimonials;
