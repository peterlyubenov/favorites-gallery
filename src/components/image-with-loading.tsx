import { useCallback, useEffect, useState } from "react";
import loadingBlur from "../assets/loading-blur.png";

type ImageWithLoading = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  placeholderWidth?: number;
  placeholderHeight?: number;
};

export const ImageWithLoading: React.FC<ImageWithLoading> = ({
  src,
  placeholderWidth = 600,
  placeholderHeight = 600,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const onLoad = useCallback(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  const onError = useCallback(() => {
    setIsError(true);
  }, [setIsError]);

  useEffect(() => {
    const imageObject = new Image();
    imageObject.src = src ?? "";
    imageObject.addEventListener("load", onLoad);
    imageObject.addEventListener("error", onError);

    return () => {
      imageObject.removeEventListener("load", onLoad);
      imageObject.removeEventListener("error", onError);
    };
  }, [src, onLoad, onError]);

  if (isError) {
    return (
      <div className="w-full h-full bg-pink-700-800 text-white flex justify-center items-center">
        Error loading image
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        className="w-full h-full bg-cover flex justify-center items-center"
        style={{
          backgroundImage: `url("${loadingBlur}")`,
          width: placeholderWidth + "px",
          height: placeholderHeight + "px",
        }}
      ></div>
    );
  }

  return <img {...props} src={src} />;
};
