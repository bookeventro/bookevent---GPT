import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'
import { ro } from 'date-fns/locale'
import { RequestStatus } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  try {
    return format(new Date(dateString), 'dd.MM.yyyy', { locale: ro })
  } catch (error) {
    return dateString
  }
}

export function formatMoney(value: number) {
  return `${value.toLocaleString('ro-RO')} EUR`
}

export function statusLabel(status: RequestStatus) {
  switch (status) {
    case 'NOU':
      return 'Nou'
    case 'ÎN DISCUȚIE':
      return 'În discuție'
    case 'ACCEPTAT':
      return 'Acceptat'
    case 'RESPINS':
      return 'Respins'
    default:
      return status
  }
}
