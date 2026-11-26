import z from "zod";

export const customerregisterschema = z.object({

    name: z.string().min(3, "Name must contain at least 3 letters"),
    phone: z.string().length(10, "Phone number must contain 10 digits"),
    email: z.string().email("Enter a valid email address"),
    address: z.string().min(5, "Enter a valid address"),
    password: z.string().min(8, "Password must contain at least 8 characters")

});