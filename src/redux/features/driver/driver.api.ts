import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRide: builder.query({
      query: () => ({
        url: `/drivers/all-ride`,
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
    getDriverRide: builder.query({
      query: (params) => ({
        url: `/drivers/my-ride`,
        method: "GET",
        params,
      }),
    }),
    getDriverActiveRide: builder.query({
      query: () => ({
        url: `/drivers/active-ride`,
        method: "GET",
      }),
      providesTags: ["RIDE"],
    }),
    getDriverEarning: builder.query({
      query: () => ({
        url: `/drivers/driver-earning-all`,
        method: "GET",
      }),
    }),
    reqARide: builder.mutation({
      query: (rideInfo) => ({
        url: "/rides/request",
        method: "POST",
        data: rideInfo,
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
    changeRideStatus: builder.mutation({
      query: (rideData) => ({
        url: `/drivers/${rideData.id}/update-status`,
        method: "PATCH",
        data: rideData,
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
  useGetDriverEarningQuery,
  useGetDriverActiveRideQuery,
  useChangeRideStatusMutation,
} = rideApi;
