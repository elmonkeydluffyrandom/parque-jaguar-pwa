'use client'

import React, { useState } from 'react'
import { Volume2, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"

type Props = {
  text: string
  lang: string
}

export function AudioPlayer({ text, lang }: Props) {
  const { toast } = useToast()
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = () => {
    // 1. Verificar compatibilidad
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      toast({
        variant: "destructive",
        title: "Audio no soportado",
        description: "Tu navegador no soporta la síntesis de voz.",
      })
      return
    }

    // 2. Si ya está hablando, detener. Si no, iniciar la reproducción.
    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      return
    }
    
    // 3. Cancelar cualquier audio anterior para evitar solapamientos
    window.speechSynthesis.cancel()

    // 4. Crear una nueva instancia de pronunciación en CADA clic
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang

    // 5. Gestionar el estado visual con los eventos del ciclo de vida
    utterance.onstart = () => {
      setIsPlaying(true)
    }
    utterance.onend = () => {
      setIsPlaying(false)
    }
    utterance.onerror = (event) => {
      console.error("Error en la síntesis de voz:", event.error)
      setIsPlaying(false)
      toast({
        variant: "destructive",
        title: "Error de audio",
        description: "No se pudo reproducir la pronunciación. Inténtalo de nuevo.",
      })
    }

    // 6. Reproducir el audio
    window.speechSynthesis.speak(utterance)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={playAudio}
      aria-label="Escuchar pronunciación"
    >
      {isPlaying ? (
        <LoaderCircle className="h-5 w-5 animate-spin text-muted-foreground" />
      ) : (
        <Volume2 className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent-foreground" />
      )}
    </Button>
  )
}
