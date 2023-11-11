import { Poppins, Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { Header } from '@/components/Header'
import { createClient } from '@/prismicio'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-poppins'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-inter'
})

export async function generateMetadata() {

  const client = createClient();

  const page = await client.getSingle("home");
 
  return {
    title: page.data.meta_title || "Instasany",
    description: page.data.meta_description || "Projeto de estudo dedicado ao Codeboost",
    openGraph: {
      images: [page.data.meta_image.url || ""],
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${poppins.className}`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
