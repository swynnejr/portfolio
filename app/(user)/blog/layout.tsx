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
      <body className='max-w-[2000px] w-[90%] mx-auto'>
        <BlogHeader />
        <Banner />
        {children}
      </body>
    </html>
  )
}
