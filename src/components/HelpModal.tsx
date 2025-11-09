import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HelpCircle } from "lucide-react"

export function HelpModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-accent/80 hover:bg-accent text-accent-foreground hover:text-accent-foreground">
          <HelpCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Ayuda</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>¿Cómo usar la aplicación Parque Jaguar?</DialogTitle>
          <DialogDescription>
            Una guía rápida para ayudarte a empezar.
          </DialogDescription>
        </DialogHeader>
        <div className="prose prose-sm max-w-none text-foreground">
          <h3 className="font-headline font-semibold">1. Explora las Categorías</h3>
          <p>
            Usa las pestañas en la parte superior para seleccionar una categoría de frases (ej. Recepción, Tirolesa).
          </p>

          <h3 className="font-headline font-semibold">2. Selecciona un Idioma</h3>
          <p>
            Cada tarjeta muestra primero la frase en español. Debajo, puedes usar los botones (Inglés, Francés, Italiano) para ver la traducción en el idioma que elijas.
          </p>

          <h3 className="font-headline font-semibold">3. Escucha y Aprende con IPA</h3>
          <p>
            Debajo de cada traducción, verás un texto gris más pequeño. Este es el <strong>Alfabeto Fonético Internacional (IPA)</strong>, una guía para ayudarte a pronunciar la frase correctamente. El IPA representa cada sonido de manera única, para que sepas exactamente cómo suena.
          </p>

          <h4 className="font-semibold">Recursos sobre IPA</h4>
          <p>
            Aquí tienes algunos enlaces para aprender más sobre cómo leer el IPA y mejorar tu pronunciación:
          </p>
          <ul className="list-disc pl-5">
            <li>(Próximamente: Enlace a video o página)</li>
            <li>(Próximamente: Enlace a video o página)</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
