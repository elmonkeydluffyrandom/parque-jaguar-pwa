import type { LucideIcon } from 'lucide-react'
import { ConciergeBell, Footprints, Mountain, Utensils } from 'lucide-react'

export type Phrase = {
  id: number
  translations: {
    es: string
    en: string
    fr: string
    it: string
  }
  phonetics: {
    es: string
    en: string
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
    name: 'Recepción',
    icon: ConciergeBell,
    phrases: [
      {
        id: 1,
        translations: {
          es: '¡Hola, bienvenido al Parque Ecoturístico Jaguar!',
          en: 'Hello, welcome to Jaguar Ecotourism Park!',
          fr: 'Bonjour, bienvenue au Parc Écotouristique Jaguar !',
          it: 'Ciao, benvenuto al Parco Ecoturistico Jaguar!',
        },
        phonetics: {
          es: '¡Hola, bienvenido al Parque Ecoturístico Jaguar!',
          en: "/hə'loʊ 'wɛlkəm tu 'dʒægwar 'i:koʊ tʊrɪzəm pɑrk/",
          fr: '/bɔ̃ʒuʁ bjɛ̃vəny o paʁk ekotuʁistik ʒagwaʁ/',
          it: "/'tʃa.o ben've:nuto al 'parkɔ ekotu'ristiko ʒa'gwar/",
        },
      },
      {
        id: 2,
        translations: {
          es: '¿Es su primera vez aquí?',
          en: 'Is this your first time here?',
          fr: 'Est-ce votre première fois ici ?',
          it: 'È la sua prima volta qui?',
        },
        phonetics: {
          es: '¿Es su primera vez aquí?',
          en: '/ɪz ðɪs jʊər fɜrst taɪm hɪr/',
          fr: '/ɛs vɔtʁ pʁəmjɛʁ fwa isi?/',
          it: "/'ɛ la 'swa 'prima 'vɔlta kwi/",
        },
      },
      {
        id: 9,
        translations: {
          es: 'Permítame explicarle las actividades disponibles.',
          en: 'Let me explain the available activities.',
          fr: 'Laissez-moi vous expliquer les activités disponibles.',
          it: 'Mi permetta di spiegarle le attività disponibili.',
        },
        phonetics: {
          es: 'Permítame explicarle las actividades disponibles.',
          en: "/lɛt mi ɪk'spleɪn ði ə'veɪləbəl æk'tɪvətiz/",
          fr: '/lɛse mwa vu ɛksplike lez aktivite dispɔnibl/',
          it: "/mi per'metta di spje'garle le at:ivi'ta disponi'bili/",
        },
      },
      {
        id: 10,
        translations: {
          es: 'En el parque Jaguar contamos con actividades como la tirolesa, cuatrimotos, bicicletas y kayak.',
          en: 'At Jaguar Park, we offer activities such as the zip line, ATVs, bicycles, and kayaking.',
          fr: 'Au Parc Jaguar, nous proposons des activités comme la tyrolienne, les quads, le vélo et le kayak.',
          it: 'Al Parco Jaguar offriamo attività come la teleferica, i quad, le biciclette e il kayak.',
        },
        phonetics: {
          es: 'En el parque Jaguar contamos con actividades como la tirolesa, cuatrimotos, bicicletas y kayak.',
          en: "/ət 'dʒægwɑ: 'pɑ:k wi 'ɒfə æk'tɪvətiz sʌtʃ æz ðə zɪp laɪn 'eɪti:'vi:z 'baɪsɪklz ənd 'kaɪækɪŋ/",
          fr: '/o paʁk ʒagwaʁ nu pʁopozɔ̃ dez aktivite kɔm la tiʁɔljɛn le kwad lə velo e lə kajak/',
          it: "/al 'parkɔ ʒa'gwar of'friamo attivi'ta 'kome la tele'ferika i 'kwad le bitʃi'lette e il ka'jak/",
        },
      },
      {
        id: 11,
        translations: {
          es: 'El paquete tiene un costo de 250 pesos mexicanos / 13 dólares.',
          en: 'The package costs 250 Mexican pesos, or 13 dollars.',
          fr: 'Le forfait coûte 250 pesos mexicains, soit 13 dollars.',
          it: 'Il pacchetto costa 250 pesos messicani, ovvero 13 dollari.',
        },
        phonetics: {
          es: 'El paquete tiene un costo de 250 pesos mexicanos / 13 dólares.',
          en: "/ðə 'pækɪdʒ kɒsts tu: 'hʌndrəd 'fɪfti 'meksɪkən 'peɪsəʊz ɔ: θɜ:'ti:n 'dɒləz/",
          fr: '/lə fɔʁfɛ kut dø sɑ̃ sɛ̃kɑ̃t peso mɛksikɛ̃ swa tʁɛz dɔlaʁ/',
          it: "/il pak'ketto 'kɔsta du'tʃento 'tʃinkwan'ta 'pezos messi'kani ov'vero 'tredze 'dɔllari/",
        },
      },
      {
        id: 12,
        translations: {
          es: 'También contamos con una cafetería llamada Chaka.',
          en: 'We also have a café called Chaka.',
          fr: 'Nous avons aussi un café appelé Chaka.',
          it: 'Abbiamo anche un bar chiamato Chaka.',
        },
        phonetics: {
          es: 'También contamos con una cafetería llamada Chaka.',
          en: "/wi 'ɔ:lsəʊ hæv ə kæ'feɪ kɔ:ld 'tʃɑ:kə/",
          fr: '/nuz‿avɔ̃ osi ɛ̃ kafe apəle ʃaka/',
          it: "/ab'biamo 'anke un bar kia'mato 'ʃaka/",
        },
      },
      {
        id: 13,
        translations: {
          es: 'Por favor, firme aquí antes de comenzar, es una carta responsable, puede leerla sin problema.',
          en: "Please sign here before starting. It's a liability waiver; you can read it without any problem.",
          fr: "Signez ici avant de commencer. C'est une décharge de responsabilité, vous pouvez la lire sans problème.",
          it: 'Firmi qui prima di iniziare. È una liberatoria di responsabilità, può leggerla senza problemi.',
        },
        phonetics: {
          es: 'Por favor, firme aquí antes de comenzar, es una carta responsable, puede leerla sin problema.',
          en: "/pli:z saɪn hɪə bɪ'fɔ: 'stɑ:tɪŋ ɪts ə laɪə'bɪləti 'weɪvə ju kən ri:d ɪt wɪ'ðaʊt 'ɛni 'prɒbləm/",
          fr: '/siɲe isi avɑ̃ də kɔmɑ̃se sɛt yn deʃaʁʒ də rɛspɔ̃sabilite vu puve la liʁ sɑ̃ pʁɔblɛm/',
          it: "/'firmi kwi 'prima di init'tsjare ɛ una liberato'rja di responsabili'ta pwɔ 'ledʒerla 'sentsa pro'blɛmi/",
        },
      },
      {
        id: 14,
        translations: {
          es: 'Hay dos baños, están del lado derecho y del lado izquierdo.',
          en: 'There are two restrooms; one is on the right and the other on the left.',
          fr: "Il y a deux toilettes, l'une à droite et l'autre à gauche.",
          it: 'Ci sono due bagni, uno a destra e uno a sinistra.',
        },
        phonetics: {
          es: 'Hay dos baños, están del lado derecho y del lado izquierdo.',
          en: "/ðeər ɑ: tu: 'restru:mz wʌn ɪz ɒn ðə raɪt ənd ði 'ʌðə ɒn ðə left/",
          fr: '/il ja dø twalɛt lyn a dʁwat e lotʁ a goʃ/',
          it: "/tʃi 'sono 'dwe 'baɲɲi 'uno a 'dɛstra e 'uno a si'nistra/",
        },
      },
      {
        id: 15,
        translations: {
          es: 'Puede dejar sus pertenencias en la recepción.',
          en: 'You can leave your belongings at the reception.',
          fr: 'Vous pouvez laisser vos affaires à la réception.',
          it: 'Può lasciare i suoi oggetti alla reception.',
        },
        phonetics: {
          es: 'Puede dejar sus pertenencias en la recepción.',
          en: "/ju kən liv juər bə'lɔŋɪŋz æt ðə rɪ'sɛpʃən/",
          fr: '/vu puve lese voz afɛʁ a la ʁesɛpsjɔ̃/',
          it: "/pwɔ la'ʃare i 'swɔi o'dʒɛtti alla re'tʃɛpsjon/",
        },
      },
      {
        id: 16,
        translations: {
          es: 'Gracias por visitarnos, esperamos que disfrute su experiencia.',
          en: 'Thank you for visiting us, we hope you enjoy your experience.',
          fr: 'Merci de votre visite, nous espérons que vous apprécierez votre expérience.',
          it: 'Grazie per la visita, speriamo che la sua esperienza sia piacevole.',
        },
        phonetics: {
          es: 'Gracias por visitarnos, esperamos que disfrute su experiencia.',
          en: "/θæŋk ju fɔr 'vɪzɪtɪŋ ʌs wi hoʊp ju ɛn'dʒɔɪ juər ɪk'spɪriəns/",
          fr: '/mɛʁsi də vɔtʁ vizit nu ɛspɛʁɔ̃ kə vuz‿apʁesjəʁe vɔtʁ ɛkspɛʁjɑ̃s/',
          it: "/'grattsje per la 'vizita sper'jamo ke la 'swa esperi'entsa 'sija pja'tʃevole/",
        },
      },
      {
        id: 17,
        translations: {
          es: 'Si necesita ayuda, con gusto le atendemos.',
          en: "If you need help, we'll be happy to assist you.",
          fr: "Si vous avez besoin d'aide, nous serons heureux de vous aider.",
          it: "Se ha bisogno di aiuto, saremo felici di aiutarla.",
        },
        phonetics: {
          es: 'Si necesita ayuda, con gusto le atendemos.',
          en: "/ɪf ju nid hɛlp wil bi 'hæpi tu ə'sɪst ju/",
          fr: '/si vuz ave bəzwɛ̃ dɛd nu səʁɔ̃ zœʁø də vu zede/',
          it: "/se a bi'zoɲɲo di a'juto sa'remo fe'litʃi di ajut'tarla/",
        },
      },
    ],
  },
  {
    id: 'zip-lining',
    name: 'Tirolesa',
    icon: Mountain,
    phrases: [
      {
        id: 3,
        translations: {
          es: 'Por favor, póngase el casco.',
          en: 'Please put on your helmet.',
          fr: 'Veuillez mettre votre casque.',
          it: 'Per favore, indossa il casco.',
        },
        phonetics: {
          es: '/poɾ faˈβoɾ, ˈponɡase el ˈkasko./',
          en: '/pliːz pʊt ɒn jɔːr ˈhɛlmɪt./',
          fr: '/vœje mɛtʁ vɔtʁ kask./',
          it: '/per faˈvoːre, inˈdɔssa il ˈkasko./',
        },
      },
      {
        id: 4,
        translations: {
          es: '¿Estás listo para la aventura?',
          en: 'Are you ready for the adventure?',
          fr: 'Êtes-vous prêt pour l’aventure ?',
          it: 'Sei pronto per l’avventura?',
        },
        phonetics: {
          es: '/esˈtas ˈlisto ˈpaɾa la aβenˈtuɾa?/',
          en: '/ɑːr ju ˈrɛdi fɔːr ði ədˈvɛnʧər?/',
          fr: '/ɛt vu pʁɛ puʁ lavɑ̃tyʁ?/',
          it: '/sɛi̯ ˈpronto per lavvenˈtuːra?/',
        },
      },
    ],
  },
  {
    id: 'restaurant',
    name: 'Restaurante',
    icon: Utensils,
    phrases: [
      {
        id: 5,
        translations: {
          es: 'Mesa para dos, por favor.',
          en: 'Table for two, please.',
          fr: 'Une table pour deux, s’il vous plaît.',
          it: 'Un tavolo per due, per favore.',
        },
        phonetics: {
          es: '/ˈmesa ˈpaɾa ðos, poɾ faˈβoɾ./',
          en: '/ˈteɪbəl fɔːr tuː, pliːz./',
          fr: '/yn tabl puʁ dø, sil vu plɛ./',
          it: '/un ˈtaːvolo per ˈduːe, per faˈvoːre./',
        },
      },
      {
        id: 6,
        translations: {
          es: '¿Cuál es la especialidad de la casa?',
          en: 'What is the specialty of the house?',
          fr: 'Quelle est la spécialité de la maison ?',
          it: 'Qual è la specialità della casa?',
        },
        phonetics: {
          es: '/ˈkwal es la espeθjaliˈðað ðe la ˈkasa?/',
          en: '/wʌt ɪz ðə ˈspɛʃəlti ʌv ðə haʊs?/',
          fr: '/kɛl ɛ la spesjalite də la mɛzɔ̃?/',
          it: '/ˈkwal ɛ la spetʃaliˈta ˈdella ˈkaːza?/',
        },
      },
    ],
  },
    {
    id: 'trails',
    name: 'Senderos',
    icon: Footprints,
    phrases: [
      {
        id: 7,
        translations: {
          es: 'Siga el sendero verde.',
          en: 'Follow the green trail.',
          fr: 'Suivez le sentier vert.',
          it: 'Segui il sentiero verde.',
        },
        phonetics: {
          es: '/ˈsiɣa el senˈdeɾo ˈβeɾðe./',
          en: '/ˈfɒloʊ ðə ɡriːn treɪl./',
          fr: '/sɥive lə sɑ̃tje vɛʁ./',
          it: '/ˈseɡwi il senˈtjɛːro ˈverde./',
        },
      },
      {
        id: 8,
        translations: {
          es: 'Tenga cuidado, el camino es resbaladizo.',
          en: 'Be careful, the path is slippery.',
          fr: 'Attention, le chemin est glissant.',
          it: 'Fai attenzione, il sentiero è scivoloso.',
        },
        phonetics: {
          es: '/ˈtenɡa kwiˈðaðo, el kaˈmino es resβalaˈðiso./',
          en: '/bi ˈkɛərfʊl, ðə pɑːθ ɪz ˈslɪpəri./',
          fr: '/atɑ̃sjɔ̃, lə ʃəmɛ̃ ɛ ɡlisɑ̃./',
          it: '/fai attenˈtsjoːne, il senˈtjɛːro ɛ ʃivoˈloːzo./',
        },
      },
    ],
  },
]
