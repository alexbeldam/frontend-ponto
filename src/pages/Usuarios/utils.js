import z from "zod";

export const editValidationSchema = z.object({
  cargo: z.string().optional(),
});
