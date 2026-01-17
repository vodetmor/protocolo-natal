import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, CheckCircle2, Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export function TutorialOverlay() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const { user } = useAuth();

    useEffect(() => {
        // Only show if user is logged in and hasn't seen it yet
        const hasSeen = localStorage.getItem('has_seen_tutorial');
        if (user && !hasSeen) {
            // Small delay to allow page to load
            const timer = setTimeout(() => setIsOpen(true), 1500);
            return () => clearTimeout(timer);
        }
    }, [user]);

    const handleFinish = () => {
        localStorage.setItem('has_seen_tutorial', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    const steps = [
        {
            title: "Bem-vinda, Musa! 💕",
            content: "Este é o seu espaço exclusivo. Aqui você vai acompanhar cada passo da sua transformação nos próximos 28 dias.",
            icon: Sparkles
        },
        {
            title: "Checklist Diário",
            content: "Todos os dias, marque suas tarefas realizadas (Água, Treino, Dieta). É assim que você vê seu progresso brilhar!",
            icon: CheckCircle2
        },
        {
            title: "Tudo o que você precisa",
            content: "Use o menu para acessar seus Treinos e o Planejamento Alimentar completo. Está tudo na sua mão.",
            icon: Menu
        },
        {
            title: "Pronta para começar?",
            content: "Explore a plataforma e comece hoje mesmo. Estamos juntas nessa!",
            icon: Sparkles
        }
    ];

    const currentStep = steps[step];
    const Icon = currentStep.icon;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <Card className="w-full max-w-md shadow-2xl border-primary/20 relative animate-in zoom-in-95 duration-300">
                <button
                    onClick={handleFinish}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                >
                    <X className="w-5 h-5" />
                </button>

                <CardHeader className="text-center pb-2">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{currentStep.title}</CardTitle>
                </CardHeader>

                <CardContent className="text-center text-muted-foreground pb-6">
                    <p className="leading-relaxed">{currentStep.content}</p>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                    <Button
                        onClick={() => {
                            if (step < steps.length - 1) {
                                setStep(s => s + 1);
                            } else {
                                handleFinish();
                            }
                        }}
                        className="w-full gradient-pink h-12 text-base rounded-xl"
                    >
                        {step < steps.length - 1 ? 'Próximo' : 'Começar! ✨'}
                    </Button>

                    <Button
                        variant="ghost"
                        onClick={handleFinish}
                        className="text-sm text-muted-foreground"
                    >
                        Pular tutorial
                    </Button>

                    <div className="flex justify-center gap-2 mt-2">
                        {steps.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === step ? 'bg-primary' : 'bg-primary/20'
                                    }`}
                            />
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
