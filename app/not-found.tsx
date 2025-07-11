import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-3xl font-semibold">Halaman Tidak Ditemukan</h2>
        <p className="mt-2 text-lg">Ga ada loh halaman yang kamu cari.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded bg-blue-500 px-6 py-3 text-white"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
