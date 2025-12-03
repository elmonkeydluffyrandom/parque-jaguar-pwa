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
      console.warn("Speech synthesis not supported.");
      return;
    }
    
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang

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
