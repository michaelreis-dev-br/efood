import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => `/restaurantes`,
    }),
    getDishes: builder.query({
      query: (id) => `/restaurantes/${id}`,
    }),
    purchase: builder.mutation({
      query: (payload) => ({
        url: "/checkout",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesQuery,
  usePurchaseMutation,
} = api;
export default api;
