const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-display text-lg font-semibold mb-1">Corpo de Musa</p>
              <p className="text-sm text-background/60">Protocolo Corpo de Musa - Transformação em 4 semanas</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Contato
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-background/10 text-center">
            <p className="text-sm text-background/40">
              © {new Date().getFullYear()} Corpo de Musa. Todos os direitos reservados.
            </p>
            <p className="text-xs text-background/30 mt-2">
              Este produto não substitui acompanhamento médico ou nutricional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
