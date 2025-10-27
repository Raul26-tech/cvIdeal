import { z } from "zod";

export const createFormationAcademicSchema = z.object({
  educationLevel: z
    .string()
    .nonempty({ message: "Informe o nível de educação" }),
  courseName: z.string().optional(),
  institutionName: z.string().optional(),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data de início inválida",
  }),
  endDate: z
    .string()
    .optional()
    .refine((date) => !date || !isNaN(Date.parse(date)), {
      message: "Data de término inválida",
    }),
  isCurrent: z.boolean(),
  lockedUnfinished: z.boolean().optional(),
});

export type CreateFormationAcademicDto = z.infer<
  typeof createFormationAcademicSchema
>;
