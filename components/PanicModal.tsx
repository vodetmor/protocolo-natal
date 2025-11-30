import React from 'react';
import { AlertTriangle, Coffee, Cookie } from 'lucide-react';
import { ViewState, ContentId } from '../types';

interface PanicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRedirect: (view: ViewState) => void;
  openContent: (id: ContentId) => void;
}

const PanicModal: React.FC<PanicModalProps> = ({ isOpen, onClose, onRedirect, openContent }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur flex flex-col justify-center items-center p-8 text-center animate-slide-up">
      <AlertTriangle className="text-red-600 mb-6 animate-bounce" size={64} />
      <h2 className="text-3xl font-black text-white mb-2 uppercase italic">Pare Agora!</h2>
      <p className="text-gray-300 mb-8 text-lg font-medium leading-relaxed">
        Você prometeu que não ia desistir. <br />
        <span className="text-red-500 font-bold">O sabor dura 2 minutos.</span> <br />
        A vergonha dura o verão inteiro.
      </p>

      <div className="space-y-4 w-full max-w-sm">
        <button
          onClick={() => { openContent('teas'); }}
          className="w-full bg-green-900/40 hover:bg-green-900/60 text-green-100 font-bold py-4 rounded-xl border border-green-600/50 flex items-center justify-center gap-3 transition-all"
        >
          <Coffee size={20} />
          Tomar Chá Seca-Barriga
        </button>
        
        <button
          onClick={() => { openContent('recipes'); }}
          className="w-full bg-orange-900/40 hover:bg-orange-900/60 text-orange-100 font-bold py-4 rounded-xl border border-orange-600/50 flex items-center justify-center gap-3 transition-all"
        >
          <Cookie size={20} />
          Ver Receita de Doce Fit
        </button>
        
        <button
          onClick={onClose}
          className="w-full bg-transparent text-gray-500 py-3 text-sm underline mt-4 hover:text-gray-300 transition"
        >
          Já passou, vou seguir o plano.
        </button>
      </div>
    </div>
  );
};

export default PanicModal;