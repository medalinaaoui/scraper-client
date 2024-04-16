import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  userData: userData | null;
  isAuthenticated: boolean;
  access_token: string | null;
}

const initialState: initialStateTypes = {
  userData: null,
  isAuthenticated: false,
  access_token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.access_token = action.payload.access_token;
      state.userData = action.payload.userData;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.access_token = null;
      state.userData = null;
    },
    refreshAccessToken: (state, action) => {
      state.isAuthenticated = true;
      state.access_token = action.payload.access_token;
      state.userData = action.payload.userData;
    },
  },
});

export const { registerSuccess, refreshAccessToken, logoutSuccess } =
  userSlice.actions;
export default userSlice.reducer;
