
import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<string[]>([]);

  const categories = ['All', 'Pain Relief', 'Antibiotics', 'Vitamins', 'Cardiology', 'Diabetes'];

  const products = [
    {
      id: '1',
      name: 'Paracetamol 500mg',
      category: 'Pain Relief',
      brand: 'Generic',
      price: '₹25',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      description: 'Effective pain relief and fever reducer',
    },
    {
      id: '2',
      name: 'Amoxicillin 250mg',
      category: 'Antibiotics',
      brand: 'PharmaCorp',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400',
      description: 'Broad-spectrum antibiotic for bacterial infections',
    },
    {
      id: '3',
      name: 'Vitamin D3 1000 IU',
      category: 'Vitamins',
      brand: 'HealthPlus',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1550572017-8d4c4c4aa08b?w=400',
      description: 'Essential vitamin for bone health and immunity',
    },
    {
      id: '4',
      name: 'Atorvastatin 20mg',
      category: 'Cardiology',
      brand: 'CardioMed',
      price: '₹85',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
      description: 'Cholesterol management medication',
    },
    {
      id: '5',
      name: 'Metformin 500mg',
      category: 'Diabetes',
      brand: 'DiabetCare',
      price: '₹45',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
      description: 'Type 2 diabetes management',
    },
    {
      id: '6',
      name: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      brand: 'Generic',
      price: '₹30',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
      description: 'Anti-inflammatory pain reliever',
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const addToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
  };

  const generateWhatsAppOrder = () => {
    const cartProducts = products.filter(p => cart.includes(p.id));
    const orderText = cartProducts.map(p => `• ${p.name} - ${p.price}`).join('\n');
    const message = encodeURIComponent(
      `Hi! I'd like to place an order:\n\n${orderText}\n\nPlease confirm availability and delivery details.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of pharmaceutical products
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search medicines, brands, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Cart */}
            {cart.length > 0 && (
              <button
                onClick={generateWhatsAppOrder}
                className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors flex items-center space-x-2"
              >
                <span>Order via WhatsApp ({cart.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Link
                  to={`/product/${product.id}`}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                >
                  <Eye size={20} className="text-gray-700" />
                </Link>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                </div>
                
                <p className="text-sm text-blue-600 font-medium mb-2">{product.brand}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => addToCart(product.id)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Plus size={16} />
                    <span>Add to Order</span>
                  </button>
                  
                  <Link
                    to={`/product/${product.id}`}
                    className="px-4 py-2 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
