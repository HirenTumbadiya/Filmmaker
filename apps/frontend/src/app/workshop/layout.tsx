export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body>
        <main className="bg-black h-screen w-screen overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
