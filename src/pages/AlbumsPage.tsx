import {
  useGetAlbumsQuery,
  useGetImagesQuery,
} from "../redux/slices/imagesApi";
import { PageLayout } from "../components/page-layout";
import AlbumCard from "../components/album-card";
import rosePetalsImg from "../assets/rose-petals.svg";

export const AlbumsPage = () => {
  const { isLoading: isLoadingImages, data: images } = useGetImagesQuery();
  const { isLoading: isLoadingAlbums, data: albums } = useGetAlbumsQuery();
  const isLoading = isLoadingImages || isLoadingAlbums;

  console.log(isLoadingImages);

  if (isLoading) {
    return <PageLayout>Loading data</PageLayout>;
  }

  if (!images) {
    return <PageLayout>No images</PageLayout>;
  }

  if (!albums) {
    return <PageLayout>No albums</PageLayout>;
  }

  return (
    <PageLayout>
      <div
        style={{ backgroundImage: `url(${rosePetalsImg})` }}
        className="h-80 w-full bg-cover bg-center absolute left-0 flex justify-center items-center"
      ></div>
      <div className="flex gap-2 flex-wrap pt-96 justify-center">
        {albums.map((album) => {
          const albumImages = images[album.id];
          return (
            <AlbumCard key={album.id} album={album} images={albumImages} />
          );
        })}
      </div>
    </PageLayout>
  );
};
