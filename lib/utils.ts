import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Linking } from 'react-native';
import type { StoreApi, UseBoundStore } from 'zustand';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

