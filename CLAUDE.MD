# CLAUDE.md — Studio Milina | milinamasaza.com

## PROJEKAT

Napravi kompletnu multi page website aplikaciju za Studio Milina, profesionalni studio za masažu u Nišu. Sajt mora da bude apsolutno premium kvaliteta, vizuelno na nivou luksuznih spa brendova, sa fokusom na lokalni SEO za Niš i okolinu, i AEO (Answer Engine Optimization) za AI pretraživače. Ovo nije običan sajt za masažu. Ovo je sajt koji treba da izgleda kao da ga je pravila ozbiljna agencija za luxury wellness brend.

## TEHNIČKI STACK

- React 19 + Vite + TypeScript
- React Router v7 za multi page routing
- Tailwind CSS 4
- Framer Motion za animacije (scroll reveal, staggered entrances, parallax efekti, hover micro interactions)
- React Helmet Async za SEO meta tagove (unique title, description, OG tagovi za svaku stranicu)
- Sajt mora biti fully responsive (mobile first pristup)
- Lazy loading za sve slike
- Optimizovane Web Vitals (LCP, CLS, FID)
- Code splitting po stranicama (React.lazy + Suspense)

## INFORMACIJE O BIZNISU

- **Naziv:** Studio Milina
- **Vlasnica:** Mila Đorđević
- **Lokacija:** Niš, Srbija (tačnu adresu staviti kao placeholder "[ADRESA STUDIJA]" jer je nemamo)
- **Telefon:** +381 66 80 60 301
- **Instagram:** @studio.milina (link: https://www.instagram.com/studio.milina/)
- **Domen:** milinamasaza.com
- **Email:** placeholder "[EMAIL]" jer ga nemamo

## O MILI (za About stranicu)

Mila Đorđević je diplomirana profesionalna maserka iz Niša. Završila je Fakultet sporta i fizičkog vaspitanja (DIF) i trenutno je na master studijama. Poseduje brojne sertifikate i završene obuke za različite tehnike masaže. Njena stručnost kombinuje akademsko obrazovanje iz oblasti fizičke kulture sa praktičnim specijalizacijama u masažnim tehnikama, što je čini jednom od najkvalifikovanijih terapeuta u Nišu.

---

## STRUKTURA STRANICA I ROUTING

Sajt ima sledeće stranice sa jasno definisanim URL rutama:

### 1. POČETNA STRANICA (/)

#### Hero sekcija
- Fullscreen hero sa overlay tamnim gradijentom preko pozadinske slike (placeholder)
- Glavni naslov: "Studio Milina" sa elegantnom serif tipografijom
- Podnaslov: "Profesionalna masaža u Nišu"
- CTA dugme "Zakažite termin" koje vodi na /kontakt
- CTA dugme "Pogledajte usluge" koje vodi na /usluge
- Parallax efekat na pozadinskoj slici
- Floating badge sa tekstom "Diplomirana terapetkinja | DIF Niš"

#### Kratko o studiju (preview)
- 2 do 3 rečenice o Mili i studiju
- CTA link "Saznajte više o nama" ka /o-nama
- Slika placeholder levo, tekst desno

#### Izdvojene usluge (preview)
- 4 do 6 najpopularnijih tretmana u card formatu
- Svaka kartica: naziv, kratki opis (1 rečenica), ikona
- CTA "Sve usluge" ka /usluge

#### Zašto Studio Milina (USP sekcija)
- 4 kolone sa ikonama i kratkim tekstom
- "Diplomirana terapetkinja (DIF)", "Individualni pristup svakom klijentu", "Sertifikovane tehnike masaže", "Prijatan ambijent u centru Niša"

#### Proces zakazivanja
- Vizuelni stepper (3 koraka): Pozovite nas > Dogovorimo termin > Uživajte u tretmanu
- CTA dugme za poziv (tel: link) i WhatsApp link

#### Utisci klijenata (Testimonials preview)
- 3 do 4 recenzije u carousel formatu
- Placeholder: "[IME KLIJENTA]", "[TEKST RECENZIJE]"
- Zvezdice (5/5)

#### CTA sekcija pre footera
- Full width sekcija sa pozadinom u tamnoj boji
- Naslov: "Zakažite svoj termin danas"
- Telefon, WhatsApp, link ka /kontakt

---

### 2. USLUGE (/usluge)

Stranica sa svim tretmanima, grupisanim po kategorijama. Svaki tretman ima svoju karticu sa kratkim opisom. Svaka kartica linkuje na individual stranicu tretmana.

**Kategorije i tretmani:**

**Relaksacione masaže:**
- Relaks masaža celog tela (60 min)
- Relaks masaža parcijalna (30 min)
- Aromaterapija masaža (60 min)

**Terapeutske masaže:**
- Terapeutska masaža celog tela (60 min)
- Terapeutska masaža parcijalna (30 min)
- Masaža leđa i vrata (30 min)
- Deep tissue masaža (60 min)

**Sportska masaža:**
- Sportska masaža celog tela (60 min)
- Sportska masaža parcijalna (30 min)

**Anti celulit program:**
- Anti celulit masaža (45 min)
- Maderoterapija (45 min)

**Specijalne masaže:**
- Masaža trudnica (45 min)
- Masaža lica i vrata (30 min)
- Masaža stopala / reflexology (30 min)
- Hot stone masaža (60 min)
- Limfna drenaža (60 min)

#### Individualne stranice tretmana (/usluge/[slug])

Svaki tretman ima svoju podstranicu sa:
- Naslov tretmana (H1)
- Detaljan opis (3 do 5 pasusa) koji objašnjava šta je tretman, za koga je, koje su dobrobiti, kako izgleda sesija. Tekst pisan prirodno, optimizovan za SEO i AEO.
- Trajanje i cena (placeholder "[CENA]")
- Slika placeholder
- Za koga se preporučuje (bullet lista)
- Kontraindikacije (ako ih ima)
- CTA "Zakažite ovaj tretman" sa linkom ka /kontakt?tretman=[naziv]
- Sidebar ili donji deo: linkovi ka srodnim tretmanima
- Breadcrumb navigacija: Početna > Usluge > [Naziv tretmana]
- Unique meta title i description za svaku podstranicu (npr. "Relaks masaža Niš | Studio Milina" i odgovarajući meta description)

---

### 3. CENOVNIK (/cenovnik)

- Tabela ili strukturiran prikaz svih tretmana sa cenama
- Grupisano po kategorijama (iste kategorije kao na /usluge)
- Kolone: Tretman, Trajanje, Cena
- Sve cene placeholder "[CENA]"
- Napomena na dnu: "Cene su izražene u dinarima. Za pakete i popuste kontaktirajte nas."
- CTA sekcija na dnu: "Zakažite termin" sa telefonom i WhatsApp linkom
- Meta title: "Cenovnik masaža | Studio Milina Niš"
- Schema.org: PriceSpecification za svaku uslugu

---

### 4. O NAMA (/o-nama)

- Velika hero sekcija sa slikom Mile (placeholder)
- Profesionalna biografija (4 do 5 pasusa):
  - Obrazovanje: DIF diploma, master studije
  - Sertifikati i obuke (placeholder lista: "[SERTIFIKAT 1]", "[SERTIFIKAT 2]", itd. minimum 6 placeholdera)
  - Filozofija rada i pristup klijentima
  - Zašto je osnovala Studio Milina
- Timeline ili milestone sekcija sa ključnim tačkama karijere (placeholder datumi)
- Sekcija o samom studiju: ambijent, oprema, lokacija
- Galerija (6+ placeholder slika studija i rada)
- CTA: "Zakažite termin" na dnu stranice
- Meta title: "O nama | Mila Đorđević | Studio Milina Niš"

---

### 5. BLOG (/blog)

Blog sekcija sa člancima o masaži, zdravlju i wellnessu. Ovo je ključno za SEO sadržajnu strategiju.

#### Blog listing stranica (/blog)
- Grid prikaz blog postova (kartice sa slikom, naslovom, kratkim izvodom, datumom)
- Minimum 6 placeholder blog postova
- Paginacija ili "Učitaj još" dugme
- Sidebar ili filter po kategorijama
- Meta title: "Blog o masaži i zdravlju | Studio Milina Niš"

#### Individualne blog stranice (/blog/[slug])

Napravi pun sadržaj za minimum 6 blog postova. Svaki post mora biti 800 do 1200 reči, pisan na srpskom, optimizovan za SEO i AEO. Postovi moraju biti informativni, stručni i korisni.

**Predlozi za blog postove:**

1. **"5 razloga zašto vam je potrebna redovna masaža"** (/blog/zasto-redovna-masaza)
   - Ključne reči: masaža Niš, benefiti masaže, redovna masaža
   
2. **"Razlika između relaks i terapeutske masaže: Kako izabrati pravu za vas"** (/blog/relaks-vs-terapeutska-masaza)
   - Ključne reči: relaks masaža Niš, terapeutska masaža Niš
   
3. **"Masaža za sportiste: Zašto je sportska masaža neophodna za oporavak"** (/blog/sportska-masaza-oporavak)
   - Ključne reči: sportska masaža Niš, oporavak sportista
   
4. **"Anti celulit masaža i maderoterapija: Šta očekivati od tretmana"** (/blog/anti-celulit-masaza-maderoterapija)
   - Ključne reči: anti celulit masaža Niš, maderoterapija Niš
   
5. **"Masaža u trudnoći: Da li je bezbedna i koje su dobrobiti"** (/blog/masaza-u-trudnoci)
   - Ključne reči: masaža trudnica Niš, prenatalna masaža
   
6. **"Kako se pripremiti za prvu masažu: Vodič za početnike"** (/blog/priprema-za-prvu-masazu)
   - Ključne reči: prva masaža, priprema za masažu, masaža Niš

Svaki blog post ima:
- H1 naslov
- Datum objave
- Autor: Mila Đorđević
- Sadržaj sa H2 i H3 podnaslovima
- Slike (placeholder)
- Internal linkovi ka relevantnim uslugama (npr. u postu o sportskoj masaži, link ka /usluge/sportska-masaza)
- CTA na dnu: "Zainteresovani? Zakažite termin u Studio Milina"
- Breadcrumb: Početna > Blog > [Naslov posta]
- Schema.org: Article/BlogPosting
- Unique meta title i description
- Social share dugmad (Facebook, Instagram, copy link)

---

### 6. ČESTA PITANJA (/najcesca-pitanja)

- Accordion stil
- Minimum 12 pitanja i odgovora:
  1. Kako da zakažem termin u Studio Milina?
  2. Koliko traje tretman masaže?
  3. Da li je potrebna prethodna priprema za masažu?
  4. Koje su kontraindikacije za masažu?
  5. Da li Studio Milina radi vikendom?
  6. Gde se nalazi Studio Milina u Nišu?
  7. Kako se vrši plaćanje?
  8. Da li radite masažu trudnica?
  9. Koliko često treba ići na masažu?
  10. Da li masaža pomaže kod bolova u leđima?
  11. Koja je razlika između relaks i deep tissue masaže?
  12. Da li mogu da dobijem poklon vaučer za masažu?
- Odgovori napisani prirodnim jezikom, 3 do 5 rečenica po odgovoru
- Optimizovani za AEO (AI pretraživače)
- Schema.org: FAQPage
- Meta title: "Najčešća pitanja o masaži | Studio Milina Niš"

---

### 7. KONTAKT (/kontakt)

- Kontakt forma sa poljima: Ime, Telefon, Email (opciono), Poruka, Odabir tretmana (dropdown sa svim tretmanima)
- Forma prima query parameter ?tretman= za pre-popunjavanje dropdown-a
- Direktne kontakt informacije pored forme:
  - Telefon: +381 66 80 60 301 (klikabilan tel: link)
  - WhatsApp: dugme sa linkom (https://wa.me/381668060301)
  - Instagram: @studio.milina
  - Adresa: [ADRESA STUDIJA]
  - Radno vreme: Pon do Pet: 09:00 do 21:00, Sub: 10:00 do 18:00, Ned: Neradni dan
- Embed Google Maps (placeholder koordinate centra Niša: 43.3209, 21.8958)
- Meta title: "Kontakt | Zakažite masažu | Studio Milina Niš"
- Forma ne mora imati backend, samo frontend markup (backend se dodaje naknadno)

---

### 8. GLOBALNI ELEMENTI (prisutni na svim stranicama)

#### Navbar
- Logo ili tekstualni logo "Studio Milina"
- Navigacioni linkovi: Početna, Usluge, Cenovnik, O nama, Blog, Najčešća pitanja, Kontakt
- Sticky/fixed sa transparentnom pozadinom na vrhu, solid pozadina na scroll
- Mobile hamburger meni sa smooth animacijom
- CTA dugme "Zakažite termin" u desnom uglu navigacije (vodi na /kontakt)
- Aktivna stranica vizuelno označena u navigaciji

#### Footer
- Logo ili naziv studija
- Navigacioni linkovi (sve stranice)
- Kontakt info (telefon, adresa, email placeholder)
- Social media ikone (Instagram link)
- Radno vreme
- **OBAVEZNO:** Tekst "Sajt, dizajn i SEO: Quantex.rs" sa linkom ka https://quantex.rs
- Copyright tekst sa trenutnom godinom
- Back to top dugme

#### Floating elementi
- WhatsApp floating dugme (uvek vidljivo u donjem desnom uglu na svim stranicama)
- Back to top dugme (pojavljuje se na scroll)

---

## DIZAJN SMERNICE

### Boja paleta
- Primarna pozadina: topla bež/krem (#F5F0EB ili slično)
- Sekundarna: duboka zelena (#2C4A3E ili slično) ili tamno plava (#1B3A4B) za naglašavanje
- Akcent: zlatna/bronzana (#C4A265 ili slično) za CTA dugmad i detalje
- Tekst: tamno braon ili off black (#2D2926)
- Bela: #FFFFFF za kartice i kontrast
- Celokupna paleta treba da odiše luksuzom, toplinom i profesionalizmom

### Tipografija
- Naslovni font: elegantan serif (Playfair Display, Cormorant Garamond, ili DM Serif Display sa Google Fonts)
- Body font: čist sans serif (Lato, Source Sans 3, ili Outfit)
- Font parovi moraju izgledati premium i sofisticirano

### Vizuelni stil
- Luxury wellness estetika
- Dosta white space (negative space)
- Suptilne linije i separatori između sekcija
- Soft shadows na karticama
- Zaobljeni uglovi (border radius 8px do 16px)
- Slike sa blagim overlay filterom (warm tone)
- Dekorativni elementi: tanke zlatne linije, leaf/botanical SVG ikone gde se uklopi
- Scroll triggered animacije (fade in, slide up) za svaku sekciju
- Konzistentan dizajn jezik na svim stranicama

### Animacije (Framer Motion)
- Page transitions: fade ili slide između stranica
- Hero: fade in + scale za naslov, staggered za CTA dugmad
- Sekcije: scroll reveal sa whileInView
- Kartice: staggered entrance
- Testimonials: fade transition u carousel
- FAQ: smooth accordion open/close
- Hover states: subtle scale (1.02) + shadow na karticama
- Blog kartice: hover lift efekat

---

## SEO ZAHTEVI

### On Page SEO (globalno)
- Svaka stranica ima UNIQUE title tag, meta description, og:title, og:description, og:image, og:url
- Canonical URL za svaku stranicu
- Hreflang tag: sr
- Jezik stranice: srpski (lang="sr")
- Twitter Card tagovi na svim stranicama
- Sitemap.xml generisan
- robots.txt sa dozvolama za sve javne stranice

### Meta tagovi po stranicama
| Stranica | Title | Meta Description |
|----------|-------|------------------|
| / | Studio Milina \| Profesionalna masaža Niš | Studio Milina u Nišu nudi profesionalnu relaks, terapeutsku, sportsku i anti celulit masažu. Diplomirana terapetkinja sa DIF-a. Zakažite termin: +381 66 80 60 301 |
| /usluge | Usluge masaže \| Studio Milina Niš | Pogledajte sve vrste masaža u Studio Milina Niš: relaks, terapeutska, sportska, anti celulit, maderoterapija, masaža trudnica i više. |
| /cenovnik | Cenovnik masaža \| Studio Milina Niš | Aktuelne cene svih tretmana masaže u Studio Milina u Nišu. Relaks, terapeutska, sportska, anti celulit masaža i drugi tretmani. |
| /o-nama | O nama \| Mila Đorđević \| Studio Milina Niš | Upoznajte Milu Đorđević, diplomiranu terapetkinju iz Niša sa DIF diplomom i brojnim sertifikatima za profesionalnu masažu. |
| /blog | Blog o masaži \| Studio Milina Niš | Stručni saveti o masaži, zdravlju i wellnessu od diplomirane terapetkinje u Nišu. |
| /najcesca-pitanja | Najčešća pitanja o masaži \| Studio Milina Niš | Odgovori na najčešća pitanja o masaži, zakazivanju, cenama i tretmanima u Studio Milina u Nišu. |
| /kontakt | Kontakt \| Zakažite masažu \| Studio Milina Niš | Zakažite termin za masažu u Studio Milina Niš. Pozovite +381 66 80 60 301 ili nas kontaktirajte putem WhatsApp-a. |

### Strukturirani podaci (JSON-LD Schema)

1. **LocalBusiness** (HealthAndBeautyBusiness) na svim stranicama:
   - name, description, url, telephone, address (Niš), geo koordinate
   - openingHours, priceRange
   - image, logo
   - areaServed: Niš, Niška Banja, Srbija

2. **Service** za svaku individual stranicu tretmana:
   - name, description, provider, areaServed, offers (price placeholder)

3. **FAQPage** na /najcesca-pitanja:
   - Svako pitanje i odgovor kao Question/Answer par

4. **BreadcrumbList** na svim stranicama osim početne

5. **Organization**:
   - sa sameAs linkovima (Instagram)

6. **BlogPosting** za svaki blog post:
   - headline, datePublished, author, description, image

7. **AggregateRating** (placeholder sa prosečnom ocenom 5.0)

8. **WebSite** sa potencijalnim SearchAction

### Lokalni SEO fokus
- Grad "Niš" mora biti prirodno prisutan u naslovima, opisima i tekstualnom sadržaju na svim stranicama
- Ključne reči za ciljanje (prirodno uklopiti, bez keyword stuffing-a):
  - masaža Niš
  - profesionalna masaža Niš
  - relaks masaža Niš
  - terapeutska masaža Niš
  - sportska masaža Niš
  - anti celulit masaža Niš
  - maderoterapija Niš
  - masaža trudnica Niš
  - deep tissue masaža Niš
  - masaža leđa Niš
  - najbolja masaža u Nišu
  - studio za masažu Niš
  - maserka Niš
  - sertifikovana maserka Niš
  - masaža centar Niš
  - limfna drenaža Niš
  - hot stone masaža Niš
  - reflexology Niš
  - cena masaže Niš
  - cenovnik masaže Niš
- Alt tagovi na svim slikama moraju sadržati relevantne ključne reči
- Internal linking između stranica sa relevantnim anchor tekstom

### AEO (Answer Engine Optimization)
- FAQ sekcija napisana u formatu pitanje + direktan odgovor (optimalno za AI sisteme)
- About stranica strukturirana tako da AI može lako da izvuče ko je Mila, šta nudi, gde se nalazi
- Svaki tretman opisan u 2 do 3 rečenice koje direktno odgovaraju na pitanje "Šta je [naziv tretmana]?"
- Blog postovi pisani kao autoritativni stručni sadržaj
- Sadržaj pisan prirodnim jezikom, ne marketinškim žargonom
- Jasne, koncizne rečenice koje AI sistemi mogu citirati kao odgovor

---

## PLACEHOLDER SLIKE

Pošto nemamo prave slike, koristi placeholder divove:
- Bež/krem pozadina (#E8E0D8) sa tekstom koji opisuje šta slika treba da bude
- Primeri: "[Slika: Mila tokom tretmana]", "[Slika: Ambijent studija]", "[Slika: Hero pozadina spa atmosfera]"
- Svaki placeholder mora imati proper aspect ratio
- Komentar u kodu: {/* ZAMENI: Ovde ide prava slika */}

## PERFORMANSE

- Code splitting po stranicama (React.lazy + Suspense)
- Lazy loading za sve slike ispod fold-a
- Optimizovane animacije (will-change, transform umesto top/left)
- Minimalan bundle size
- Preload za kritične fontove
- Defer za non-critical JavaScript
- Route based chunking

## NAPOMENE ZA DEVELOPMENT

1. Sav tekst je na srpskom jeziku (latinica)
2. Telefon mora biti klikabilan (tel: link) na mobilnim uređajima
3. WhatsApp link: https://wa.me/381668060301
4. Instagram link: https://www.instagram.com/studio.milina/
5. Mobile hamburger meni sa smooth animacijom
6. Favicon (generisi jednostavan SVG favicon sa inicijalima "SM" ili listom)
7. Loading state / skeleton za početno učitavanje
8. Accessibility: proper ARIA labels, keyboard navigacija, contrast ratios
9. Kontakt forma ne mora imati backend, samo frontend markup
10. Sve placeholder vrednosti obeležiti jasno sa uglastim zagradama [OVAKO]
11. 404 stranica sa lepim dizajnom i linkom nazad na početnu
12. Scroll to top na promenu rute
13. Active link styling u navigaciji

## FOOTER CREDIT (OBAVEZNO)

U footeru MORA stajati sledeći tekst sa linkom:
"Sajt, dizajn i SEO: Quantex.rs" gde je "Quantex.rs" link ka https://quantex.rs

Ovo je obavezno i ne sme se izostaviti ni pod kojim okolnostima.

## KVALITET KODA

- Čist, čitljiv TypeScript
- Folder struktura:
  ```
  src/
    components/
      layout/ (Navbar, Footer, WhatsAppButton, BackToTop)
      ui/ (Button, Card, SectionHeading, Accordion, Breadcrumb)
      sections/ (Hero, Testimonials, USP, Process, CTA)
    pages/
      Home.tsx
      Services.tsx
      ServiceDetail.tsx
      Pricing.tsx
      About.tsx
      Blog.tsx
      BlogPost.tsx
      FAQ.tsx
      Contact.tsx
      NotFound.tsx
    data/
      services.ts (svi tretmani sa slugovima, opisima, cenama)
      blogPosts.ts (svi blog postovi)
      faq.ts (sva pitanja i odgovori)
      testimonials.ts (sve recenzije)
    hooks/
      useScrollReveal.ts
      useScrollToTop.ts
    utils/
      seo.ts (helper za Schema.org JSON-LD)
    styles/
      globals.css
  ```
- Podaci za tretmane, blog postove i FAQ u zasebnim data fajlovima za lako ažuriranje
- Reusable komponente
- Komentari u kodu na srpskom
- ESLint i Prettier konfiguracija

## KONKURENCIJA (za kontekst)

Glavni konkurenti u Nišu: Centar za masažu Zen (zenmasaza.com), Soul Touch (masazasoultouch.com), Fiziolife (fiziolife.com), Aesthetica (aesthetica.rs), Aktiv Fizikal (aktivfizikal.com). Sajt Studio Milina mora da bude vizuelno i tehnički superiorniji od svih navedenih. Nijedan od ovih sajtova nema blog, ozbiljan SEO, strukturirane podatke, niti AEO optimizaciju. To je ogromna prilika da Studio Milina dominira u lokalnim rezultatima pretrage i u odgovorima AI pretraživača za upite vezane za masažu u Nišu.
