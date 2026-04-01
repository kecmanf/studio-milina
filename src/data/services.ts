export interface Service {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  duration: string;
  price: string;
  shortDescription: string;
  fullDescription: string[];
  benefits: string[];
  recommendedFor: string[];
  contraindications?: string[];
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
  imageAlt: string;
  imagePlaceholder: string;
  faq: { question: string; answer: string }[];
}

export interface ServiceCategory {
  name: string;
  slug: string;
  services: Service[];
}

export const services: Service[] = [
  // Relaksacione masaže
  {
    id: "relaks-celo-telo",
    slug: "relaks-masaza-celog-tela",
    name: "Relaks masaža celog tela",
    category: "Relaksacione masaže",
    categorySlug: "relaksacione-masaze",
    duration: "60 min",
    price: "[CENA]",
    shortDescription:
      "Potpuno opuštanje tela i uma uz nežne, ritmiče pokrete koji otklanjaju stres i napetost.",
    fullDescription: [
      "Relaks masaža celog tela u Studio Milina je tretman osmišljen da vam pruži potpuno opuštanje i odmor od svakodnevnog stresa. Ova masaža koristi nežne, duge i ritmiče pokrete koji stimulišu cirkulaciju, smanjuju mišićnu napetost i donose duboko osećanje mira.",
      "Tokom tretmana koji traje 60 minuta, diplomirana terapetkinja Mila Đorđević pažljivo obrađuje svaki deo tela - od stopala, preko nogu i leđa, do ramena, ruku i vrata. Pritisak je blag do umeren i prilagođava se vašim potrebama i preferencijama.",
      "Relaks masaža je idealna za sve koji žele da pobegnu od brzog tempa života, smanje nivo kortizola (hormona stresa) i poboljšaju kvalitet sna. Nakon tretmana, osećaćete se osveženo, opušteno i puno energije.",
      "U Studio Milina u Nišu koristimo kvalitetna ulja koja neguju kožu i doprinose celokupnom doživljaju masaže. Ambijent studija je posebno dizajniran da pruži osećaj mira i udobnosti od trenutka kada uđete.",
    ],
    benefits: [
      "Smanjenje stresa i anksioznosti",
      "Poboljšanje cirkulacije krvi",
      "Opuštanje mišića i smanjenje napetosti",
      "Poboljšanje kvaliteta sna",
      "Jačanje imunološkog sistema",
      "Poboljšanje raspoloženja",
    ],
    recommendedFor: [
      "Osobe pod stresom i pritiskom",
      "Ljudi sa problemima sa spavanjem",
      "Svako ko želi opuštanje i odmor",
      "Osobe koje rade sedelačke poslove",
      "Početnici koji se prvi put masiraju",
    ],
    relatedServices: [
      "relaks-masaza-parcijalna",
      "aromaterapija-masaza",
      "hot-stone-masaza",
    ],
    metaTitle: "Relaks masaža celog tela Niš | Studio Milina",
    metaDescription:
      "Relaks masaža celog tela u Nišu. 60 minuta potpunog opuštanja uz diplomiranu terapetkinju. Zakažite termin u Studio Milina.",
    imageAlt: "Relaks masaža celog tela u Studio Milina Niš",
    imagePlaceholder: "[Slika: Relaks masaža celog tela]",
    faq: [
      {
        question: "Koliko košta relaks masaža celog tela u Nišu?",
        answer:
          "Cena relaks masaže celog tela u Studio Milina zavisi od aktuelnog cenovnika. Tretman traje 60 minuta i uključuje rad na celom telu kvalitetnim uljima. Za tačnu cenu i zakazivanje pozovite nas na +381 66 80 60 301.",
      },
      {
        question: "Da li je relaks masaža bolna?",
        answer:
          "Ne, relaks masaža nije bolna. Koriste se nežni, ritmiči pokreti sa blagim do umerenim pritiskom koji se prilagođava vašim preferencijama. Ovo je idealan tretman za početnike i sve koji žele prijatno iskustvo opuštanja bez nelagodnosti.",
      },
      {
        question: "Koliko često treba ići na relaks masažu?",
        answer:
          "Za optimalne rezultate preporučuje se relaks masaža jednom do dva puta mesečno. Ako ste pod povećanim stresom ili imate problema sa spavanjem, može se raditi i jednom nedeljno. Redovna masaža pomaže u održavanju niskog nivoa stresa i boljeg opšteg zdravlja.",
      },
      {
        question: "Da li mogu na relaks masažu ako se prvi put masiram?",
        answer:
          "Apsolutno, relaks masaža je savršen izbor za početnike. Pritisak je nežan i prilagođava se vašim potrebama, a Mila će vas provesti kroz ceo proces pre početka tretmana. Mnogi naši klijenti u Nišu započeli su upravo sa ovom vrstom masaže.",
      },
    ],
  },
  {
    id: "relaks-parcijalna",
    slug: "relaks-masaza-parcijalna",
    name: "Relaks masaža parcijalna",
    category: "Relaksacione masaže",
    categorySlug: "relaksacione-masaze",
    duration: "30 min",
    price: "[CENA]",
    shortDescription:
      "Ciljano opuštanje odabranih delova tela - idealno za brzi predah od stresa.",
    fullDescription: [
      "Relaks parcijalna masaža je kraći tretman fokusiran na specifične delove tela koji vam najviše trebaju. Bilo da su to leđa, ramena, noge ili ruke, Mila će prilagoditi tretman vašim potrebama.",
      "Ovaj tretman od 30 minuta je savršen za ljude koji nemaju vremena za punu masažu, ali žele da osete blagodeti relaksacije. Koriste se nežni, ritmiči pokreti koji efikasno otklanjaju napetost iz ciljanih zona.",
      "Parcijalna relaks masaža je odlična opcija za redovno održavanje - možete je kombinovati sa drugim tretmanima ili je koristiti kao samostalan tretman kada vam je potrebno brzo opuštanje.",
    ],
    benefits: [
      "Ciljano opuštanje problematičnih zona",
      "Brz tretman idealan za pauzu",
      "Smanjenje lokalne napetosti",
      "Poboljšanje cirkulacije u tretiranom delu",
    ],
    recommendedFor: [
      "Osobe sa ograničenim vremenom",
      "Ljudi sa napetošću u specifičnim zonama",
      "Kao dopuna redovnim tretmanima",
    ],
    relatedServices: [
      "relaks-masaza-celog-tela",
      "masaza-ledja-i-vrata",
      "aromaterapija-masaza",
    ],
    metaTitle: "Relaks masaža parcijalna Niš | Studio Milina",
    metaDescription:
      "Parcijalna relaks masaža u Nišu - 30 minuta ciljanog opuštanja. Zakažite u Studio Milina.",
    imageAlt: "Parcijalna relaks masaža u Studio Milina Niš",
    imagePlaceholder: "[Slika: Parcijalna relaks masaža]",
    faq: [
      {
        question:
          "Koji deo tela mogu da odaberem za parcijalnu relaks masažu?",
        answer:
          "Možete odabrati bilo koji deo tela koji vam je najpotrebniji - leđa, ramena, noge, ruke ili vrat. Na početku tretmana razgovaraćete sa Milom o tome gde osećate najveću napetost, i ona će prilagoditi masažu vašim potrebama.",
      },
      {
        question: "Da li je 30 minuta dovoljno za relaks masažu?",
        answer:
          "Za ciljano opuštanje jedne zone tela, 30 minuta je sasvim dovoljno. Parcijalna masaža je dizajnirana da efikasno otkloni napetost iz odabranog dela tela. Ako želite kompletno opuštanje celog tela, preporučujemo relaks masažu celog tela od 60 minuta.",
      },
      {
        question: "Koliko košta parcijalna relaks masaža u Nišu?",
        answer:
          "Za aktuelnu cenu parcijalne relaks masaže u Studio Milina, pozovite nas na +381 66 80 60 301 ili posetite našu stranicu sa cenovnikom. Tretman traje 30 minuta i predstavlja pristupačnu opciju za redovno opuštanje.",
      },
    ],
  },
  {
    id: "aromaterapija",
    slug: "aromaterapija-masaza",
    name: "Aromaterapija masaža",
    category: "Relaksacione masaže",
    categorySlug: "relaksacione-masaze",
    duration: "60 min",
    price: "[CENA]",
    shortDescription:
      "Kombinacija nežne masaže i aromatičnih etarskih ulja za duboko opuštanje svih čula.",
    fullDescription: [
      "Aromaterapija masaža u Studio Milina kombinuje blagodeti klasične relaks masaže sa lekovitim svojstvima etarskih ulja. Svaki tretman počinje odabirom ulja koje najbolje odgovara vašim potrebama - lavanda za opuštanje, eukaliptus za osveženje, ili ruzmarin za energiju.",
      "Tokom 60 minuta, Mila koristi specifične tehnike masaže koje omogućavaju duboku apsorpciju etarskih ulja kroz kožu, dok njihov miris deluje na limbički sistem mozga - centar za emocije i pamćenje. Rezultat je sveobuhvatno opuštanje na fizičkom, mentalnom i emocionalnom nivou.",
      "Aromaterapija je posebno efikasna za smanjenje anksioznosti, poboljšanje raspoloženja i ublažavanje hroničnog stresa. Ova masaža ne samo da opušta telo već i harmonizuje um.",
      "U Studio Milina u Nišu koristimo isključivo visokokvalitetna, čista etarska ulja koja su bezbedna za kožu i pružaju maksimalne terapeutske efekte.",
    ],
    benefits: [
      "Duboko opuštanje svih čula",
      "Smanjenje anksioznosti i stresa",
      "Poboljšanje raspoloženja",
      "Nega i hidratacija kože",
      "Ublažavanje glavobolje",
      "Poboljšanje koncentracije i fokusa",
    ],
    recommendedFor: [
      "Osobe pod hroničnim stresom",
      "Ljudi koji pate od anksioznosti",
      "Ljubitelji holistikog pristupa zdravlju",
      "Osobe koje žele duboko opuštanje",
    ],
    contraindications: [
      "Alergija na etarska ulja",
      "Trudnoća (bez konsultacije sa lekarom)",
      "Veoma osetljiva koža",
    ],
    relatedServices: [
      "relaks-masaza-celog-tela",
      "hot-stone-masaza",
      "masaza-lica-i-vrata",
    ],
    metaTitle: "Aromaterapija masaža Niš | Studio Milina",
    metaDescription:
      "Aromaterapija masaža u Nišu sa etarskim uljima. 60 minuta holistikog opuštanja. Studio Milina - zakažite termin.",
    imageAlt: "Aromaterapija masaža sa etarskim uljima Studio Milina Niš",
    imagePlaceholder: "[Slika: Aromaterapija masaža]",
    faq: [
      {
        question: "Koja etarska ulja se koriste u aromaterapija masaži?",
        answer:
          "U Studio Milina koristimo visokokvalitetna etarska ulja poput lavande za opuštanje, eukaliptusa za osveženje, ruzmarina za energiju i druge. Na početku tretmana Mila bira ulje koje najbolje odgovara vašim potrebama i trenutnom stanju.",
      },
      {
        question:
          "Da li aromaterapija masaža može izazvati alergijsku reakciju?",
        answer:
          "Ako imate poznatu alergiju na etarska ulja ili veoma osetljivu kožu, obavezno nas obavestite pre tretmana. Mila uvek radi test na malom delu kože pre početka masaže. Koristimo isključivo čista, dermatološki testirana ulja.",
      },
      {
        question:
          "Koja je razlika između aromaterapije i obične relaks masaže?",
        answer:
          "Aromaterapija masaža kombinuje tehnike klasične relaks masaže sa lekovitim dejstvom etarskih ulja. Dok obična relaks masaža opušta mišiće, aromaterapija dodatno deluje na nervni sistem kroz mirise, pružajući dublje emocionalno i mentalno opuštanje.",
      },
      {
        question: "Da li trudnice mogu ići na aromaterapiju masažu u Nišu?",
        answer:
          "Trudnicama se ne preporučuje aromaterapija masaža bez prethodne konsultacije sa ginekologom, jer neka etarska ulja mogu biti kontraindikovana tokom trudnoće. Za buduće mame nudimo specijalizovanu masažu trudnica koja je potpuno bezbedna.",
      },
    ],
  },

  // Terapeutske masaže
  {
    id: "terapeutska-celo-telo",
    slug: "terapeutska-masaza-celog-tela",
    name: "Terapeutska masaža celog tela",
    category: "Terapeutske masaže",
    categorySlug: "terapeutske-masaze",
    duration: "60 min",
    price: "[CENA]",
    shortDescription:
      "Dubinski rad na mišićima za otklanjanje bolova, ukočenosti i hroničnih tegoba.",
    fullDescription: [
      "Terapeutska masaža celog tela je intenzivan tretman usmeren na otklanjanje bolova, mišićnih spazama i hroničnih tegoba. Za razliku od relaks masaže, ovde se koriste dublje i intenzivnije tehnike koje prodiru u dublje slojeve mišićnog tkiva.",
      "Diplomirana terapetkinja Mila Đorđević, zahvaljujući svom obrazovanju na Fakultetu sporta i fizičkog vaspitanja, detaljno poznaje anatomiju i fiziologiju ljudskog tela. To joj omogućava da precizno identifikuje problematična područja i primeni odgovarajuće tehnike za njihovo rešavanje.",
      "Tretman od 60 minuta obuhvata celo telo sa posebnim fokusom na zone koje vam stvaraju tegobe. Koriste se tehnike poput gnječenja, frikcije, vibracije i kompresije koje efikasno razgrađuju adhezije u mišićnom tkivu i poboljšavaju pokretljivost.",
      "Terapeutska masaža u Studio Milina u Nišu je idealna za ljude koji pate od hroničnih bolova u leđima, vratu ili ramenima, kao i za one koji se oporavljaju od povreda ili žive sedentarnim načinom života.",
    ],
    benefits: [
      "Otklanjanje hroničnih bolova",
      "Poboljšanje pokretljivosti zglobova",
      "Razgrađivanje mišićnih adhezija",
      "Poboljšanje posture (držanja tela)",
      "Ubrzanje oporavka od povreda",
      "Smanjenje glavobolja tenzionog tipa",
    ],
    recommendedFor: [
      "Osobe sa hroničnim bolovima u leđima ili vratu",
      "Ljudi sa lošim držanjem tela",
      "Osobe koje se oporavljaju od povreda",
      "Ljudi sa sedentarnim načinom života",
      "Osobe sa mišićnom ukočenošću",
    ],
    contraindications: [
      "Akutne upale ili infekcije",
      "Povišena telesna temperatura",
      "Tromboza ili tromboflebitis",
    ],
    relatedServices: [
      "terapeutska-masaza-parcijalna",
      "deep-tissue-masaza",
      "masaza-ledja-i-vrata",
    ],
    metaTitle: "Terapeutska masaža celog tela Niš | Studio Milina",
    metaDescription:
      "Terapeutska masaža celog tela u Nišu. Otklonite bolove i napetost uz diplomiranu terapetkinju. Zakažite u Studio Milina.",
    imageAlt: "Terapeutska masaža celog tela u Studio Milina Niš",
    imagePlaceholder: "[Slika: Terapeutska masaža]",
    faq: [
      {
        question: "Da li terapeutska masaža pomaže kod bolova u leđima?",
        answer:
          "Da, terapeutska masaža je jedan od najefikasnijih tretmana za bolove u leđima. Koriste se duboke tehnike koje razgrađuju mišićne adhezije, poboljšavaju cirkulaciju i vraćaju pokretljivost. Mnogi klijenti u Studio Milina prijavljuju značajno smanjenje bolova već nakon prvog tretmana.",
      },
      {
        question: "Koliko košta terapeutska masaža celog tela u Nišu?",
        answer:
          "Za aktuelnu cenu terapeutske masaže celog tela u Studio Milina pozovite +381 66 80 60 301. Tretman traje 60 minuta i uključuje detaljan rad na celom telu sa fokusom na problematične zone.",
      },
      {
        question: "Da li je terapeutska masaža bolna?",
        answer:
          'Terapeutska masaža koristi intenzivnije tehnike od relaks masaže, pa se u pojedinim trenucima može osećati nelagodnost, posebno na mestima gde postoje mišićni „čvorovi". Mila uvek prilagođava intenzitet vašem pragu tolerancije i komunikacija tokom tretmana je ključna.',
      },
      {
        question: "Koja je razlika između terapeutske i relaks masaže?",
        answer:
          "Relaks masaža koristi nežne pokrete i fokusira se na opuštanje i smanjenje stresa, dok terapeutska masaža koristi dublje i intenzivnije tehnike za otklanjanje konkretnih bolova i tegoba. Terapeutska masaža je medicinski usmerenija i cilja specifične probleme poput ukočenosti, adhezija i hroničnih bolova.",
      },
    ],
  },
  {
    id: "terapeutska-parcijalna",
    slug: "terapeutska-masaza-parcijalna",
    name: "Terapeutska masaža parcijalna",
    category: "Terapeutske masaže",
    categorySlug: "terapeutske-masaze",
    duration: "30 min",
    price: "[CENA]",
    shortDescription:
      "Intenzivan rad na specifičnoj zoni tela za brzo otklanjanje bolova i ukočenosti.",
    fullDescription: [
      "Terapeutska parcijalna masaža je fokusiran tretman od 30 minuta koji cilja specifično problematično područje. Idealna je kada znate tačno gde vas boli i želite efikasno rešenje.",
      "Mila koristi duboke, ciljane tehnike masaže da obradi problematičnu zonu - bilo da se radi o leđima, vratu, ramenima, nogama ili rukama. Intenzitet se prilagođava vašem pragu tolerancije i specifičnim tegobama.",
      "Ovaj tretman je odličan izbor za redovno održavanje ili kao dopuna punoj terapeutskoj masaži. Mnogi klijenti u Nišu ga biraju kao brzo i efikasno rešenje za nakupljenu napetost.",
    ],
    benefits: [
      "Brzo otklanjanje lokalizovanih bolova",
      "Efikasno iskorišćeno vreme",
      "Ciljana terapija problematične zone",
      "Poboljšanje lokalne cirkulacije",
    ],
    recommendedFor: [
      "Osobe sa lokalizovanim bolom",
      "Ljudi sa ograničenim vremenom",
      "Kao dopuna redovnim tretmanima",
    ],
    relatedServices: [
      "terapeutska-masaza-celog-tela",
      "masaza-ledja-i-vrata",
      "deep-tissue-masaza",
    ],
    metaTitle: "Terapeutska masaža parcijalna Niš | Studio Milina",
    metaDescription:
      "Parcijalna terapeutska masaža u Nišu - 30 minuta ciljanog tretmana za otklanjanje bolova. Studio Milina.",
    imageAlt: "Parcijalna terapeutska masaža Studio Milina Niš",
    imagePlaceholder: "[Slika: Parcijalna terapeutska masaža]",
    faq: [
      {
        question:
          "Kada je bolje izabrati parcijalnu umesto pune terapeutske masaže?",
        answer:
          "Parcijalna terapeutska masaža je idealna kada imate lokalizovan problem - na primer bol samo u vratu ili ramenima - i želite intenzivan fokusiran rad na toj zoni. Ako imate tegobe u više delova tela ili želite kompletnu obradu, bolja opcija je terapeutska masaža celog tela.",
      },
      {
        question:
          "Koliko često treba ići na parcijalnu terapeutsku masažu?",
        answer:
          "Učestalost zavisi od vaših tegoba. Za akutne bolove preporučuju se dva do tri tretmana nedeljno dok se tegobe ne smanje, a zatim jednom nedeljno za održavanje. Za prevenciju je dovoljno jednom do dva puta mesečno.",
      },
      {
        question:
          "Da li parcijalna terapeutska masaža pomaže kod ukočenog vrata?",
        answer:
          "Da, parcijalna terapeutska masaža je odlično rešenje za ukočen vrat. Za 30 minuta Mila intenzivno radi na mišićima vrata i ramena, razgrađuje napetost i poboljšava pokretljivost. Većina klijenata oseća olakšanje odmah nakon tretmana.",
      },
    ],
  },
  {
    id: "masaza-ledja-vrata",
    slug: "masaza-ledja-i-vrata",
    name: "Masaža leđa i vrata",
    category: "Terapeutske masaže",
    categorySlug: "terapeutske-masaze",
    duration: "30 min",
    price: "[CENA]",
    shortDescription:
      "Najtraženiji tretman za otklanjanje bolova i napetosti u leđima, vratu i ramenima.",
    fullDescription: [
      "Masaža leđa i vrata je jedan od najpopularnijih tretmana u Studio Milina u Nišu, i to sa dobrim razlogom. Leđa, vrat i ramena su zone u kojima se nakuplja najveći deo napetosti, posebno kod ljudi koji duge sate provode za računarom ili u nepravilnom položaju.",
      "Tokom 30 minuta, Mila se fokusira na mišiće duž kičmenog stuba, trapezijus mišiće ramena i mišiće vrata. Koristi kombinaciju tehnika - od nežnog zagrevanja do dubinskog rada na trigger tačkama koje su izvor bola.",
      "Ovaj tretman je posebno efikasan za osobe sa cervikalnim sindromom, tenzione glavobolje, kao i za sve koji osećaju ukočenost i bol u gornjem delu tela. Redovna masaža leđa i vrata može značajno poboljšati kvalitet svakodnevnog života.",
    ],
    benefits: [
      "Otklanjanje bolova u leđima i vratu",
      "Smanjenje tenzionih glavobolja",
      "Poboljšanje pokretljivosti vrata i ramena",
      "Korekcija posture",
      "Smanjenje stresa i napetosti",
    ],
    recommendedFor: [
      "Osobe koje rade za računarom",
      "Ljudi sa hroničnim bolovima u leđima",
      "Osobe sa cervikalnim sindromom",
      "Studenti i đaci",
      "Vozači",
    ],
    relatedServices: [
      "terapeutska-masaza-celog-tela",
      "deep-tissue-masaza",
      "terapeutska-masaza-parcijalna",
    ],
    metaTitle: "Masaža leđa i vrata Niš | Studio Milina",
    metaDescription:
      "Masaža leđa i vrata u Nišu. Otklonite bolove i napetost u 30 minuta. Studio Milina - diplomirana terapetkinja.",
    imageAlt: "Masaža leđa i vrata u Studio Milina Niš",
    imagePlaceholder: "[Slika: Masaža leđa i vrata]",
    faq: [
      {
        question:
          "Da li masaža leđa pomaže kod bolova od sedenja za računarom?",
        answer:
          "Apsolutno. Masaža leđa i vrata je najtraženiji tretman upravo kod ljudi koji duge sate provode za računarom. Tretman cilja mišiće koji su najopterećeniji od sedentarnog načina rada - trapezijus, mišiće vrata i paravertebralne mišiće duž kičme.",
      },
      {
        question: "Koliko košta masaža leđa i vrata u Nišu?",
        answer:
          "Za aktuelnu cenu masaže leđa i vrata u Studio Milina kontaktirajte nas na +381 66 80 60 301. Tretman traje 30 minuta i pruža brzo ali efikasno olakšanje od bolova i napetosti u leđima, vratu i ramenima.",
      },
      {
        question: "Da li masaža leđa pomaže kod glavobolje?",
        answer:
          "Da, masaža leđa i vrata je veoma efikasna kod tenzionih glavobolja koje nastaju usled napetosti mišića vrata i ramena. Otklanjanjem trigger tačaka i poboljšanjem cirkulacije u ovoj zoni, mnogi klijenti prijavljuju smanjenje učestalosti i intenziteta glavobolja.",
      },
      {
        question: "Koliko često treba raditi masažu leđa i vrata?",
        answer:
          "Za osobe koje rade sedentarni posao, preporučujemo masažu leđa i vrata jednom nedeljno ili bar dva puta mesečno. Redovnost je ključna za prevenciju hroničnih bolova i održavanje dobre pokretljivosti. Mila će vam predložiti optimalan raspored na osnovu vaših tegoba.",
      },
    ],
  },
  {
    id: "deep-tissue",
    slug: "deep-tissue-masaza",
    name: "Deep tissue masaža",
    category: "Terapeutske masaže",
    categorySlug: "terapeutske-masaze",
    duration: "60 min",
    price: "[CENA]",
    shortDescription:
      "Najdublja masaža za razgrađivanje hroničnih adhezija i otklanjanje dubokih mišićnih bolova.",
    fullDescription: [
      'Deep tissue masaža (masaža dubokih tkiva) je intenzivan tretman koji cilja dublje slojeve mišićnog tkiva, fascija i tetiva. Ova masaža je osmišljena za otklanjanje hroničnih mišićnih problema, adhezija i „čvorova" koji uzrokuju bol i ograničenu pokretljivost.',
      "Mila koristi spore, duboke pokrete i intenzivan pritisak prstima, šakama i laktovima da prodre do najdubljih slojeva mišićnog tkiva. Tehnika se fokusira na razgrađivanje adhezija (vezivnog tkiva koje se formira oko mišićnih vlakana) i oslobađanje hroničnog napona.",
      "Deep tissue masaža može biti intenzivna i ponekad nelagodna, ali rezultati su izuzetni. Nakon tretmana, mnogi klijenti prijavljuju značajno smanjenje bolova i poboljšanje pokretljivosti koje traje danima.",
      "U Studio Milina u Nišu, Mila prilagođava intenzitet deep tissue masaže svakom klijentu individualno, vodeći računa o vašem pragu tolerancije na bol i specifičnim tegobama.",
    ],
    benefits: [
      "Otklanjanje hroničnih mišićnih bolova",
      "Razgrađivanje adhezija i ožiljnog tkiva",
      "Poboljšanje pokretljivosti",
      "Smanjenje upale u mišićima",
      "Rehabilitacija nakon povreda",
      "Snižavanje krvnog pritiska",
    ],
    recommendedFor: [
      "Osobe sa hroničnim bolovima",
      "Sportisti sa mišićnim tegobama",
      "Ljudi sa ograničenom pokretljivošću",
      "Osobe nakon povreda (u fazi rehabilitacije)",
    ],
    contraindications: [
      "Osteoporoza",
      "Tromboza",
      "Akutne upale ili infekcije",
      "Nedavne operacije",
    ],
    relatedServices: [
      "terapeutska-masaza-celog-tela",
      "sportska-masaza-celog-tela",
      "masaza-ledja-i-vrata",
    ],
    metaTitle: "Deep tissue masaža Niš | Studio Milina",
    metaDescription:
      "Deep tissue masaža u Nišu - dubinski rad na mišićima za otklanjanje hroničnih bolova. Studio Milina, diplomirana terapetkinja.",
    imageAlt: "Deep tissue masaža u Studio Milina Niš",
    imagePlaceholder: "[Slika: Deep tissue masaža]",
    faq: [
      {
        question: "Da li je deep tissue masaža bolna?",
        answer:
          'Deep tissue masaža koristi intenzivan pritisak na dublje slojeve mišića, pa se u pojedinim trenucima može osećati nelagodnost, posebno na mestima sa adhezijama ili „čvorovima". Međutim, Mila uvek prilagođava intenzitet vašem pragu tolerancije i nelagodnost ne treba da prelazi u oštar bol.',
      },
      {
        question:
          "Koja je razlika između deep tissue i terapeutske masaže?",
        answer:
          "Deep tissue masaža je intenzivnija podvrsta terapeutske masaže koja cilja najdublje slojeve mišićnog tkiva, fascija i tetiva. Dok klasična terapeutska masaža koristi raznovrsne tehnike umerenog intenziteta, deep tissue se fokusira na spore, duboke pokrete za razgrađivanje hroničnih adhezija.",
      },
      {
        question: "Ko ne bi trebalo da ide na deep tissue masažu?",
        answer:
          "Deep tissue masaža nije preporučljiva za osobe sa osteoporozom, trombozom, akutnim upalama ili infekcijama, kao ni za one koji su nedavno imali operaciju. Ako imate bilo kakvo hronično oboljenje, obavezno konsultujte lekara pre zakazivanja tretmana.",
      },
      {
        question: "Koliko košta deep tissue masaža u Nišu?",
        answer:
          "Za aktuelnu cenu deep tissue masaže u Studio Milina pozovite +381 66 80 60 301 ili posetite naš cenovnik. Tretman traje 60 minuta i uključuje intenzivan dubinski rad prilagođen vašim specifičnim tegobama.",
      },
    ],
  },

  // Sportska masaža
  {
    id: "sportska-celo-telo",
    slug: "sportska-masaza-celog-tela",
    name: "Sportska masaža celog tela",
    category: "Sportska masaža",
    categorySlug: "sportska-masaza",
    duration: "60 min",
    price: "[CENA]",
    shortDescription:
      "Specijalizovana masaža za sportiste - ubrzava oporavak, poboljšava performanse i sprečava povrede.",
    fullDescription: [
      "Sportska masaža celog tela u Studio Milina je specijalizovan tretman dizajniran za aktivne ljude i sportiste. Mila Đorđević, zahvaljujući svom obrazovanju na Fakultetu sporta i fizičkog vaspitanja, duboko razume fiziologiju sporta i specifične potrebe sportista.",
      "Ovaj tretman od 60 minuta kombinuje različite tehnike - od dubokih frikcija i kompresija do istezanja i mobilizacije zglobova. Cilj je ubrzanje oporavka nakon treninga ili takmičenja, prevencija povreda i poboljšanje ukupnih sportskih performansi.",
      "Sportska masaža pomaže u otklanjanju mlečne kiseline iz mišića, smanjuje upalu, poboljšava elastičnost mišićnog tkiva i povećava opseg pokreta u zglobovima. Bilo da ste profesionalni sportista ili rekreativac, ovaj tretman će vam pomoći da se brže oporavite i bolje performirate.",
      "U Nišu, Studio Milina je jedan od retkih studija koji nudi sportsku masažu od strane terapeuta sa formalnim obrazovanjem u oblasti sporta, što garantuje stručan i bezbedan pristup.",
    ],
    benefits: [
      "Ubrzanje oporavka nakon treninga",
      "Prevencija sportskih povreda",
      "Poboljšanje fleksibilnosti i pokretljivosti",
      "Otklanjanje mlečne kiseline iz mišića",
      "Poboljšanje sportskih performansi",
      "Smanjenje mišićne upale",
    ],
    recommendedFor: [
      "Profesionalni sportisti",
      "Rekreativci i fitness entuzijasti",
      "Osobe koje se pripremaju za takmičenje",
      "Sportisti u fazi oporavka",
      "Trkači, biciklisti, plivači i drugi",
    ],
    relatedServices: [
      "sportska-masaza-parcijalna",
      "deep-tissue-masaza",
      "terapeutska-masaza-celog-tela",
    ],
    metaTitle: "Sportska masaža celog tela Niš | Studio Milina",
    metaDescription:
      "Sportska masaža u Nišu za sportiste i aktivne ljude. Ubrzajte oporavak i poboljšajte performanse. Studio Milina - DIF diploma.",
    imageAlt: "Sportska masaža celog tela Studio Milina Niš",
    imagePlaceholder: "[Slika: Sportska masaža]",
    faq: [
      {
        question:
          "Da li sportska masaža pomaže u oporavku nakon treninga?",
        answer:
          "Da, sportska masaža je jedan od najefikasnijih metoda za ubrzanje oporavka nakon intenzivnog treninga. Pomaže u otklanjanju mlečne kiseline, smanjuje mišićnu upalu i poboljšava cirkulaciju, što omogućava brži povratak na trening.",
      },
      {
        question:
          "Kada je najbolje zakazati sportsku masažu - pre ili posle treninga?",
        answer:
          "Zavisi od cilja. Pre treninga ili takmičenja, kratka sportska masaža pomaže u zagrevanju i pripremi mišića. Posle treninga, masaža ubrzava oporavak i smanjuje upalu. Za kompletni oporavak, preporučuje se masaža 24 do 48 sati nakon intenzivnog treninga.",
      },
      {
        question:
          "Da li sportsku masažu mogu raditi i rekreativci, a ne samo profesionalni sportisti?",
        answer:
          "Naravno! Sportska masaža je korisna za svakoga ko je fizički aktivan - od rekreativnih trkača i fitnes entuzijasta do vikend sportista. Mila prilagođava intenzitet i tehniku vašem nivou aktivnosti i specifičnim potrebama.",
      },
      {
        question: "Koliko košta sportska masaža u Nišu?",
        answer:
          "Za aktuelne cene sportske masaže u Studio Milina kontaktirajte nas na +381 66 80 60 301. Tretman celog tela traje 60 minuta, a parcijalna varijanta 30 minuta za ciljani rad na najopterećenijim mišićnim grupama.",
      },
    ],
  },
  {
    id: "sportska-parcijalna",
    slug: "sportska-masaza-parcijalna",
    name: "Sportska masaža parcijalna",
    category: "Sportska masaža",
    categorySlug: "sportska-masaza",
    duration: "30 min",
    price: "[CENA]",
    shortDescription:
      "Ciljana sportska masaža fokusirana na najopterećenije mišićne grupe.",
    fullDescription: [
      "Sportska parcijalna masaža je kraći, fokusirani tretman od 30 minuta namenjen sportistima koji trebaju ciljani rad na specifičnim mišićnim grupama - najčešće nogama, leđima ili ramenima.",
      "Ovaj tretman je idealan pre ili nakon treninga, kada vam je potreban brz ali efikasan oporavak ciljanih mišićnih grupa. Mila koristi intenzivne sportske tehnike prilagođene vašem sportu i specifičnim potrebama.",
      "Mnogi sportisti u Nišu koriste parcijalnu sportsku masažu kao redovni deo svog trenažnog režima, što im pomaže da održe optimalne performanse i smanje rizik od povreda.",
    ],
    benefits: [
      "Brz ciljani oporavak",
      "Priprema mišića pre treninga",
      "Otklanjanje lokalizovane napetosti",
      "Prevencija povreda u opterećenim zonama",
    ],
    recommendedFor: [
      "Sportisti pre ili nakon treninga",
      "Osobe sa specifičnim mišićnim tegobama",
      "Kao dopuna redovnom treningu",
    ],
    relatedServices: [
      "sportska-masaza-celog-tela",
      "deep-tissue-masaza",
      "terapeutska-masaza-parcijalna",
    ],
    metaTitle: "Sportska masaža parcijalna Niš | Studio Milina",
    metaDescription:
      "Parcijalna sportska masaža u Nišu - 30 minuta ciljanog oporavka za sportiste. Studio Milina.",
    imageAlt: "Parcijalna sportska masaža Studio Milina Niš",
    imagePlaceholder: "[Slika: Parcijalna sportska masaža]",
    faq: [
      {
        question:
          "Koje mišićne grupe se najčešće tretiraju parcijalnom sportskom masažom?",
        answer:
          "Najčešće se radi na nogama (butine, listovi, kvadricepsi), leđima ili ramenima - zavisno od sporta kojim se bavite. Trkači obično traže masažu nogu, dok teniseri ili plivači češće trebaju rad na ramenima i rukama.",
      },
      {
        question:
          "Da li mogu da dođem na sportsku masažu odmah posle treninga?",
        answer:
          "Možete, ali je optimalno sačekati barem sat do dva nakon intenzivnog treninga da se telo malo odmori. Direktno nakon treninga preporučuje se lakša varijanta, dok se intenzivniji dubinski rad radi 24 do 48 sati nakon aktivnosti.",
      },
      {
        question: "Da li parcijalna sportska masaža sprečava povrede?",
        answer:
          "Da, redovna sportska masaža značajno smanjuje rizik od povreda. Poboljšava elastičnost mišića, povećava opseg pokreta i pomaže u pravovremenom otkrivanju napetih zona pre nego što prerastu u ozbiljniji problem.",
      },
    ],
  },

  // Anti celulit program
  {
    id: "anti-celulit",
    slug: "anti-celulit-masaza",
    name: "Anti celulit masaža",
    category: "Anti celulit program",
    categorySlug: "anti-celulit-program",
    duration: "45 min",
    price: "[CENA]",
    shortDescription:
      "Intenzivna masaža koja razgrađuje masne naslage i poboljšava izgled kože zahvaćene celulitom.",
    fullDescription: [
      'Anti celulit masaža u Studio Milina je specijalizovan tretman usmeren na smanjenje vidljivosti celulita i poboljšanje teksture kože. Celulit nastaje kada masne ćelije prođu kroz vezivno tkivo ispod kože, stvarajući karakterističan „narančast" izgled.',
      "Tokom 45 minuta, Mila koristi intenzivne tehnike masaže koje uključuju duboko gnječenje, vakuum efekte ručnim tehnikama i limfnu stimulaciju. Ove tehnike pomažu u razgrađivanju masnih naslaga, poboljšanju cirkulacije i limfne drenaže u zahvaćenim područjima.",
      "Za optimalne rezultate, preporučuje se serija od minimum 10 tretmana, dva do tri puta nedeljno. Anti celulit masaža je najefikasnija kada se kombinuje sa zdravom ishranom, redovnom fizičkom aktivnošću i dovoljnim unosom vode.",
      "Studio Milina u Nišu nudi individualni pristup anti celulit programu, gde Mila procenjuje stepen celulita i kreira plan tretmana prilagođen vašim ciljevima.",
    ],
    benefits: [
      "Smanjenje vidljivosti celulita",
      "Poboljšanje teksture i elastičnosti kože",
      "Stimulacija limfnog sistema",
      "Poboljšanje lokalne cirkulacije",
      "Razgrađivanje masnih naslaga",
      "Tonizacija kože",
    ],
    recommendedFor: [
      "Žene sa vidljivim celulitom",
      "Osobe koje žele poboljšanje izgleda kože",
      "Kao deo programa za oblikovanje tela",
    ],
    contraindications: [
      "Proširene vene (varikozne vene)",
      "Akutne kožne bolesti",
      "Trudnoća",
    ],
    relatedServices: [
      "maderoterapija",
      "limfna-drenaza",
      "relaks-masaza-celog-tela",
    ],
    metaTitle: "Anti celulit masaža Niš | Studio Milina",
    metaDescription:
      "Anti celulit masaža u Nišu - efikasno smanjenje celulita i poboljšanje izgleda kože. Zakažite u Studio Milina.",
    imageAlt: "Anti celulit masaža u Studio Milina Niš",
    imagePlaceholder: "[Slika: Anti celulit masaža]",
    faq: [
      {
        question:
          "Koliko tretmana anti celulit masaže je potrebno za vidljive rezultate?",
        answer:
          "Za vidljive rezultate preporučuje se minimum 10 tretmana, dva do tri puta nedeljno. Prve promene na koži se obično primećuju nakon 5 do 6 tretmana. Za trajne rezultate, važno je kombinovati masažu sa zdravom ishranom i fizičkom aktivnošću.",
      },
      {
        question: "Da li je anti celulit masaža bolna?",
        answer:
          "Anti celulit masaža koristi intenzivne tehnike poput dubokog gnječenja i vakuum efekata, pa se u početku može osećati nelagodnost, posebno ako je celulit izraženiji. Kako se tkivo omekšava tokom serije tretmana, nelagodnost se značajno smanjuje.",
      },
      {
        question:
          "Da li anti celulit masaža zaista pomaže protiv celulita?",
        answer:
          "Da, anti celulit masaža efikasno smanjuje vidljivost celulita poboljšanjem cirkulacije, razgrađivanjem masnih naslaga i stimulacijom limfne drenaže. Najbolji rezultati se postižu kada se masaža kombinuje sa zdravim načinom života, dovoljnim unosom vode i redovnom fizičkom aktivnošću.",
      },
      {
        question: "Koliko košta anti celulit masaža u Nišu?",
        answer:
          "Za aktuelnu cenu anti celulit masaže i paketa tretmana u Studio Milina pozovite +381 66 80 60 301. Nudimo i povoljnije pakete za seriju tretmana, jer se za optimalne rezultate preporučuje redovnost.",
      },
    ],
  },
  {
    id: "maderoterapija",
    slug: "maderoterapija",
    name: "Maderoterapija",
    category: "Anti celulit program",
    categorySlug: "anti-celulit-program",
    duration: "45 min",
    price: "[CENA]",
    shortDescription:
      "Tretman drvenim instrumentima koji efikasno razgrađuje celulit i oblikuje telo.",
    fullDescription: [
      'Maderoterapija je inovativna tehnika masaže koja koristi specijalno dizajnirane drvene instrumente za tretiranje celulita, oblikovanje tela i poboljšanje tonusa kože. Reč „madero" dolazi od španske reči za drvo, a ova tehnika potiče iz Kolumbije.',
      "U Studio Milina u Nišu, Mila koristi set profesionalnih drvenih instrumenata različitih oblika - valjke, činije, kockice i druge - svaki dizajniran za specifičnu namenu i deo tela. Drveni instrumenti omogućavaju intenzivniji pritisak i bolju stimulaciju tkiva nego što je moguće samo rukama.",
      "Tretman od 45 minuta uključuje intenzivan rad na najčešće zahvaćenim zonama: butine, stomak, bokovi i zadnjica. Maderoterapija je odlična alternativa ili dopuna klasičnoj anti celulit masaži, a mnoge klijentice prijavljuju vidljive rezultate već nakon prvih nekoliko tretmana.",
      "Za najbolje rezultate, preporučuje se serija od 10 do 15 tretmana, dva puta nedeljno, uz zdrav način života.",
    ],
    benefits: [
      "Efikasno smanjenje celulita",
      "Oblikovanje tela i kontura",
      "Poboljšanje cirkulacije i limfne drenaže",
      "Tonizacija kože",
      "Razgrađivanje masnih naslaga",
      "Prirodan tretman bez hemikalija",
    ],
    recommendedFor: [
      "Žene koje žele oblikovanje tela",
      "Osobe sa celulitom II-IV stepena",
      "Kao dopuna programu mršavljenja",
      "Ljubiteljice prirodnih tretmana",
    ],
    contraindications: [
      "Proširene vene",
      "Kožne infekcije ili rane",
      "Trudnoća",
      "Tromboza",
    ],
    relatedServices: [
      "anti-celulit-masaza",
      "limfna-drenaza",
      "relaks-masaza-celog-tela",
    ],
    metaTitle: "Maderoterapija Niš | Studio Milina",
    metaDescription:
      "Maderoterapija u Nišu - oblikovanje tela i smanjenje celulita drvenim instrumentima. Studio Milina, sertifikovana terapetkinja.",
    imageAlt: "Maderoterapija tretman u Studio Milina Niš",
    imagePlaceholder: "[Slika: Maderoterapija tretman]",
    faq: [
      {
        question: "Šta je maderoterapija i kako funkcioniše?",
        answer:
          "Maderoterapija je tehnika masaže koja koristi specijalno dizajnirane drvene instrumente za intenzivan rad na tkivu. Drveni alati omogućavaju jači pritisak i bolju stimulaciju nego ručne tehnike, što efikasno razgrađuje celulit, poboljšava cirkulaciju i oblikuje telo.",
      },
      {
        question:
          "Da li je maderoterapija bolja od klasične anti celulit masaže?",
        answer:
          "Maderoterapija i klasična anti celulit masaža su komplementarni tretmani. Maderoterapija omogućava intenzivniji i dubinski rad zahvaljujući drvenim instrumentima, dok klasična masaža pruža svestraniji pristup. Mnoge klijentice postižu najbolje rezultate kombinovanjem oba tretmana.",
      },
      {
        question: "Koliko košta maderoterapija u Nišu?",
        answer:
          "Za aktuelnu cenu maderoterapije u Studio Milina i informacije o paketima tretmana pozovite +381 66 80 60 301. Nudimo pakete za seriju tretmana jer se za optimalne rezultate preporučuje 10 do 15 sesija.",
      },
      {
        question: "Da li maderoterapija ostavlja modrice?",
        answer:
          "Modrice su retke, ali se mogu pojaviti kod osoba sa osetljivom kožom ili izraženijim celulitom, posebno nakon prvih tretmana. Mila prilagođava intenzitet vašoj osetljivosti i tkivo se brzo navikne na tretman, tako da eventualne modrice nestaju tokom serije.",
      },
    ],
  },

  // Specijalne masaže
  {
    id: "masaza-trudnica",
    slug: "masaza-trudnica",
    name: "Masaža trudnica",
    category: "Specijalne masaže",
    categorySlug: "specijalne-masaze",
    duration: "45 min",
    price: "[CENA]",
    shortDescription:
      "Nežna i bezbedna masaža prilagođena potrebama trudnica za olakšanje tegoba u trudnoći.",
    fullDescription: [
      "Masaža trudnica u Studio Milina je posebno prilagođen tretman koji pomaže budućim mamama da se nose sa fizičkim promenama i tegobama koje trudnoća donosi. Mila Đorđević poseduje specijalizovane sertifikate za rad sa trudnicama i poznaje sve specifičnosti ovog delikatnog perioda.",
      "Tokom 45 minuta, koriste se isključivo nežne i bezbedne tehnike, sa posebnim položajem tela koji obezbeđuje udobnost i sigurnost za mamu i bebu. Posebna pažnja se poklanja leđima, nogama i stopalima - zonama koje su najopterećenije tokom trudnoće.",
      "Masaža trudnica pomaže u ublažavanju bolova u leđima, smanjenju otoka nogu i stopala, poboljšanju cirkulacije i smanjenju stresa i anksioznosti. Mnoge trudnice u Nišu beleže da im redovna masaža značajno poboljšava kvalitet sna i opšte raspoloženje.",
      "Preporučuje se od drugog trimestra trudnoće (nakon 12. nedelje) i uz prethodni pristanak ginekologa. U Studio Milina, bezbednost i udobnost trudnice su uvek na prvom mestu.",
    ],
    benefits: [
      "Ublažavanje bolova u leđima",
      "Smanjenje otoka nogu i stopala",
      "Poboljšanje cirkulacije",
      "Smanjenje stresa i anksioznosti",
      "Poboljšanje kvaliteta sna",
      "Emocionalno opuštanje",
    ],
    recommendedFor: [
      "Trudnice od drugog trimestra",
      "Žene sa bolovima u leđima tokom trudnoće",
      "Trudnice sa otokom nogu",
      "Buduće mame pod stresom",
    ],
    contraindications: [
      "Trudnoća pre 12. nedelje (prvi trimestar)",
      "Komplikacije u trudnoći",
      "Bez saglasnosti ginekologa",
      "Preeklampsija",
    ],
    relatedServices: [
      "relaks-masaza-celog-tela",
      "masaza-stopala-reflexology",
      "masaza-ledja-i-vrata",
    ],
    metaTitle: "Masaža trudnica Niš | Studio Milina",
    metaDescription:
      "Bezbedna masaža za trudnice u Nišu. Ublažite bolove i opustite se tokom trudnoće. Studio Milina - sertifikovana terapetkinja.",
    imageAlt: "Masaža trudnica u Studio Milina Niš",
    imagePlaceholder: "[Slika: Masaža trudnica]",
    faq: [
      {
        question: "Da li je masaža trudnica bezbedna?",
        answer:
          "Da, masaža trudnica je potpuno bezbedna kada je radi obučeni terapeut i uz saglasnost ginekologa. U Studio Milina Mila poseduje specijalizovane sertifikate za rad sa trudnicama i koristi isključivo nežne tehnike sa posebnim položajima koji obezbeđuju sigurnost mame i bebe.",
      },
      {
        question: "Od kog meseca trudnoće mogu da idem na masažu?",
        answer:
          "Masaža trudnica se preporučuje od drugog trimestra, odnosno nakon 12. nedelje trudnoće. Pre zakazivanja je neophodno dobiti saglasnost vašeg ginekologa. U prvom trimestru masaža se ne preporučuje iz predostrožnosti.",
      },
      {
        question: "Da li masaža u trudnoći pomaže kod oteklih nogu?",
        answer:
          "Da, masaža trudnica je veoma efikasna za smanjenje otoka nogu i stopala koji je čest u trudnoći. Nežne tehnike poboljšavaju cirkulaciju i limfnu drenažu, što pomaže u smanjenju zadržavanja tečnosti. Mnoge trudnice u Nišu prijavljuju značajno olakšanje nakon tretmana.",
      },
      {
        question: "Koliko košta masaža trudnica u Nišu?",
        answer:
          "Za aktuelnu cenu masaže trudnica u Studio Milina pozovite +381 66 80 60 301. Tretman traje 45 minuta i uključuje posebno prilagođene tehnike za bezbedno i prijatno iskustvo tokom trudnoće.",
      },
    ],
  },
  {
    id: "masaza-lica-vrata",
    slug: "masaza-lica-i-vrata",
    name: "Masaža lica i vrata",
    category: "Specijalne masaže",
    categorySlug: "specijalne-masaze",
    duration: "30 min",
    price: "[CENA]",
    shortDescription:
      "Osvežavajuća masaža koja opušta mišiće lica, smanjuje napetost i poboljšava ten.",
    fullDescription: [
      "Masaža lica i vrata je tretman koji kombinuje estetske i terapeutske benefite. U 30 minuta, Mila nežno obrađuje mišiće lica, čela, vilice, vrata i dekoltea, koristeći tehnike koje stimulišu cirkulaciju, opuštaju napete mišiće i poboljšavaju tonus kože.",
      "Ovaj tretman je posebno koristan za osobe koje pate od tenzionih glavobolja, stiskanja vilice (bruksizam) ili jednostavno žele da osvere i podmlare izgled lica. Masaža lica stimuliše produkciju kolagena i poboljšava cirkulaciju, što rezultira zdravijim i sjajnijim tenom.",
      "U Studio Milina u Nišu, masaža lica i vrata se može raditi kao samostalan tretman ili kao dopuna bilo kojoj masaži celog tela za kompletno iskustvo opuštanja.",
    ],
    benefits: [
      "Opuštanje mišića lica i vilice",
      "Smanjenje tenzionih glavobolja",
      "Poboljšanje cirkulacije u licu",
      "Zdraviji i sjajniji ten",
      "Smanjenje znakova stresa na licu",
      "Duboko opuštanje",
    ],
    recommendedFor: [
      "Osobe sa tenzionim glavoboljama",
      "Ljudi koji stiskaju vilicu (bruksizam)",
      "Osobe koje žele bolji ten",
      "Kao dopuna masaži celog tela",
    ],
    relatedServices: [
      "relaks-masaza-celog-tela",
      "aromaterapija-masaza",
      "masaza-ledja-i-vrata",
    ],
    metaTitle: "Masaža lica i vrata Niš | Studio Milina",
    metaDescription:
      "Masaža lica i vrata u Nišu - osvežavanje, opuštanje i bolji ten. 30 minuta u Studio Milina.",
    imageAlt: "Masaža lica i vrata Studio Milina Niš",
    imagePlaceholder: "[Slika: Masaža lica i vrata]",
    faq: [
      {
        question:
          "Da li masaža lica pomaže kod bruksizma (stiskanja vilice)?",
        answer:
          "Da, masaža lica je veoma efikasna za osobe koje stiskaju vilicu ili škrgću zubima. Tretman opušta žvačne mišiće i mišiće vilice, smanjuje napetost i može značajno ublažiti simptome bruksizma kao što su bol u vilici i tenzione glavobolje.",
      },
      {
        question: "Da li masaža lica poboljšava izgled kože?",
        answer:
          "Da, masaža lica stimuliše cirkulaciju i limfnu drenažu, što poboljšava tonus kože, smanjuje podočnjake i daje zdraviji sjaj tenu. Redovnom masažom se stimuliše i produkcija kolagena, što doprinosi čvrstoći i elastičnosti kože.",
      },
      {
        question: "Koliko košta masaža lica i vrata u Nišu?",
        answer:
          "Za aktuelnu cenu masaže lica i vrata u Studio Milina pozovite +381 66 80 60 301. Tretman traje 30 minuta i može se raditi kao samostalan ili kao dopuna masaži celog tela za kompletno iskustvo opuštanja.",
      },
    ],
  },
  {
    id: "masaza-stopala",
    slug: "masaza-stopala-reflexology",
    name: "Masaža stopala / Reflexology",
    category: "Specijalne masaže",
    categorySlug: "specijalne-masaze",
    duration: "30 min",
    price: "[CENA]",
    shortDescription:
      "Refleksologija stopala - stimulacija refleksnih tačaka za poboljšanje zdravlja celog organizma.",
    fullDescription: [
      "Refleksologija (masaža stopala) je drevna tehnika koja se zasniva na principu da na stopalima postoje refleksne tačke koje odgovaraju svim organima i sistemima u telu. Stimulacijom ovih tačaka, pomaže se telu da postigne prirodnu ravnotežu i poboljša funkcionisanje.",
      "Tokom 30 minuta, Mila precizno obrađuje svako stopalo, primenjujući pritisak na specifične refleksne zone. Tretman počinje opuštanjem stopala, a zatim se prelazi na ciljanu stimulaciju tačaka koje odgovaraju vašim zdravstvenim potrebama.",
      "Refleksologija može pomoći kod najrazličitijih tegoba - od problema sa varenjem i glavobolja, do nesanice i hormonskog disbalansa. Osim specifičnih benefita, ovaj tretman pruža duboko opuštanje i osećaj blagostanja.",
      "U Studio Milina u Nišu, refleksologija je jedan od omiljenih tretmana među klijentima koji preferiraju holistički pristup zdravlju.",
    ],
    benefits: [
      "Poboljšanje funkcije organa",
      "Duboko opuštanje celog tela",
      "Smanjenje stresa i anksioznosti",
      "Poboljšanje cirkulacije",
      "Ublažavanje glavobolja",
      "Poboljšanje kvaliteta sna",
    ],
    recommendedFor: [
      "Ljubitelji holističkog pristupa zdravlju",
      "Osobe sa problemima sa cirkulacijom",
      "Ljudi koji dugo stoje na poslu",
      "Osobe sa nesanicom",
    ],
    relatedServices: [
      "relaks-masaza-celog-tela",
      "masaza-trudnica",
      "aromaterapija-masaza",
    ],
    metaTitle: "Reflexology masaža stopala Niš | Studio Milina",
    metaDescription:
      "Refleksologija - masaža stopala u Nišu. Stimulacija refleksnih tačaka za zdravlje celog tela. Studio Milina.",
    imageAlt: "Refleksologija masaža stopala Studio Milina Niš",
    imagePlaceholder: "[Slika: Refleksologija masaža stopala]",
    faq: [
      {
        question: "Kako refleksologija stopala pomaže celom telu?",
        answer:
          "Na stopalima se nalaze refleksne tačke koje odgovaraju svim organima i sistemima u telu. Stimulacijom ovih tačaka poboljšava se cirkulacija, podstiče se rad organa i pomaže telu da postigne prirodnu ravnotežu. To je razlog zašto masaža stopala može pozitivno uticati na zdravlje celog organizma.",
      },
      {
        question: "Da li je refleksologija bolna?",
        answer:
          "Refleksologija generalno nije bolna, ali pritisak na određene refleksne tačke može biti intenzivniji, posebno ako postoji disbalans u odgovarajućem organu ili sistemu. Mila prilagođava intenzitet vašoj osetljivosti i većina klijenata opisuje tretman kao veoma prijatan.",
      },
      {
        question: "Da li refleksologija pomaže kod nesanice?",
        answer:
          "Da, refleksologija je veoma efikasna kod problema sa spavanjem. Stimulacija refleksnih tačaka za mozak i nervni sistem pomaže u opuštanju i regulaciji sna. Mnogi klijenti prijavljuju značajno poboljšanje kvaliteta sna nakon redovnih tretmana refleksologije.",
      },
      {
        question: "Koliko košta refleksologija u Nišu?",
        answer:
          "Za aktuelnu cenu refleksologije (masaže stopala) u Studio Milina pozovite +381 66 80 60 301. Tretman traje 30 minuta i pruža duboko opuštanje sa pozitivnim efektima na ceo organizam.",
      },
    ],
  },
  {
    id: "hot-stone",
    slug: "hot-stone-masaza",
    name: "Hot stone masaža",
    category: "Specijalne masaže",
    categorySlug: "specijalne-masaze",
    duration: "60 min",
    price: "[CENA]",
    shortDescription:
      "Luksuzna masaža toplim vulkanskim kamenjem koja pruža duboko opuštanje i otklanja napetost.",
    fullDescription: [
      "Hot stone masaža (masaža toplim kamenjem) je luksuzni tretman koji kombinuje klasične masažne tehnike sa terapeutskim dejstvom zagrejanih bazaltnih kamenja. Vulkanski kamen prirodno zadržava toplotu i polako je oslobađa u mišićno tkivo, omogućavajući dublje opuštanje nego što je moguće samo rukama.",
      "Tokom 60 minuta, Mila postavlja zagrejane kamenje na ključne energetske tačke tela - duž kičmenog stuba, na dlanove, stopala i druge zone. Istovremeno koristi kamenje kao alat za masažu, kombinujući ga sa ručnim tehnikama za potpuno iskustvo.",
      "Toplota kamenja prodire duboko u mišiće, poboljšava cirkulaciju, otklanja napetost i stvara osećaj duboke relaksacije. Mnogi klijenti opisuju hot stone masažu kao jedno od najopuštajućih iskustava koje su doživeli.",
      "Hot stone masaža u Studio Milina u Nišu je idealan izbor za posebne prilike, poklon vauchere ili kada želite da se počastite premium tretmanom.",
    ],
    benefits: [
      "Izuzetno duboko opuštanje",
      "Otklanjanje mišićne napetosti toplinom",
      "Poboljšanje cirkulacije",
      "Smanjenje stresa i anksioznosti",
      "Ublažavanje bolova u mišićima",
      "Poboljšanje kvaliteta sna",
    ],
    recommendedFor: [
      "Ljubitelji premium tretmana",
      "Osobe sa hroničnom napetošću",
      "Kao poklon za posebne prilike",
      "Ljudi koji žele duboko opuštanje",
    ],
    contraindications: [
      "Dijabetes (oštećena senzitivnost na toplotu)",
      "Kardiovaskularne bolesti",
      "Kožne bolesti ili rane",
      "Trudnoća",
    ],
    relatedServices: [
      "relaks-masaza-celog-tela",
      "aromaterapija-masaza",
      "masaza-lica-i-vrata",
    ],
    metaTitle: "Hot stone masaža Niš | Studio Milina",
    metaDescription:
      "Hot stone masaža u Nišu - luksuzni tretman toplim vulkanskim kamenjem. 60 minuta dubokog opuštanja u Studio Milina.",
    imageAlt: "Hot stone masaža u Studio Milina Niš",
    imagePlaceholder: "[Slika: Hot stone masaža toplim kamenjem]",
    faq: [
      {
        question:
          "Da li su kamenje vruća i da li mogu da izazovu opekotine?",
        answer:
          "Kamenje se zagreva na optimalnu temperaturu koja je prijatna za kožu i ne izaziva opekotine. Mila pažljivo kontroliše temperaturu pre postavljanja na telo i uvek proverava da li vam je prijatno. Ako osetite da je previše toplo, dovoljno je da kažete i temperatura će se prilagoditi.",
      },
      {
        question: "Koliko košta hot stone masaža u Nišu?",
        answer:
          "Za aktuelnu cenu hot stone masaže u Studio Milina pozovite +381 66 80 60 301. Ovo je premium tretman od 60 minuta koji kombinuje toplinu vulkanskog kamenja sa ručnim masažnim tehnikama za izuzetno duboko opuštanje.",
      },
      {
        question: "Da li je hot stone masaža dobra kao poklon?",
        answer:
          "Hot stone masaža je jedan od najpopularnijih izbora za poklon vaučere jer pruža luksuzno iskustvo koje većina ljudi ne bi priuštila sebi u svakodnevici. U Studio Milina možete kupiti poklon vaučer za ovu ili bilo koju drugu masažu - kontaktirajte nas za detalje.",
      },
      {
        question: "Ko ne bi trebalo da ide na hot stone masažu?",
        answer:
          "Hot stone masaža nije preporučljiva za osobe sa dijabetesom (zbog smanjene osetljivosti na toplotu), kardiovaskularnim bolestima, kožnim oboljenjima ili otvorenim ranama, kao ni za trudnice. Ako imate bilo kakvo hronično oboljenje, konsultujte lekara pre zakazivanja.",
      },
    ],
  },
  {
    id: "limfna-drenaza",
    slug: "limfna-drenaza",
    name: "Limfna drenaža",
    category: "Specijalne masaže",
    categorySlug: "specijalne-masaze",
    duration: "60 min",
    price: "[CENA]",
    shortDescription:
      "Nežna masaža koja stimuliše limfni sistem, smanjuje otoke i poboljšava detoksikaciju organizma.",
    fullDescription: [
      "Limfna drenaža je specijalizovana tehnika masaže koja stimuliše protok limfe kroz limfni sistem. Limfni sistem je ključan za imunitet, detoksikaciju i regulaciju tečnosti u telu. Kada limfni sistem ne funkcioniše optimalno, dolazi do nakupljanja tečnosti (otoka), smanjenog imuniteta i osećaja umora.",
      "Tokom 60 minuta, Mila koristi izuzetno nežne, ritmiče pokrete u specifičnom smeru - prateći tok limfnih sudova ka limfnim čvorovima. Ova tehnika je potpuno bezbolna i veoma opuštajuća, iako su njeni efekti duboki i dalekosežni.",
      "Limfna drenaža je posebno korisna nakon operacija, za smanjenje otoka, kod hroničnog umora, problema sa zadržavanjem vode i kao podrška imunološkom sistemu. Mnoge žene je koriste i kao deo anti celulit programa jer pomaže u eliminaciji toksina i viška tečnosti.",
      "U Studio Milina u Nišu, Mila je obučena za manuelnu limfnu drenažu i prilagođava tretman individualnim potrebama svakog klijenta.",
    ],
    benefits: [
      "Smanjenje otoka i zadržavanja tečnosti",
      "Jačanje imunološkog sistema",
      "Detoksikacija organizma",
      "Ubrzanje oporavka nakon operacija",
      "Smanjenje celulita",
      "Poboljšanje kvaliteta kože",
    ],
    recommendedFor: [
      "Osobe sa otokom nogu ili ruku",
      "Nakon hirurških intervencija",
      "Osobe sa slabim imunitetom",
      "Kao deo anti celulit programa",
      "Ljudi sa hroničnim umorom",
    ],
    contraindications: [
      "Akutne infekcije",
      "Maligna oboljenja (bez konsultacije sa lekarom)",
      "Srčana insuficijencija",
      "Tromboza",
    ],
    relatedServices: [
      "anti-celulit-masaza",
      "maderoterapija",
      "relaks-masaza-celog-tela",
    ],
    metaTitle: "Limfna drenaža Niš | Studio Milina",
    metaDescription:
      "Limfna drenaža u Nišu - smanjenje otoka, detoksikacija i jačanje imuniteta. 60 minuta u Studio Milina.",
    imageAlt: "Limfna drenaža masaža Studio Milina Niš",
    imagePlaceholder: "[Slika: Limfna drenaža]",
    faq: [
      {
        question: "Da li limfna drenaža pomaže kod otečenih nogu?",
        answer:
          "Da, limfna drenaža je jedan od najefikasnijih tretmana za smanjenje otoka nogu. Nežni, ritmiči pokreti stimulišu limfni sistem da efikasnije odvodi višak tečnosti iz tkiva. Rezultati su vidljivi već nakon prvog tretmana, a redovnim tretmanima se postiže trajno poboljšanje.",
      },
      {
        question: "Da li je limfna drenaža bolna?",
        answer:
          "Ne, limfna drenaža je potpuno bezbolna. Koriste se izuzetno nežni, lagani pokreti koji prate tok limfnih sudova. Većina klijenata opisuje tretman kao veoma opuštajući i prijatan, a mnogi čak i zaspe tokom sesije.",
      },
      {
        question: "Da li limfna drenaža jača imunitet?",
        answer:
          "Da, limfni sistem igra ključnu ulogu u imunološkoj odbrani organizma. Stimulacijom limfnog toka poboljšava se transport imunskih ćelija i efikasnije se uklanjaju toksini i otpadne materije iz tela, što direktno doprinosi jačem imunitetu.",
      },
      {
        question: "Koliko košta limfna drenaža u Nišu?",
        answer:
          "Za aktuelnu cenu limfne drenaže u Studio Milina pozovite +381 66 80 60 301. Tretman traje 60 minuta i preporučuje se u seriji za optimalne rezultate, posebno kod izraženijih otoka ili kao deo anti celulit programa.",
      },
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Relaksacione masaže",
    slug: "relaksacione-masaze",
    services: services.filter(
      (s) => s.categorySlug === "relaksacione-masaze",
    ),
  },
  {
    name: "Terapeutske masaže",
    slug: "terapeutske-masaze",
    services: services.filter(
      (s) => s.categorySlug === "terapeutske-masaze",
    ),
  },
  {
    name: "Sportska masaža",
    slug: "sportska-masaza",
    services: services.filter((s) => s.categorySlug === "sportska-masaza"),
  },
  {
    name: "Anti celulit program",
    slug: "anti-celulit-program",
    services: services.filter(
      (s) => s.categorySlug === "anti-celulit-program",
    ),
  },
  {
    name: "Specijalne masaže",
    slug: "specijalne-masaze",
    services: services.filter(
      (s) => s.categorySlug === "specijalne-masaze",
    ),
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => s !== undefined);
}
