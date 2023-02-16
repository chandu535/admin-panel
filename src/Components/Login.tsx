import { Button, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { useGetAdminLoginMutation } from "../Redux/Modules/login";
// import { useGetAdminLoginMutation } from "../Redux/Modules/login";

export const Login = () => {

    const { register, handleSubmit, watch, formState: { errors }, control } = useForm();

    const [req, res] = useGetAdminLoginMutation()

    const handleRegistration = async (data: any) => {
        console.log(data)
        let response = await req(data)
        console.log(response)
    }

    const onError = (errors: any, e: any) => console.log(errors, e);

    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration, onError)}>
                <TextField placeholder="Email" {...register("email")} focused />

                <div className="form-control">
                    <TextField placeholder="Password" {...register("password")} focused />
                </div>

                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}