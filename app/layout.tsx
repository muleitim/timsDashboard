import './globals.css'
import { inter } from '@/components/shared/fonts'
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants'
import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`, 
    default: APP_NAME,
  },

  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
}


export default function RootLayout({children}: { children: React.ReactNode })
{
  
  console.log("SERVER URL: ", SERVER_URL );

  return (
    <html lang='en' suppressHydrationWarning  >
      
      <body className={ ` ${inter.className} antialiased ` } >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  )
}