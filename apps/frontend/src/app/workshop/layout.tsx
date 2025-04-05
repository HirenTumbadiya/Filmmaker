import WorkshopNavbar from "@/components/workshop/navbar";
import RightBar from "@/components/workshop/rightbar";

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body>
        <main className="bg-black h-screen w-screen overflow-hidden relative">
          <WorkshopNavbar />
          <RightBar/>
          {children}
        </main>
      </body>
    </html>
  );
}
