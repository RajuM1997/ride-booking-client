import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminUpdateActivity: builder.mutation({
      query: (userInfo) => ({
        url: `/site-admin/update-user-activity/${userInfo.id}`,
        method: "PATCH",
        data: userInfo,
      }),
      invalidatesTags: ["ADMIN_USER"],
    }),
    adminUpdateDriver: builder.mutation({
      query: (userInfo) => ({
        url: `/site-admin/accept-driver-role/${userInfo.id}`,
        method: "PATCH",
        data: userInfo,
      }),
      invalidatesTags: ["ADMIN_USER"],
    }),
    getAllUser: builder.query({
      query: (params) => ({
        url: "/site-admin/all-users",
        method: "GET",
        params,
      }),
      providesTags: ["ADMIN_USER"],
    }),
    getAllRides: builder.query({
      query: (params) => ({
        url: "/site-admin/all-rides",
        method: "GET",
        params,
      }),
      providesTags: ["ADMIN_USER"],
    }),
    getDrivers: builder.query({
      query: () => ({
        url: "/site-admin/all-drivers",
        method: "GET",
      }),
    }),
    getRiders: builder.query({
      query: () => ({
        url: "/site-admin/all-riders",
        method: "GET",
      }),
    }),
    getRider: builder.query({
      query: (params) => ({
        url: "/site-admin/all-rides",
        method: "GET",
        params,
      }),
    }),
    getPerMonthRidesCount: builder.query({
      query: () => ({
        url: "/site-admin/per-month-riders",
        method: "GET",
      }),
    }),
    getPerMonthRevenue: builder.query({
      query: () => ({
        url: "/site-admin/per-month-revenue",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAdminUpdateActivityMutation,
  useGetAllUserQuery,
  useGetAllRidesQuery,
  useGetRiderQuery,
  useGetDriversQuery,
  useGetRidersQuery,
  useAdminUpdateDriverMutation,
  useGetPerMonthRidesCountQuery,
  useGetPerMonthRevenueQuery,
} = adminApi;
