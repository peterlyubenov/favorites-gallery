import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ALBUM_IMAGES_ROUTE,
  ALBUMS_ROUTE,
  FAVORITES_ROUTE,
  HOME_ROUTE,
} from "./config/routes.ts";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { HomePage } from "./pages/HomePage.tsx";
import { AlbumsPage } from "./pages/AlbumsPage.tsx";
import { AlbumPage } from "./pages/AlbumPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import "./index.css";
import { FavoritesPage } from "./pages/FavoritesPage.tsx";

const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ALBUMS_ROUTE,
    element: <AlbumsPage />,
  },
  {
    path: ALBUM_IMAGES_ROUTE,
    element: <AlbumPage />,
  },
  {
    path: FAVORITES_ROUTE,
    element: <FavoritesPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
