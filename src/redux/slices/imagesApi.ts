import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Album } from "../../types/album";
import {
  API_ALBUM,
  API_ALBUMS,
  API_BASE_URL,
  API_PHOTOS,
  buildRoute,
} from "../../config/routes";
import { ImagesByAlbum } from "../../types/image";
import { groupImagesByAlbumId } from "../../utils/image-utils";

export const imagesApi = createApi({
  reducerPath: "imagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => API_ALBUMS,
    }),
    getAlbum: builder.query<Album, number>({
      query: (albumId) => buildRoute(API_ALBUM, { albumId }),
    }),
    getImages: builder.query<ImagesByAlbum, void>({
      query: () => API_PHOTOS,
      transformResponse: groupImagesByAlbumId,
    }),
  }),
});

export const { useGetAlbumsQuery, useGetImagesQuery, useGetAlbumQuery } =
  imagesApi;
