import { initialState } from "./adminlogin.slice"

declare namespace IReduxAdminLogin {
    export interface ILoginPayload {
        email: String,
        password: String
    }

    export interface IInitialState {
        admin: array
    }
    export interface IAdminDetails {
        _id: string,
        avatar: string,
        status: string,
        user_type: string,
        password_expired_at: string,
        email_verified: string,
        phone_verified: string,
        email: string,
        name: string,
        gender: string,
        created_at: string,
        updated_at: string,
        __v: string,
        default_cart_id: string,
    }

    export interface IAdminLoginResponse {
        success: boolean,
        user_details: IAdminDetails,
        access_token: string,
        refresh_token: string,
        messsage: string
    }

    export interface IAdminLoginErrorResponse {
        success: boolean,
        message: string
    }

}

export { IReduxAdminLogin }