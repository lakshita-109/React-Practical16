
import { useState } from "react";

function ProductManagement() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const [products, setProducts] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setProducts([
      ...products,
      {
        ...product,
        id: Date.now(),
      },
    ]);

    setProduct({
      name: "",
      price: "",
      category: "",
      quantity: "",
    });
  }

  return (
    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      <h1 className="mb-2 text-center text-3xl font-bold text-indigo-700">
        Product Management
      </h1>

      <p className="mb-6 text-center text-slate-500">
        Add and manage your products
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Price (₹)
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
            min="0.01"
            step="0.01"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Category
          </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2"
          >
            <option value="">Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            min="1"
            step="1"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Add Product
        </button>
      </form>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-800">
          Product List ({products.length})
        </h2>

        {products.length === 0 ? (
          <p className="rounded-lg bg-slate-50 p-4 text-center text-slate-500">
            No products added yet.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 p-5 transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-indigo-700">
                  {item.name}
                </h3>

                <p className="mt-2 text-slate-600">
                  <strong>Price:</strong> ₹{item.price}
                </p>

                <p className="text-slate-600">
                  <strong>Category:</strong> {item.category}
                </p>

                <p className="text-slate-600">
                  <strong>Quantity:</strong> {item.quantity}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductManagement;