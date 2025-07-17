"use client";

import { useEffect, useState } from "react";
fetch("/api/product");

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Partial<Product>>({ name: "", price: 0 });

  const fetchProducts = async () => {
    const res = await fetch("/api/product");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = form.id ? "PUT" : "POST";

    await fetch("/api/product", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", price: 0 });
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setForm(product);
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/product", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Kelola Produk</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Nama Produk"
          value={form.name || ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="number"
          placeholder="Harga Produk"
          value={form.price || ""}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {form.id ? "Update Produk" : "Tambah Produk"}
        </button>
      </form>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center border p-4 rounded shadow-sm"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-gray-500">
                Rp {product.price.toLocaleString()}
              </p>
            </div>
            <div className="space-x-2">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => handleDelete(product.id)}
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
