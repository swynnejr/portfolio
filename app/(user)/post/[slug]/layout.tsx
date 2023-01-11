import BlogBanner from '../../../../components/BlogBanner'
import BlogHeader from '../../../../components/BlogHeader'
import '../../../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-[2000px] w-[90%] mx-auto'>
        <BlogHeader />
        <BlogBanner />
        {children}
      </body>
    </html>
  )
}