import { z } from "zod";

export const authMeSchema = z.object({
  id: z
    .string({ message: "Informe o ID do usuário" })
    .uuid({ message: "Informe o ID do usuário" }),
});

export type autheMeDto = z.infer<typeof authMeSchema>;
