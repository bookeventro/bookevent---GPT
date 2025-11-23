import { z } from "zod";

export const OfferRequestSchema = z.object({
  providerId: z.string(),
  numeClient: z.string(),
  emailClient: z.string(),
  telefonClient: z.string(),
  tipEveniment: z.string(),
  dataEveniment: z.string(),
  locatie: z.string(),
  numarInvitati: z.number().nullable().optional(),  
  buget: z.number().nullable().optional(),
  observatii: z.string().optional(),
});

export type OfferRequestType = z.infer<typeof OfferRequestSchema>;
