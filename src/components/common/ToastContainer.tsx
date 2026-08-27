import React from 'react';
import { useData } from '../../context/DataContext';
import { CheckCircle2, AlertTriangle, Info, XCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useData();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-md w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';
          const isWarning = toast.type === 'warning';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-lg border text-sm backdrop-blur-md ${
                isSuccess
                  ? 'bg-[#0F4C3A] text-white border-emerald-600'
                  : isError
                  ? 'bg-red-900 text-white border-red-700'
                  : isWarning
                  ? 'bg-amber-900 text-white border-amber-700'
                  : 'bg-[#0B1E36] text-white border-slate-700'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-300" />}
                {isError && <XCircle className="w-5 h-5 text-red-300" />}
                {isWarning && <AlertTriangle className="w-5 h-5 text-amber-300" />}
                {!isSuccess && !isError && !isWarning && <Info className="w-5 h-5 text-blue-300" />}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm leading-tight text-white">{toast.title}</h4>
                <p className="mt-1 text-xs opacity-90 leading-relaxed text-slate-100">{toast.message}</p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white/70 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
