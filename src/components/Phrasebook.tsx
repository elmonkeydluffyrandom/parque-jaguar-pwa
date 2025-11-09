import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { phraseData } from '@/lib/phrases'
import { PhraseCard } from './PhraseCard'

export function Phrasebook() {
  if (!phraseData || phraseData.length === 0) {
    return <p>No phrases available.</p>
  }
  return (
    <Tabs defaultValue={phraseData[0].id} className="w-full">
      <TabsList className="grid h-auto w-full grid-cols-2 rounded-lg sm:grid-cols-4 md:grid-cols-4">
        {phraseData.map((category) => (
          <TabsTrigger key={category.id} value={category.id} className="flex flex-wrap items-center gap-2 text-sm md:text-base">
            <category.icon className="h-5 w-5" />
            <span className="font-headline">{category.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {phraseData.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {category.phrases.map((phrase) => (
              <PhraseCard
                key={phrase.id}
                phrase={phrase}
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
