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
  category: PhraseCategory
  style: React.CSSProperties
}) => {
  const Icon = category.icon
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger
          className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-primary shadow-lg transition-transform hover:scale-110"
          style={style}
          aria-label={category.name}
        >
          <Icon className="h-5 w-5 text-primary-foreground" />
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

const markerPositions: Record<string, { top: string; left: string }> = {
  reception: { top: '80%', left: '50%' },
  'zip-lining': { top: '30%', left: '10%' },
  kayak: { top: '45%', left: '88%' },
  bicycle: { top: '15%', left: '80%' },
  atv: { top: '15%', left: '70%' },
  cafeteria: { top: '55%', left: '60%' },
  amphitheater: { top: '75%', left: '78%' },
  restrooms: { top: '75%', left: '40%' },
}

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
        src={mapImage.src}
        alt={mapImage.alt}
        width={mapImage.width}
        height={mapImage.height}
        className="h-auto w-full"
        data-ai-hint={mapImage.hint}
      />

      {phraseData.map((category) => {
        const position = markerPositions[category.id]
        if (!position) return null
        return (
          <Marker
            key={category.id}
            category={category}
            style={{ top: position.top, left: position.left }}
          />
        )
      })}
    </div>
  )
}
