import { z }  from "zod"

const ZodSignUpSchema = z.object({
    firstName: z.string().min(1, {message: "first name is Required"}),
    lastName: z.string().min(1, {message: "last name is Required"}),
    phoneNumber: z.string().min(1, {message: "Required"}),
    email: z.string().min(1, {message: "Required"}).email(),
    password: z.string().min(8, {message: "Password must be 8 characters"})
    .regex(/.*[!@#$%^&*()-+{}|[\]\\:";'<>?,./].*/, {message: "Password should contain at least one character"}),
    confirmPassword : z.string().min(1, {message: "required"}),
}).refine( (input)=> input.password === input.confirmPassword, {message: "Password and ConfirmPassword is not match", path: ["confirmPassword"] } )

type TDataSignUpForm = z.infer<typeof ZodSignUpSchema>

export {ZodSignUpSchema, type TDataSignUpForm}