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
        url: `/drivers/all-ride`,
        method: "GET",
      }),
      providesTags: ["RIDE"],
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
    driverCancelRide: builder.mutation({
      query: (id) => ({
        url: `/drivers/ride/cancel-ride/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE"],
    }),
    driverRideBooking: builder.mutation({
      query: (id) => ({
        url: `/drivers/approve/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["RIDE"],
    }),
  }),
});
export const {
  useReqARideMutation,
  useGetAllRideQuery,
  useUpdateActivityMutation,
  useGetDriverRideQuery,
  useDriverCancelRideMutation,
  useDriverRideBookingMutation,
} = rideApi;
