import { z } from "zod";

export const schema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().min(1, { message: "Email is required" }).email("Invalid Email"),
    channel: z.string().min(1, { message: "Channel is required" })
});