import { createProfessionalExperienceSchema } from "@modules/professional-experience/dtos/create-professional-experience.dto";
import { createFormationAcademicSchema } from "./../../formation-academic/dtos/create-formation-academic.dto";
import { z } from "zod";

export const ResumeStyleOptionsSchema = z.enum([
  "classic",
  "creative",
  "functional",
  "digital",
  "modern",
  "infographic",
  "professional",
  "academic",
  "europass",
  "ats-friendly",
]);

export const ResumeVisualStylePreferenceSchema = z.enum([
  "formal",
  "casual",
  "minimalist",
  "colorful",
]);

export const ResumeDeliveryFormatSchema = z.enum([
  "pdf",
  "jpeg",
  "jpg",
  "png",
  "word",
  "online",
]);

const languagesAndFluencySchema = z.object({
  index: z.number(),
  liguage: z.string().nonempty({ message: "Informe a língua" }),
  fluence: z.enum(["basic", "intermediary", "advanced", "fluent"]),
});

export const createFormSchema = z.object({
  userId: z
    .string({ message: "Informe o ID do usuário" })
    .uuid({ message: "ID do usuário inválido" })
    .trim()
    .optional(),
  name: z
    .string({ message: "É necessário informar o nome completo" })
    .trim()
    .nonempty(),
  email: z.string({ message: "É necessário informar o e-mail" }).email(),
  cpf: z.string({ message: "É necessário informar o CPF" }).trim().nonempty(),
  phone: z
    .string({ message: "É necessário informar o telefone para contato" })
    .trim()
    .nonempty(),

  resumeStyleOptions: z.array(ResumeStyleOptionsSchema).optional().default([]),
  resumeStylePreference: z
    .array(ResumeVisualStylePreferenceSchema)
    .optional()
    .default([]),
  resumeDeliveryPreference: z
    .array(ResumeDeliveryFormatSchema)
    .optional()
    .default([]),
  resumeEspecification: z.string().optional(),
  desiredPosition: z
    .string()
    .nonempty({ message: "Informe a posição desejada" }),
  skillsAndExperience: z.string().optional(),
  careerGoals: z.string().optional(),
  notableAchievements: z.string().optional(),
  specificationsOrPreferences: z.string().optional(),

  professionalPosition: z
    .string()
    .nonempty({ message: "Informe a posição profissional" }),
  desiredPositionObjective: z.string().optional(),
  keyGoalOrAchievement: z.string().optional(),
  additionalInformation: z.string().optional(),

  skillsDescription: z
    .string()
    .nonempty({ message: "Descreva suas habilidades" }),
  languagesAndFluency: z.array(languagesAndFluencySchema).optional(),
  otherInformation: z.string().optional(),

  formationAcademics: z.array(createFormationAcademicSchema).optional(),
  professionalExperiences: z
    .array(createProfessionalExperienceSchema)
    .optional(),
});

export type CreateFormDto = z.infer<typeof createFormSchema>;
