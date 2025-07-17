import Link from "next/link";
import "./ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header className="w-full bg-gray-800 p-4 text-white">
          <nav className="container mx-auto flex justify-between">
            <Link href="/" className="hover:text-gray-300">
              Beranda
            </Link>
            <div>
              <Link href="/profile" className="mr-4 hover:text-gray-300">
                Profil
              </Link>
              <Link href="/about" className="mr-4 hover:text-gray-300">
                Tentang Kami
              </Link>
              <Link href="/contact" className="mr-4 hover:text-gray-300">
                Kontak
              </Link>
              <Link href="/products" className="mr-4 hover:text-gray-300">
                Produk
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
