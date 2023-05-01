import { useDispatch, useSelector } from "react-redux";
import { Image } from "../types/image";
import { LikeButton } from "./like-button";
import { selectFavorites, toggleFavorite } from "../redux/slices/imagesSlice";
import { ImageWithLoading } from "./image-with-loading";

interface ImageModalProps {
  image: Image;
  isOpen: boolean;
  onClose: () => void;
  onLike: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  const dispatch = useDispatch();

  const toggleLike = (imageId: number) => {
    console.log(imageId);
    dispatch(toggleFavorite(imageId));
  };

  const likedImages: number[] = useSelector(selectFavorites);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-md bg-gray-800"
      >
        <div className="flex flex-col justify-center">
          <ImageWithLoading
            src={image.url}
            alt={image.title}
            className="rounded-t-md"
          />
          <div className="p-8 flex items-center gap-2">
            <LikeButton
              isLiked={likedImages.includes(image.id)}
              onClick={() => toggleLike(image.id)}
            />
            {image.title}
          </div>
        </div>
      </div>
    </div>
  );
};
