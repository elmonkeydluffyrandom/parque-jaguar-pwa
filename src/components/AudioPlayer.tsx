'use client'

import React, { useState, useEffect } from 'react'
import { Volume2, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"

type Props = {
  text: string
  lang: string
}

// Global state to track if the speech API has been "woken up" by a user interaction.
let isSpeechApiReady = false;
const speechApiReadyListeners = new Set<(isReady: boolean) => void>();

const setSpeechApiReady = (isReady: boolean) => {
  if (isReady !== isSpeechApiReady) {
    isSpeechApiReady = isReady;
    speechApiReadyListeners.forEach(listener => listener(isReady));
  }
};


export function AudioPlayer({ text, lang }: Props) {
  const { toast } = useToast()
  // This local state will sync with the global state.
  const [isReady, setIsReady] = useState(isSpeechApiReady);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const listener = (newIsReady: boolean) => setIsReady(newIsReady);
    speechApiReadyListeners.add(listener);
    return () => {
      speechApiReadyListeners.delete(listener);
    };
  }, []);

  const playAudio = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      toast({
        variant: "destructive",
        title: "Audio no soportado",
        description: "Tu navegador no soporta la síntesis de voz.",
      })
      return
    }

    // --- The "Wake Up" Logic for Mobile Browsers ---
    // If the API hasn't been activated by a user gesture yet,
    // this first click will just "prepare" it.
    if (!isSpeechApiReady) {
      setIsPlaying(true); // Show loader
      // This is the key: calling getVoices() as a result of a user click
      // is what "unlocks" the API on many mobile browsers.
      window.speechSynthesis.getVoices();
      
      // We use a small timeout to give the browser time to process getVoices()
      // and then we allow the user to click again to play.
      setTimeout(() => {
        setSpeechApiReady(true);
        setIsPlaying(false);
      }, 300); // 300ms delay
      return; // Don't try to speak on this first "wake up" click.
    }
    
    // --- Standard Play Logic for subsequent clicks ---
    // 1. Always cancel any ongoing speech to prevent overlaps.
    window.speechSynthesis.cancel()

    // 2. Create a new utterance instance for every play request.
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang

    // These events help manage the visual state of the button
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = (event) => {
        // Fallback for some browsers that might have issues after the "wake up" call
        console.error("Speech synthesis error:", event.error);
        setIsPlaying(false);
        // If an error occurs, we reset the ready state to try the wake-up call again next time.
        setSpeechApiReady(false);
        toast({
          variant: "destructive",
          title: "Error de audio",
          description: "No se pudo reproducir la pronunciación. Por favor, inténtalo de nuevo.",
        })
    };

    // 3. Speak.
    window.speechSynthesis.speak(utterance)
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={playAudio} 
      aria-label="Escuchar pronunciación"
      disabled={isPlaying}
    >
      {isPlaying ? (
        <LoaderCircle className="h-5 w-5 animate-spin text-muted-foreground" />
      ) : (
        <Volume2 className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent-foreground" />
      )}
    </Button>
  )
}
