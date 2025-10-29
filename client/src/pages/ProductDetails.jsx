import React, { useEffect, useState } from "react";
import ProductTabs from "../components/ProductTabs";
import NewArrivals from "../components/NewArrivals";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { products } from "../assets/products/products";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/Api/Product/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        const fetchedProduct = data.Data || {};
        setProduct(fetchedProduct);
        setMainImage(fetchedProduct.image || products.product_1);
        setThumbnails([
          fetchedProduct.image || products.product_1,
          products.product_2,
          products.product_3,
          products.product_4
        ]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const syncCartWithBackend = async (updatedCart) => {
    try {
      const res = await fetch("http://localhost:3000/Api/Cart/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, items: updatedCart }),
      });
      const data = await res.json();
      console.log("Backend response:", data);
    } catch (err) {
      console.error("Cart sync failed:", err);
    }
  };

  const handleAddToCart = () => {
    if (!token || !userId) {
      toast.info("Please login to add items to your cart.");
      navigate("/login");
      return;
    }

    if (!selectedColor || !selectedSize || quantity < 1) {
      toast.error("Please select color, size, and quantity");
      return;
    }

    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: mainImage,
      color: selectedColor,
      size: selectedSize,
      quantity,
      category: product.category,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    syncCartWithBackend(existingCart);
    toast.success("Item added to cart successfully!");
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="md:px-10 md:py-10">
      <div className="justify-between md:flex">
        {/* Image Section */}
        <div className="md:min-w-[49%] md:h-fit grid grid-cols-[25%_65%] gap-3 px-3 py-3">
  {/* Scrollable Thumbnails */}
  <div className="max-h-[500px] overflow-y-auto p-2 sticky top-24 scrollbar-hide ">
    <div className="grid gap-3">
      {thumbnails.map((img, index) => (
        <div
          key={index}
          className={`overflow-hidden border rounded-2xl cursor-pointer ${
            mainImage === img ? "ring-2 ring-black" : ""
          }`}
          onClick={() => setMainImage(img)}
        >
          <img src={img} className="object-cover w-full h-auto" />
        </div>
      ))}
    </div>
  </div>

  {/* Sticky Main Image */}
  <div className="sticky overflow-hidden border top-24 rounded-2xl h-fit">
    <img src={mainImage} className="object-cover w-full h-auto" />
  </div>
</div>


        {/* Product Info Section */}
        <div className="md:min-w-[49%] md:h-auto px-5 py-5">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl">₹{product.price}</p>
            <p className="font-extralight">{product.description}</p>
          </div>

          <div className="my-5 border border-gray-400"></div>

          {/* Color Selection */}
          <div>
            <p>Select Colors</p>
            <div className="grid grid-cols-[40px_40px_40px] h-10 gap-2 mt-2">
              {[
                { name: "amber-500", className: "bg-amber-500" },
                { name: "violet-400", className: "bg-violet-400" },
                { name: "blue-300", className: "bg-blue-300" },
              ].map(({ name, className }) => (
                <div
                  key={name}
                  className={`border ${className} rounded-3xl cursor-pointer ${
                    selectedColor === name ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => setSelectedColor(name)}
                ></div>
              ))}
            </div>
          </div>

          <div className="my-5 border border-gray-400"></div>

          {/* Size Selection */}
          <div>
            <p>Choose Size</p>
            <div className="md:h-10 m-2 md:grid md:grid-cols-[20%_20%_20%_20%] md:gap-5 gap-2 flex">
              {["Small", "Medium", "Large", "X-Large"].map((Size) => (
                <div
                  key={Size}
                  className={`flex items-center justify-center px-2 bg-gray-300 border rounded-3xl cursor-pointer ${
                    selectedSize === Size ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => setSelectedSize(Size)}
                >
                  {Size}
                </div>
              ))}
            </div>
          </div>

          <div className="my-5 border border-gray-400"></div>

          {/* Quantity + Add to Cart */}
          <div className="grid grid-cols-[20%_70%] gap-5 h-10">
            <div className="flex items-center justify-between w-full px-2 border rounded-3xl">
              <div
                className="cursor-pointer"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </div>
              <div>{quantity}</div>
              <div
                className="cursor-pointer"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </div>
            </div>

            <div
              className="flex items-center justify-center text-white bg-black border cursor-pointer rounded-3xl"
              onClick={handleAddToCart}
            >
              Add to cart
            </div>
          </div>
        </div>
      </div>

      <ProductTabs />
      <NewArrivals />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ProductDetails;