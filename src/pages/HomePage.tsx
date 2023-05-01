import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ALBUMS_ROUTE } from "../config/routes";

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ALBUMS_ROUTE, {
      replace: true,
    });
  });

  return <></>;
};
