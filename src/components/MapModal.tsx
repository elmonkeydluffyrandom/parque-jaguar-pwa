import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapIcon } from 'lucide-react'
import { Map } from './Map'


export function MapModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="border-accent/80 bg-accent/90 text-accent-foreground hover:bg-accent hover:text-accent-foreground">
          <MapIcon className="h-5 w-5" />
          <span className="hidden sm:inline-block ml-2">Mapa</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Mapa del Parque Jaguar</DialogTitle>
          <DialogDescription>
            Haz clic en los íconos para ver la ubicación de cada actividad.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
            <Map />
        </div>
      </DialogContent>
    </Dialog>
  )
}
