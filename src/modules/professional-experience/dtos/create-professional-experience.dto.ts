import { z } from "zod";

export const createProfessionalExperienceSchema = z.object({
  companyName: z.string().nonempty({ message: "Informe o nome da empresa" }),
  jobTitle: z.string().nonempty({ message: "Informe o cargo" }),
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
  responsibilities: z
    .string()
    .nonempty({ message: "Informe as responsabilidades" }),
  keyAchievements: z
    .string()
    .nonempty({ message: "Informe os principais feitos" }),
  toolsAndTechnologies: z
    .string()
    .nonempty({ message: "Informe ferramentas e tecnologias" }),
  additionalDescription: z.string().optional(),
});

export type CreateProfessionalExperienceDto = z.infer<
  typeof createProfessionalExperienceSchema
>;
