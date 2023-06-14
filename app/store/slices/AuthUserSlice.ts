import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { User } from "firebase/auth";

interface Props {
  authUser: User | null;
}

let INITIAL_STATE: Props = {
  authUser: null,
};

const AuthUserSlice = createSlice({
  name: "AuthUserSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setAuthUser(state, { payload }: PayloadAction<any>) {
      state.authUser = payload;
    },
  },
});

export default AuthUserSlice.reducer;

export const { setAuthUser } = AuthUserSlice.actions;

export const authUserStore = (state: RootState) => state.currentAuthUser;
