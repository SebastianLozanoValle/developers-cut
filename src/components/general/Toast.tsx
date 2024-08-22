'use client'
import { useState, useEffect } from "react";
import { FcOk, FcHighPriority } from "react-icons/fc";
import { DefaultSpinner } from "./DefaultSpinner";

export const Toast = ({ status, message, duration = 3000 }: { status: string, message: string, duration?: number }) => {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleDismiss();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    const handleDismiss = () => {
        setFading(true);
        setTimeout(() => {
            setVisible(false);
        }, 500);
    };

    if (!visible) return null;

    return (
        <div
            id={`toast-${status}`}
            className={`flex items-center w-full max-w-xs p-4 text-gray-500 rounded-lg shadow ${
                status === 'ok' ? 'bg-green-300' :
                status === 'error' ? 'bg-red-300' :
                status === 'loading' && 'bg-blue-300'
            } ${fading ? 'fade-out' : ''}`}
            role="alert"
        >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 rounded-lg">
                {
                    status === 'ok' ? <FcOk /> :
                    status === 'error' ? <FcHighPriority /> :
                    status === 'loading' && <DefaultSpinner />
                }
                <span className="sr-only">{status}</span>
            </div>
            <div className="ms-3 text-sm font-normal">{message}</div>
            <button
                type="button"
                onClick={handleDismiss}
                className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-white rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8"
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
    );
};
