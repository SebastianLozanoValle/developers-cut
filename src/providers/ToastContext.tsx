'use client'
import ToastManager from '@/components/general/ToastManager';
import React, { createContext, useContext, useRef, useImperativeHandle, useState, useCallback, ReactNode } from 'react';

interface ToastContextType {
  addToast: (status: 'ok' | 'error' | 'loading', message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const toastRef = useRef<any>(null);

  const addToast = useCallback((status: 'ok' | 'error' | 'loading', message: string) => {
    if (toastRef.current) {
      toastRef.current.addToast(status, message);
    }
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      <ToastManager ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
