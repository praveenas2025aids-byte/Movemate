import z from "zod";

export const feedbackschema = z.object({
    rating: z.coerce.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
    feedback: z.string().min(5, "Feedback must contain at least 5 characters")
});