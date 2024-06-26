import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../store";
import { BASE_URL } from "@/utils/constants";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).persistedReducers.auth.token;
    headers.set("Authorization", `Bearer ${token}`);
  },
});
