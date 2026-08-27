import React, { useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { ShieldAlert, LogOut } from 'lucide-react';

export const QuickSafeExitButton: React.FC = () => {
  const { triggerQuickSafeExit } = useData();

  // Listen for emergency shortcut: pressing 'Escape' 3 times quickly triggers exit
  useEffect(() => {
    let escCount = 0;
    let timer: NodeJS.Timeout;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        escCount++;
        clearTimeout(timer);
        if (escCount >= 3) {
          triggerQuickSafeExit();
        } else {
          timer = setTimeout(() => {
            escCount = 0;
          }, 1000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [triggerQuickSafeExit]);

  return (
    <button
      onClick={triggerQuickSafeExit}
      title="Quick Escape: Instantly leaves this site and opens Google Weather (Shortcut: Press ESC 3 times)"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-sm transition-all duration-200 border border-red-500/50 cursor-pointer"
      aria-label="Quick Safe Exit to close site immediately"
    >
      <ShieldAlert className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">Quick Safe Exit</span>
      <span className="sm:hidden">Exit</span>
      <LogOut className="w-3 h-3 opacity-80" />
    </button>
  );
};
