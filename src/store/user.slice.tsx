import { createSlice } from "@reduxjs/toolkit";
import { backendApi } from "@store/api.slice";

const initialState = {
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => ({ ...state, token: action.payload }),
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;

interface Args {
  email: string;
  password: string;
}

export const onboardingApiSlice = backendApi.injectEndpoints({
  endpoints: (builder: any) => ({
    PostOnboarding: builder.mutation({
      query: (args: Args) => ({
        url: "/api/users",
        method: "POST",
        body: args,
      }),
    }),
  }),
});

export const { usePostOnboardingMutation } = onboardingApiSlice;
