'use client'
import Image from 'next/image'

import { Card } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { phraseData, type PhraseCategory } from '@/lib/phrases'
import placeholderImages from '@/lib/placeholder-images.json'

const Marker = ({
  category,
  style,
}: {
  category: { name: string; icon: React.ComponentType<{ className?: string }> }
  style: React.CSSProperties
}) => {
  const Icon = category.icon
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger
          className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-primary shadow-lg transition-transform hover:scale-110 md:h-10 md:w-10"
          style={style}
          aria-label={category.name}
        >
          <Icon className="h-4 w-4 text-primary-foreground md:h-5 md:w-5" />
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="border-primary bg-primary text-primary-foreground"
        >
          <p className="font-bold">{category.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const categoryInfo = phraseData.reduce((acc, category) => {
  acc[category.id] = { name: category.name, icon: category.icon };
  return acc;
}, {} as Record<string, { name: string, icon: React.ComponentType<{ className?: string }> }>);


const puntosDeInteres = [
  { id: 'reception', position: { top: '50%', left: '95%' } },     // R
  { id: 'zip-lining', position: { top: '50%', left: '60%' } },  // T
  { id: 'kayak', position: { top: '42%', left: '82%' } },         // K
  { id: 'bicycle', position: { top: '25%', left: '68%' } },       // B
  { id: 'atv', position: { top: '25%', left: '59%' } },           // C
];


export function Map() {
  const mapImage = {
    src: placeholderImages.parkMap.src,
    alt: placeholderImages.parkMap.alt,
    width: placeholderImages.parkMap.width,
    height: placeholderImages.parkMap.height,
    hint: placeholderImages.parkMap.hint,
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg border">
      <Image
        src="/map.png"
        alt="Mapa del Parque Jaguar"
        width={mapImage.width}
        height={mapImage.height}
        className="h-auto w-full"
        data-ai-hint={mapImage.hint}
        priority
      />

      {puntosDeInteres.map((punto) => {
        const category = categoryInfo[punto.id];
        if (!category) return null;
        
        return (
          <Marker
            key={punto.id}
            category={category}
            style={{ top: punto.position.top, left: punto.position.left }}
          />
        )
      })}
    </div>
  )
}
