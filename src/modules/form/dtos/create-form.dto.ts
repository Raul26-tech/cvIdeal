import { z } from "zod";

export const createFormSchema = z.object({});

export type CreateFormDto = z.infer<typeof createFormSchema>;
