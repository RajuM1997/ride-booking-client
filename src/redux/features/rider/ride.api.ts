import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    reqARide: builder.mutation({
      query: (rideInfo) => ({
        url: "/rides/request",
        method: "POST",
        data: rideInfo,
      }),
    }),
    cancelRide: builder.mutation({
      query: (id) => ({
        url: `/rides/cancel-ride/${id}`,
        method: "PATCH",
      }),
    }),
    getMyRide: builder.query({
      query: () => ({
        url: `/rides/my-rides`,
        method: "GET",
      }),
    }),
  }),
});
export const { useReqARideMutation, useCancelRideMutation, useGetMyRideQuery } =
  rideApi;
