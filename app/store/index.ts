import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import AuthUserReducer from "./slices/AuthUserSlice";
import CategoriesReducer from "./slices/CategoriesSlice";
import SavedItemsReducer from "./slices/SavedItemsSlice";
import NowPlayingMoviesReducer from "./slices/movies/NowPlayingMoviesSlice";
import TrendingAllReducer from "./slices/movies/TrendingAllSlice";
import TopRatedReducer from "./slices/movies/TopRatedSlice";
import FreshTvReducer from "./slices/movies/FreshTvSlice";
import UpcomingMoviesReducer from "./slices/movies/UpcomingMoviesSlice";
import UltimateMoviesReducer from "./slices/movies/UltimateMoviesSlice";
import PopularMoviesReducer from "./slices/movies/PopularMoviesSlice";
export const store = configureStore({
  reducer: {
    currentAuthUser: AuthUserReducer,
    currentCategories: CategoriesReducer,
    currentSavedItems: SavedItemsReducer,

    //movies
    currentNowPlayingMovies: NowPlayingMoviesReducer,
    currentTrendingAll: TrendingAllReducer,
    currentTopRated: TopRatedReducer,
    currentFreshTv: FreshTvReducer,
    currentUpcomingMovies: UpcomingMoviesReducer,
    currentUltimateMovies: UltimateMoviesReducer,
    currentPopularMovies: PopularMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//*typescript support
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
