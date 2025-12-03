'use client'

import { Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"

type Props = {
  text: string
  lang: string
}

export function AudioPlayer({ text, lang }: Props) {
  const { toast } = useToast()

  const playAudio = () => {
    const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

    if (!isSupported) {
      toast({
        variant: "destructive",
        title: "Audio no soportado",
        description: "Tu navegador no soporta la síntesis de voz.",
      })
      return
    }

    // Cancelar cualquier síntesis en curso para evitar conflictos.
    window.speechSynthesis.cancel()
    
    // "Despertar" la API en algunos navegadores móviles obteniendo las voces.
    const voices = window.speechSynthesis.getVoices();

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    
    // Asignar una voz si está disponible para el idioma.
    const selectedVoice = voices.find(voice => voice.lang === lang)
    if (selectedVoice) {
      utterance.voice = selectedVoice
    }

    window.speechSynthesis.speak(utterance)
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={playAudio} 
      aria-label="Escuchar pronunciación"
    >
      <Volume2 className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
    </Button>
  )
}
