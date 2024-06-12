import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'
import { ThemeProvider } from './contexts/theme-provider'
import { queryClient } from './lib/query-client'
import { AppRoutes } from './routes'

export function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <ReactQueryDevtools />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
