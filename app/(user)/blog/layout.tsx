import Banner from '../../../components/Banner'
import BlogHeader from '../../../components/BlogHeader'
import '../../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BlogHeader />
        <Banner />
        {children}
      </body>
    </html>
  )
}
