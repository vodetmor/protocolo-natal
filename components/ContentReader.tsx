import React, { useState } from 'react';
import { X, Flame, Utensils, Leaf, CalendarCheck, Clock, CheckCircle2, Coffee, Pizza, ChefHat } from 'lucide-react';
import { ContentId } from '../types';

interface ContentReaderProps {
  contentId: ContentId;
  onClose: () => void;
}

type RecipeCategory = 'sweets' | 'snacks' | 'meals';

const ContentReader: React.FC<ContentReaderProps> = ({ contentId, onClose }) => {
  const [recipeCategory, setRecipeCategory] = useState<RecipeCategory>('sweets');

  if (!contentId) return null;

  const renderRecipes = () => {
    const categories = [
        { id: 'sweets', label: 'Doces Fit', icon: CookieIcon },
        { id: 'snacks', label: 'Lanches', icon: Coffee },
        { id: 'meals', label: 'Refeições', icon: Pizza },
    ];

    const recipesData = {
        sweets: [
            {
                title: "Mousse Fake de Chocolate",
                tags: ["Low Carb", "5 min"],
                cal: "180 kcal",
                ing: ["1/2 Abacate maduro (pequeno)", "1 colher de sopa de Cacau 100%", "15 gotas de Adoçante (Stevia)", "1 colher de Whey (Opcional)"],
                prep: "Bata tudo no liquidificador ou mixer até ficar homogêneo. Leve à geladeira por 30min."
            },
            {
                title: "Brigadeiro de Colher Proteico",
                tags: ["Pós-Treino", "10 min"],
                cal: "120 kcal",
                ing: ["1 scoop de Whey Chocolate", "1 colher de cacau em pó", "2 colheres de leite em pó desnatado", "Água quente (pouca)"],
                prep: "Misture os secos. Vá adicionando água quente aos poucos e mexendo vigorosamente até dar o ponto de brigadeiro."
            },
            {
                title: "Beijinho de Coco Fit",
                tags: ["Rápido", "10 min"],
                cal: "50 kcal/unid",
                ing: ["1 xícara de leite em pó desnatado", "1/2 xícara de coco ralado sem açúcar", "Leite de coco light até dar ponto", "Adoçante a gosto"],
                prep: "Misture os secos e adicione o leite de coco aos poucos até a massa desgrudar da mão. Enrole e passe no coco."
            },
            {
                title: "Sorvete de Banana e Morango",
                tags: ["Refrescante", "3 min"],
                cal: "90 kcal",
                ing: ["2 bananas congeladas em rodelas", "5 morangos congelados", "100ml de iogurte natural (opcional)"],
                prep: "Processe as frutas congeladas até virar um creme. Sirva imediatamente."
            },
             {
                title: "Trufa de Tâmara com Cacau",
                tags: ["Energia", "15 min"],
                cal: "60 kcal/unid",
                ing: ["10 tâmaras sem caroço (hidratadas)", "2 colheres de cacau em pó", "Castanhas trituradas"],
                prep: "Processe as tâmaras até virar uma pasta. Misture o cacau. Enrole bolinhas e passe nas castanhas."
            },
            {
                title: "Bolo de Caneca Low Carb",
                tags: ["Microondas", "2 min"],
                cal: "150 kcal",
                ing: ["1 ovo", "1 colher de farinha de amêndoas (ou coco)", "1 colher de cacau", "1 colher de xylitol", "1 pitada de fermento"],
                prep: "Misture tudo na caneca. Microondas por 1:30 a 2:00 minutos."
            },
            {
                title: "Prestígio Gelado Fit",
                tags: ["Gelado", "20 min"],
                cal: "140 kcal",
                ing: ["2 colheres de coco ralado", "1 colher de iogurte grego", "Adoçante", "Chocolate 70% derretido para cobrir"],
                prep: "Misture o coco, iogurte e adoçante. Molde barrinhas e congele por 15min. Banhe no chocolate derretido."
            },
            {
                title: "Cookie de Pasta de Amendoim",
                tags: ["Crocante", "15 min"],
                cal: "110 kcal",
                ing: ["1 ovo", "1/2 xícara de pasta de amendoim", "3 colheres de xilitol"],
                prep: "Misture tudo até formar uma massa. Faça bolinhas, achate com um garfo em uma assadeira. Forno 180ºC por 10-12 min."
            },
            {
                title: "Creme de Papaya Light",
                tags: ["Digestivo", "5 min"],
                cal: "130 kcal",
                ing: ["1/2 mamão papaya congelado", "1 pote de iogurte natural desnatado", "Licor de cassis (opcional/gotas)"],
                prep: "Bata o mamão congelado com o iogurte até ficar cremoso. Sirva na hora."
            },
            {
                title: "Brownie de Batata Doce",
                tags: ["Pré-Treino", "40 min"],
                cal: "160 kcal",
                ing: ["1 xícara de purê de batata doce", "1/2 xícara de cacau", "1/2 xícara de farinha de aveia", "2 ovos", "Mel a gosto"],
                prep: "Misture todos os ingredientes. Asse em forma untada por 25-30 min a 180ºC."
            }
        ],
        snacks: [
            {
                title: "Panqueca de Banana Fit",
                tags: ["Pré-Treino", "5 min"],
                cal: "210 kcal",
                ing: ["1 Banana amassada", "2 Ovos", "1 colher de sopa de Aveia", "Canela a gosto"],
                prep: "Misture tudo com um garfo. Despeje em frigideira antiaderente untada com óleo de coco. Doure os dois lados."
            },
            {
                title: "Ovos de Codorna Temperados",
                tags: ["Proteína Pura", "10 min"],
                cal: "80 kcal",
                ing: ["10 ovos de codorna cozidos", "Azeite", "Orégano", "Pimenta calabresa"],
                prep: "Cozinhe os ovos, descasque e tempere com um fio de azeite e as ervas. Ótimo para saciedade rápida."
            },
            {
                title: "Chips de Batata Doce",
                tags: ["Crocante", "15 min"],
                cal: "100 kcal",
                ing: ["1 batata doce média", "Sal e alecrim a gosto", "Fio de azeite"],
                prep: "Corte a batata em rodelas finas. Tempere. Leve à Airfryer por 10-15min a 180ºC até ficar crocante."
            },
            {
                title: "Palitos de Cenoura com Homus",
                tags: ["Vegano", "5 min"],
                cal: "120 kcal",
                ing: ["1 cenoura cortada em tiras", "1 pepino cortado em tiras", "2 colheres de pasta de grão de bico (homus)"],
                prep: "Corte os vegetais e use o homus como 'dip'. Crocante e sacia a vontade de mastigar."
            },
            {
                title: "Coxinha Fit de Batata Doce",
                tags: ["Salgado", "20 min"],
                cal: "180 kcal",
                ing: ["1 batata doce cozida e amassada", "Frango desfiado temperado", "Farinha de linhaça para empanar"],
                prep: "Molde a massa de batata na mão, recheie com frango, feche no formato de coxinha. Passe na linhaça. Airfryer por 10min."
            },
            {
                title: "Queijo Coalho com Mel",
                tags: ["Doce/Salgado", "5 min"],
                cal: "150 kcal",
                ing: ["1 espeto de queijo coalho light", "1 fio de mel", "Orégano"],
                prep: "Grelhe o queijo na frigideira antiaderente. Finalize com um fio de mel e orégano."
            },
            {
                title: "Torrada com Abacate e Ovo",
                tags: ["Café da Manhã", "10 min"],
                cal: "220 kcal",
                ing: ["1 fatia de pão integral tostado", "1/4 abacate amassado", "1 ovo poché ou cozido", "Sal e pimenta"],
                prep: "Passe o abacate no pão, coloque o ovo por cima e tempere."
            },
            {
                title: "Roll de Peru e Ricota",
                tags: ["Low Carb", "2 min"],
                cal: "90 kcal",
                ing: ["3 fatias de peito de peru", "2 colheres de creme de ricota light", "Cebolinha picada"],
                prep: "Espalhe a ricota nas fatias de peru, salpique cebolinha e enrole como charutinhos."
            },
            {
                title: "Bolinho de Atum Assado",
                tags: ["Proteico", "25 min"],
                cal: "140 kcal",
                ing: ["1 lata de atum", "1 ovo", "2 colheres de aveia", "Cebola e salsa picadas"],
                prep: "Misture tudo, faça bolinhas e asse por 20 min até dourar."
            },
            {
                title: "Iogurte com Chia e Frutas",
                tags: ["Intestino", "2 min"],
                cal: "110 kcal",
                ing: ["1 iogurte natural", "1 colher de chia", "Morangos picados"],
                prep: "Misture a chia no iogurte e deixe descansar 5 min para hidratar. Adicione as frutas."
            }
        ],
        meals: [
            {
                title: "Frango Xadrez Light",
                tags: ["Jantar", "20 min"],
                cal: "280 kcal",
                ing: ["300g de frango em cubos", "Pimentões coloridos", "Cebola", "Brócolis", "Shoyu light", "Amendoim torrado"],
                prep: "Refogue o frango. Adicione os legumes e cozinhe até ficarem 'al dente'. Finalize com shoyu e amendoim."
            },
            {
                title: "Escondidinho de Couve-Flor",
                tags: ["Low Carb", "30 min"],
                cal: "250 kcal",
                ing: ["1/2 couve-flor cozida", "200g de carne moída magra", "1 colher de requeijão light"],
                prep: "Processe a couve-flor com requeijão (purê). Monte camadas: carne moída refogada e purê por cima. Gratine."
            },
            {
                title: "Peixe Branco no Papilote",
                tags: ["Leve", "20 min"],
                cal: "200 kcal",
                ing: ["1 filé de Tilápia", "Rodelas de limão", "Tomate cereja", "Manjericão", "Azeite"],
                prep: "Coloque tudo no papel alumínio, feche bem o pacote e asse por 20 min. O peixe cozinha no próprio vapor."
            },
            {
                title: "Crepioca de Frango",
                tags: ["Rápido", "5 min"],
                cal: "300 kcal",
                ing: ["1 ovo", "2 colheres de goma de tapioca", "Sal a gosto", "Recheio: frango ou queijo cottage"],
                prep: "Bata o ovo com a goma. Faça o disco na frigideira. Recheie e dobre."
            },
             {
                title: "Lasanha de Berinjela",
                tags: ["Sem Glúten", "40 min"],
                cal: "240 kcal",
                ing: ["1 berinjela fatiada no comprimento", "Carne moída magra (molho bolonhesa)", "Fatias de mussarela light"],
                prep: "Grelhe as fatias de berinjela. Monte camadas: Berinjela, Carne, Queijo. Repita. Forno para gratinar."
            },
            {
                title: "Macarrão de Abobrinha",
                tags: ["Low Carb", "10 min"],
                cal: "150 kcal",
                ing: ["1 abobrinha fatiada em tiras (spaghetti)", "Molho de tomate caseiro", "Manjericão"],
                prep: "Refogue as tiras de abobrinha rapidamente no azeite e alho (2 min). Jogue o molho quente por cima."
            },
            {
                title: "Strogonoff Fit",
                tags: ["Clássico", "20 min"],
                cal: "320 kcal",
                ing: ["Frango em cubos", "Molho de tomate", "1 pote de Iogurte Natural (substitui creme de leite)", "Champignon"],
                prep: "Faça o frango com molho de tomate. Desligue o fogo e misture o iogurte para não talhar."
            },
            {
                title: "Omelete de Forno",
                tags: ["Prático", "25 min"],
                cal: "210 kcal",
                ing: ["3 ovos", "Seleta de legumes (cenoura, ervilha, milho)", "Queijo ralado", "Tomate picado"],
                prep: "Bata os ovos, misture os legumes. Coloque em forma untada e asse até firmar."
            },
            {
                title: "Carne Moída com Quiabo",
                tags: ["Saciante", "20 min"],
                cal: "260 kcal",
                ing: ["300g patinho moído", "200g quiabo picado", "Alho e cebola"],
                prep: "Refogue a carne. Quando secar, jogue o quiabo e deixe cozinhar sem mexer muito para não babar. Pingue água se precisar."
            },
            {
                title: "Purê de Abóbora com Frango",
                tags: ["Conforto", "20 min"],
                cal: "230 kcal",
                ing: ["Abóbora cabotiá cozida", "Frango grelhado", "Canela em pó (toque especial)"],
                prep: "Amasse a abóbora com garfo. Sirva com o frango grelhado acebolado."
            }
        ]
    };

    return (
        <div className="space-y-6 text-gray-300">
             <p className="italic text-sm text-gray-400">Receitas selecionadas para acelerar seu metabolismo sem perder o sabor.</p>
             
             {/* Category Tabs */}
             <div className="flex p-1 bg-neutral-900 rounded-xl mb-6">
                {categories.map(cat => {
                    const isActive = recipeCategory === cat.id;
                    const Icon = cat.icon;
                    return (
                        <button 
                            key={cat.id}
                            onClick={() => setRecipeCategory(cat.id as RecipeCategory)}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold transition-all ${isActive ? 'bg-orange-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            <Icon size={14} />
                            {cat.label}
                        </button>
                    )
                })}
             </div>

             {/* List */}
             <div className="space-y-4 animate-slide-up">
                {recipesData[recipeCategory].map((recipe, idx) => (
                    <div key={idx} className="bg-neutral-800/50 p-5 rounded-2xl border border-neutral-700">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-bold text-white leading-tight">{recipe.title}</h3>
                            <div className="flex flex-col items-end gap-1">
                                {recipe.tags.map(tag => (
                                    <span key={tag} className="bg-neutral-700 text-gray-300 text-[9px] px-2 py-1 rounded font-bold uppercase whitespace-nowrap">{tag}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex gap-4 text-xs mb-4 text-orange-400 font-bold items-center">
                            <span className="flex items-center gap-1"><Flame size={12}/> {recipe.cal}</span>
                        </div>

                        <h4 className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-wider">Ingredientes</h4>
                        <ul className="list-disc list-inside text-sm space-y-1 mb-4 text-gray-300">
                            {recipe.ing.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>

                        <h4 className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-wider">Modo de Preparo</h4>
                        <p className="text-sm text-gray-400 leading-relaxed bg-black/20 p-3 rounded-lg border border-white/5">{recipe.prep}</p>
                    </div>
                ))}
             </div>
        </div>
    );
  };

  const getContent = () => {
    switch (contentId) {
      case 'hiit':
        return {
          title: "Protocolo HIIT 7 Minutos",
          icon: Flame,
          color: "text-red-500",
          gradient: "from-red-900 to-black",
          body: (
            <div className="space-y-6 text-gray-300">
              {/* Video Embed in Manual */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-red-900/50">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/mmq5zZfmIws?si=Y7qJ8s3v3x_5l8k_" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <div className="bg-red-900/20 p-4 rounded-xl border border-red-900/50">
                <h3 className="text-white font-bold mb-2">Por que funciona?</h3>
                <p className="text-sm">O efeito EPOC (Consumo Excessivo de Oxigênio Pós-Exercício) faz seu corpo continuar queimando gordura por até 48h após o treino para recuperar o fôlego.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">O Circuito (Repetir 3x)</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold text-white shrink-0">1</div>
                    <div>
                      <strong className="text-white block">Polichinelos (45s)</strong>
                      <span className="text-xs text-gray-400">Acelere o máximo que puder. Mantenha o abdômen contraído.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold text-white shrink-0">2</div>
                    <div>
                      <strong className="text-white block">Agachamento com Salto (45s)</strong>
                      <span className="text-xs text-gray-400">Desça devagar, exploda na subida. Amorteça a queda.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold text-white shrink-0">3</div>
                    <div>
                      <strong className="text-white block">Mountain Climbers (45s)</strong>
                      <span className="text-xs text-gray-400">Posição de prancha, traga os joelhos ao peito alternadamente como se estivesse correndo.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold text-white shrink-0">4</div>
                    <div>
                      <strong className="text-white block">Burpees (45s)</strong>
                      <span className="text-xs text-gray-400">O rei dos exercícios. Peito no chão, levanta e salta. Sem descanso.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-xl">
                 <strong className="text-white">Descanso:</strong> 1 minuto entre os circuitos.
              </div>
            </div>
          )
        };
      case 'recipes':
        return {
          title: "Livro de Receitas Secreto",
          icon: Utensils,
          color: "text-orange-500",
          gradient: "from-orange-900 to-black",
          body: renderRecipes()
        };
      case 'teas':
        return {
          title: "Fórmulas de Chás Detox",
          icon: Leaf,
          color: "text-green-500",
          gradient: "from-green-900 to-black",
          body: (
            <div className="space-y-6 text-gray-300">
              <div className="bg-green-900/10 p-4 rounded-xl border border-green-800/50">
                <h3 className="text-green-400 font-bold mb-1">Regra de Ouro</h3>
                <p className="text-sm">Beba sem açúcar. Se precisar muito, use Stevia. Beba 1 litro distribuído ao longo do dia.</p>
              </div>

              <div className="space-y-4">
                <div className="glass p-4 rounded-xl">
                  <h3 className="text-white font-bold flex items-center gap-2"><Leaf size={16} className="text-green-500"/> Chá Seca-Barriga (Termogênico)</h3>
                  <p className="text-xs text-gray-500 mb-3">Acelera metabolismo basal.</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> 500ml de água</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> 1 pedaço de gengibre (3cm)</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> 1 pau de canela</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> 1 colher de chá verde (ervas)</li>
                  </ul>
                  <p className="text-xs mt-3 bg-black/30 p-2 rounded">Ferva a água com gengibre e canela por 5 min. Desligue, adicione o chá verde e abafe por 10 min.</p>
                </div>

                <div className="glass p-4 rounded-xl">
                  <h3 className="text-white font-bold flex items-center gap-2"><Leaf size={16} className="text-green-500"/> Chá Diurético (Desinchar)</h3>
                  <p className="text-xs text-gray-500 mb-3">Para eliminar retenção líquida.</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> 500ml de água</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> 1 colher de Cavalinha</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-600"/> 1 colher de Hibisco</li>
                  </ul>
                  <p className="text-xs mt-3 bg-black/30 p-2 rounded">Ferva a água. Desligue. Coloque as ervas e abafe por 10 min. Coe e beba gelado ou quente.</p>
                </div>
              </div>
            </div>
          )
        };
      case 'manual':
        return {
          title: "Manual da Semana Perfeita",
          icon: CalendarCheck,
          color: "text-yellow-500",
          gradient: "from-yellow-900 to-black",
          body: (
            <div className="space-y-6 text-gray-300">
               <div className="bg-yellow-900/10 p-4 rounded-xl border border-yellow-800/50">
                <p className="text-sm">"Se você falhar em se planejar, está planejando falhar."</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">O Ritual do Domingo</h3>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="mt-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div></div>
                        <div>
                            <strong className="text-white">Marmitas da Semana:</strong>
                            <p className="text-sm text-gray-400">Tire 2 horas para cozinhar o básico: Frango desfiado, carne moída, arroz, feijão e legumes no vapor.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div></div>
                        <div>
                            <strong className="text-white">Lanches Prontos:</strong>
                            <p className="text-sm text-gray-400">Deixe frutas lavadas e porções de castanhas em potinhos.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="mt-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div></div>
                        <div>
                            <strong className="text-white">Garrafa de Água:</strong>
                            <p className="text-sm text-gray-400">Tenha uma garrafa de 1L sempre cheia ao seu lado. É sua melhor amiga.</p>
                        </div>
                    </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">Mentalidade Blindada</h3>
                <ul className="text-sm space-y-3 bg-neutral-900 p-4 rounded-xl">
                    <li>❌ Não tenha "dia do lixo". Tenha uma "refeição livre" planejada (ex: sábado à noite).</li>
                    <li>❌ Se errar, não jogue o dia fora. Volte na próxima refeição.</li>
                    <li>✅ A fome não é uma emergência. Beba água e espere 15 min.</li>
                </ul>
              </div>
            </div>
          )
        };
      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;
  const Icon = content.icon;

  return (
    <div className="fixed inset-0 z-[70] bg-black animate-slide-up overflow-y-auto pb-safe">
      {/* Header */}
      <div className={`sticky top-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b ${content.gradient} backdrop-blur-md border-b border-white/10`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black/30 flex items-center justify-center backdrop-blur">
            <Icon className={content.color} size={20} />
          </div>
          <h2 className="font-bold text-white text-sm leading-tight max-w-[200px]">{content.title}</h2>
        </div>
        <button onClick={onClose} className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center hover:bg-white/20 transition">
          <X className="text-white" size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 pb-24">
        {content.body}
        
        <button onClick={onClose} className="w-full mt-8 bg-neutral-800 text-gray-400 font-bold py-4 rounded-xl border border-neutral-700 uppercase text-xs tracking-widest hover:bg-neutral-700 transition">
          Fechar Guia
        </button>
      </div>
    </div>
  );
};

// Helper Icon for Cookie (Lucide doesn't have a direct Cookie filled icon in all versions, using similar)
const CookieIcon: React.FC<any> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
)

export default ContentReader;