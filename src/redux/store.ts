import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import imagesSlice from "./slices/imagesSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { imagesApi } from "./slices/imagesApi";
const persistConfig = {
  key: "root",
  storage,
};

const persistedImageReducer = persistReducer(
  persistConfig,
  imagesSlice.reducer
);

export const store = configureStore({
  reducer: combineReducers({
    images: persistedImageReducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
  }),
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(thunk).concat(imagesApi.middleware);
  },
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
