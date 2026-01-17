import { Shield, CheckCircle } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Garantia de <span className="text-green-600">15 dias</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Você tem 15 dias para acessar o Protocolo 28 e sentir se ele faz sentido para você.
              </p>

              <div className="bg-background/70 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      Se não se sentir confortável ou segura, basta solicitar o reembolso.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Sem explicações. Sem constrangimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
