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
    // Primero, verifica si la API es compatible con el navegador.
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      toast({
        variant: "destructive",
        title: "Audio no soportado",
        description: "Tu navegador no soporta la síntesis de voz.",
      })
      return
    }

    // Detiene cualquier locución que esté en curso para evitar superposiciones.
    window.speechSynthesis.cancel()

    // Crea una nueva instancia de la locución.
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang

    // Inicia la locución. Esta acción está directamente ligada al clic del usuario.
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
