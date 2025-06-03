import z from "zod";

export const updateValidationSchema = z
  .object({
    nome: z.string().optional(),
    email: z.string().email().or(z.literal("")).optional(),
    senha: z.string().optional(),
    confirmar: z.string().optional(),
  })
  .refine((data) => data.senha === data.confirmar, {
    path: ["confirmar"],
    message: "As senhas não coincidem",
  });
