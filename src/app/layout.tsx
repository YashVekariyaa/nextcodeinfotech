'use client';
import "./globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* < /> */}
      <body className={`font-poppins text-black overflow-x-hidden`}>
        {/* <body className='bg-gray-100/50 dark:bg-grey-900 text-black dark:text-white overflow-x-hidden'> */}
        {children}
        {/* <Analytics /> */}
      </body>
    </html >
  )
}
