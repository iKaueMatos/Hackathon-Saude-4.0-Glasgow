
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import '@/globals.css'
import { AuthProvider } from './context/AuthProvider'

export function App() {

  return (
    <HelmetProvider>
        <ThemeProvider defaultTheme="light" storageKey="primarIA-theme">
          <Helmet titleTemplate="%s | PrimariAI" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
        </QueryClientProvider>
        </ThemeProvider>
    </HelmetProvider>
  )
}