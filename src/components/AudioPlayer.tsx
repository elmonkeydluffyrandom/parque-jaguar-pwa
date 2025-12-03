'use client'

import { Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props = {
  text: string
  lang: string
}

export function AudioPlayer({ text, lang }: Props) {
  const playAudio = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      // No hacer nada si la API no es compatible.
      // Un toast podría ser bloqueado o no deseado.
      console.warn("Speech synthesis not supported.");
      return;
    }
    
    // Cancelar cualquier audio anterior para evitar solapamientos.
    window.speechSynthesis.cancel()

    // Crear una nueva instancia de pronunciación en CADA clic.
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang

    // Reproducir el audio.
    window.speechSynthesis.speak(utterance)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={playAudio}
      aria-label="Escuchar pronunciación"
    >
      <Volume2 className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent-foreground" />
    </Button>
  )
}
