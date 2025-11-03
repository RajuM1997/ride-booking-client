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
    getAllRide: builder.query({
      query: () => ({
        url: `/drivers/all-ride?status=REQUESTED`,
        method: "GET",
      }),
    }),
    getDriverRide: builder.query({
      query: () => ({
        url: `/drivers/my-ride`,
        method: "GET",
      }),
    }),
    updateActivity: builder.mutation({
      query: (activityStatus) => ({
        url: `/drivers/update-driver-availability`,
        method: "PATCH",
        data: activityStatus,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});
export const {
  useReqARideMutation,
  useGetAllRideQuery,
  useUpdateActivityMutation,
  useGetDriverRideQuery,
} = rideApi;
