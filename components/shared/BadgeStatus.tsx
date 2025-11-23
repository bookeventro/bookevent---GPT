import { Badge } from '@/components/ui/badge'
import { RequestStatus } from '@/lib/types'

export function BadgeStatus({ status }: { status: RequestStatus }) {
  const colorMap: Record<RequestStatus, string> = {
    NOU: 'bg-primary/10 text-primary',
    'ÎN DISCUȚIE': 'bg-sky-100 text-sky-700',
    ACCEPTAT: 'bg-emerald-100 text-emerald-700',
    RESPINS: 'bg-rose-100 text-rose-700',
  }

  return <Badge className={colorMap[status]}>{status}</Badge>
}
