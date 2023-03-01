import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { globalStyles, lightTheme, darkTheme } from '@theme'
import { ThemeProvider } from 'next-themes'
import { SiteContainer, SiteHeader, Footer, PageBlock } from '@components'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => { 
    globalStyles()
  }, [])

  return (
    
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      enableSystem={ true }
      defaultTheme="light"
    > 
      <SiteHeader />
      <SiteContainer>
        <Component {...pageProps} />
        <PageBlock><Footer /></PageBlock>
      </SiteContainer>
    </ThemeProvider>
  
  )
}
