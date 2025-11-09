import { Leaf } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-8">
      <div className="flex items-center gap-2">
        <Leaf className="h-7 w-7 text-primary" />
        <h1 className="text-xl font-bold tracking-tight text-foreground md:text-2xl font-headline">
          JaguarSpeak
        </h1>
      </div>
    </header>
  )
}
