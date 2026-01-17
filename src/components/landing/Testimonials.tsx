import { Star, Play, Quote } from "lucide-react";

const Testimonials = () => {
  const textTestimonials = [
    {
      quote: "Notei menos inchaço já nas primeiras semanas.",
      name: "Ana Paula",
      role: "Empresária, 38 anos",
    },
    {
      quote: "As roupas começaram a vestir melhor.",
      name: "Carla Santos",
      role: "Professora, 42 anos",
    },
    {
      quote: "Consegui seguir mesmo com a rotina corrida.",
      name: "Juliana Melo",
      role: "Mãe de 2, 35 anos",
    },
    {
      quote: "Foi a primeira vez que algo coube na minha vida.",
      name: "Fernanda Lima",
      role: "Advogada, 40 anos",
    },
  ];

  const photoTestimonials = [
  {
    before: "/imagens/ant1.png",
    after: "/imagens/dep1.png",
    name: "Maria S.",
    result: "-4kg em 28 dias",
  },
  {
    before: "/testimonials/patricia-antes.jpg",
    after: "/testimonials/patricia-depois.jpg",
    name: "Patricia R.",
    result: "-5cm de cintura",
  },
  {
    before: "/testimonials/claudia-antes.jpg",
    after: "/testimonials/claudia-depois.jpg",
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
      { file: "MUSA11.MP4", name: "Marcia, 45 anos", profissao:"Recepcionista" },
      { file: "MUSA13.MP4", name: "Cátia, 32 anos", profissao:"Contadora" },
      { file: "MUSA155.MP4", name: "Milena, 27 anos", profissao:"Vendedora" },
    ].map((video, i) => (
      <div
        key={i}
        className="bg-card rounded-2xl overflow-hidden shadow-card border border-border"
      >
        {/* Container vertical */}
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
                    <div className="aspect-[3/4] bg-gradient-to-br from-muted to-secondary rounded-xl flex items-center justify-center relative">
                      <span className="absolute top-2 left-2 bg-foreground/70 text-background text-xs px-2 py-1 rounded">Antes</span>
                      <div className="text-center p-2">
                        <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-muted flex items-center justify-center">
                          <svg className="w-5 h-5 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-[3/4] bg-gradient-to-br from-rose-light to-gold-light rounded-xl flex items-center justify-center relative">
                      <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">Depois</span>
                      <div className="text-center p-2">
                        <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
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
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-light to-gold-light flex items-center justify-center flex-shrink-0 border border-primary/10">
                    <svg className="w-6 h-6 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* More results grid 
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
              Mais Resultados
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div 
                  key={i}
                  className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-xl flex items-center justify-center border border-border hover:border-primary/30 transition-colors cursor-pointer group"
                >
                  <div className="text-center p-2">
                    <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <svg className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground/60 text-xs">Resultado {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
