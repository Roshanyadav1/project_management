// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configUrl } from "../helpers/configUrl";

// Define a service using a base URL and expected endpoints
export const authServices = createApi({
  reducerPath: "authServices",
  baseQuery: fetchBaseQuery({
    baseUrl: configUrl.baseUrl,
  }),

  tagTypes: ["Tasks"],
  refetchOnReconnect: true,
  refetchOnFocus: true,

  endpoints: (build) => ({
    getTodo: build.query({
      query: () => ({
        url: configUrl.getTodo,
        method: "GET",
      }),
      invalidatesTags: [{ type: 'Tasks' }]
    }),
  }),
});

export const { useGetTodoQuery } = authServices;
