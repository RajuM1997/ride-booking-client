import { baseApi } from "@/redux/baseApi";
import type { IResponse, IRide } from "@/types";

export const riderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    reqARide: builder.mutation({
      query: (rideInfo) => ({
        url: "/rides/request",
        method: "POST",
        data: rideInfo,
      }),
      invalidatesTags: ["USER_RIDE"],
    }),
    cancelRide: builder.mutation({
      query: (id) => ({
        url: `/rides/cancel-ride/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER_RIDE"],
    }),
    getMyRide: builder.query({
      query: (params) => ({
        url: `/rides/my-rides`,
        method: "GET",
        params,
      }),
      providesTags: ["USER_RIDE"],
    }),
    getSingleRide: builder.query<IResponse<IRide>, unknown>({
      query: (params) => ({
        url: `/rides/single-ride`,
        method: "GET",
        params,
      }),
    }),
  }),
});
export const {
  useReqARideMutation,
  useCancelRideMutation,
  useGetMyRideQuery,
  useGetSingleRideQuery,
} = riderApi;
