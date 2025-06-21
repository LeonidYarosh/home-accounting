'use client'
import { CssBaseline, ThemeProvider } from '@mui/material'

import {AppProvider} from '@toolpad/core'
import theme from '@/theme'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <AppProvider>
      {children}
    </AppProvider>
    </ThemeProvider>
  )
}
