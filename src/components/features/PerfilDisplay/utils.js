import z from "zod";

export const updateValidationSchema = z.object({
  nome: z.string({ required_error: "O nome é obrigatório" }).min(1, "O nome é obrigatório"),
  email: z
    .string({ required_error: "O email é obrigatório" })
    .min(1, "O email é obrigatório")
    .email("O email é inválido"),
});

export const passwordValidationSchema = z
  .object({
    senha: z.string({ required_error: "A senha é obrigatória" }).min(1, "A senha é obrigatória"),
    confirmar: z
      .string({ required_error: "A confirmação é obrigatória" })
      .min(1, "A confirmação é obrigatória"),
  })
  .refine((data) => data.senha === data.confirmar, {
    path: ["confirmar"],
    message: "As senhas não coincidem",
  });
