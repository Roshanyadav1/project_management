// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configUrl } from "../helpers/configUrl";

// Define a service using a base URL and expected endpoints
export const spaceService = createApi({
  reducerPath: "spaceService",
  baseQuery: fetchBaseQuery({
    baseUrl: configUrl.baseUrl,
  }),

  tagTypes: ["Tasks"],
  refetchOnReconnect: true,
  refetchOnFocus: true,

  endpoints: (build) => ({

    getSpaceData: build.query({
      query: (prop) => ({
        url: configUrl.getSpaceData,
        method: "GET",
        params: prop,
      }),
    }),

  }),
});

export const { useGetSpaceDataQuery } = spaceService;
