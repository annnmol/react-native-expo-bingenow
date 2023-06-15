import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";

interface Props {
  data: any[];
  error: string | null;
  loading: boolean;
}

let INITIAL_STATE: Props = {
  data: [],
  error: null,
  loading: false,
};

const UltimateMoviesSlice = createSlice({
  name: "UltimateMoviesSlice",
  initialState: INITIAL_STATE,
  reducers: {
    addData(state, { payload }: PayloadAction<any>) {
      const existingData = JSON.parse(JSON.stringify(state.data));
      const newData = [...existingData, ...payload];
      state.data = newData;
    },
    setData(state, { payload }: PayloadAction<any>) {
      state.data = payload;
    },
    setLoading(state, { payload }: PayloadAction<any>) {
      state.loading = payload;
    },
    setError(state, { payload }: PayloadAction<any>) {
      state.error = payload;
    },
  },
});

export default UltimateMoviesSlice.reducer;

export const { addData, setData, setError, setLoading } =
  UltimateMoviesSlice.actions;

export const ultimateMoviesStore = (state: RootState) => state.currentUltimateMovies;
