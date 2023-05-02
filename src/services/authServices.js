// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configUrl } from "../helpers/configUrl";
import { setTodo } from "../redux/slices/todo";

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
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setTodo(data));
        } catch (err) {
          console.error("Failed to fetch todos: ", err);
        }
      }
    }),

    addTodo: build.mutation({
      query: (body) => ({
        url: configUrl.insert,
        method: "POST",
        params: body,
      }),
    }),

    deleteTodo: build.mutation({
      query: (id) => ({
        url: configUrl.delete,
        method: "DELETE",
        params: id,
      }),
    }),




  }),
});

export const { useGetTodoQuery } = authServices;
