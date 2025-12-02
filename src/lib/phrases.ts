
import type { LucideIcon } from 'lucide-react'
import { Bike, Car, ConciergeBell, Mountain, Sailboat, Coffee, Theater, Bath } from 'lucide-react'

export type TouristReply = {
  id: number
  translations: {
    es: string
    en: string
    fr: string
    it: string
  }
}

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
  touristReplies?: TouristReply[]
}

export type PhraseSubCategory = {
  id: string
  name: string
  phrases: Phrase[]
}

export type PhraseCategory = {
  id: string
  name: string
  icon: LucideIcon
  phrases?: Phrase[]
  subCategories?: PhraseSubCategory[]
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
          es: '¡Hola, bienvenido al Parque Jaguar!',
          en: 'Hello, welcome to Jaguar Park!',
          fr: 'Bonjour, bienvenue au Parc Jaguar !',
          it: 'Ciao, benvenuto al Parco Jaguar!',
        },
        phonetics: {
          es: '¡Hola, bienvenido al Parque Jaguar!',
          en: "/hə'loʊ 'wɛlkəm tu 'dʒægwar pɑrk/",
          fr: '/bɔ̃ʒuʁ bjɛ̃vəny o paʁk ʒagwaʁ/',
          it: "/'tʃa.o ben've:nuto al 'parkɔ ʒa'gwar/",
        },
        touristReplies: [
          {
            id: 101,
            translations: {
              es: '¡Hola! Gracias.',
              en: 'Hello! Thank you.',
              fr: 'Bonjour ! Merci.',
              it: 'Ciao! Grazie.',
            },
          },
          {
            id: 102,
            translations: {
              es: '¡Hola! ¿Hablas inglés?',
              en: 'Hi! Do you speak English?',
              fr: 'Salut ! Parlez-vous anglais ?',
              it: 'Salve! Parla inglese?',
            },
          },
          {
            id: 103,
            translations: {
              es: 'Gracias, estamos emocionados de estar aquí.',
              en: 'Thank you, we are excited to be here.',
              fr: 'Merci, nous sommes ravis d\'être ici.',
              it: 'Grazie, siamo entusiasti di essere qui.',
            },
          },
        ],
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
        touristReplies: [
            {
              id: 201,
              translations: {
                es: 'Sí, es nuestra primera vez.',
                en: "Yes, it's our first time.",
                fr: 'Oui, c\'est notre première fois.',
                it: 'Sì, è la nostra prima volta.',
              },
            },
            {
              id: 202,
              translations: {
                es: 'No, ya hemos venido antes.',
                en: 'No, we have been here before.',
                fr: 'Non, nous sommes déjà venus.',
                it: 'No, siamo già stati qui.',
              },
            },
            {
                id: 203,
                translations: {
                  es: 'Sí, ¿qué nos recomienda hacer?',
                  en: 'Yes, what do you recommend we do?',
                  fr: 'Oui, que nous recommandez-vous de faire ?',
                  it: 'Sì, cosa ci consiglia di fare?',
                },
            },
          ],
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
        touristReplies: [
          {
            id: 901,
            translations: {
              es: 'Sí, por favor.',
              en: 'Yes, please.',
              fr: 'Oui, s\'il vous plaît.',
              it: 'Sì, per favore.',
            },
          },
          {
            id: 902,
            translations: {
              es: '¿Qué actividades tienen?',
              en: 'What activities do you have?',
              fr: 'Quelles activités proposez-vous ?',
              it: 'Quali attività avete?',
            },
          },
          {
            id: 903,
            translations: {
              es: 'Gracias, ya tenemos un plan.',
              en: 'Thanks, we already have a plan.',
              fr: 'Merci, nous avons déjà un plan.',
              it: 'Grazie, abbiamo già un piano.',
            },
          },
        ],
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
          it: "/al 'parkɔ ʒa'gwar of'friamo attivi'ta 'kome la tele'ferika i 'kwad le bitʃi'klette e il ka'jak/",
        },
        touristReplies: [
          {
            id: 1001,
            translations: {
              es: 'Suena divertido. ¿Cuánto cuesta?',
              en: 'Sounds fun. How much does it cost?',
              fr: 'Ça a l\'air amusant. Combien ça coûte ?',
              it: 'Sembra divertente. Quanto costa?',
            },
          },
          {
            id: 1002,
            translations: {
              es: 'Me interesa la tirolesa.',
              en: 'I\'m interested in the zip line.',
              fr: 'Je suis intéressé par la tyrolienne.',
              it: 'Sono interessato alla teleferica.',
            },
          },
          {
            id: 1003,
            translations: {
              es: '¿Hay algo para niños?',
              en: 'Is there anything for children?',
              fr: 'Y a-t-il quelque chose pour les enfants ?',
              it: 'C\'è qualcosa per i bambini?',
            },
          },
        ],
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
        touristReplies: [
          {
            id: 1101,
            translations: {
              es: 'Está bien, lo tomaré.',
              en: 'Okay, I\'ll take it.',
              fr: 'D\'accord, je le prends.',
              it: 'Va bene, lo prendo.',
            },
          },
          {
            id: 1102,
            translations: {
              es: '¿Se puede pagar con tarjeta?',
              en: 'Can I pay by card?',
              fr: 'Puis-je payer par carte ?',
              it: 'Posso pagare con la carta?',
            },
          },
          {
            id: 1103,
            translations: {
              es: 'Es un poco caro para mí.',
              en: 'That\'s a bit expensive for me.',
              fr: 'C\'est un peu cher pour moi.',
              it: 'È un po\' caro per me.',
            },
          },
        ],
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
        touristReplies: [
          {
            id: 1201,
            translations: {
              es: 'Genial, ¿dónde está?',
              en: 'Great, where is it?',
              fr: 'Super, où est-ce ?',
              it: 'Ottimo, dov\'è?',
            },
          },
          {
            id: 1202,
            translations: {
              es: '¿Qué tipo de comida sirven?',
              en: 'What kind of food do they serve?',
              fr: 'Quel genre de nourriture servent-ils ?',
              it: 'Che tipo di cibo servono?',
            },
          },
          {
            id: 1203,
            translations: {
              es: 'Perfecto, necesito un café.',
              en: 'Perfect, I need a coffee.',
              fr: 'Parfait, j\'ai besoin d\'un café.',
              it: 'Perfetto, ho bisogno di un caffè.',
            },
          },
        ],
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
        touristReplies: [
          {
            id: 1301,
            translations: {
              es: 'Claro, ¿dónde firmo?',
              en: 'Sure, where do I sign?',
              fr: 'Bien sûr, où dois-je signer ?',
              it: 'Certo, dove firmo?',
            },
          },
          {
            id: 1302,
            translations: {
              es: '¿Qué es esto?',
              en: 'What is this for?',
              fr: 'À quoi ça sert ?',
              it: 'A cosa serve?',
            },
          },
          {
            id: 1303,
            translations: {
              es: 'Prefiero leerlo primero.',
              en: 'I\'d rather read it first.',
              fr: 'Je préfère le lire d\'abord.',
              it: 'Preferisco leggerlo prima.',
            },
          },
        ],
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
        touristReplies: [
          {
            id: 1401,
            translations: {
              es: 'Gracias, voy al de la derecha.',
              en: 'Thanks, I\'ll use the one on the right.',
              fr: 'Merci, je vais à celui de droite.',
              it: 'Grazie, uso quello a destra.',
            },
          },
          {
            id: 1402,
            translations: {
              es: 'Entendido, gracias.',
              en: 'Got it, thank you.',
              fr: 'Compris, merci.',
              it: 'Capito, grazie.',
            },
          },
          {
            id: 1403,
            translations: {
              es: '¿Hay alguno más cerca?',
              en: 'Is there one closer?',
              fr: 'Y en a-t-il un plus proche ?',
              it: 'Ce n\'è uno più vicino?',
            },
          },
        ],
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
        touristReplies: [
          {
            id: 1501,
            translations: {
              es: 'Perfecto, gracias.',
              en: 'Perfect, thank you.',
              fr: 'Parfait, merci.',
              it: 'Perfetto, grazie.',
            },
          },
          {
            id: 1502,
            translations: {
              es: '¿Es seguro dejarlas aquí?',
              en: 'Is it safe to leave them here?',
              fr: 'Est-ce sûr de les laisser ici ?',
              it: 'È sicuro lasciarli qui?',
            },
          },
          {
            id: 1503,
            translations: {
              es: 'Prefiero llevar mis cosas conmigo.',
              en: 'I prefer to take my things with me.',
              fr: 'Je préfère prendre mes affaires avec moi.',
              it: 'Preferisco portare le mie cose con me.',
            },
          },
        ],
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
        touristReplies: [
          {
            id: 1601,
            translations: {
              es: 'Gracias, ¡estamos muy emocionados!',
              en: 'Thank you, we are very excited!',
              fr: 'Merci, nous sommes très excités !',
              it: 'Grazie, siamo molto emozionati!',
            },
          },
          {
            id: 1602,
            translations: {
              es: '¡Gracias! Lo haremos.',
              en: 'Thank you! We will.',
              fr: 'Merci ! Nous le ferons.',
              it: 'Grazie! Lo faremo.',
            },
          },
          {
            id: 1603,
            translations: {
              es: 'Gracias por su amabilidad.',
              en: 'Thank you for your kindness.',
              fr: 'Merci pour votre gentillesse.',
              it: 'Grazie per la sua gentilezza.',
            },
          },
        ],
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
        touristReplies: [
          {
            id: 1701,
            translations: {
              es: 'Muy amable, gracias.',
              en: 'That\'s very kind, thank you.',
              fr: 'C\'est très gentil, merci.',
              it: 'Molto gentile, grazie.',
            },
          },
          {
            id: 1702,
            translations: {
              es: 'Lo tendré en cuenta.',
              en: 'I\'ll keep that in mind.',
              fr: 'Je le garderai à l\'esprit.',
              it: 'Lo terrò a mente.',
            },
          },
          {
            id: 1703,
            translations: {
              es: 'Excelente servicio.',
              en: 'Excellent service.',
              fr: 'Excellent service.',
              it: 'Servizio eccellente.',
            },
          },
        ],
      },
      {
        id: 33,
        translations: {
          es: 'No olvide seguirnos en nuestras redes sociales.',
          en: 'Don’t forget to follow us on our social media.',
          fr: 'N’oubliez pas de nous suivre sur nos réseaux sociaux.',
          it: 'Non dimentichi di seguirci sui nostri social media.',
        },
        phonetics: {
          es: 'No olvide seguirnos en nuestras redes sociales.',
          en: "/doʊnt fər'gɛt tə 'fɒloʊ əs ɒn 'aʊə 'soʊʃəl 'miːdiə/",
          fr: "/nublje pa də nu sɥivʁ syʁ no ʁezo sosjo/",
          it: "/non dimen'tiki di se'gwirtʃi suj 'nɔstri 'sɔtʃal 'midja/",
        },
        touristReplies: [
          {
            id: 3301,
            translations: {
              es: 'Claro, ¿cuáles son?',
              en: 'Sure, what are they?',
              fr: 'Bien sûr, quels sont-ils ?',
              it: 'Certo, quali sono?',
            },
          },
          {
            id: 3302,
            translations: {
              es: 'Lo haré, gracias por recordar.',
              en: 'I will, thanks for the reminder.',
              fr: 'Je le ferai, merci du rappel.',
              it: 'Lo farò, grazie per avermelo ricordato.',
            },
          },
          {
            id: 3303,
            translations: {
              es: 'No uso mucho las redes sociales.',
              en: 'I don\'t use social media much.',
              fr: 'Je n\'utilise pas beaucoup les réseaux sociaux.',
              it: 'Non uso molto i social media.',
            },
          },
        ],
      },
      {
        id: 34,
        translations: {
          es: 'Puede encontrarnos en Facebook e Instagram como Tecnm – Escárcega.',
          en: 'You can find us on Facebook and Instagram as Tecnm – Escárcega.',
          fr: 'Vous pouvez nous trouver sur Facebook et Instagram sous le nom de Tecnm – Escárcega.',
          it: 'Ci può trovare su Facebook e Instagram come Tecnm – Escárcega.',
        },
        phonetics: {
          es: 'Puede encontrarnos en Facebook e Instagram como Tecnm – Escárcega.',
          en: "/ju kæn faɪnd əs ɒn 'feɪsbʊk ənd 'ɪnstəgræm æz 'tɛknəm ɛs'kɑrsɛgə/",
          fr: "/vu puve nu tʁuve syʁ fejsbuk e ɛ̃stagʁam su lə nɔ̃ də tɛknəm ɛskaʁsega/",
          it: "/tʃi pwɔ tro'vare su 'fejsbuk e 'instagram 'kome 'tɛknəm eskar'tʃega/",
        },
        touristReplies: [
          {
            id: 3401,
            translations: {
              es: 'Genial, los seguiré.',
              en: 'Great, I\'ll follow you.',
              fr: 'Super, je vous suivrai.',
              it: 'Ottimo, vi seguirò.',
            },
          },
          {
            id: 3402,
            translations: {
              es: 'Gracias por la información.',
              en: 'Thanks for the info.',
              fr: 'Merci pour l\'info.',
              it: 'Grazie per l\'informazione.',
            },
          },
          {
            id: 3403,
            translations: {
              es: '¿Tienen alguna promoción?',
              en: 'Do you have any promotions?',
              fr: 'Avez-vous des promotions ?',
              it: 'Avete qualche promozione?',
            },
          },
        ],
      },
      {
        id: 36,
        translations: {
          es: 'Aceptamos pagos en efectivo o con tarjeta.',
          en: 'We accept cash or card payments.',
          fr: 'Nous acceptons les paiements en espèces ou par carte.',
          it: 'Accettiamo pagamenti in contanti o con carta.',
        },
        phonetics: {
          es: 'Aceptamos pagos en efectivo o con tarjeta.',
          en: "/wi ək'sɛpt kæʃ ɔː kɑːd 'peɪmənts/",
          fr: "/nu zakseptɔ̃ le pɛmɑ̃ ɑ̃n‿ɛspɛs u paʁ kaʁt/",
          it: "/attʃet'tjamo paga'menti in kon'tanti o kon 'karta/",
        },
        touristReplies: [
          {
            id: 3601,
            translations: {
              es: 'Pagaré con tarjeta.',
              en: 'I\'ll pay by card.',
              fr: 'Je paierai par carte.',
              it: 'Pagherò con la carta.',
            },
          },
          {
            id: 3602,
            translations: {
              es: 'Pagaré en efectivo.',
              en: 'I\'ll pay with cash.',
              fr: 'Je paierai en espèces.',
              it: 'Pagherò in contanti.',
            },
          },
          {
            id: 3603,
            translations: {
              es: '¿Aceptan dólares?',
              en: 'Do you accept dollars?',
              fr: 'Acceptez-vous les dollars ?',
              it: 'Accettate dollari?',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'zip-lining',
    name: 'Tirolesa',
    icon: Mountain,
    subCategories: [
      {
        id: 'equipment-area',
        name: 'Área de Equipamiento',
        phrases: [
          {
            id: 18,
            translations: {
              es: 'Voy a colocarle el arnés, ¿está bien?',
              en: "I'm going to put your harness on, is that okay?",
              fr: 'Je vais vous mettre le harnais, ça vous va ?',
              it: "Le metto l'imbracatura, va bene?",
            },
            phonetics: {
              es: 'Voy a colocarle el arnés, ¿está bien?',
              en: "/aɪm 'gəʊɪŋ tə pʊt jɔː 'hɑːnɪs ɒn ɪz ðæt əʊ'keɪ/",
              fr: '/ʒə ve vu mɛtʁ lə aʁnɛ sa vu va/',
              it: "/le 'metto limbraka'tura va 'be:ne/",
            },
            touristReplies: [
              {
                id: 1801,
                translations: {
                  es: 'Sí, está bien.',
                  en: 'Yes, that\'s fine.',
                  fr: 'Oui, ça va.',
                  it: 'Sì, va bene.',
                },
              },
              {
                id: 1802,
                translations: {
                  es: 'Un momento, por favor.',
                  en: 'One moment, please.',
                  fr: 'Un instant, s\'il vous plaît.',
                  it: 'Un momento, per favore.',
                },
              },
              {
                id: 1803,
                translations: {
                  es: '¿Es seguro?',
                  en: 'Is it safe?',
                  fr: 'Est-ce sécuritaire ?',
                  it: 'È sicuro?',
                },
              },
            ],
          },
          {
            id: 19,
            translations: {
              es: 'Permítame ajustar el casco, por favor.',
              en: 'Let me adjust your helmet, please.',
              fr: "Laissez-moi ajuster votre casque, s'il vous plaît.",
              it: 'Mi permetta di sistemarle il casco, per favore.',
            },
            phonetics: {
              es: 'Permítame ajustar el casco, por favor.',
              en: "/lɛt mi ə'dʒʌst jɔː 'hɛlmɪt pliːz/",
              fr: '/lɛse mwa aʒyste vɔtʁ kask sil vu plɛ/',
              it: "/mi per'metta di siste'marle il 'kasko per fa'vore/",
            },
            touristReplies: [
              {
                id: 1901,
                translations: {
                  es: 'Claro, adelante.',
                  en: 'Sure, go ahead.',
                  fr: 'Bien sûr, allez-y.',
                  it: 'Certo, prego.',
                },
              },
              {
                id: 1902,
                translations: {
                  es: '¿Está muy apretado?',
                  en: 'Is it too tight?',
                  fr: 'Est-ce trop serré ?',
                  it: 'È troppo stretto?',
                },
              },
              {
                id: 1903,
                translations: {
                  es: 'Prefiero ajustarlo yo mismo.',
                  en: 'I prefer to adjust it myself.',
                  fr: 'Je préfère l\'ajuster moi-même.',
                  it: 'Preferisco regolarlo da solo.',
                },
              },
            ],
          },
          {
            id: 20,
            translations: {
              es: 'Asegúrese de que las correas estén bien ajustadas.',
              en: 'Make sure the straps are tight.',
              fr: 'Assurez-vous que les sangles soient bien serrées.',
              it: 'Si assicuri che le cinghie siano ben strette.',
            },
            phonetics: {
              es: 'Asegúrese de que las correas estén bien ajustadas.',
              en: "/meɪk ʃʊə ðə stræps ɑː taɪt/",
              fr: '/asyre vu kə le sɑ̃gl swa bjɛ̃ seʁe/',
              it: "/si as'sikuri ke le 'tʃingje 'sjano ben 'strette/",
            },
            touristReplies: [
              {
                id: 2001,
                translations: {
                  es: '¿Así está bien?',
                  en: 'Is this okay?',
                  fr: 'Est-ce que c\'est bon comme ça ?',
                  it: 'Va bene così?',
                },
              },
              {
                id: 2002,
                translations: {
                  es: 'Creo que necesita un ajuste más.',
                  en: 'I think it needs more adjustment.',
                  fr: 'Je pense qu\'il faut l\'ajuster encore.',
                  it: 'Penso che abbia bisogno di un\'altra regolazione.',
                },
              },
              {
                id: 2003,
                translations: {
                  es: 'Sí, se siente seguro.',
                  en: 'Yes, it feels secure.',
                  fr: 'Oui, ça semble sécurisé.',
                  it: 'Sì, mi sento sicuro.',
                },
              },
            ],
          },
          {
            id: 21,
            translations: {
              es: 'No se quite el casco ni el arnés hasta que se lo indiquemos.',
              en: "Don't remove your helmet or harness until we tell you.",
              fr: "Ne retirez pas votre casque ni votre harnais avant qu'on vous le dise.",
              it: "Non tolga il casco né l'imbracatura finché non glielo diciamo.",
            },
            phonetics: {
              es: 'No se quite el casco ni el arnés hasta que se lo indiquemos.',
              en: "/dəʊnt rɪ'muːv jɔː 'hɛlmɪt ɔː 'hɑːnɪs ʌn'tɪl wi tɛl ju/",
              fr: '/nə ʁətiʁe pa vɔtʁ kask ni vɔtʁ aʁnɛ avɑ̃ kɔ̃ vu lə diz/',
              it: "/non 'tɔlga il 'kasko ne limbraka'tura fin'ke non 'ʎelo di'tʃamo/",
            },
            touristReplies: [
              {
                id: 2101,
                translations: {
                  es: 'Entendido.',
                  en: 'Understood.',
                  fr: 'Compris.',
                  it: 'Capito.',
                },
              },
              {
                id: 2102,
                translations: {
                  es: 'De acuerdo, no lo haré.',
                  en: 'Okay, I won\'t.',
                  fr: 'D\'accord, je ne le ferai pas.',
                  it: 'Va bene, non lo farò.',
                },
              },
              {
                id: 2103,
                translations: {
                  es: 'Gracias por la advertencia.',
                  en: 'Thanks for the warning.',
                  fr: 'Merci pour l\'avertissement.',
                  it: 'Grazie per l\'avvertimento.',
                },
              },
            ],
          },
          {
            id: 22,
            translations: {
              es: 'Este equipo es por su seguridad.',
              en: 'This equipment is for your safety.',
              fr: 'Cet équipement est pour votre sécurité.',
              it: "Quest'attrezzatura è per la sua sicurezza.",
            },
            phonetics: {
              es: 'Este equipo es por su seguridad.',
              en: "/ðɪs ɪ'kwɪpmənt ɪz fɔː jɔː 'seɪfti/",
              fr: '/sɛt ekipmɑ̃ ɛ puʁ vɔtʁ sekyʁite/',
              it: "/'kwesta ttrɛt:sa'tu:ra ɛ per la 'swa siku'ret'tsa/",
            },
            touristReplies: [
              {
                id: 2201,
                translations: {
                  es: 'Lo aprecio, gracias.',
                  en: 'I appreciate that, thank you.',
                  fr: 'Je l\'apprécie, merci.',
                  it: 'Lo apprezzo, grazie.',
                },
              },
              {
                id: 2202,
                translations: {
                  es: 'La seguridad es primero.',
                  en: 'Safety first.',
                  fr: 'La sécurité avant tout.',
                  it: 'La sicurezza prima di tutto.',
                },
              },
              {
                id: 2203,
                translations: {
                  es: 'Gracias por cuidarnos.',
                  en: 'Thank you for taking care of us.',
                  fr: 'Merci de prendre soin de nous.',
                  it: 'Grazie per prendervi cura di noi.',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'launch-platform',
        name: 'Plataforma de Lanzamiento',
        phrases: [
          {
            id: 62,
            translations: {
              es: '¿Cómo se siente?',
              en: 'How are you feeling?',
              fr: 'Comment vous sentez-vous ?',
              it: 'Come si sente?',
            },
            phonetics: {
              es: '¿Cómo se siente?',
              en: "/haʊ ɑː juː ˈfiːlɪŋ/",
              fr: "/kɔmɑ̃ vu sɑ̃te vu/",
              it: "/'kome si 'sɛnte/",
            },
            touristReplies: [
              {
                id: 6201,
                translations: {
                  es: '¡Muy emocionado!',
                  en: 'Very excited!',
                  fr: 'Très excité !',
                  it: 'Molto emozionato!',
                },
              },
              {
                id: 6202,
                translations: {
                  es: 'Un poco nervioso.',
                  en: 'A little nervous.',
                  fr: 'Un peu nerveux.',
                  it: 'Un po\' nervoso.',
                },
              },
              {
                id: 6203,
                translations: {
                  es: '¡Listo para la aventura!',
                  en: 'Ready for the adventure!',
                  fr: 'Prêt pour l\'aventure !',
                  it: 'Pronto per l\'avventura!',
                },
              },
            ],
          },
          {
            id: 23,
            translations: {
              es: 'Espere su turno antes de lanzarse.',
              en: 'Please wait for your turn before you go.',
              fr: 'Attendez votre tour avant de partir.',
              it: 'Attenda il suo turno prima di lanciarsi.',
            },
            phonetics: {
              es: 'Espere su turno antes de lanzarse.',
              en: "/pli:z weɪt fə jɔ: tɜ:n bɪ'fɔ: ju gəʊ/",
              fr: '/atɑ̃de votʁ tuʁ avɑ̃ də paʁtiʁ/',
              it: "/at'tenda il 'swo 'turno 'prima di lan'tʃarsi/",
            },
            touristReplies: [
              {
                id: 2301,
                translations: {
                  es: 'Está bien, esperaré.',
                  en: 'Okay, I will wait.',
                  fr: 'D\'accord, j\'attendrai.',
                  it: 'Va bene, aspetterò.',
                },
              },
              {
                id: 2302,
                translations: {
                  es: '¿Cuánto tiempo debo esperar?',
                  en: 'How long do I have to wait?',
                  fr: 'Combien de temps dois-je attendre ?',
                  it: 'Quanto devo aspettare?',
                },
              },
              {
                id: 2303,
                translations: {
                  es: 'No hay problema.',
                  en: 'No problem.',
                  fr: 'Pas de problème.',
                  it: 'Nessun problema.',
                },
              },
            ],
          },
          {
            id: 24,
            translations: {
              es: 'No salte, solo déjese ir cuando se lo indique.',
              en: "Don't jump; just let yourself go when I tell you.",
              fr: 'Ne sautez pas, laissez-vous aller quand je vous le dis.',
              it: 'Non salti, si lasci andare quando glielo dico.',
            },
            phonetics: {
              es: 'No salte, solo déjese ir cuando se lo indique.',
              en: "/dəʊnt dʒʌmp dʒʌst let jɔ:'sɛlf gəʊ wen aɪ tel ju/",
              fr: '/nə sote pa lese vu ale kɑ̃ ʒə vu lə di/',
              it: "/non 'salti si 'laʃʃi an'dare 'kwando 'ʎelo 'diko/",
            },
            touristReplies: [
              {
                id: 2401,
                translations: {
                  es: 'De acuerdo, no saltaré.',
                  en: 'Okay, I won\'t jump.',
                  fr: 'D\'accord, je ne sauterai pas.',
                  it: 'Va bene, non salterò.',
                },
              },
              {
                id: 2402,
                translations: {
                  es: 'Entendido, solo me dejo ir.',
                  en: 'Got it, just let go.',
                  fr: 'Compris, je me laisse juste aller.',
                  it: 'Capito, mi lascio solo andare.',
                },
              },
              {
                id: 2403,
                translations: {
                  es: 'Gracias por la instrucción.',
                  en: 'Thanks for the instruction.',
                  fr: 'Merci pour l\'instruction.',
                  it: 'Grazie per l\'istruzione.',
                },
              },
            ],
          },
          {
            id: 25,
            translations: {
              es: 'Si es su primera vez, no se preocupe, es muy seguro.',
              en: "If it's your first time, don't worry, it's very safe.",
              fr: "Si c'est votre première fois, ne vous inquiétez pas, c'est très sûr.",
              it: 'Se è la sua prima volta, non si preoccupi, è molto sicuro.',
            },
            phonetics: {
              es: 'Si es su primera vez, no se preocupe, es muy seguro.',
              en: "/ɪf ɪts jɔ: fɜ:st taɪm dəʊnt 'wʌri ɪts 'veri seɪf/",
              fr: '/si sɛ vɔtʁ pʁəmjɛʁ fwa nə vuz ɛ̃kjete pa sɛ tʁɛ syʁ/',
              it: "/se ɛ la 'swa 'prima 'vɔlta non si preok'kupi ɛ 'molto si'kuro/",
            },
            touristReplies: [
              {
                id: 2501,
                translations: {
                  es: 'Gracias, eso me tranquiliza.',
                  en: 'Thank you, that\'s reassuring.',
                  fr: 'Merci, c\'est rassurant.',
                  it: 'Grazie, questo mi rassicura.',
                },
              },
              {
                id: 2502,
                translations: {
                  es: 'Sí, es mi primera vez. Estoy nervioso.',
                  en: 'Yes, it\'s my first time. I\'m nervous.',
                  fr: 'Oui, c\'est ma première fois. Je suis nerveux.',
                  it: 'Sì, è la mia prima volta. Sono nervoso.',
                },
              },
              {
                id: 2503,
                translations: {
                  es: 'Confío en ustedes.',
                  en: 'I trust you.',
                  fr: 'Je vous fais confiance.',
                  it: 'Mi fido di voi.',
                },
              },
            ],
          },
          {
            id: 26,
            translations: {
              es: 'Mantenga las piernas juntas durante el vuelo.',
              en: 'Keep your legs together during the ride.',
              fr: 'Gardez les jambes serrées pendant le vol.',
              it: 'Tenga le gambe unite durante il volo.',
            },
            phonetics: {
              es: 'Mantenga las piernas juntas durante el vuelo.',
              en: "/ki:p jɔ: legz tə'geðə 'djʊərɪŋ ðə raɪd/",
              fr: '/gaʁde le ʒɑ̃b seʁe pɑ̃dɑ̃ lə vɔl/',
              it: "/'tenga le 'gambe u'nite du'rante il 'volo/",
            },
            touristReplies: [
              {
                id: 2601,
                translations: {
                  es: 'Entendido.',
                  en: 'Got it.',
                  fr: 'Compris.',
                  it: 'Ricevuto.',
                },
              },
              {
                id: 2602,
                translations: {
                  es: '¿Hay alguna otra posición que deba saber?',
                  en: 'Is there any other position I should know?',
                  fr: 'Y a-t-il une autre position que je devrais connaître ?',
                  it: 'C\'è qualche altra posizione che dovrei sapere?',
                },
              },
              {
                id: 2603,
                translations: {
                  es: 'Piernas juntas, entendido.',
                  en: 'Legs together, got it.',
                  fr: 'Jambes serrées, compris.',
                  it: 'Gambe unite, capito.',
                },
              },
            ],
          },
          {
            id: 27,
            translations: {
              es: '¡Buen vuelo y disfrute la vista!',
              en: 'Have a good flight and enjoy the view!',
              fr: 'Bon vol et profitez de la vue !',
              it: 'Buon volo e si goda la vista!',
            },
            phonetics: {
              es: '¡Buen vuelo y disfrute la vista!',
              en: "/hæv ə gʊd flaɪt ənd ɪn'dʒɔɪ ðə vju:/",
              fr: '/bɔ̃ vɔl e pʁɔfite də la vy/',
              it: "/'bwɔn 'volo e si 'gɔda la 'vista/",
            },
            touristReplies: [
              {
                id: 2701,
                translations: {
                  es: '¡Gracias!',
                  en: 'Thank you!',
                  fr: 'Merci !',
                  it: 'Grazie!',
                },
              },
              {
                id: 2702,
                translations: {
                  es: '¡Allá voy!',
                  en: 'Here I go!',
                  fr: 'J\'y vais !',
                  it: 'Ci vado!',
                },
              },
              {
                id: 2703,
                translations: {
                  es: '¡Nos vemos abajo!',
                  en: 'See you at the bottom!',
                  fr: 'On se voit en bas !',
                  it: 'Ci vediamo in fondo!',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'arrival-platform',
        name: 'Plataforma de Llegada',
        phrases: [
          {
            id: 28,
            translations: {
              es: '¿Está bien?',
              en: 'Are you okay?',
              fr: 'Ça va ?',
              it: 'Sta bene?',
            },
            phonetics: {
              es: '¿Está bien?',
              en: "/a: ju ǝu'keı/",
              fr: '/sa va/',
              it: "/sta 'be:ne/",
            },
            touristReplies: [
              {
                id: 2801,
                translations: {
                  es: 'Sí, estoy bien. ¡Fue increíble!',
                  en: 'Yes, I\'m okay. That was amazing!',
                  fr: 'Oui, ça va. C\'était incroyable !',
                  it: 'Sì, sto bene. È stato incredibile!',
                },
              },
              {
                id: 2802,
                translations: {
                  es: 'Sí, solo un poco mareado.',
                  en: 'Yes, just a little dizzy.',
                  fr: 'Oui, juste un peu étourdi.',
                  it: 'Sì, solo un po\' di vertigini.',
                },
              },
              {
                id: 2803,
                translations: {
                  es: '¡Quiero hacerlo de nuevo!',
                  en: 'I want to do it again!',
                  fr: 'Je veux le refaire !',
                  it: 'Voglio farlo di nuovo!',
                },
              },
            ],
          },
          {
            id: 29,
            translations: {
              es: '¿Le gustó la experiencia?',
              en: 'Did you enjoy the experience?',
              fr: "Avez-vous aimé l'expérience ?",
              it: "Le è piaciuta l'esperienza?",
            },
            phonetics: {
              es: '¿Le gustó la experiencia?',
              en: "/dɪd ju ɪn'dʒɔɪ ði ɪks'pɪəriəns/",
              fr: '/ave vu zeme lɛksperjɑ̃s/',
              it: "/le ɛ pja'tʃuta lesper'jentsa/",
            },
            touristReplies: [
              {
                id: 2901,
                translations: {
                  es: '¡Sí, me encantó!',
                  en: 'Yes, I loved it!',
                  fr: 'Oui, j\'ai adoré !',
                  it: 'Sì, mi è piaciuto tantissimo!',
                },
              },
              {
                id: 2902,
                translations: {
                  es: 'Fue una de las mejores experiencias.',
                  en: 'It was one of the best experiences.',
                  fr: 'C\'était l\'une des meilleures expériences.',
                  it: 'È stata una delle migliori esperienze.',
                },
              },
              {
                id: 2903,
                translations: {
                  es: 'Fue bueno, pero me dio miedo.',
                  en: 'It was good, but it scared me.',
                  fr: 'C\'était bien, mais ça m\'a fait peur.',
                  it: 'È stato bello, ma mi ha spaventato.',
                },
              },
            ],
          },
          {
            id: 30,
            translations: {
              es: 'Gracias por volar con nosotros.',
              en: 'Thank you for flying with us.',
              fr: 'Merci d’avoir volé avec nous.',
              it: 'Grazie per aver volato con noi.',
            },
            phonetics: {
              es: 'Gracias por volar con nosotros.',
              en: "/θæŋk ju fə 'flaɪɪŋ wɪð əs/",
              fr: '/mɛrsi davwar vɔle avɛk nu/',
              it: "/'grattsje per a'ver vo'lato kon 'noi/",
            },
            touristReplies: [
              {
                id: 3001,
                translations: {
                  es: 'Gracias a ustedes. ¡Fue genial!',
                  en: 'Thank you. It was great!',
                  fr: 'Merci à vous. C\'était super !',
                  it: 'Grazie a voi. È stato fantastico!',
                },
              },
              {
                id: 3002,
                translations: {
                  es: 'El personal es muy amable.',
                  en: 'The staff is very friendly.',
                  fr: 'Le personnel est très sympathique.',
                  it: 'Il personale è molto cordiale.',
                },
              },
              {
                id: 3003,
                translations: {
                  es: 'Definitivamente regresaré.',
                  en: 'I will definitely come back.',
                  fr: 'Je reviendrai certainement.',
                  it: 'Tornerò sicuramente.',
                },
              },
            ],
          },
          {
            id: 31,
            translations: {
              es: 'Puede descansar un momento antes de continuar.',
              en: 'You can rest for a moment before continuing.',
              fr: 'Vous pouvez vous reposer un moment avant de continuer.',
              it: 'Può riposarsi un momento prima di continuare.',
            },
            phonetics: {
              es: 'Puede descansar un momento antes de continuar.',
              en: "/ju kən rest fə ə 'məʊmənt bɪ'fɔ: kən'tɪnju:ɪŋ/",
              fr: '/vu puve vu kəpoze œ̃ mɔmã avã də kõtinɥe/',
              it: "/pwɔ ripo'sarsi un mo'mento 'prima di kontinu'are/",
            },
            touristReplies: [
              {
                id: 3101,
                translations: {
                  es: 'Sí, gracias. Necesito un respiro.',
                  en: 'Yes, thanks. I need a break.',
                  fr: 'Oui, merci. J\'ai besoin d\'une pause.',
                  it: 'Sì, grazie. Ho bisogno di una pausa.',
                },
              },
              {
                id: 3102,
                translations: {
                  es: 'Gracias, tomaré un poco de agua.',
                  en: 'Thank you, I\'ll have some water.',
                  fr: 'Merci, je vais prendre un peu d\'eau.',
                  it: 'Grazie, prenderò un po\' d\'acqua.',
                },
              },
              {
                id: 3103,
                translations: {
                  es: 'Estoy listo para seguir.',
                  en: 'I\'m ready to continue.',
                  fr: 'Je suis prêt à continuer.',
                  it: 'Sono pronto a continuare.',
                },
              },
            ],
          },
           {
            id: 63,
            translations: {
              es: 'Puede continuar con el recorrido subiendo estas escaleras.',
              en: 'You can continue the tour by going up these stairs.',
              fr: 'Vous pouvez continuer la visite en montant ces escaliers.',
              it: 'Può continuare il tour salendo queste scale.',
            },
            phonetics: {
              es: 'Puede continuar con el recorrido subiendo estas escaleras.',
              en: "/ju kən kən'tɪnjuː ðə tʊə baɪ 'gəʊɪŋ ʌp ðiːz steəz/",
              fr: "/vu puve kɔ̃tinɥe la vizit ɑ̃ mɔ̃tɑ̃ sez ɛskalje/",
              it: "/pwɔ kontinu'are il tur sa'lɛndo 'kweste 'skale/",
            },
            touristReplies: [
              {
                id: 6301,
                translations: {
                  es: 'Gracias, ¿qué sigue ahora?',
                  en: 'Thank you, what’s next?',
                  fr: 'Merci, quelle est la suite ?',
                  it: 'Grazie, cosa c\'è dopo?',
                },
              },
              {
                id: 6302,
                translations: {
                  es: 'De acuerdo, ¡vamos!',
                  en: 'Okay, let’s go!',
                  fr: 'D\'accord, allons-y !',
                  it: 'Va bene, andiamo!',
                },
              },
              {
                id: 6303,
                translations: {
                  es: '¿Hay un ascensor?',
                  en: 'Is there an elevator?',
                  fr: 'Y a-t-il un ascenseur ?',
                  it: 'C\'è un ascensore?',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'kayak',
    name: 'Kayak',
    icon: Sailboat,
    phrases: [
        {
          id: 37,
          translations: {
            es: 'Use el chaleco salvavidas todo el tiempo.',
            en: 'Please wear your life jacket at all times.',
            fr: 'Portez votre gilet de sauvetage en tout temps.',
            it: 'Indossi sempre il giubbotto di salvataggio.',
          },
          phonetics: {
            es: 'Use el chaleco salvavidas todo el tiempo.',
            en: "/pli:z weə jɔ: laif 'dʒækɪt æt ɔ:l taɪmz/",
            fr: '/pɔʁte vɔtʁ ʒilɛ də sovtaʒ ɑ̃ tu tɑ̃/',
            it: "/in'dɔssi 'sɛmpre il dʒub'bɔtto di salva'tadʒdʒo/",
          },
          touristReplies: [
              {
                id: 3701,
                translations: {
                  es: 'De acuerdo.',
                  en: 'Okay.',
                  fr: 'D\'accord.',
                  it: 'Va bene.',
                },
              },
              {
                id: 3702,
                translations: {
                  es: 'Ya me lo puse.',
                  en: 'I already put it on.',
                  fr: 'Je l\'ai déjà mis.',
                  it: 'L\'ho già indossato.',
                },
              },
              {
                id: 3703,
                translations: {
                  es: '¿Me ayuda a ajustarlo?',
                  en: 'Can you help me adjust it?',
                  fr: 'Pouvez-vous m\'aider à l\'ajuster ?',
                  it: 'Mi può aiutare a regolarlo?',
                },
              },
            ],
        },
        {
          id: 38,
          translations: {
            es: 'No se aleje de la orilla.',
            en: "Don't go far from the shore.",
            fr: "Ne vous éloignez pas du rivage.",
            it: 'Non si allontani dalla riva.',
          },
          phonetics: {
            es: 'No se aleje de la orilla.',
            en: "/dəʊnt gəʊ fɑ: frɒm ðə ʃɔ:/",
            fr: "/nə vuz‿elwaɲe pa dy ʁivaʒ/",
            it: "/non si allon'tani dalla 'riva/",
          },
          touristReplies: [
              {
                id: 3801,
                translations: {
                  es: 'Entendido, me quedaré cerca.',
                  en: 'Understood, I will stay close.',
                  fr: 'Compris, je resterai près du bord.',
                  it: 'Capito, resterò vicino.',
                },
              },
              {
                id: 3802,
                translations: {
                  es: '¿Qué tan lejos puedo ir?',
                  en: 'How far can I go?',
                  fr: 'Jusqu\'où puis-je aller ?',
                  it: 'Quanto lontano posso andare?',
                },
              },
              {
                id: 3803,
                translations: {
                  es: 'No se preocupe.',
                  en: 'Don\'t worry.',
                  fr: 'Ne vous inquiétez pas.',
                  it: 'Non si preoccupi.',
                },
              },
            ],
        },
        {
          id: 39,
          translations: {
            es: 'Reme despacio y con ambos brazos.',
            en: 'Paddle slowly and use both arms.',
            fr: 'Pagayez lentement et utilisez les deux bras.',
            it: 'Remi lentamente e usi entrambe le braccia.',
          },
          phonetics: {
            es: 'Reme despacio y con ambos brazos.',
            en: "/'pædl 'sləʊli ənd ju:z bəʊθ ɑ:mz/",
            fr: '/pagaje lɑ̃tmɑ̃ e ytilize le dø bʁa/',
            it: "/'remi lenta'mente e 'uzi en'trambe le 'brattʃa/",
          },
          touristReplies: [
              {
                id: 3901,
                translations: {
                  es: '¿Así está bien?',
                  en: 'Like this?',
                  fr: 'Comme ça ?',
                  it: 'Così va bene?',
                },
              },
              {
                id: 3902,
                translations: {
                  es: 'Es más difícil de lo que parece.',
                  en: 'It\'s harder than it looks.',
                  fr: 'C\'est plus difficile que ça en a l\'air.',
                  it: 'È più difficile di quanto sembri.',
                },
              },
              {
                id: 3903,
                translations: {
                  es: 'Estoy aprendiendo.',
                  en: 'I am learning.',
                  fr: 'J\'apprends.',
                  it: 'Sto imparando.',
                },
              },
            ],
        },
        {
          id: 40,
          translations: {
            es: 'Mantenga distancia con los otros kayaks.',
            en: 'Keep a safe distance from other kayaks.',
            fr: 'Gardez une distance de sécurité avec les autres kayaks.',
            it: 'Mantenga la distanza di sicurezza dagli altri kayak.',
          },
          phonetics: {
            es: 'Mantenga distancia con los otros kayaks.',
            en: "/ki:p ə seɪf 'dɪstəns frəm 'ʌðə 'kaiæks/",
            fr: '/gaʁde yn distɑ̃s də sekyʁite avɛk lez‿otʁə kajak/',
            it: "/man'tenga la di'stantsa di siku'ret'tsa daʎʎi 'altri 'kaiak/",
          },
          touristReplies: [
              {
                id: 4001,
                translations: {
                  es: 'Sí, tendré cuidado.',
                  en: 'Yes, I\'ll be careful.',
                  fr: 'Oui, je ferai attention.',
                  it: 'Sì, starò attento.',
                },
              },
              {
                id: 4002,
                translations: {
                  es: 'Entendido, distancia de seguridad.',
                  en: 'Got it, safe distance.',
                  fr: 'Compris, distance de sécurité.',
                  it: 'Capito, distanza di sicurezza.',
                },
              },
              {
                id: 4003,
                translations: {
                  es: 'Gracias por el consejo.',
                  en: 'Thanks for the tip.',
                  fr: 'Merci pour le conseil.',
                  it: 'Grazie per il consiglio.',
                },
              },
            ],
        },
        {
          id: 41,
          translations: {
            es: 'Si necesita ayuda, levante el remo.',
            en: 'If you need help, raise your paddle.',
            fr: "Si vous avez besoin d'aide, levez votre pagaie.",
            it: 'Se ha bisogno di aiuto, alzi la pagaia.',
          },
          phonetics: {
            es: 'Si necesita ayuda, levante el remo.',
            en: "/ɪf ju ni:d hɛlp reɪz jɔ: 'pædl/",
            fr: "/si vuz‿ave bəzwɛ̃ dɛd ləve vɔtʁ pagɛ/",
            it: "/se a bi'zoɲɲo di a'juto 'altsi la pa'ga:ja/",
          },
          touristReplies: [
              {
                id: 4101,
                translations: {
                  es: 'Ok, gracias.',
                  en: 'Okay, thanks.',
                  fr: 'D\'accord, merci.',
                  it: 'Ok, grazie.',
                },
              },
              {
                id: 4102,
                translations: {
                  es: '¿Vendrán a ayudarme?',
                  en: 'Will you come to help me?',
                  fr: 'Viendrez-vous m\'aider ?',
                  it: 'Verrete ad aiutarmi?',
                },
              },
              {
                id: 4103,
                translations: {
                  es: 'Espero no necesitarlo.',
                  en: 'I hope I don\'t need it.',
                  fr: 'J\'espère ne pas en avoir besoin.',
                  it: 'Spero di non averne bisogno.',
                },
              },
            ],
        },
        {
          id: 42,
          translations: {
            es: 'Evite chocar con otros kayaks.',
            en: 'Avoid bumping into other kayaks.',
            fr: 'Évitez de heurter les autres kayaks.',
            it: 'Eviti di urtare altri kayak.',
          },
          phonetics: {
            es: 'Evite chocar con otros kayaks.',
            en: "/ə'vɔɪd 'bʌmpɪŋ 'ɪntu 'ʌðə 'kaiæks/",
            fr: '/evite də œʁte lez‿otʁə kajak/',
            it: "/'eviti di ur'tare 'altri 'kaiak/",
          },
          touristReplies: [
              {
                id: 4201,
                translations: {
                  es: 'Entendido.',
                  en: 'Understood.',
                  fr: 'Compris.',
                  it: 'Capito.',
                },
              },
              {
                id: 4202,
                translations: {
                  es: 'Haré lo posible.',
                  en: 'I\'ll do my best.',
                  fr: 'Je ferai de mon mieux.',
                  it: 'Farò del mio meglio.',
                },
              },
              {
                id: 4203,
                translations: {
                  es: 'Parece que todos van por su lado.',
                  en: 'It seems everyone is going their own way.',
                  fr: 'On dirait que tout le monde va de son côté.',
                  it: 'Sembra che ognuno vada per la sua strada.',
                },
              },
            ],
        },
        {
          id: 43,
          translations: {
            es: 'A su regreso, aquí le ayudamos a bajar del kayak.',
            en: 'When you return, we will help you get off the kayak here.',
            fr: 'À votre retour, nous vous aiderons à descendre du kayak ici.',
            it: 'Al suo ritorno, la aiuteremo a scendere dal kayak qui.',
          },
          phonetics: {
            es: 'A su regreso, aquí le ayudamos a bajar del kayak.',
            en: "/wɛn ju rɪ'tɜ:n wi wɪl hɛlp ju gɛt ɒf ðə 'kaiæk hɪə/",
            fr: '/a vɔtʁ ʁətuʁ nu vuz‿ɛdʁɔ̃ a desɑ̃dʁ dy kajak isi/',
            it: "/al 'swo ri'torno la ajute'remo a 'ʃendere dal 'kaiak kwi/",
          },
          touristReplies: [
              {
                id: 4301,
                translations: {
                  es: 'Muchas gracias.',
                  en: 'Thank you very much.',
                  fr: 'Merci beaucoup.',
                  it: 'Molte grazie.',
                },
              },
               {
                id: 4302,
                translations: {
                  es: 'Aprecio la ayuda.',
                  en: 'I appreciate the help.',
                  fr: 'J\'apprécie l\'aide.',
                  it: 'Apprezzo l\'aiuto.',
                },
              },
              {
                id: 4303,
                translations: {
                  es: '¿Puedo quedarme más tiempo?',
                  en: 'Can I stay longer?',
                  fr: 'Puis-je rester plus longtemps ?',
                  it: 'Posso restare più a lungo?',
                },
              },
            ],
        },
        {
          id: 44,
          translations: {
            es: 'Gracias por remar con nosotros.',
            en: 'Thank you for paddling with us.',
            fr: "Merci d'avoir pagayé avec nous.",
            it: 'Grazie per aver remato con noi.',
          },
          phonetics: {
            es: 'Gracias por remar con nosotros.',
            en: "/θæŋk ju fɔ: 'pædlɪŋ wɪð ʌs/",
            fr: "/mɛʁsi davwaʁ pagaje avɛk nu/",
            it: "/'grattsje per a'ver re'mato kon 'noi/",
          },
          touristReplies: [
              {
                id: 4401,
                translations: {
                  es: '¡Fue muy relajante!',
                  en: 'It was very relaxing!',
                  fr: 'C\'était très relaxant !',
                  it: 'È stato molto rilassante!',
                },
              },
              {
                id: 4402,
                translations: {
                  es: 'Gracias, me divertí.',
                  en: 'Thank you, I had fun.',
                  fr: 'Merci, je me suis amusé.',
                  it: 'Grazie, mi sono divertito.',
                },
              },
              {
                id: 4403,
                translations: {
                  es: 'El lago es hermoso.',
                  en: 'The lake is beautiful.',
                  fr: 'Le lac est magnifique.',
                  it: 'Il lago è bellissimo.',
                },
              },
            ],
        },
      ],
  },
  {
    id: 'bicycle',
    name: 'Bicicleta',
    icon: Bike,
    phrases: [
      {
        id: 45,
        translations: {
          es: 'Use el casco durante todo el recorrido.',
          en: 'Please wear your helmet during the whole ride.',
          fr: 'Portez votre casque pendant tout le parcours.',
          it: 'Indossi il casco durante tutto il percorso.',
        },
        phonetics: {
          es: 'Use el casco durante todo el recorrido.',
          en: "/pliz weə jɔ: 'helmıt 'djuərın də həul raid/",
          fr: '/pɔrte vɔtr kas pɑ̃dɑ̃ tu lə parkur/',
          it: "/in'dossi il 'kasko du'rante 'tutto il per'korso/",
        },
        touristReplies: [
            {
              id: 4501,
              translations: {
                es: 'Claro, me lo pongo ahora.',
                en: 'Sure, I\'ll put it on now.',
                fr: 'Bien sûr, je le mets tout de suite.',
                it: 'Certo, lo metto subito.',
              },
            },
            {
                id: 4502,
                translations: {
                  es: 'Entendido, seguridad primero.',
                  en: 'Got it, safety first.',
                  fr: 'Compris, la sécurité d\'abord.',
                  it: 'Capito, la sicurezza prima di tutto.',
                },
            },
            {
                id: 4503,
                translations: {
                  es: '¿Es obligatorio?',
                  en: 'Is it mandatory?',
                  fr: 'Est-ce obligatoire ?',
                  it: 'È obbligatorio?',
                },
            },
          ],
      },
      {
        id: 47,
        translations: {
          es: 'No salga del sendero marcado.',
          en: "Don't leave the marked trail.",
          fr: 'Ne quittez pas le sentier balisé.',
          it: 'Non esca dal sentiero segnalato.',
        },
        phonetics: {
          es: 'No salga del sendero marcado.',
          en: "/dəʊnt li:v ðə mɑ:kt treɪl/",
          fr: '/nə kite pa lə sɑ̃tje balize/',
          it: "/non 'ɛska dal sen'tjero seɲɲa'lato/",
        },
        touristReplies: [
            {
              id: 4701,
              translations: {
                es: 'Entendido, seguiré el camino.',
                en: 'Got it, I\'ll stick to the path.',
                fr: 'Compris, je resterai sur le chemin.',
                it: 'Capito, seguirò il sentiero.',
              },
            },
            {
                id: 4702,
                translations: {
                  es: '¿A dónde lleva el sendero?',
                  en: 'Where does the trail lead?',
                  fr: 'Où mène le sentier ?',
                  it: 'Dove porta il sentiero?',
                },
            },
            {
                id: 4703,
                translations: {
                  es: 'Ok, no me desviaré.',
                  en: 'Okay, I won\'t wander off.',
                  fr: 'D\'accord, je ne m\'égarerai pas.',
                  it: 'Ok, non mi allontanerò.',
                },
            },
          ],
      },
      {
        id: 48,
        translations: {
          es: 'Mantenga una velocidad moderada.',
          en: 'Keep a moderate speed.',
          fr: 'Gardez une vitesse modérée.',
          it: 'Mantenga una velocità moderata.',
        },
        phonetics: {
          es: 'Mantenga una velocidad moderada.',
          en: "/ki:p ə 'mɒdərət spi:d/",
          fr: '/garde yn vites mɔdeʁe/',
          it: "/man'tenga 'una velotʃi'ta mode'rata/",
        },
        touristReplies: [
            {
              id: 4801,
              translations: {
                es: 'Sí, iré con calma.',
                en: 'Yes, I\'ll take it easy.',
                fr: 'Oui, j\'irai doucement.',
                it: 'Sì, andrò piano.',
              },
            },
            {
                id: 4802,
                translations: {
                  es: 'Entendido, sin carreras.',
                  en: 'Got it, no racing.',
                  fr: 'Compris, pas de course.',
                  it: 'Capito, niente corse.',
                },
            },
            {
                id: 4803,
                translations: {
                  es: '¿Cuál es el límite de velocidad?',
                  en: 'What is the speed limit?',
                  fr: 'Quelle est la limite de vitesse ?',
                  it: 'Qual è il limite di velocità?',
                },
            },
          ],
      },
      {
        id: 49,
        translations: {
          es: 'Si necesita ayuda, levante la mano.',
          en: 'If you need help, raise your hand.',
          fr: "Si vous avez besoin d'aide, levez la main.",
          it: 'Se ha bisogno di aiuto, alzi la mano.',
        },
        phonetics: {
          es: 'Si necesita ayuda, levante la mano.',
          en: "/ɪf ju ni:d hɛlp reɪz jɔ: hænd/",
          fr: '/si vuz ave bəzwɛ̃ dɛd ləve la mɛ̃/',
          it: "/se a bi'zoɲɲo di a'juto 'altsi la 'mano/",
        },
        touristReplies: [
            {
              id: 4901,
              translations: {
                es: 'Ok, lo haré.',
                en: 'Okay, I will.',
                fr: 'D\'accord, je le ferai.',
                it: 'Ok, lo farò.',
              },
            },
            {
                id: 4902,
                translations: {
                  es: 'Gracias por la indicación.',
                  en: 'Thanks for the instruction.',
                  fr: 'Merci pour l\'indication.',
                  it: 'Grazie per l\'indicazione.',
                },
            },
            {
                id: 4903,
                translations: {
                  es: '¿Hay personal cerca?',
                  en: 'Is there staff nearby?',
                  fr: 'Y a-t-il du personnel à proximité ?',
                  it: 'C\'è personale nelle vicinanze?',
                },
            },
          ],
      },
      {
        id: 50,
        translations: {
          es: 'No tire basura durante el recorrido.',
          en: "Please don't litter during the ride.",
          fr: 'Ne jetez pas de déchets pendant la balade.',
          it: 'Non getti rifiuti during il percorso.',
        },
        phonetics: {
          es: 'No tire basura durante el recorrido.',
          en: "/pliz dəʊnt 'lɪtə 'djʊərɪŋ ðə raɪd/",
          fr: '/nə ʒəte pa də deʃɛ pɑ̃dɑ̃ la balad/',
          it: "/non 'dʒetti ri'fjuti du'rante il per'korso/",
        },
        touristReplies: [
            {
              id: 5001,
              translations: {
                es: 'No se preocupe, no lo haré.',
                en: 'Don\'t worry, I won\'t.',
                fr: 'Ne vous inquiétez pas, je ne le ferai pas.',
                it: 'Non si preoccupi, non lo farò.',
              },
            },
            {
                id: 5002,
                translations: {
                  es: 'Claro, cuidaré el parque.',
                  en: 'Of course, I\'ll take care of the park.',
                  fr: 'Bien sûr, je prendrai soin du parc.',
                  it: 'Certo, mi prenderò cura del parco.',
                },
            },
            {
                id: 5003,
                translations: {
                  es: '¿Dónde puedo tirar la basura?',
                  en: 'Where can I throw away the trash?',
                  fr: 'Où puis-je jeter les déchets ?',
                  it: 'Dove posso buttare la spazzatura?',
                },
            },
          ],
      },
      {
        id: 51,
        translations: {
          es: 'Al terminar, deje la bicicleta en el mismo lugar.',
          en: 'When you finish, leave the bike in the same place.',
          fr: 'À la fin, laissez le vélo au même endroit.',
          it: 'Alla fine, lasci la bicicletta nello stesso posto.',
        },
        phonetics: {
          es: 'Al terminar, deje la bicicleta en el mismo lugar.',
          en: "/wɛn ju 'fɪnɪʃ li:v ðə baɪk ɪn ðə seɪm pleɪs/",
          fr: '/a la fɛ̃ lɛse lə velo o mɛm ɑ̃dʁwa/',
          it: "/alla 'fine 'laʃʃi la bitʃi'kletta 'nello 'stesso 'posto/",
        },
        touristReplies: [
            {
              id: 5101,
              translations: {
                es: 'De acuerdo.',
                en: 'Okay.',
                fr: 'D\'accord.',
                it: 'Va bene.',
              },
            },
            {
                id: 5102,
                translations: {
                  es: 'Entendido, la dejaré aquí.',
                  en: 'Got it, I\'ll leave it here.',
                  fr: 'Compris, je la laisserai ici.',
                  it: 'Capito, la lascerò qui.',
                },
            },
            {
                id: 5103,
                translations: {
                  es: 'Gracias por el paseo.',
                  en: 'Thanks for the ride.',
                  fr: 'Merci pour la balade.',
                  it: 'Grazie per il giro.',
                },
            },
          ],
      },
      {
        id: 52,
        translations: {
          es: 'Gracias por su recorrido, esperamos que lo haya disfrutado.',
          en: 'Thank you for your ride, we hope you enjoyed it.',
          fr: "Merci pour votre balade, nous espérons que vous l'avez appréciée.",
          it: 'Grazie per il giro, speriamo che le sia piaciuto.',
        },
        phonetics: {
          es: 'Gracias por su recorrido, esperamos que lo haya disfrutado.',
          en: "/θæŋk ju fɔ: jɔ: raɪd wi həʊp ju ɪn'dʒɔɪd ɪt/",
          fr: '/mɛrsi pur vɔtrə balad nu zɛspɛʁɔ̃ kə vu lave apʁesje/',
          it: "/'grattsje per il 'dʒiro speri'amo ke le sia pja'tʃuto/",
        },
        touristReplies: [
            {
              id: 5201,
              translations: {
                es: '¡Fue un gran paseo!',
                en: 'It was a great ride!',
                fr: 'C\'était une super balade !',
                it: 'È stato un bel giro!',
              },
            },
            {
                id: 5202,
                translations: {
                  es: 'Sí, fue muy divertido.',
                  en: 'Yes, it was a lot of fun.',
                  fr: 'Oui, c\'était très amusant.',
                  it: 'Sì, è stato molto divertente.',
                },
            },
            {
                id: 5203,
                translations: {
                  es: 'Gracias a ustedes.',
                  en: 'Thank you.',
                  fr: 'Merci à vous.',
                  it: 'Grazie a voi.',
                },
            },
          ],
      },
    ],
  },
  {
    id: 'atv',
    name: 'Cuatrimoto',
    icon: Car,
    phrases: [
      {
        id: 53,
        translations: {
          es: 'Use el casco en todo momento.',
          en: 'Please wear your helmet at all times.',
          fr: 'Portez votre casque en tout temps.',
          it: 'Indossi sempre il casco.',
        },
        phonetics: {
          es: 'Use el casco en todo momento.',
          en: "/pliz weə jɔ: 'helmɪt æt ɔ:l taɪmz/",
          fr: '/pɔʁte vɔtʁ kask ɑ̃ tu tɑ̃/',
          it: "/in'dossi 'sɛmpre il 'kasko/",
        },
        touristReplies: [
            {
              id: 5301,
              translations: {
                es: 'Sí, lo tengo puesto.',
                en: 'Yes, I have it on.',
                fr: 'Oui, je l\'ai mis.',
                it: 'Sì, ce l\'ho.',
              },
            },
            {
                id: 5302,
                translations: {
                  es: 'Claro, seguridad ante todo.',
                  en: 'Of course, safety first.',
                  fr: 'Bien sûr, la sécurité d\'abord.',
                  it: 'Certo, la sicurezza prima di tutto.',
                },
            },
            {
                id: 5303,
                translations: {
                  es: '¿Hay guantes también?',
                  en: 'Are there gloves too?',
                  fr: 'Y a-t-il aussi des gants ?',
                  it: 'Ci sono anche i guanti?',
                },
            },
          ],
      },
      {
        id: 54,
        translations: {
          es: 'Mantenga una velocidad moderada durante el recorrido.',
          en: 'Keep a moderate speed during the ride.',
          fr: 'Gardez une vitesse modérée pendant la balade.',
          it: 'Mantenga una velocità moderata durante il percorso.',
        },
        phonetics: {
          es: 'Mantenga una velocidad moderada durante el recorrido.',
          en: "/ki:p ə 'mɒdərət spi:d 'djʊərɪŋ ðə raɪd/",
          fr: '/gaʁde yn vitɛs mɔdeʁe pɑ̃dɑ̃ la balad/',
          it: "/man'tenga 'una velotʃi'ta mode'rata du'rante il per'korso/",
        },
        touristReplies: [
            {
              id: 5401,
              translations: {
                es: 'Entendido, iré despacio.',
                en: 'Got it, I\'ll go slow.',
                fr: 'Compris, j\'irai lentement.',
                it: 'Capito, andrò piano.',
              },
            },
            {
                id: 5402,
                translations: {
                  es: 'No hay prisa, solo quiero disfrutar.',
                  en: 'No rush, I just want to enjoy.',
                  fr: 'Pas de précipitation, je veux juste profiter.',
                  it: 'Nessuna fretta, voglio solo godermi il momento.',
                },
            },
            {
                id: 5403,
                translations: {
                  es: '¿Puedo ir más rápido en alguna parte?',
                  en: 'Can I go faster somewhere?',
                  fr: 'Puis-je aller plus vite quelque part ?',
                  it: 'Posso andare più veloce da qualche parte?',
                },
            },
          ],
      },
      {
        id: 55,
        translations: {
          es: 'No acelere demasiado ni haga giros bruscos.',
          en: "Don't accelerate too much or make sharp turns.",
          fr: "N'accélérez pas trop et ne faites pas de virages brusques.",
          it: 'Non acceleri troppo e non faccia curve brusche.',
        },
        phonetics: {
          es: 'No acelere demasiado ni haga giros bruscos.',
          en: "/dəʊnt ək'sɛləreɪt tu: mʌtʃ ɔ: meɪk ʃɑ:p tɜ:nz/",
          fr: '/naksɛleʁe pa tʁo e nə fɛt pa də viʁaʒ bʁysk/',
          it: "/non at'tʃel:eri 'troppo e non 'fattʃa 'kurve 'bruske/",
        },
        touristReplies: [
            {
              id: 5501,
              translations: {
                es: 'De acuerdo, tendré cuidado.',
                en: 'Okay, I\'ll be careful.',
                fr: 'D\'accord, je ferai attention.',
                it: 'Va bene, starò attento.',
              },
            },
            {
                id: 5502,
                translations: {
                  es: 'Entendido, conducción segura.',
                  en: 'Understood, safe driving.',
                  fr: 'Compris, conduite prudente.',
                  it: 'Capito, guida sicura.',
                },
            },
            {
                id: 5503,
                translations: {
                  es: 'Gracias por la advertencia.',
                  en: 'Thanks for the warning.',
                  fr: 'Merci pour l\'avertissement.',
                  it: 'Grazie per l\'avvertimento.',
                },
            },
          ],
      },
      {
        id: 56,
        translations: {
          es: 'No rebase a los demás participantes.',
          en: 'Do not overtake other participants.',
          fr: 'Ne doublez pas les autres participants.',
          it: 'Non sorpassare gli altri partecipanti.',
        },
        phonetics: {
          es: 'No rebase a los demás participantes.',
          en: "/du nɒt ˌəʊvə'teɪk ˈʌðə pɑːˈtɪsɪpənts/",
          fr: '/nə duble pa lez otʁə paʁtisipɑ̃/',
          it: "/non sorpas'sare ʎi 'altri partetʃi'panti/",
        },
        touristReplies: [
            {
              id: 5601,
              translations: {
                es: 'Entendido.',
                en: 'Got it.',
                fr: 'Compris.',
                it: 'Capito.',
              },
            },
            {
              id: 5602,
              translations: {
                es: 'Me mantendré en mi lugar.',
                en: 'I\'ll stay in my place.',
                fr: 'Je resterai à ma place.',
                it: 'Resterò al mio posto.',
              },
            },
            {
                id: 5603,
                translations: {
                  es: 'Ok, seguiré al grupo.',
                  en: 'Okay, I\'ll follow the group.',
                  fr: 'D\'accord, je suivrai le groupe.',
                  it: 'Ok, seguirò il gruppo.',
                },
            },
          ],
      },
      {
        id: 57,
        translations: {
          es: 'Mantenga ambas manos en el manubrio.',
          en: 'Keep both hands on the handlebar.',
          fr: 'Gardez les deux mains sur le guidon.',
          it: 'Tenga entrambe le mani sul manubrio.',
        },
        phonetics: {
          es: 'Mantenga ambas manos en el manubrio.',
          en: "/ki:p bəʊθ hændz ɒn ðə 'hændlbɑː/",
          fr: '/gaʁde le dø mɛ̃ syʁ lə gidɔ̃/',
          it: "/'tenga en'trambe le 'mani sul ma'nu:brio/",
        },
        touristReplies: [
            {
              id: 5701,
              translations: {
                es: 'Sí, lo haré.',
                en: 'Yes, I will.',
                fr: 'Oui, je le ferai.',
                it: 'Sì, lo farò.',
              },
            },
            {
                id: 5702,
                translations: {
                  es: 'Entendido, ambas manos.',
                  en: 'Got it, both hands.',
                  fr: 'Compris, les deux mains.',
                  it: 'Capito, entrambe le mani.',
                },
            },
            {
                id: 5703,
                translations: {
                  es: '¿Puedo tomar fotos?',
                  en: 'Can I take photos?',
                  fr: 'Puis-je prendre des photos ?',
                  it: 'Posso fare foto?',
                },
            },
          ],
      },
      {
        id: 59,
        translations: {
          es: 'Si la moto se detiene, espere al guía.',
          en: 'If the ATV stops, wait for the guide.',
          fr: "Si le quad s'arrête, attendez le guide.",
          it: "Se il quad si ferma, aspetti la guida.",
        },
        phonetics: {
          es: 'Si la moto se detiene, espere al guía.',
          en: "/ɪf ði 'eɪti:'vi: stɒps weɪt fə ðə gaɪd/",
          fr: '/si lə kwad saʁɛt atɑ̃de lə gid/',
          it: "/se il 'kwad si 'ferma a'spetti la 'gwi:da/",
        },
        touristReplies: [
            {
              id: 5901,
              translations: {
                es: 'De acuerdo.',
                en: 'Okay.',
                fr: 'D\'accord.',
                it: 'Va bene.',
              },
            },
            {
                id: 5902,
                translations: {
                  es: 'Entendido, no intentaré arreglarla.',
                  en: 'Got it, I won\'t try to fix it.',
                  fr: 'Compris, je n\'essaierai pas de le réparer.',
                  it: 'Capito, non proverò a ripararlo.',
                },
            },
            {
                id: 5903,
                translations: {
                  es: 'Espero que no se detenga.',
                  en: 'I hope it doesn\'t stop.',
                  fr: 'J\'espère qu\'il ne s\'arrêtera pas.',
                  it: 'Spero che non si fermi.',
                },
            },
          ],
      },
      {
        id: 60,
        translations: {
          es: 'No tire basura durante el recorrido.',
          en: "Please don't litter during the ride.",
          fr: 'Ne jetez pas de déchets pendant la balade.',
          it: 'Non getti rifiuti durante il percorso.',
        },
        phonetics: {
          es: 'No tire basura durante el recorrido.',
          en: "/pliz dəʊnt 'lɪtə 'djʊərɪŋ ðə raɪd/",
          fr: '/nə ʒəte pa də deʃɛ pɑ̃dɑ̃ la balad/',
          it: "/non 'dʒetti ri'fjuti du'rante il per'korso/",
        },
        touristReplies: [
            {
              id: 6001,
              translations: {
                es: 'No lo haré.',
                en: 'I won\'t.',
                fr: 'Je ne le ferai pas.',
                it: 'Non lo farò.',
              },
            },
            {
                id: 6002,
                translations: {
                  es: 'Claro, hay que cuidar la naturaleza.',
                  en: 'Of course, we must take care of nature.',
                  fr: 'Bien sûr, il faut prendre soin de la nature.',
                  it: 'Certo, bisogna prendersi cura della natura.',
                },
            },
            {
                id: 6003,
                translations: {
                  es: '¿Hay basureros en el camino?',
                  en: 'Are there trash cans along the way?',
                  fr: 'Y a-t-il des poubelles en chemin ?',
                  it: 'Ci sono cestini lungo il percorso?',
                },
            },
          ],
      },
      {
        id: 61,
        translations: {
          es: 'Gracias por participar, esperamos que haya disfrutado el recorrido.',
          en: 'Thank you for riding with us, we hope you enjoyed it.',
          fr: "Merci d'avoir fait la balade avec nous, nous espérons que vous avez aimé.",
          it: "Grazie per aver partecipato, speriamo che le sia piaciuto.",
        },
        phonetics: {
          es: 'Gracias por participar, esperamos que haya disfrutado el recorrido.',
          en: "/θæŋk ju fə 'raɪdɪŋ wɪð əs wi həʊp ju ɪn'dʒɔɪd ɪt/",
          fr: "/mɛʁsi davwaʁ fɛ la balad avɛk nu nu zɛspɛʁɔ̃ kə vu ave ɛme/",
          it: "/'grattsje per a'ver partetʃi'pato sper'jamo ke le sia pja'tʃuto/",
        },
        touristReplies: [
            {
              id: 6101,
              translations: {
                es: '¡Fue muy emocionante!',
                en: 'It was very exciting!',
                fr: 'C\'était très excitant !',
                it: 'È stato molto emozionante!',
              },
            },
            {
                id: 6102,
                translations: {
                  es: 'Gracias, la pasé genial.',
                  en: 'Thanks, I had a great time.',
                  fr: 'Merci, j\'ai passé un super moment.',
                  it: 'Grazie, mi sono divertito molto.',
                },
            },
            {
                id: 6103,
                translations: {
                  es: '¿Podemos dar otra vuelta?',
                  en: 'Can we go for another round?',
                  fr: 'Pouvons-nous faire un autre tour ?',
                  it: 'Possiamo fare un altro giro?',
                },
            },
          ],
      },
    ],
  },
  {
    id: 'cafeteria',
    name: 'Cafetería',
    icon: Coffee,
    phrases: [],
  },
  {
    id: 'amphitheater',
    name: 'Anfiteatro',
    icon: Theater,
    phrases: [],
  },
  {
    id: 'restrooms',
    name: 'Baños',
    icon: Bath,
    phrases: [],
  },
]
