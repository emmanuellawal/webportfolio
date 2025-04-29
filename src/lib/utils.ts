import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names with Tailwind's class name merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date using Intl.DateTimeFormat
 */
export function formatDate(date: Date | string | number, options: Intl.DateTimeFormatOptions = {}) {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    ...options,
  }
  
  return new Intl.DateTimeFormat('en-US', defaultOptions).format(
    typeof date === 'string' || typeof date === 'number' ? new Date(date) : date
  )
}

/**
 * Debounce a function call
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  
  return function(this: any, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
      timeoutId = null
    }, delay)
  }
}

/**
 * Generate a random ID
 */
export function generateId(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
}

/**
 * Safely access nested object properties
 */
export function getNestedValue<T>(
  obj: Record<string, any> | undefined | null,
  path: string | string[],
  defaultValue?: T
): T | undefined {
  const keys = Array.isArray(path) ? path : path.split('.')
  let result = obj
  
  for (const key of keys) {
    if (result === undefined || result === null) return defaultValue
    result = result[key]
  }
  
  return result === undefined ? defaultValue : (result as T)
}
