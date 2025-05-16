import z from "zod";

export const usuarioValidationSchema = z
  .object({
    nome: z.string({ required_error: "O nome é obrigatório" }),
    email: z.string({ required_error: "O email é obrigatório" }).email("O email é inválido"),
    senha: z.string({ required_error: "A senha é obrigatória" }),
    cargo: z.string({ required_error: "O cargo é obrigatório" }),
    confirmar: z.string({ required_error: "A confirmação é obrigatória" }),
  })
  .refine((data) => data.senha === data.confirmar, {
    path: ["confirmar"],
    message: "As senhas não coincidem",
  });
