import React, { useState } from 'react';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    size: [],
    colors: [],
    image: '',
    description: '',
    inStock: true,
  });

  const sizes = ['small', 'medium', 'large', 'x-large'];
  const colors = ['black', 'white', 'yellow', 'purple', 'blue', 'green', 'red', 'pink'];
  const categories = ['shirts', 't-shirts', 'jeans', 'shorts'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (e, field) => {
    const value = e.target.value;
    setProduct((prev) =>
      prev[field].includes(value)
        ? { ...prev, [field]: prev[field].filter((item) => item !== value) }
        : { ...prev, [field]: [...prev[field], value] }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/Api/Product/new-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...product,
          price: Number(product.price),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('✅ Product added successfully!');
        setProduct({
          name: '',
          category: '',
          price: '',
          size: [],
          colors: [],
          image: '',
          description: '',
          inStock: true,
        });
      } else {
        alert(`❌ Failed: ${data.message}`);
      }
    } catch (err) {
      console.error('Error adding product:', err);
      alert('❌ Something went wrong!');
    }
  };

  return (
    <div className="max-w-2xl p-6 bg-white rounded shadow">
      <h2 className="mb-4 text-xl font-semibold">Add New Product</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        {/* Size Selection */}
        <div>
          <label className="block mb-1 font-medium">Sizes</label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                type="button"
                key={size}
                onClick={(e) => handleMultiSelect(e, 'size')}
                value={size}
                className={`px-3 py-1 border rounded ${
                  product.size.includes(size) ? 'bg-black text-white' : 'bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <label className="block mb-1 font-medium">Colors</label>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                type="button"
                key={color}
                onClick={(e) => handleMultiSelect(e, 'colors')}
                value={color}
                className={`px-3 py-1 border rounded ${
                  product.colors.includes(color) ? 'bg-black text-white' : 'bg-gray-200'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          className="p-2 border rounded"
          rows={3}
        />

        <button type="submit" className="py-2 text-white bg-black rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;