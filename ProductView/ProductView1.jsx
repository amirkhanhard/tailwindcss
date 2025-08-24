
import { useState } from "react";

export default function ProductView() {
  const images = [
    "https://picsum.photos/id/1011/600/600",
    "https://picsum.photos/id/1011/600/600",
    "https://picsum.photos/id/1011/600/600",
    "https://picsum.photos/id/1011/600/600",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-6">
        
        {/* Image Section */}
        <div>
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-[450px] object-cover rounded-2xl border"
          />
          <div className="flex gap-3 mt-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                  selectedImage === img ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Stylish Modern Chair
            </h1>
            <p className="text-gray-600 mb-4">
              A perfect chair for your living room with elegant design and high-quality material. Comfortable and durable.
            </p>
            <div className="text-2xl font-semibold text-green-600 mb-6">
              $249.99
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Choose Color:</h3>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:scale-110 transition" />
                <button className="w-8 h-8 rounded-full bg-red-500 border-2 border-gray-300 hover:scale-110 transition" />
                <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300 hover:scale-110 transition" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white py-3 rounded-2xl text-lg font-medium hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="flex-1 border border-gray-400 text-gray-800 py-3 rounded-2xl text-lg font-medium hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
