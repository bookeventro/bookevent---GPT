export type ProviderCategorie =
  | 'FORMAȚIE'
  | 'DJ'
  | 'SOLIST'
  | 'FOTOGRAF'
  | 'VIDEOGRAF'
  | 'SAXOFONIST'
  | 'ALTE SERVICII'

export type RequestStatus = 'NOU' | 'ÎN DISCUȚIE' | 'ACCEPTAT' | 'RESPINS'

export interface Provider {
  id: string
  slug: string
  nume: string
  categorie: ProviderCategorie
  judet: string
  localitate: string
  descriereScurta: string
  descriereDetaliata: string
  pretStart: number
  intervalPret: { min: number; max: number } | null
  rating: number | null
  fotoCoverUrl: string | null
  galleryUrls: string[]
  telefonContact: string
  emailContact: string
  website: string | null
  socialLinks?: {
    instagram?: string
    facebook?: string
    tiktok?: string
  }
  tags: string[]
  disponibilitateZile: string[]
  areContractStandard: boolean
}

export interface OfferRequest {
  id: string
  providerId: string
  dataCerere: string
  numeClient: string
  emailClient: string
  telefonClient: string
  tipEveniment:
    | 'Nuntă'
    | 'Botez'
    | 'Corporate'
    | 'Petrecere privată'
    | 'Alt tip de eveniment'
  dataEveniment: string
  localitateEveniment: string
  numarInvitati: number | null
  bugetEstimativ: number | null
  mesajClient: string
  status: RequestStatus
  esteFavorit: boolean
  noteInterne?: string
}

export interface AvailabilitySlot {
  providerId: string
  date: string
  status: 'LIBER' | 'REZERVAT' | 'OPTIONAT'
}

export type NewOfferRequestInput = Omit<OfferRequest, 'id' | 'status' | 'esteFavorit' | 'dataCerere'>
