import { useDispatch, useSelector } from "react-redux";
import { selectFavorites, toggleFavorite } from "../redux/slices/imagesSlice";
import { Image } from "../types/image";
import { LikeButton } from "./like-button";
import { ImageWithLoading } from "./image-with-loading";

interface ImageCard {
  image: Image;
}

export const ImageCard: React.FC<ImageCard> = ({ image }) => {
  const dispatch = useDispatch();

  const toggleLike = () => {
    dispatch(toggleFavorite(image.id));
  };

  const likedImages: number[] = useSelector(selectFavorites);
  const isLiked: boolean = likedImages.includes(image.id);

  return (
    <div className="rounded-sm bg-gray-800">
      <ImageWithLoading src={image.url} alt={image.title} />
      <div className="flex flex-row p-4 gap-2">
        <LikeButton isLiked={isLiked} onClick={toggleLike} /> {image.title}
      </div>
    </div>
  );
};
