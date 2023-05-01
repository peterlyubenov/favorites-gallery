import { Link, useParams } from "react-router-dom";
import { parseValidNumber } from "../utils/string-utils";
import { Button } from "../components/button";
import { PageLayout } from "../components/page-layout";
import { Header } from "../components/header";
import { useGetImagesQuery } from "../redux/slices/imagesApi";
import { useState } from "react";
import { Image } from "../types/image";
import { ImageCard } from "../components/image-card";

export const AlbumPage = () => {
  const { albumId } = useParams();
  const [openImage, setOpenImage] = useState<Image | undefined>();

  const {
    isLoading: isLoadingImages,
    isError: hasImagesError,
    isSuccess: hasLoadedImages,
    data: images,
  } = useGetImagesQuery();

  const validAlbumId = parseValidNumber(albumId);

  if (!validAlbumId) {
    return (
      <PageLayout>
        <Header size="md" title="Invalid Album ID" />
        <Link to="/">
          <Button size="sm" variant="primary">
            Go Back
          </Button>
        </Link>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="flex flex-col justify-center items-center gap-12">
        {images?.[validAlbumId]?.map((image) => <ImageCard image={image} />) ??
          "Loading..."}
      </div>
    </PageLayout>
  );
};
