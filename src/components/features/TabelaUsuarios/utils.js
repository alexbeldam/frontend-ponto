import z from "zod";

export const editValidationSchema = z.object({
  cargo: z.string({ required_error: "O cargo é obrigatório" }).min(1, "O cargo é obrigatório"),
});
