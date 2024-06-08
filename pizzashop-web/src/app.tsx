import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme-provider'
import { AppRoutes } from './routes'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
