'use client'

import { Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"


type Props = {
  text: string
  lang: string
}

export function AudioPlayer({ text, lang }: Props) {
  const [isSupported, setIsSupported] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsSupported(typeof window !== 'undefined' && 'speechSynthesis' in window)
  }, [])

  const playAudio = () => {
    if (!isSupported) {
      toast({
        variant: "destructive",
        title: "Audio Not Supported",
        description: "Your browser does not support text-to-speech.",
      })
      return
    }
    // Cancel any ongoing speech before starting a new one
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    window.speechSynthesis.speak(utterance)
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={playAudio} disabled={!isSupported} aria-label="Play pronunciation">
            <Volume2 className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Listen to pronunciation</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
