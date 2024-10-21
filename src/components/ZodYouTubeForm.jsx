import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../utils/_types";


const ZodYouTubeForm = () => {
    const form = useForm({ resolver: zodResolver(schema) });
    const { register, handleSubmit, formState } = form;
    const { errors, isSubmitting } = formState;

    const onSubmit = async (data) => {
        await new Promise((resolver) => setTimeout(resolver, 1000))

        console.log(isSubmitting)
        console.log(data)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="john_doe"
                        {...register("username")}
                    />
                    {<p className="field-error">{errors.username?.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="john_doe@gmail.com"
                        {...register("email")}
                    />
                    {<p className="field-error">{errors.email?.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id="channel"
                        placeholder="channel"
                        {...register("channel")}
                    />
                    {<p className="field-error">{errors.channel?.message}</p>}
                </div>
                <button type="submit" className="btn-submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ZodYouTubeForm