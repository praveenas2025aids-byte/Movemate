
import z from "zod";

export const driverregisterschema = z.object({
    name: z.string().min(3, "Name must contain at least 3 letters"),
    phone: z.string().length(10, "Phone number must contain 10 digits"),
    experience: z.coerce.number().min(0, "Experience cannot be negative"),
    password: z.string().min(8, "Password must contain at least 8 characters")
});
