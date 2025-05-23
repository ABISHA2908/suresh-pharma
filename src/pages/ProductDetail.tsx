
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Mail, Printer, Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data (in real app, fetch from API)
  const product = {
    id: id,
    name: 'Paracetamol 500mg',
    brand: 'Generic',
    price: '₹25',
    category: 'Pain Relief',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800',
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800',
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800',
    ],
    description: 'Effective pain relief and fever reducer for adults and children over 12 years.',
    composition: 'Each tablet contains Paracetamol 500mg',
    dosage: 'Adults: 1-2 tablets every 4-6 hours as needed. Maximum 8 tablets in 24 hours.',
    usage: 'For the relief of mild to moderate pain and fever.',
    storage: 'Store below 25°C in a dry place. Keep out of reach of children.',
    sideEffects: 'Rare: Skin rash, nausea. Stop use if allergic reaction occurs.',
    contraindications: 'Do not use if allergic to paracetamol or if you have severe liver disease.',
    manufacturer: 'PharmaCorp Ltd.',
    expiry: '12/2026',
    batchNo: 'PC2024001',
    rating: 4.8,
    reviews: 124,
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to order:\n\n• ${product.name} (${product.brand})\n• Quantity: ${quantity}\n• Price: ${product.price} each\n\nPlease confirm availability and delivery details.`
    );
    window.open(`https://wa.me/9345323237?text=${message}`, '_blank');
  };

  const handleEmailInquiry = () => {
    const subject = encodeURIComponent(`Inquiry about ${product.name}`);
    const body = encodeURIComponent(
      `Hello,\n\nI would like to inquire about ${product.name} (${product.brand}).\n\nPlease provide more information about availability and pricing.\n\nThank you.`
    );
    window.open(`mailto:info@sureshpharma.com?subject=${subject}&body=${body}`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, index) => (
                <div key={index} className="bg-white rounded-xl p-2 shadow-md">
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-blue-600 font-medium mb-4">{product.brand}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="text-3xl font-bold text-blue-600 mb-8">{product.price}</div>
            </div>

            {/* Quantity and Actions */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                >
                  <Plus size={20} />
                  <span>WhatsApp Order</span>
                </button>
                
                <button
                  onClick={handleEmailInquiry}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                >
                  <Mail size={20} />
                  <span>Email Inquiry</span>
                </button>
                
                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Printer size={20} />
                  <span>Print Info</span>
                </button>
              </div>
            </div>

            {/* Product Information */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Product Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Composition</h4>
                  <p className="text-gray-600">{product.composition}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Dosage</h4>
                  <p className="text-gray-600">{product.dosage}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Usage</h4>
                  <p className="text-gray-600">{product.usage}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Storage</h4>
                  <p className="text-gray-600">{product.storage}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Side Effects</h4>
                  <p className="text-gray-600">{product.sideEffects}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Contraindications</h4>
                  <p className="text-gray-600">{product.contraindications}</p>
                </div>
              </div>
            </div>

            {/* Manufacturing Details */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Manufacturing Details</h3>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Manufacturer:</span>
                  <p className="text-gray-600">{product.manufacturer}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Batch No:</span>
                  <p className="text-gray-600">{product.batchNo}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Expiry Date:</span>
                  <p className="text-gray-600">{product.expiry}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
