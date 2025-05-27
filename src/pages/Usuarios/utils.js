import z from "zod";

export const cargoValidationSchema = z.object({
  cargo: z.string({ required_error: "O cargo é obrigatório" }).min(1, "O cargo é obrigatório"),
});
