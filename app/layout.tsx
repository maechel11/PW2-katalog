export const metadata = {
  title: 'katalog electronic',
  description: 'kataloggg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>        
        {children}
      </body>
    </html>
  )
}
