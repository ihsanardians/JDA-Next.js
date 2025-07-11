type Props = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Detail Produk</h1>
        <p className="mt-4">
          Anda sedang melihat produk dengan ID: {params.id}
        </p>
      </div>
    </main>
  );
}
