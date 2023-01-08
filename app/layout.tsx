import { ClientProvider } from "~/pages/api/trpcClient";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClientProvider>
  );
}
