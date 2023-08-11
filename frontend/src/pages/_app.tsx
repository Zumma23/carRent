import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}> 
      <Component {...pageProps} />
    </LocalizationProvider>
  )
}
