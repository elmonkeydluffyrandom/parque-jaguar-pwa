
import type { LucideIcon } from 'lucide-react'
import { Bike, Car, ConciergeBell, Mountain, Sailboat, Coffee, Theater, Bath } from 'lucide-react'

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
          it: "/al 'parkɔ ʒa'gwar of'friamo attivi'ta 'kome la tele'ferika i 'kwad le bitʃi'klette e il ka'jak/",
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
      {
        id: 32,
        translations: {
          es: '¿Gusta tomarse una foto del recuerdo? Tiene un costo de 100 pesos mexicanos.',
          en: 'Would you like a souvenir photo? It costs 100 Mexican pesos.',
          fr: 'Voulez-vous une photo souvenir ? Ça coûte 100 pesos mexicains.',
          it: 'Vuole una foto ricordo? Costa 100 pesos messicani.',
        },
        phonetics: {
          es: '¿Gusta tomarse una foto del recuerdo? Tiene un costo de 100 pesos mexicanos.',
          en: "/wʊd ju laɪk ə ˌsuːvə'nɪə 'foʊtoʊ ɪt kɒsts wʌn 'hʌndrəd 'mɛksɪkən 'peɪsoʊz/",
          fr: "/vule vu yn foto suvniʁ sa kut sɑ̃ pezo mɛksikɛ̃/",
          it: "/'vwɔle 'una 'fɔto ri'kɔrdo 'kɔsta 'tʃɛnto 'pesos messi'kani/",
        },
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
      },
      {
        id: 34,
        translations: {
          es: 'Puede encontrarnos en Facebook e Instagram como Parque Jaguar.',
          en: 'You can find us on Facebook and Instagram as Parque Jaguar.',
          fr: 'Vous pouvez nous trouver sur Facebook et Instagram sous le nom de Parque Jaguar.',
          it: 'Ci può trovare su Facebook e Instagram come Parque Jaguar.',
        },
        phonetics: {
          es: 'Puede encontrarnos en Facebook e Instagram como Parque Jaguar.',
          en: "/ju kæn faɪnd əs ɒn 'feɪsbʊk ənd 'ɪnstəgræm æz 'pɑːrkeɪ 'hæɡwɑːr/",
          fr: "/vu puve nu tʁuve syʁ fejsbuk e ɛ̃stagʁam su lə nɔ̃ də paʁkə ʒagwaʁ/",
          it: "/tʃi pwɔ tro'vare su 'fejsbuk e 'instagram 'kome 'parke ja'gwar/",
        },
      },
      {
        id: 35,
        translations: {
          es: '¿Desea agregar propina?',
          en: 'Would you like to add a tip?',
          fr: 'Voulez-vous ajouter un pourboire ?',
          it: 'Vuole aggiungere una mancia?',
        },
        phonetics: {
          es: '¿Desea agregar propina?',
          en: "/wʊd ju laɪk tu æd ə tɪp/",
          fr: "/vule vu aʒute ɛ̃ puʁbwaʁ/",
          it: "/'vwɔle ad'dʒundʒere 'una 'mantʃa/",
        },
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
          },
        ],
      },
      {
        id: 'launch-platform',
        name: 'Plataforma de Lanzamiento',
        phrases: [
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
        },
        {
          id: 43,
          translations: {
            es: 'A su regreso, deje el kayak en el mismo lugar.',
            en: 'When you return, leave the kayak in the same place.',
            fr: 'À votre retour, laissez le kayak au même endroit.',
            it: 'Al ritorno, lasci il kayak nello stesso posto.',
          },
          phonetics: {
            es: 'A su regreso, deje el kayak en el mismo lugar.',
            en: "/wɛn ju rɪ'tɜ:n li:v ðə 'kaiæk ɪn ðə seɪm pleɪs/",
            fr: '/a vɔtʁ ʁətuʁ lɛse lə kajak o mɛm ɑ̃dʁwa/',
            it: "/al ri'torno 'laʃʃi il 'kaiak 'nello 'stesso 'posto/",
          },
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
      },
      {
        id: 46,
        translations: {
          es: 'Mantenga siempre a la vista al guía del grupo.',
          en: 'Always keep the group guide in sight.',
          fr: 'Gardez toujours le guide du groupe en vue.',
          it: 'Tenga sempre in vista la guida del gruppo.',
        },
        phonetics: {
          es: 'Mantenga siempre a la vista al guía del grupo.',
          en: "/'ɔ:lweız ki:p ðə gru:p gaɪd ɪn saɪt/",
          fr: '/garde tuʒur lə gid dy grup ɑ̃ vy/',
          it: "/'tenga 'sempre in 'vista la 'gwi:da del 'gruppo/",
        },
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
      },
      {
        id: 50,
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
      },
      {
        id: 56,
        translations: {
          es: 'No rebase a los demás participantes.',
          en: 'Do not overtake other riders.',
          fr: 'Ne doublez pas les autres conducteurs.',
          it: 'Non sorpassi gli altri partecipanti.',
        },
        phonetics: {
          es: 'No rebase a los demás participantes.',
          en: "/du nɒt ˌəʊvə'teɪk ˈʌðə ˈraɪdəz/",
          fr: '/nə duble pa lez otʁə kɔ̃dyktœʁ/',
          it: "/non sor'passi ʎi 'altri partetʃi'panti/",
        },
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
      },
      {
        id: 58,
        translations: {
          es: 'Evite zonas con lodo o piedras sueltas.',
          en: 'Avoid muddy or rocky areas.',
          fr: 'Évitez les zones boueuses ou pierreuses.',
          it: 'Eviti le zone fangose o rocciose.',
        },
        phonetics: {
          es: 'Evite zonas con lodo o piedras sueltas.',
          en: "/ə'vɔɪd 'mʌdi ɔ: 'rɒki 'eəriəz/",
          fr: '/evite le zon buøz u pjɛʁøz/',
          it: "/'eviti le 'tsone fan'go:ze o rot'tʃoze/",
        },
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
