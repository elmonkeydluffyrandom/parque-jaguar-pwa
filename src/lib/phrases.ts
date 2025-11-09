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
          en: 'Hello, welcome to Jaguar Ecotourism Park!',
          es: '¡Bienvenido al Parque Ecoturístico Jaguar!',
          fr: 'Bonjour, bienvenue au Parc Écotouristique Jaguar !',
          it: 'Ciao, benvenuto al Parco Ecoturistico Jaguar!',
        },
        phonetics: {
          en: "/hə'loʊ 'wɛlkəm tu 'dʒægwar 'i:koʊ tʊrɪzəm pɑrk/",
          es: '¡Bienvenido al Parque Ecoturístico Jaguar!',
          fr: '/bɔ̃ʒuʁ bjɛ̃vəny o paʁk ekotuʁistik ʒagwaʁ/',
          it: "/'tʃa.o ben've:nuto al 'parkɔ ekotu'ristiko ʒa'gwar/",
        },
      },
      {
        id: 2,
        translations: {
          en: 'Is this your first time here?',
          es: '¿Es su primera vez aquí?',
          fr: 'Est-ce votre première fois ici ?',
          it: 'È la sua prima volta qui?',
        },
        phonetics: {
          en: '/ɪz ðɪs jʊər fɜrst taɪm hɪr/',
          es: '¿Es su primera vez aquí?',
          fr: '/ɛs vɔtʁ pʁəmjɛʁ fwa isi?/',
          it: "/'ɛ la 'swa 'prima 'vɔlta kwi/",
        },
      },
      {
        id: 9,
        translations: {
          en: 'Let me explain the available activities.',
          es: 'Permítame explicarle las actividades disponibles.',
          fr: 'Laissez-moi vous expliquer les activités disponibles.',
          it: 'Mi permetta di spiegarle le attività disponibili.',
        },
        phonetics: {
          en: "/lɛt mi ɪk'spleɪn ði ə'veɪləbəl æk'tɪvətiz/",
          es: 'Permítame explicarle las actividades disponibles.',
          fr: '/lɛse mwa vu ɛksplike lez aktivite dispɔnibl/',
          it: "/mi per'metta di spje'garle le at:ivi'ta disponi'bili/",
        },
      },
      {
        id: 10,
        translations: {
          en: 'At Jaguar Park, we offer activities such as the zip line, ATVs, bicycles, and kayaking.',
          es: 'En el parque Jaguar contamos con actividades como la tirolesa, cuatrimotos, bicicletas y kayak.',
          fr: 'Au Parc Jaguar, nous proposons des activités comme la tyrolienne, les quads, le vélo et le kayak.',
          it: 'Al Parco Jaguar offriamo attività come la teleferica, i quad, le biciclette e il kayak.',
        },
        phonetics: {
          en: "/ət 'dʒægwɑ: 'pɑ:k wi 'ɒfə æk'tɪvətiz sʌtʃ æz ðə zɪp laɪn 'eɪti:'vi:z 'baɪsɪklz ənd 'kaɪækɪŋ/",
          es: 'En el parque Jaguar contamos con actividades como la tirolesa, cuatrimotos, bicicletas y kayak.',
          fr: '/o paʁk ʒagwaʁ nu pʁopozɔ̃ dez aktivite kɔm la tiʁɔljɛn le kwad lə velo e lə kajak/',
          it: "/al 'parkɔ ʒa'gwar of'friamo attivi'ta 'kome la tele'ferika i 'kwad le bitʃi'lette e il ka'jak/",
        },
      },
      {
        id: 11,
        translations: {
          en: 'The package costs 250 Mexican pesos, or 13 dollars.',
          es: 'El paquete tiene un costo de 250 pesos mexicanos / 13 dólares.',
          fr: 'Le forfait coûte 250 pesos mexicains, soit 13 dollars.',
          it: 'Il pacchetto costa 250 pesos messicani, ovvero 13 dollari.',
        },
        phonetics: {
          en: "/ðə 'pækɪdʒ kɒsts tu: 'hʌndrəd 'fɪfti 'meksɪkən 'peɪsəʊz ɔ: θɜ:'ti:n 'dɒləz/",
          es: 'El paquete tiene un costo de 250 pesos mexicanos / 13 dólares.',
          fr: '/lə fɔʁfɛ kut dø sɑ̃ sɛ̃kɑ̃t peso mɛksikɛ̃ swa tʁɛz dɔlaʁ/',
          it: "/il pak'ketto 'kɔsta du'tʃento 'tʃinkwan'ta 'pezos messi'kani ov'vero 'tredze 'dɔllari/",
        },
      },
      {
        id: 12,
        translations: {
          en: 'We also have a café called Chaka.',
          es: 'También contamos con una cafetería llamada Chaka.',
          fr: 'Nous avons aussi un café appelé Chaka.',
          it: 'Abbiamo anche un bar chiamato Chaka.',
        },
        phonetics: {
          en: "/wi 'ɔ:lsəʊ hæv ə kæ'feɪ kɔ:ld 'tʃɑ:kə/",
          es: 'También contamos con una cafetería llamada Chaka.',
          fr: '/nuz‿avɔ̃ osi ɛ̃ kafe apəle ʃaka/',
          it: "/ab'biamo 'anke un bar kia'mato 'ʃaka/",
        },
      },
      {
        id: 13,
        translations: {
          en: "Please sign here before starting. It's a liability waiver; you can read it without any problem.",
          es: 'Por favor, firme aquí antes de comenzar, es una carta responsable, puede leerla sin problema.',
          fr: "Signez ici avant de commencer. C'est une décharge de responsabilité, vous pouvez la lire sans problème.",
          it: 'Firmi qui prima di iniziare. È una liberatoria di responsabilità, può leggerla senza problemi.',
        },
        phonetics: {
          en: "/pli:z saɪn hɪə bɪ'fɔ: 'stɑ:tɪŋ ɪts ə laɪə'bɪləti 'weɪvə ju kən ri:d ɪt wɪ'ðaʊt 'ɛni 'prɒbləm/",
          es: 'Por favor, firme aquí antes de comenzar, es una carta responsable, puede leerla sin problema.',
          fr: '/siɲe isi avɑ̃ də kɔmɑ̃se sɛt yn deʃaʁʒ də rɛspɔ̃sabilite vu puve la liʁ sɑ̃ pʁɔblɛm/',
          it: "/'firmi kwi 'prima di init'tsjare ɛ una liberato'rja di responsabili'ta pwɔ 'ledʒerla 'sentsa pro'blɛmi/",
        },
      },
      {
        id: 14,
        translations: {
          en: 'There are two restrooms; one is on the right and the other on the left.',
          es: 'Hay dos baños, están del lado derecho y del lado izquierdo.',
          fr: "Il y a deux toilettes, l'une à droite et l'autre à gauche.",
          it: 'Ci sono due bagni, uno a destra e uno a sinistra.',
        },
        phonetics: {
          en: "/ðeər ɑ: tu: 'restru:mz wʌn ɪz ɒn ðə raɪt ənd ði 'ʌðə ɒn ðə left/",
          es: 'Hay dos baños, están del lado derecho y del lado izquierdo.',
          fr: '/il ja dø twalɛt lyn a dʁwat e lotʁ a goʃ/',
          it: "/tʃi 'sono 'dwe 'baɲɲi 'uno a 'dɛstra e 'uno a si'nistra/",
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
