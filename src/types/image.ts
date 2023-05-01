export interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type ImagesByAlbum = Record<number, Image[]>;
