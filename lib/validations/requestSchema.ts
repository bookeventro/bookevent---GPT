import { z } from 'zod'

export const offerRequestSchema = z.object({
  numeClient: z.string().min(2, 'Numele este obligatoriu'),
  emailClient: z.string().email('Email invalid'),
  telefonClient: z.string().min(8, 'Telefonul este obligatoriu'),
  tipEveniment: z.enum(['Nuntă', 'Botez', 'Corporate', 'Petrecere privată', 'Alt tip de eveniment']),
  dataEveniment: z.string().refine((val) => !Number.isNaN(Date.parse(val)), {
    message: 'Data evenimentului este invalidă',
  }),
  localitateEveniment: z.string().min(2, 'Localitatea este obligatorie'),
  numarInvitati: z.number().positive().nullable().optional(),
  bugetEstimativ: z.number().min(0).nullable().optional(),
  mesajClient: z.string().min(10, 'Mesajul este prea scurt'),
  providerId: z.string(),
})

export type OfferRequestFormValues = z.infer<typeof offerRequestSchema>
