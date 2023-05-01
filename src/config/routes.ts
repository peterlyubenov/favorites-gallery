export const HOME_ROUTE = "/";
export const ALBUMS_ROUTE = "/albums";
export const FAVORITES_ROUTE = "/favorites";
export const ALBUM_IMAGES_ROUTE = "/albums/:albumId";

export const API_BASE_URL = "https://jsonplaceholder.typicode.com";
export const API_ALBUMS = "/albums";
export const API_ALBUM = "/albums/:albumId";
export const API_PHOTOS = "/photos";

export const buildRoute = (
  route: string,
  params: { [key: string]: string | number }
) => {
  let query = route;
  Object.keys(params).forEach((key) => {
    query = query.replace(`:${key}`, params[key].toString());
  });
  return query;
};
