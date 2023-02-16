import { createSlice } from "@reduxjs/toolkit";

import { IReduxAdminLogin } from "./adminlogin";
import { AdminLoginAPI } from "./adminlogin.query";


const reducerName = "admin";
export const initialState: IReduxAdminLogin.IInitialState = {
    admin: [],
};

export const adminSlice = createSlice({
    name: reducerName,
    initialState,
    reducers: {
        addadminDetails1: (state: any, action: any) => {
            // state.duplicateadmins.push(action.payload);
            state.duplicateadmins.push(action.payload)
        },

    },

    extraReducers: builder => {
        builder.addMatcher(
            AdminLoginAPI.endpoints.getAdminLogin.matchFulfilled,
            (state, { payload }: any) => {
                state.admin = payload;
            }
        );
    },

});
export const {
    addadminDetails1,
    addadminTokens,
    isLogin
}: any = adminSlice.actions;
export const adminSliceReducer = { [reducerName]: adminSlice.reducer };
