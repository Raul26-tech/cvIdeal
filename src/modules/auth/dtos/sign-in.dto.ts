import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("O e-mail informado está no formato inválido!"),
  password: z.string().min(6, "A senha deve conter no mínimo 6 digitos"),
});

export type signInDto = z.infer<typeof signInSchema>;
