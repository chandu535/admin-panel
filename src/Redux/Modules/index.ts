import { combineReducers } from "@reduxjs/toolkit";
import { AdminLoginAPI } from "./login";
import AdminReducer from "./login"

export const combinedReducer = combineReducers({
    ...AdminReducer
})

export const combinedMiddleware = [
    AdminLoginAPI.middleware
] 