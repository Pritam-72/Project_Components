export interface CanvasPoint {
  x: number;
  y: number;
  pressure: number;
  timestamp: number;
}

export interface DrawingStroke {
  points: CanvasPoint[];
  color: string;
  width: number;
}

export interface LocationStamp {
  id: string;
  title: string;
  nativeTitle: string;
  place: string;
  year: string;
  image: string;
  fullStampImage: string;
  x: number;
  y: number;
  rotate: number;
}
