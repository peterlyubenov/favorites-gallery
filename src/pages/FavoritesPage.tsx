import { useSelector } from "react-redux";
import { PageLayout } from "../components/page-layout";
import { selectFavorites } from "../redux/slices/imagesSlice";
import { useGetImagesQuery } from "../redux/slices/imagesApi";
import { getImageByIds } from "../utils/image-utils";
import { ImageCard } from "../components/image-card";
import { Image } from "../types/image";
import { Link } from "react-router-dom";
import { ALBUMS_ROUTE } from "../config/routes";

export const FavoritesPage = () => {
  const favoriteImageIds: number[] = useSelector(selectFavorites);

  const { isLoading: isLoadingImages, data: images } = useGetImagesQuery();

  if (isLoadingImages || !images) {
    return <PageLayout>Loading</PageLayout>;
  }

  const favoriteImages = getImageByIds(images, favoriteImageIds);

  const isEmpty = favoriteImageIds.length === 0;

  return (
    <PageLayout>
      {isEmpty && (
        <div className="flex justify-center items-center text-gray-200">
          You have not liked any images yet.
          <Link className="pl-2 text-blue-500 underline" to={ALBUMS_ROUTE}>
            Find some
          </Link>
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-12">
        {favoriteImages.map((image: Image) => (
          <ImageCard image={image} key={image.id} />
        ))}
      </div>
    </PageLayout>
  );
};
