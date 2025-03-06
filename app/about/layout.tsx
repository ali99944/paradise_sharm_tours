import { Montserrat } from 'next/font/google'
// import '@/src/styles/globals.css'
import { loadEnvConfig } from '@next/env'


const font = Montserrat({
    subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dir = process.cwd()
  loadEnvConfig(dir)

//   const locale = await getLocale();

//   const messages = await getMessages();

  return (
    <html>
      <link rel="shortcut icon" href="favicon.ico" />
      <body className={`${font.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

