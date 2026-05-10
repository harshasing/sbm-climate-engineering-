'use client'

import { toast as sonnerToast } from 'sonner'

type ToastProps = {
  title?: React.ReactNode
  description?: React.ReactNode
  variant?: 'default' | 'destructive'
  action?: React.ReactNode
}

function toast({ title, description, variant, action, ...props }: ToastProps) {
  const options = {
    description,
    action: action as any, // sonner action is slightly different but often compatible for simple cases
    ...props,
  }

  if (variant === 'destructive') {
    return sonnerToast.error(title, options)
  }

  return sonnerToast(title, options)
}

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string | number) => sonnerToast.dismiss(toastId),
  }
}

export { toast, useToast }
