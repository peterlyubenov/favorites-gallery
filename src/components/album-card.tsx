import { Link } from "react-router-dom";
import { Album } from "../types/album";
import { Image } from "../types/image";
import { ALBUM_IMAGES_ROUTE, buildRoute } from "../config/routes";

interface AlbumCardProps {
  album: Album;
  images: Image[];
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, images }) => {
  const albumRoute = buildRoute(ALBUM_IMAGES_ROUTE, {
    albumId: album.id,
  });
  return (
    <div className="bg-gray-800 w-44 rounded-md shadow-sm overflow-hidden hover:bg-gray-700 hover:shadow-xl transition-all hover:scale-105">
      <Link to={albumRoute}>
        <div className="relative grid grid-cols-2 gap-2 p-4">
          {images.slice(0, 4).map((image) => (
            <img
              key={image.id}
              src={image.thumbnailUrl}
              alt={image.title}
              className="w-full"
            />
          ))}
        </div>
        <div className="p-4">
          <h3 className="text-base font-medium text-gray-100">
            <span className="text-gray-500 pr-2">#{album.id}</span>
            {album.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default AlbumCard;
