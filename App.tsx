import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Onboarding from './components/Onboarding';
import PanicModal from './components/PanicModal';
import ContentReader from './components/ContentReader';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';
import Diet from './views/Diet';
import Workout from './views/Workout';
import Arsenal from './views/Arsenal';
import { UserProfile, ViewState, ContentId } from './types';

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [showPanic, setShowPanic] = useState(false);
  const [activeContent, setActiveContent] = useState<ContentId>(null);
  const [countdown, setCountdown] = useState('');

  // Countdown Timer Logic
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 21); // 21 days from now

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      
      if (diff <= 0) {
        setCountdown("00:00:00");
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      
      setCountdown(`${d}d ${h}:${m}:${s}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePurchase = () => {
    // Simulating purchase flow -> Go to Onboarding
    setShowLanding(false);
  };

  const handleOnboardingComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setIsOnboarded(true);
  };

  const openContent = (id: ContentId) => {
    setActiveContent(id);
    setShowPanic(false); // Close panic modal if open
  };

  // --- FLOW CONTROL ---

  // 1. Landing Page (Sales)
  if (showLanding) {
    return <LandingPage onBuy={handlePurchase} />;
  }

  // 2. Onboarding (Setup)
  if (!isOnboarded) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // 3. Main App
  return (
    <div className="flex flex-col h-screen bg-dark-bg text-white font-sans overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-black/90 border-b border-gray-800/50 backdrop-blur-md z-30 shadow-lg">
        <div>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Fase 1: Desinchar</div>
          <div className="font-black text-white text-lg tracking-tight leading-none">
            DIA <span className="text-red-600 text-2xl">1</span><span className="text-gray-600 text-sm font-medium">/21</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Natal em</div>
          <div className="font-mono text-red-500 font-bold text-lg leading-none tracking-tight">{countdown}</div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth">
        {currentView === 'home' && userProfile && (
            <Dashboard user={userProfile} openPanic={() => setShowPanic(true)} setView={setCurrentView} />
        )}
        {currentView === 'diet' && userProfile && (
            <Diet user={userProfile} openContent={openContent} />
        )}
        {currentView === 'train' && (
            <Workout openContent={openContent} />
        )}
        {currentView === 'arsenal' && (
            <Arsenal openContent={openContent} />
        )}
      </main>

      <Navigation currentView={currentView} setView={setCurrentView} />

      {/* Overlays */}
      <PanicModal 
        isOpen={showPanic} 
        onClose={() => setShowPanic(false)} 
        onRedirect={(view) => setCurrentView(view)}
        openContent={openContent}
      />

      <ContentReader 
        contentId={activeContent} 
        onClose={() => setActiveContent(null)} 
      />
    </div>
  );
};

export default App;