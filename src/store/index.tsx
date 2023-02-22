import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { backendApi } from "./api.slice";

export const makeStore = ({ ...props }) =>
  configureStore({
    reducer: {
      [backendApi.reducerPath]: backendApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["app/openModal", "app/openDrawer"],
          ignoredPaths: ["app.modal", "app.drawer"],
        },
      }).concat(backendApi.middleware),
    devTools: true,
    ...props,
  });

export const wrapper = createWrapper(makeStore);
