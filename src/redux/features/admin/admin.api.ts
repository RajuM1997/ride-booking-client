import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (userInfo) => ({
        url: `/user/${userInfo.id}`,
        method: "PATCH",
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
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
        url: "/user/me",
        method: "GET",
        params,
      }),
      providesTags: ["ADMIN_USER"],
    }),
    getDriver: builder.query({
      query: (params) => ({
        url: "/user/me",
        method: "GET",
        params,
      }),
    }),
    getRider: builder.query({
      query: (params) => ({
        url: "/site-admin/all-rides",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useGetAllUserQuery,
  useGetAllRidesQuery,
  useGetRiderQuery,
  useGetDriverQuery,
} = adminApi;
