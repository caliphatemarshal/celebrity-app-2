import { createCookie } from "@/services/actions/setCookie";
import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  user: null | {
    name: string;
    email: string;
    mobile: string;
    user_type: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    id: number;
    role_id: number;
    image: string | null;
    district_id?: number;
  };
  token: string | null;
};
const initialState: TAuthState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      createCookie({
        name: "user_data",
        value: JSON.stringify(user),
        httpOnly: true,
        path: "/",
      });
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
