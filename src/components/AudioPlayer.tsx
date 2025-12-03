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
      setSpeechApiReady(true);
      setTimeout(() => setIsPlaying(false), 500); // Hide loader after a short delay
      return; // Don't try to speak on this first "wake up" click.
    }
    
    // --- Standard Play Logic for subsequent clicks ---
    // 1. Always cancel any ongoing speech to prevent overlaps.
    window.speechSynthesis.cancel()

    // 2. Create a new utterance instance for every play request.
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang

    // This helps manage the visual state of the button
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

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
