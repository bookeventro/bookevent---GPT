import { z } from 'zod'

export const providerSchema = z.object({
  nume: z.string().min(2, 'Numele este obligatoriu'),
  categorie: z.string(),
  judet: z.string().min(2, 'Județul este obligatoriu'),
  localitate: z.string().min(2, 'Localitatea este obligatorie'),
  descriereScurta: z.string().min(10, 'Descrierea scurtă este obligatorie'),
  descriereDetaliata: z.string().min(20, 'Adaugă mai multe detalii'),
  pretStart: z.number().min(0),
  intervalPret: z
    .object({
      min: z.number().min(0),
      max: z.number().min(0),
    })
    .nullable()
    .optional(),
  telefonContact: z.string().min(8),
  emailContact: z.string().email(),
  website: z.string().url().nullable().optional(),
  socialLinks: z
    .object({
      instagram: z.string().url().optional(),
      facebook: z.string().url().optional(),
      tiktok: z.string().url().optional(),
    })
    .optional(),
  tags: z.array(z.string()).default([]),
  disponibilitateZile: z.array(z.string()).default([]),
  areContractStandard: z.boolean().default(false),
})

export type ProviderFormValues = z.infer<typeof providerSchema>
