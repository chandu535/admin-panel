import { createApi } from "@reduxjs/toolkit/dist/query/react";

// import { IReduxAdminLogin } from "@/Interfaces";
import { IReduxAdminLogin } from "./adminlogin";


import http from "../../../Http";

const reducerPath = "AdminLoginApi";

export const AdminLoginAPI = createApi({
    reducerPath,
    baseQuery: http(),
    endpoints: builder => ({

        getAdminLogin: builder.mutation<any, { email: any, password: any }>({

            query: (arg) => {
                const { email, password } = arg;
                return {
                    url: `user/signin`,
                    method: "POST",
                    body: {
                        email: email,
                        password: password
                    }
                };
            },
            transformResponse: (
                response: IReduxAdminLogin.IAdminLoginResponse
            ): IReduxAdminLogin.IAdminLoginResponse => response,
            transformErrorResponse: (response: IReduxAdminLogin.IAdminLoginErrorResponse): IReduxAdminLogin.IAdminLoginErrorResponse => response
        }),

    }),
});


export const { useGetAdminLoginMutation } = AdminLoginAPI;

export const AdminLoginQueryReducer = {
    [reducerPath]: AdminLoginAPI.reducer
};