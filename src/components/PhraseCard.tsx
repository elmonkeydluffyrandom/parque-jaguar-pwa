'use client'

import { useState } from 'react'
import type { Phrase, TouristReply } from '@/lib/phrases'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FranceFlag, ItalyFlag, USFlag, SpainFlag } from './icons'
import { AudioPlayer } from './AudioPlayer'
import { Button } from './ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MessageSquareQuote } from 'lucide-react'

type Language = 'en' | 'fr' | 'it'

type Props = {
  phrase: Phrase
}

const languageDetails: Record<Language, { name: string; flag: React.ComponentType; langCode: string }> = {
  en: { name: 'Inglés', flag: USFlag, langCode: 'en-US' },
  fr: { name: 'Francés', flag: FranceFlag, langCode: 'fr-FR' },
  it: { name: 'Italiano', flag: ItalyFlag, langCode: 'it-IT' },
}

export function PhraseCard({ phrase }: Props) {
  const [activeLang, setActiveLang] = useState<Language>('en')
  const languages: Language[] = ['en', 'fr', 'it']

  const ActiveFlag = languageDetails[activeLang].flag

  const renderTouristReplies = (replies: TouristReply[]) => (
    <Accordion type="single" collapsible className="w-full mt-4">
      <AccordionItem value="tourist-replies" className="border-border/50">
        <AccordionTrigger className="text-sm font-semibold text-muted-foreground hover:no-underline">
          <div className="flex items-center gap-2">
            <MessageSquareQuote className="h-4 w-4" />
            Posibles respuestas del turista
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-3 pt-2">
            {replies.map((reply) => (
              <li key={reply.id} className="text-sm">
                <div className="font-medium text-foreground">{reply.translations[activeLang]}</div>
                <div className="text-muted-foreground">{reply.translations['es']}</div>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg font-headline">{phrase.translations['es']}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
            <div className="flex items-center gap-4">
              <ActiveFlag />
              <div>
                <p className="font-semibold">{phrase.translations[activeLang]}</p>
                <p className="text-sm text-muted-foreground font-code">
                  {phrase.phonetics[activeLang]}
                </p>
              </div>
            </div>
            <AudioPlayer
              text={phrase.translations[activeLang]}
              lang={languageDetails[activeLang].langCode}
            />
          </div>
          {phrase.touristReplies && phrase.touristReplies.length > 0 && renderTouristReplies(phrase.touristReplies)}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {languages.map((lang) => {
            const LangFlag = languageDetails[lang].flag;
            return (
              <Button
                key={lang}
                variant={activeLang === lang ? 'default' : 'outline'}
                onClick={() => setActiveLang(lang)}
                className="flex items-center justify-center gap-2"
              >
                <LangFlag />
                <span className="hidden sm:inline">{languageDetails[lang].name}</span>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
