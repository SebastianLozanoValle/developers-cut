import React, { forwardRef, useImperativeHandle, useState, useEffect, useRef } from 'react';
import { Toast } from './Toast';
import { v4 as uuidv4 } from 'uuid';

interface ToastItem {
    id: string;
    status: 'ok' | 'error' | 'loading';
    message: string;
}

interface ToastManagerProps {
    duration?: number;
}

export interface ToastManagerHandle {
    addToast: (status: 'ok' | 'error' | 'loading', message: string) => void;
}

const ToastManager = forwardRef<ToastManagerHandle, ToastManagerProps>(({ duration = 3000 }, ref) => {
    const [toasts, setToasts] = useState<ToastItem[]>([]);
    const toastContainerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        addToast: (status: 'ok' | 'error' | 'loading', message: string) => {
            const id = uuidv4();
            setToasts(prevToasts => [...prevToasts, { id, status, message }]);
        }
    }), []);

    useEffect(() => {
        if (toasts.length === 0) return;

        const timer = setTimeout(() => {
            setToasts(prevToasts => prevToasts.slice(1));
        }, duration);

        return () => clearTimeout(timer);
    }, [toasts, duration]);

    return (
        <div ref={toastContainerRef} className="fixed bottom-0 right-0 p-4 space-y-2 z-[1000]">
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    className={`toast-enter toast-enter-active transition-transform`}
                >
                    <Toast
                        status={toast.status}
                        message={toast.message}
                    />
                </div>
            ))}
        </div>
    );
});

export default ToastManager;
