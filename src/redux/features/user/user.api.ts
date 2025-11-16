import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (userInfo) => ({
        url: `/user/${userInfo.id}`,
        method: "PATCH",
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    createUserQuery: builder.mutation({
      query: (data) => ({
        url: "/user-query/create-query",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useUserInfoQuery,
  useCreateUserQueryMutation,
} = authApi;
