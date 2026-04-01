export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  source: string;
}

// Prave Google recenzije — Studio za masažu Milina, Zmaja od Noćaja 15, Niš
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marko Veljovic',
    text: 'Drugi put sam na masažu, zadovoljan sam jer me opušta i psihički i telo, zbog posla kojim se bavim, sve pohvale za uslugu, enterijer, gostoprimstvo u salonu. Nastavljam i dalje saradnju, sve preporuke. Bol u delovima tela od sedenja i ukočenost prestaje, osećam se bolje.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 2,
    name: 'Anđela Ranđelović',
    text: 'Prezadovoljna sam. Kompletno iskustvo, njena smirujuća energija, prostor, muzika, profesionalnost... Sve preporuke.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 3,
    name: 'Oliver Stojanović',
    text: 'Odličan pristup, prelep ambijent, profesionalan rad, sve preporuke. Svaka čast!',
    rating: 5,
    source: 'Google',
  },
  {
    id: 4,
    name: 'Dušan Dimitrijević',
    text: 'Profesionalna, stručna i ljubazna. Osećam se energičnije posle masaže. Ambijent uredan i prijatan. Sve preporuke za Milu.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 5,
    name: 'Pavle Milenković',
    text: 'Sve preporuke za Milu. Jako profesionalan pristup masaži. Veoma čist i pedantan salon za masažu. Definitivno preporučujem svakom.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 6,
    name: 'Dunja Tošić',
    text: 'Stručna, profesionalna i ljubazna! Ambijent je prijatan i opuštajući. Sve pohvale i preporuke!',
    rating: 5,
    source: 'Google',
  },
  {
    id: 7,
    name: 'Miša Žikić',
    text: 'Fenomenalna masaža, jedna od boljih na koje sam išao, a išao sam na dosta njih u Nišu.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 8,
    name: 'Andrea Aleksić',
    text: 'Jako profesionalno, korektno, prijatno iskustvo, lep ambijent... sve preporuke!',
    rating: 5,
    source: 'Google',
  },
  {
    id: 9,
    name: 'Marko Kraljević',
    text: 'Devojka je divna i profesionalna, ambijent odličan. Ogromna preporuka.',
    rating: 5,
    source: 'Google',
  },
  {
    id: 10,
    name: 'Nikola Milenković',
    text: 'Vrlo prijatno iskustvo i veoma profesionalan pristup. Svaka pohvala za studio!',
    rating: 5,
    source: 'Google',
  },
];
