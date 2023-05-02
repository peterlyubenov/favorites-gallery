import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutlineIcon } from "@heroicons/react/24/outline";

interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onClick }) => {
  return (
    <button onClick={onClick}>
      {isLiked && (
        <HeartIcon className="h-6 w-6 text-red-400 transition-all hover:scale-110 active:scale-90" />
      )}
      {!isLiked && (
        <HeartOutlineIcon className="h-6 w-6 text-red-400 transition-all hover:scale-110 active:scale-90" />
      )}
    </button>
  );
};
