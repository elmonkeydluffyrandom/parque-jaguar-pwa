import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function AddPhraseButton({ url }: { url: string }) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="border-accent/80 bg-accent/90 text-accent-foreground hover:bg-accent hover:text-accent-foreground"
      onClick={handleClick}
    >
      <PlusCircle className="h-5 w-5" />
      <span className="hidden sm:inline-block ml-2">Añade tu frase</span>
    </Button>
  )
}
