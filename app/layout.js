import Head from "next/head"

export const metadata = {
  title: 'Tani nocleg w rowach, kwatery, apartamenty. Noclegi rowy - villazosia.plNext.js',
  description: 'Tanie noclegi w rowach. Noclegi nad morzem. Pokoje, apartamenty, kwatery. Rowy noclegi. Pensjonat blisko morza.',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
