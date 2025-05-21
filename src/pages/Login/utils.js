import z from "zod";

export const loginValidationSchema = z.object({
  email: z.string({ required_error: "O email é obrigatório" }).email("O email é inválido"),
  senha: z.string({ required_error: "A senha é obrigatória" }),
});
