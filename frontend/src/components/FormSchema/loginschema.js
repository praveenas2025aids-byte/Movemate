import z from "zod";

export const loginschema = z.object({

    phone: z.string().length(10, "Phone number must contain 10 digits"),
    password: z.string().min(8, "Password must contain at least 8 characters")

});