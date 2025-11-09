import type { LucideIcon } from 'lucide-react'
import { ConciergeBell, Footprints, Mountain, Utensils } from 'lucide-react'

export type Phrase = {
  id: number
  translations: {
    en: string
    es: string
    fr: string
    it: string
  }
  phonetics: {
    en: string
    es: string
    fr: string
    it: string
  }
}

export type PhraseCategory = {
  id: string
  name: string
  icon: LucideIcon
  phrases: Phrase[]
}

export const phraseData: PhraseCategory[] = [
  {
    id: 'reception',
    name: 'Reception',
    icon: ConciergeBell,
    phrases: [
      {
        id: 1,
        translations: {
          en: 'Welcome to the park!',
          es: '¡Bienvenido al parque!',
          fr: 'Bienvenue au parc !',
          it: 'Benvenuti al parco!',
        },
        phonetics: {
          en: '/ˈwɛlkəm tu ðə pɑːrk!/',
          es: '/bjembeˈniðo al ˈpaɾke!/',
          fr: '/bjɛ̃vəny o paʁk !/',
          it: '/benveˈnuːti al ˈparko!/',
        },
      },
      {
        id: 2,
        translations: {
          en: 'Do you have a reservation?',
          es: '¿Tiene una reserva?',
          fr: 'Avez-vous une réservation ?',
          it: 'Ha una prenotazione?',
        },
        phonetics: {
          en: '/du ju hæv ə ˌrɛzərˈveɪʃən?/',
          es: '/ˈtjene ˈuna reˈseɾβa?/',
          fr: '/ave vu yn ʁezɛʁvasjɔ̃ ?/',
          it: '/a ˈuːna prenotatˈtsjoːne?/',
        },
      },
    ],
  },
  {
    id: 'zip-lining',
    name: 'Zip-lining',
    icon: Mountain,
    phrases: [
      {
        id: 3,
        translations: {
          en: 'Please put on your helmet.',
          es: 'Por favor, póngase el casco.',
          fr: 'Veuillez mettre votre casque.',
          it: 'Per favore, indossa il casco.',
        },
        phonetics: {
          en: '/pliːz pʊt ɒn jɔːr ˈhɛlmɪt./',
          es: '/poɾ faˈβoɾ, ˈponɡase el ˈkasko./',
          fr: '/vœje mɛtʁ vɔtʁ kask./',
          it: '/per faˈvoːre, inˈdɔssa il ˈkasko./',
        },
      },
      {
        id: 4,
        translations: {
          en: 'Are you ready for the adventure?',
          es: '¿Estás listo para la aventura?',
          fr: 'Êtes-vous prêt pour l’aventure ?',
          it: 'Sei pronto per l’avventura?',
        },
        phonetics: {
          en: '/ɑːr ju ˈrɛdi fɔːr ði ədˈvɛnʧər?/',
          es: '/esˈtas ˈlisto ˈpaɾa la aβenˈtuɾa?/',
          fr: '/ɛt vu pʁɛ puʁ lavɑ̃tyʁ?/',
          it: '/sɛi̯ ˈpronto per lavvenˈtuːra?/',
        },
      },
    ],
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    icon: Utensils,
    phrases: [
      {
        id: 5,
        translations: {
          en: 'Table for two, please.',
          es: 'Mesa para dos, por favor.',
          fr: 'Une table pour deux, s’il vous plaît.',
          it: 'Un tavolo per due, per favore.',
        },
        phonetics: {
          en: '/ˈteɪbəl fɔːr tuː, pliːz./',
          es: '/ˈmesa ˈpaɾa ðos, poɾ faˈβoɾ./',
          fr: '/yn tabl puʁ dø, sil vu plɛ./',
          it: '/un ˈtaːvolo per ˈduːe, per faˈvoːre./',
        },
      },
      {
        id: 6,
        translations: {
          en: 'What is the specialty of the house?',
          es: '¿Cuál es la especialidad de la casa?',
          fr: 'Quelle est la spécialité de la maison ?',
          it: 'Qual è la specialità della casa?',
        },
        phonetics: {
          en: '/wʌt ɪz ðə ˈspɛʃəlti ʌv ðə haʊs?/',
          es: '/ˈkwal es la espeθjaliˈðað ðe la ˈkasa?/',
          fr: '/kɛl ɛ la spesjalite də la mɛzɔ̃?/',
          it: '/ˈkwal ɛ la spetʃaliˈta ˈdella ˈkaːza?/',
        },
      },
    ],
  },
    {
    id: 'trails',
    name: 'Trails',
    icon: Footprints,
    phrases: [
      {
        id: 7,
        translations: {
          en: 'Follow the green trail.',
          es: 'Siga el sendero verde.',
          fr: 'Suivez le sentier vert.',
          it: 'Segui il sentiero verde.',
        },
        phonetics: {
          en: '/ˈfɒloʊ ðə ɡriːn treɪl./',
          es: '/ˈsiɣa el senˈdeɾo ˈβeɾðe./',
          fr: '/sɥive lə sɑ̃tje vɛʁ./',
          it: '/ˈseɡwi il senˈtjɛːro ˈverde./',
        },
      },
      {
        id: 8,
        translations: {
          en: 'Be careful, the path is slippery.',
          es: 'Tenga cuidado, el camino es resbaladizo.',
          fr: 'Attention, le chemin est glissant.',
          it: 'Fai attenzione, il sentiero è scivoloso.',
        },
        phonetics: {
          en: '/bi ˈkɛərfʊl, ðə pɑːθ ɪz ˈslɪpəri./',
          es: '/ˈtenɡa kwiˈðaðo, el kaˈmino es resβalaˈðiso./',
          fr: '/atɑ̃sjɔ̃, lə ʃəmɛ̃ ɛ ɡlisɑ̃./',
          it: '/fai attenˈtsjoːne, il senˈtjɛːro ɛ ʃivoˈloːzo./',
        },
      },
    ],
  },
]
