'use client'
import { ContactForm } from "@/components/forms/ContactForm";
import { InnerSpinner } from "@/components/general/InnerSpinner";
import { Toast } from "@/components/general/Toast";
import ToastManager, { ToastManagerHandle } from "@/components/general/ToastManager";
import { useToast } from "@/providers/ToastContext";
import { useRef } from "react";

export default function Home() {
    const { addToast } = useToast();
  
    const handleClick = () => {
      addToast('ok', 'This is a success message!');
    };
    return (
        <>
            <InnerSpinner />
            <button onClick={handleClick}>Show Toast</button>
        </>
    )
}