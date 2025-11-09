'use client'

import { useState } from 'react'
import type { Phrase } from '@/lib/phrases'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FranceFlag, ItalyFlag, SpainFlag, UKFlag } from './icons'
import { AudioPlayer } from './AudioPlayer'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

type Props = {
  phrase: Phrase
  isPracticeMode: boolean
}

type Language = 'en' | 'es' | 'fr' | 'it'

const languageDetails: Record<Language, { name: string; flag: React.ComponentType; langCode: string }> = {
  en: { name: 'English', flag: UKFlag, langCode: 'en-US' },
  es: { name: 'Spanish', flag: SpainFlag, langCode: 'es-ES' },
  fr: { name: 'French', flag: FranceFlag, langCode: 'fr-FR' },
  it: { name: 'Italian', flag: ItalyFlag, langCode: 'it-IT' },
}

export function PhraseCard({ phrase, isPracticeMode }: Props) {
  const [activeLang, setActiveLang] = useState<Language>('en')
  const languages: Language[] = ['en', 'es', 'fr', 'it']

  if (isPracticeMode) {
    const ActiveFlag = languageDetails[activeLang].flag
    return (
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg font-headline">{phrase.translations['en']}</CardTitle>
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
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
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
            )})}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-headline">{phrase.translations['en']}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {(['en', 'es', 'fr', 'it'] as const).map((lang, index) => {
            const Flag = languageDetails[lang].flag
            return (
              <div key={lang}>
                {index > 0 && <Separator className="my-4" />}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Flag />
                    <div>
                      <p className="font-semibold">{phrase.translations[lang]}</p>
                      <p className="text-sm text-muted-foreground font-code">
                        {phrase.phonetics[lang]}
                      </p>
                    </div>
                  </div>
                  <AudioPlayer
                    text={phrase.translations[lang]}
                    lang={languageDetails[lang].langCode}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
