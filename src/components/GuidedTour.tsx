import { useEffect } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function GuidedTour() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const hasSeenTour = localStorage.getItem('has_seen_interactive_tour');

        if (user && !hasSeenTour) {
            const timer = setTimeout(() => {
                const tourDriver = driver({
                    showProgress: true,
                    animate: true,
                    nextBtnText: 'Próximo →',
                    prevBtnText: '← Voltar',
                    doneBtnText: 'Começar! ✨',
                    steps: [
                        {
                            element: '#root',
                            popover: {
                                title: 'Bem-vinda, Musa! 💕',
                                description: 'Que bom ter você aqui! Vou te mostrar rapidinho como o seu App funciona.',
                                side: 'left',
                                align: 'start'
                            }
                        },
                        {
                            element: '#tour-progress',
                            popover: {
                                title: 'Seu Progresso',
                                description: 'Aqui você vê sua evolução. Cada dia completado preenche essa barra!',
                                side: 'bottom'
                            }
                        },
                        {
                            element: '#tour-checklist',
                            popover: {
                                title: 'Checklist Diário',
                                description: 'Sua meta do dia: beba água, treine e siga a dieta. Marque aqui quando fizer!',
                                side: 'top'
                            }
                        },
                        {
                            element: '#tour-sidebar',
                            popover: {
                                title: 'Menu Principal',
                                description: 'Aqui você acessa tudo: Treinos, Dieta e Ferramentas Exclusivas.',
                                side: 'right'
                            }
                        }
                    ],
                    onDestroyStarted: () => {
                        // Simply destroy the driver instance and mark as seen.
                        // We rely on driver.js default teardown behavior but explicitly set storage.
                        localStorage.setItem('has_seen_interactive_tour', 'true');
                        tourDriver.destroy();
                    }
                });

                tourDriver.drive();
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [user, navigate]);

    return null;
}
