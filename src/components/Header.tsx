import { JaguarIcon } from './icons'
import { HelpModal } from './HelpModal'
import { MapModal } from './MapModal'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between gap-2 border-b bg-background/80 px-4 backdrop-blur-sm sm:gap-4 md:px-8">
      <div className="flex items-center gap-3">
        <JaguarIcon className="h-8 w-8 text-primary" />
        <h1 className="text-xl font-bold tracking-tight text-foreground md:text-2xl font-headline">
          Parque Jaguar
        </h1>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <MapModal />
        <HelpModal />
        <ThemeToggle />
      </div>
    </header>
  )
}
