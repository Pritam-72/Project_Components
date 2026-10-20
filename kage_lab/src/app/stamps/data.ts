export interface StampItem {
  id: string;
  image: string;
  fullStampImage: string;
  x: number;
  y: number;
  rotate: number;
  title: string;
  nativeTitle: string;
  place: string;
  year: string;
}

export const STAMPS_DATA: StampItem[] = [
  {
    id: "delhi",
    image: "/image/stamp/delhi.webp",
    fullStampImage: "/image/stamp/delhi-stamp.webp",
    x: 45,
    y: 65,
    rotate: -45,
    title: "Delhi",
    nativeTitle: "दिल्ली",
    place: "Red Fort",
    year: "1648",
  },
  {
    id: "chennai",
    image: "/image/stamp/chennai.webp",
    fullStampImage: "/image/stamp/chennai-stamp.webp",
    x: 56,
    y: 30,
    rotate: 6,
    title: "Chennai",
    nativeTitle: "சென்னை",
    place: "Marina Lighthouse",
    year: "1977",
  },
  {
    id: "mumbai",
    image: "/image/stamp/mumbai.webp",
    fullStampImage: "/image/stamp/mumbai-stamp.webp",
    x: 40,
    y: 35,
    rotate: -6,
    title: "Mumbai",
    nativeTitle: "मुंबई",
    place: "Gateway of India",
    year: "1924",
  },
  {
    id: "kerala",
    image: "/image/stamp/kerala.webp",
    fullStampImage: "/image/stamp/kerala-stamp.webp",
    x: 62,
    y: 60,
    rotate: -15,
    title: "Kerala",
    nativeTitle: "കേരളം",
    place: "Vembanad Lake",
    year: "1956",
  },
];
