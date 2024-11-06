import { z } from "zod"

const LoginSchema = z.object({
    email : z.string().min(1, {message: "Email Not Found"}).email(),
    password: z.string().min(1, {message: "Password is required"})
})

type TLogiing = z.infer<typeof LoginSchema>

export {LoginSchema, type TLogiing}