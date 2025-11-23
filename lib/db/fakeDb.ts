import { randomUUID } from 'crypto'
import { addDays } from 'date-fns'
import type { AvailabilitySlot, NewOfferRequestInput, OfferRequest, Provider, RequestStatus } from '../types'

let providers: Provider[] = [
  {
    id: 'prov-1',
    slug: 'formatia-aurora-timisoara',
    nume: 'Formația Aurora',
    categorie: 'FORMAȚIE',
    judet: 'Timiș',
    localitate: 'Timișoara',
    descriereScurta: 'Trupa live pentru evenimente elegante în vestul țării',
    descriereDetaliata:
      'Formația Aurora combină experiența scenică cu un repertoriu modern, oferind sonorizare completă și coordonare muzicală.',
    pretStart: 1500,
    intervalPret: { min: 1500, max: 3000 },
    rating: 4.8,
    fotoCoverUrl: null,
    galleryUrls: [],
    telefonContact: '+40 723 123 456',
    emailContact: 'contact@formatiaaurora.ro',
    website: 'https://formatiaaurora.ro',
    socialLinks: {
      instagram: 'https://instagram.com/formatiaaurora',
      facebook: 'https://facebook.com/formatiaaurora',
    },
    tags: ['live band', 'coveruri', 'sonorizare'],
    disponibilitateZile: ['VINERI', 'SÂMBĂTĂ', 'DUMINICĂ'],
    areContractStandard: true,
  },
  {
    id: 'prov-2',
    slug: 'dj-andrei-timisoara',
    nume: 'DJ Andrei',
    categorie: 'DJ',
    judet: 'Timiș',
    localitate: 'Timișoara',
    descriereScurta: 'DJ pentru nunți și corporate, cu mixaje fluide și MC',
    descriereDetaliata:
      'Andrei aduce echipament propriu, lumini inteligente și un vibe pozitiv pentru evenimente memorabile.',
    pretStart: 800,
    intervalPret: { min: 800, max: 2000 },
    rating: 4.6,
    fotoCoverUrl: null,
    galleryUrls: [],
    telefonContact: '+40 722 987 654',
    emailContact: 'djandrei@example.com',
    website: null,
    socialLinks: {
      instagram: 'https://instagram.com/djandreiofficial',
    },
    tags: ['dj', 'lumini', 'MC'],
    disponibilitateZile: ['VINERI', 'SÂMBĂTĂ'],
    areContractStandard: true,
  },
]

let requests: OfferRequest[] = [
  {
    id: 'req-1',
    providerId: 'prov-1',
    dataCerere: new Date().toISOString(),
    numeClient: 'Ioana Popescu',
    emailClient: 'ioana@test.com',
    telefonClient: '+40 722 000 111',
    tipEveniment: 'Nuntă',
    dataEveniment: addDays(new Date(), 120).toISOString(),
    localitateEveniment: 'Arad',
    numarInvitati: 180,
    bugetEstimativ: 2500,
    mesajClient: 'Ne dorim muzică live, repertoriu modern și popular.',
    status: 'NOU',
    esteFavorit: false,
    noteInterne: 'Client interesat de pachet complet',
  },
]

let availability: AvailabilitySlot[] = Array.from({ length: 45 }).map((_, index) => {
  const date = addDays(new Date(), index)
  const status = index % 7 === 0 ? 'REZERVAT' : index % 5 === 0 ? 'OPTIONAT' : 'LIBER'
  return { providerId: 'prov-1', date: date.toISOString(), status }
})

export async function getProviderBySlug(slug: string) {
  return providers.find((p) => p.slug === slug) || null
}

export async function getProviderById(id: string) {
  return providers.find((p) => p.id === id) || null
}

export async function listProviders() {
  return providers
}

export async function listRequestsByProvider(providerId: string) {
  return requests.filter((r) => r.providerId === providerId)
}

export async function getRequestById(id: string) {
  return requests.find((req) => req.id === id) || null
}

export async function createOfferRequest(data: NewOfferRequestInput) {
  const newRequest: OfferRequest = {
    ...data,
    dataCerere: new Date().toISOString(),
    id: randomUUID(),
    status: 'NOU',
    esteFavorit: false,
  }
  requests = [newRequest, ...requests]
  return newRequest
}

export async function updateRequestStatus(
  requestId: string,
  status: RequestStatus,
  noteInterne?: string,
) {
  requests = requests.map((req) =>
    req.id === requestId ? { ...req, status, noteInterne: noteInterne ?? req.noteInterne } : req,
  )
  return requests.find((req) => req.id === requestId) || null
}

export async function toggleFavoriteRequest(requestId: string, value?: boolean) {
  requests = requests.map((req) =>
    req.id === requestId
      ? { ...req, esteFavorit: typeof value === 'boolean' ? value : !req.esteFavorit }
      : req,
  )
  return getRequestById(requestId)
}

export async function listAvailabilityByProvider(providerId: string) {
  return availability.filter((slot) => slot.providerId === providerId)
}

export async function upsertAvailabilitySlots(providerId: string, slots: AvailabilitySlot[]) {
  availability = availability.filter((slot) => slot.providerId !== providerId)
  availability.push(...slots)
  return listAvailabilityByProvider(providerId)
}
