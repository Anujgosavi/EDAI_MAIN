export default function TherapistsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="therapists-layout">
      {children}
    </div>
  )
}