import z from "zod";

export const createrequestschema = z.object({
    goodsType: z.string().min(2, "Please enter a valid goods type"),
    description: z.string().min(5, "Description must contain at least 5 characters"),
    from: z.string().min(3, "Please enter a valid pickup location"),
    to: z.string().min(3, "Please enter a valid destination"),
    date: z.string().min(1, "Please enter transportation date"),
    pickupTime: z.string().min(1, "Please enter pickup time"),
    vehicleType: z.string().min(2, "Please enter required vehicle type")
});