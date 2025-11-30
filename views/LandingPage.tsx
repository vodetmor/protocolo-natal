import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Lock, Star, ChevronDown, ShieldCheck, Flame, Zap, Trophy, Clock, HelpCircle, ArrowRight, Utensils } from 'lucide-react';

interface LandingPageProps {
  onBuy: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onBuy }) => {
  const [timeLeft, setTimeLeft] = useState({ m: 14, s: 59 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s === 0) {
          if (prev.m === 0) return prev;
          return { m: prev.m - 1, s: 59 };
        }
        return { ...prev, s: prev.s - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  }

  const testimonials = [
    { name: "Julia M.", loss: "-8.2kg", text: "Eu achava que era golpe, mas em 3 dias desinchei absurdo." },
    { name: "Carla S.", loss: "-10.5kg", text: "O botão de pânico me salvou de comer pizza ontem. Genial." },
    { name: "Roberta F.", loss: "-5.0kg", text: "Simples, direto e sem frescura. O app te obriga a seguir." },
    { name: "Ana P.", loss: "-9.1kg", text: "Entrei no meu vestido de formatura! Surreal." },
    { name: "Fernanda L.", loss: "-6.8kg", text: "Meu marido elogiou minha cintura hoje cedo." },
    { name: "Beatriz C.", loss: "-7.5kg", text: "Tinha vergonha de biquíni, agora já comprei um novo." },
    { name: "Mariana G.", loss: "-11.2kg", text: "Segui o cronograma e desinchei muito rápido." },
    { name: "Patrícia S.", loss: "-4.9kg", text: "O chá de 3 ingredientes é mágico mesmo." },
    { name: "Camila R.", loss: "-9.5kg", text: "Melhor investimento de 14 reais da vida." },
    { name: "Larissa B.", loss: "-6.0kg", text: "Simples e direto. Adorei o app e o suporte." },
    { name: "Vanessa M.", loss: "-10.1kg", text: "Perdi a barriga de pochete que não saía." },
    { name: "Renata T.", loss: "-5.5kg", text: "Já indiquei pra todas as amigas do trabalho." },
    { name: "Daniela O.", loss: "-7.8kg", text: "Me sinto outra mulher. Autoestima renovada!" }
  ];

  const faqs = [
    { q: "Vai funcionar pra mim?", a: "Sim. O método foi desenhado para mulheres reais que não têm tempo. Se você tem 15 minutos por dia, funciona." },
    { q: "Em quanto tempo vejo resultado?", a: "Nas primeiras 48h você já sente o desinchaço. Visualmente, a diferença aparece entre 5 a 7 dias." },
    { q: "Tenho que passar fome?", a: "Jamais. O protocolo foca em alimentos que aceleram o metabolismo, não em cortar tudo." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro." }
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-white overflow-x-hidden pb-10">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* 1. BARRA DE URGÊNCIA */}
      <div className="bg-red-600 text-white text-[10px] md:text-xs font-bold text-center py-2 px-4 sticky top-0 z-50 flex justify-center items-center gap-2 animate-pulse">
        <Clock size={12} />
        <span>ÚLTIMAS 7 VAGAS COM DESCONTO DE NATAL</span>
      </div>

      {/* 2. HERO SECTION (Abertura Irresistível) */}
      <header className="px-6 pt-8 pb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/30 via-black to-black z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Trust Booster */}
          <div className="flex justify-center items-center gap-1 mb-6">
             <div className="flex text-yellow-500">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
             </div>
             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide ml-2">Mais de 12.400 Alunas</span>
          </div>
          
          {/* Headline Matadora */}
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-none uppercase italic tracking-tighter">
            Perca até <span className="text-red-600">12kg</span> em <br className="md:hidden"/>21 dias <br/>
            <span className="text-white text-2xl md:text-3xl font-bold not-italic normal-case block mt-2">Sem passar fome • Sem academia</span>
          </h1>
          
          <p className="text-gray-300 text-sm md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
            O único protocolo que combina <strong>psicologia, dieta e treino rápido</strong> para destravar seu metabolismo antes do Natal.
          </p>

          {/* Gancho Visual (App Mockup) */}
          <div className="relative w-full max-w-[280px] mx-auto mb-8 transform hover:scale-105 transition duration-500">
            <div className="absolute inset-0 bg-red-600 blur-[60px] opacity-20 animate-pulse"></div>
            <div className="bg-neutral-900 border-[6px] border-neutral-800 rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden aspect-[9/18]">
                {/* Simulated Screen Content */}
                <div className="h-full w-full bg-black flex flex-col relative">
                    {/* Header */}
                    <div className="bg-neutral-900 p-4 border-b border-white/5 flex justify-between items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-red-400"></div>
                        <div className="text-xs font-bold text-gray-400">DIA <span className="text-white">1/21</span></div>
                    </div>
                    {/* Body */}
                    <div className="p-4 space-y-3 flex-1">
                        <div className="bg-red-900/20 border border-red-900/50 p-3 rounded-xl flex items-center gap-3">
                            <Flame className="text-red-500" size={20} />
                            <div>
                                <div className="text-xs font-bold text-white">Queima Diária</div>
                                <div className="text-[10px] text-red-400">Ativada</div>
                            </div>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-xl flex justify-between items-center">
                            <div className="text-xs font-bold text-gray-300">Peso Inicial</div>
                            <div className="text-xs font-bold text-white">74.0kg</div>
                        </div>
                         <div className="bg-gray-800 p-3 rounded-xl flex justify-between items-center border border-green-500/30">
                            <div className="text-xs font-bold text-gray-300">Meta Natal</div>
                            <div className="text-xs font-bold text-green-400">62.0kg</div>
                        </div>
                        {/* Task List Fake */}
                        <div className="mt-4 space-y-2">
                             <div className="h-8 bg-neutral-800 rounded w-full"></div>
                             <div className="h-8 bg-neutral-800 rounded w-full"></div>
                             <div className="h-8 bg-neutral-800 rounded w-full"></div>
                        </div>
                    </div>
                    {/* Floating Notification */}
                    <div className="absolute bottom-16 left-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg flex items-center gap-3 animate-bounce">
                        <CheckCircle2 size={18} />
                        <span className="text-xs font-bold">-600g hoje! Continue.</span>
                    </div>
                </div>
            </div>
          </div>

          <button onClick={scrollToPlans} className="w-full max-w-sm bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-black py-5 rounded-xl uppercase tracking-widest shadow-[0_0_30px_rgba(220,38,38,0.6)] animate-pulse text-base transform active:scale-95 transition">
            QUERO SECAR AGORA
          </button>
          
          <div className="flex justify-center items-center gap-2 mt-4 text-[10px] text-gray-500 font-medium">
            <Lock size={10} />
            <span>Compra 100% Segura e Acesso Imediato</span>
          </div>
        </div>
      </header>

      {/* 3. PROVA SOCIAL (Carrossel Rotativo) */}
      <section className="py-8 bg-neutral-900 border-y border-white/5 overflow-hidden">
        <div className="px-6 mb-6 text-center">
            <h3 className="text-xs font-bold uppercase text-gray-500 tracking-widest">Quem entrou, secou:</h3>
        </div>
        
        {/* Container do Carrossel */}
        <div className="relative w-full overflow-hidden">
           <div className="flex gap-4 px-4 animate-marquee w-max py-4">
              {/* Duplicando a lista para efeito infinito */}
              {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="shrink-0 w-72 bg-black border border-gray-800 p-5 rounded-2xl relative shadow-lg group hover:border-red-900/50 transition">
                      {/* Badge corrigido com z-index e posicionamento seguro */}
                      <div className="absolute -top-3 right-4 z-20 bg-green-900 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full border border-green-700 shadow-lg">
                          {t.loss}
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold border border-gray-700">{t.name[0]}</div>
                          <div>
                            <div className="text-sm font-bold text-white">{t.name}</div>
                            <div className="flex text-yellow-500 gap-0.5">
                                <Star size={10} fill="currentColor"/>
                                <Star size={10} fill="currentColor"/>
                                <Star size={10} fill="currentColor"/>
                                <Star size={10} fill="currentColor"/>
                                <Star size={10} fill="currentColor"/>
                            </div>
                          </div>
                      </div>
                      <p className="text-xs text-gray-300 italic leading-relaxed">"{t.text}"</p>
                  </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. QUADRO DA DOR (Identificação) */}
      <section className="py-16 px-6 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase leading-tight">
            O problema <span className="text-red-500">não é você</span>.<br/>
            É o método errado.
        </h2>
        <div className="space-y-6">
            <div className="flex gap-4 items-start bg-neutral-900/50 p-4 rounded-xl border border-red-900/20">
                <div className="bg-red-900/20 p-2 rounded-lg text-red-500 shrink-0"><X size={20} /></div>
                <div>
                    <h4 className="font-bold text-white text-sm mb-1">Dietas Restritivas</h4>
                    <p className="text-xs text-gray-400">Cortar tudo o que você gosta só gera compulsão e efeito sanfona. Você aguenta 3 dias e desiste.</p>
                </div>
            </div>
            <div className="flex gap-4 items-start bg-neutral-900/50 p-4 rounded-xl border border-red-900/20">
                <div className="bg-red-900/20 p-2 rounded-lg text-red-500 shrink-0"><X size={20} /></div>
                <div>
                    <h4 className="font-bold text-white text-sm mb-1">Horas de Cardio</h4>
                    <p className="text-xs text-gray-400">Ninguém tem tempo para ficar 1h na esteira. Além disso, cardio excessivo pode aumentar a fome.</p>
                </div>
            </div>
            <div className="flex gap-4 items-start bg-neutral-900/50 p-4 rounded-xl border border-red-900/20">
                <div className="bg-red-900/20 p-2 rounded-lg text-red-500 shrink-0"><X size={20} /></div>
                <div>
                    <h4 className="font-bold text-white text-sm mb-1">Falta de Apoio</h4>
                    <p className="text-xs text-gray-400">Tentar sozinha é a receita do fracasso. Você precisa de um plano passo a passo e ferramentas.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. A SOLUÇÃO (3 Pilares) */}
      <section className="py-16 px-6 bg-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-2xl font-black text-center mb-2 uppercase">
                Por que o <span className="text-red-500">Protocolo</span> Funciona?
            </h2>
            <p className="text-center text-gray-500 text-xs mb-10">Atacamos a gordura por 3 frentes simultâneas.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black p-6 rounded-2xl border border-gray-800 text-center hover:border-red-600/50 transition duration-300">
                    <div className="w-12 h-12 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Flame className="text-red-500" size={24} />
                    </div>
                    <h3 className="font-bold text-white mb-2">Queima Passiva</h3>
                    <p className="text-xs text-gray-400">Treinos HIIT de 7 minutos que ativam o efeito EPOC, queimando gordura por até 48h pós-treino.</p>
                </div>
                <div className="bg-black p-6 rounded-2xl border border-gray-800 text-center hover:border-red-600/50 transition duration-300">
                    <div className="w-12 h-12 bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Utensils className="text-yellow-500" size={24} />
                    </div>
                    <h3 className="font-bold text-white mb-2">Nutrição Inteligente</h3>
                    <p className="text-xs text-gray-400">Combinações de alimentos que desinflamam e saciam, sem precisar passar fome ou comer comida sem graça.</p>
                </div>
                <div className="bg-black p-6 rounded-2xl border border-gray-800 text-center hover:border-red-600/50 transition duration-300">
                    <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheck className="text-blue-500" size={24} />
                    </div>
                    <h3 className="font-bold text-white mb-2">Blindagem Mental</h3>
                    <p className="text-xs text-gray-400">Ferramentas psicológicas como o "Botão de Pânico" para impedir a auto-sabotagem na hora da ansiedade.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 6. OFERTA IRRESISTÍVEL (Pricing) */}
      <section id="plans" className="py-16 px-6 bg-black relative">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white italic">Oferta de Natal</h2>
            <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">Aproveite os bônus exclusivos antes que o cronômetro zere.</p>
            <div className="inline-block bg-gray-800 px-4 py-1 rounded mt-4 font-mono text-red-500 font-bold border border-red-900/30">
                EXPIRA EM: {timeLeft.m}:{timeLeft.s < 10 ? `0${timeLeft.s}` : timeLeft.s}
            </div>
        </div>

        <div className="max-w-md mx-auto space-y-8">
            
            {/* PLANO BÁSICO (DECOY - Feio de propósito) */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 opacity-60 filter grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 scale-95">
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Acesso Simples</h3>
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-black text-gray-300">R$ 9,90</span>
                </div>
                <ul className="space-y-3 mb-6 text-xs text-gray-500">
                    <li className="flex gap-2"><CheckCircle2 size={14}/> Acesso ao App</li>
                    <li className="flex gap-2"><CheckCircle2 size={14}/> Cronograma Básico</li>
                    <li className="flex gap-2 line-through opacity-50"><X size={14}/> Sem Receitas Fit</li>
                    <li className="flex gap-2 line-through opacity-50"><X size={14}/> Sem Manual de Chás</li>
                    <li className="flex gap-2 line-through opacity-50"><X size={14}/> Sem Suporte</li>
                </ul>
                <button onClick={onBuy} className="w-full py-3 rounded-lg border border-gray-700 text-gray-500 font-bold text-xs uppercase hover:bg-gray-800 transition">
                    Quero só o básico
                </button>
            </div>

            {/* PLANO VIP (HERO - Destacado) */}
            <div className="bg-gradient-to-b from-neutral-900 to-black border-2 border-red-600 rounded-3xl p-6 relative transform shadow-[0_0_40px_rgba(220,38,38,0.3)] overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase">
                    Mais Vendido
                </div>
                
                <h3 className="text-red-500 font-black uppercase tracking-widest text-sm mb-1 flex items-center gap-2">
                    <Star size={14} fill="currentColor" /> ACESSO COMPLETO VIP
                </h3>
                <p className="text-xs text-gray-400 mb-4">Tudo o que você precisa para secar.</p>
                
                {/* Price Stack */}
                <div className="flex flex-col mb-6">
                    <span className="text-sm text-gray-500 line-through">De R$ 97,90 por</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black text-white">R$ 14,90</span>
                        <span className="text-xs text-green-500 font-bold bg-green-900/30 px-2 py-1 rounded">85% OFF</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1">Pagamento único. Acesso vitalício.</p>
                </div>

                {/* Bonus Stack (Value Build) */}
                <div className="bg-neutral-800/50 rounded-xl p-4 mb-6 border border-white/5">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-3 tracking-wider">📦 O que você leva hoje:</p>
                    <ul className="space-y-3">
                        <li className="flex justify-between items-center text-sm font-bold text-white">
                            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> App Natal Sem Vergonha</span>
                            <span className="text-xs text-gray-500 line-through opacity-50">R$49</span>
                        </li>
                        <li className="flex justify-between items-center text-xs text-gray-300">
                            <span className="flex items-center gap-2"><Trophy size={14} className="text-yellow-500"/> Cronograma 21 Dias</span>
                            <span className="text-[10px] text-gray-600 line-through">R$29</span>
                        </li>
                        <li className="flex justify-between items-center text-xs text-gray-300">
                            <span className="flex items-center gap-2"><Utensils size={14} className="text-orange-500"/> 50 Receitas Doces Fit</span>
                            <span className="text-[10px] text-gray-600 line-through">R$37</span>
                        </li>
                        <li className="flex justify-between items-center text-xs text-gray-300">
                            <span className="flex items-center gap-2"><Zap size={14} className="text-blue-500"/> Manual Treino HIIT</span>
                            <span className="text-[10px] text-gray-600 line-through">R$27</span>
                        </li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-gray-700 flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-400">Valor Total:</span>
                        <span className="text-sm font-bold text-gray-400 line-through">R$ 142,00</span>
                    </div>
                </div>

                <button onClick={onBuy} className="w-full py-5 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black text-sm uppercase shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.6)] transition active:scale-[0.98] flex items-center justify-center gap-2 group">
                    QUERO O PACOTE VIP
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                
                <div className="flex justify-center gap-4 mt-4 opacity-70">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-3 grayscale opacity-50" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-3 grayscale opacity-50" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_of_Pix_%28Brazil%29.svg/1200px-Logo_of_Pix_%28Brazil%29.svg.png" className="h-3 grayscale opacity-50" alt="Pix" />
                </div>
            </div>

        </div>
      </section>

      {/* 7. FAQ (Quebra de Objeções) */}
      <section className="py-12 px-6 bg-neutral-900 border-t border-gray-800">
        <h2 className="text-xl font-black text-center mb-8 uppercase">Perguntas Frequentes</h2>
        <div className="max-w-md mx-auto space-y-3">
            {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-800 rounded-lg overflow-hidden bg-black">
                    <button 
                        onClick={() => toggleFaq(i)}
                        className="w-full p-4 text-left flex justify-between items-center text-sm font-bold text-gray-200 hover:bg-gray-900 transition"
                    >
                        {faq.q}
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                        <div className="p-4 pt-0 text-xs text-gray-400 leading-relaxed animate-slide-up">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </section>

      {/* 8. FOOTER (Profissional) */}
      <footer className="pt-12 pb-8 px-6 text-center border-t border-gray-900 bg-black">
        <div className="flex justify-center items-center gap-2 mb-6">
            <ShieldCheck size={24} className="text-green-500" />
            <div className="text-left">
                <div className="text-[10px] font-bold text-white uppercase">Garantia de 7 Dias</div>
                <div className="text-[10px] text-gray-500">Risco Zero</div>
            </div>
        </div>
        
        <p className="text-[10px] text-gray-600 mb-2">Protocolo Natal Sem Vergonha™ © 2024</p>
        <p className="text-[10px] text-gray-700">Todos os direitos reservados.</p>
        
        <div className="flex justify-center gap-4 mt-6 text-[10px] text-gray-600 underline">
            <button>Termos de Uso</button>
            <button>Políticas de Privacidade</button>
            <button>Suporte</button>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;