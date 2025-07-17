import { NextApiRequest, NextApiResponse } from "next";

let products = [
  { id: 1, name: "Product A", price: 10000 },
  { id: 2, name: "Product B", price: 20000 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(products);
      break;

    case "POST":
      const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price,
      };
      products.push(newProduct);
      res.status(201).json(newProduct);
      break;

    case "PUT":
      const { id, name, price } = req.body;
      const indexToUpdate = products.findIndex((p) => p.id === id);
      if (indexToUpdate !== -1) {
        products[indexToUpdate] = { id, name, price };
        res.status(200).json(products[indexToUpdate]);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
      break;

    case "DELETE":
      const idToDelete = parseInt(req.body.id);
      products = products.filter((p) => p.id !== idToDelete);
      res.status(200).json({ message: "Product deleted" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
