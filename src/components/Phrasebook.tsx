import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { phraseData } from '@/lib/phrases'
import { PhraseCard } from './PhraseCard'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function Phrasebook() {
  if (!phraseData || phraseData.length === 0) {
    return <p>No phrases available.</p>
  }
  
  // Filter out categories that don't have phrases or subcategories to show
  const displayableCategories = phraseData.filter(category => 
    (category.phrases && category.phrases.length > 0) || 
    (category.subCategories && category.subCategories.length > 0)
  );

  if (displayableCategories.length === 0) {
    return <p>No phrases available for any category.</p>
  }

  return (
    <Tabs defaultValue={displayableCategories[0].id} className="w-full">
      <TabsList className="grid h-auto w-full grid-cols-2 rounded-lg sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
        {displayableCategories.map((category) => (
          <TabsTrigger key={category.id} value={category.id} className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base">
            <category.icon className="h-5 w-5" />
            <span className="font-headline">{category.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {displayableCategories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-6">
          {category.phrases && (
             <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {category.phrases.map((phrase) => (
                <PhraseCard
                  key={phrase.id}
                  phrase={phrase}
                />
              ))}
            </div>
          )}
          {category.subCategories && (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {category.subCategories.map((subCategory) => (
                <AccordionItem key={subCategory.id} value={subCategory.id} className="rounded-lg border bg-card px-4">
                   <AccordionTrigger className="text-lg font-headline hover:no-underline">
                    {subCategory.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {subCategory.phrases.map((phrase) => (
                        <PhraseCard
                          key={phrase.id}
                          phrase={phrase}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}
