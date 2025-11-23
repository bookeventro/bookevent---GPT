import * as React from 'react'
import { create } from 'zustand'

export type Toast = {
  id: string
  title?: string
  description?: string
  duration?: number
  variant?: 'default' | 'destructive'
}

interface ToastStore {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, { id: crypto.randomUUID(), duration: 3500, ...toast }],
    })),
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}))

export function useToast() {
  const addToast = useToastStore((state) => state.addToast)
  return {
    toast: addToast,
  }
}
