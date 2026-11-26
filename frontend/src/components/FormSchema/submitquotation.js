import z from "zod";

export const submitquotationschema = z.object({
    vehicleType: z.string().min(2, "Please enter vehicle type"),
    vehicleNumber: z.string().min(5, "Please enter a valid vehicle registration number"),
    amount: z.coerce.number()("Quotation amount must be greater than zero")
});