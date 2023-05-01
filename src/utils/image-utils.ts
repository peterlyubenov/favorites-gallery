import { Image, ImagesByAlbum } from "../types/image";

/**
 * Group images by their albumId property
 *
 * @param images An array of images to group
 * @returns An object with albumId keys and Image[] values
 */
export const groupImagesByAlbumId = (images: Image[]) => {
  return images.reduce((acc, image) => {
    const { albumId } = image;
    if (!acc[albumId]) {
      acc[albumId] = [];
    }
    acc[albumId].push(image);
    return acc;
  }, {} as Record<number, Image[]>);
};

/**
 * Loops through all the images and finds the ones that match the given IDs and returns them
 * @param images images grouped by albumId
 * @param ids List of the ids of images to search for
 * @returns A list of found images by the given ids
 */
export const getImageByIds = (images: ImagesByAlbum, ids: number[]) => {
  const favoriteImages: Image[] = [];

  Object.values(images).forEach((album: Image[]) => {
    album.forEach((image) => {
      ids.forEach((favoriteId: number) => {
        if (favoriteId === image.id) {
          favoriteImages.push(image);
        }
      });
    });
  });

  return favoriteImages;
};
