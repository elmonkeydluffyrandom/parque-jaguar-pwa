import { Leaf } from 'lucide-react'
import { Label } from './ui/label'
import { Switch } from './ui/switch'

type HeaderProps = {
  isPracticeMode: boolean
  onPracticeModeChange: (isPractice: boolean) => void
}

export function Header({ isPracticeMode, onPracticeModeChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-8">
      <div className="flex items-center gap-2">
        <Leaf className="h-7 w-7 text-primary" />
        <h1 className="text-xl font-bold tracking-tight text-foreground md:text-2xl font-headline">
          JaguarSpeak
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Label htmlFor="practice-mode" className="text-sm font-medium">
          Practice Mode
        </Label>
        <Switch
          id="practice-mode"
          checked={isPracticeMode}
          onCheckedChange={onPracticeModeChange}
          aria-label="Toggle practice mode"
        />
      </div>
    </header>
  )
}
