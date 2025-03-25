import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data/blog';
import Loading from '../../components/loadingscreen/Loading';

export default function FuturisticBlogContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        <Loading />
      </div>
    );
  }

  return (
    <div className="mt-5 bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-6 rounded-2xl shadow-xl border border-blue-200/60">
      <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800">
            Trending <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Destinations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogData.map((product) => (
            <div 
              key={product.id} 
              className="relative group bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-100/60 hover:border-blue-300/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Gradient highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-cyan-100/0 group-hover:from-blue-100/20 group-hover:to-cyan-100/10 transition-all duration-500"></div>
              
              {/* Image container with hover effect */}
              <div className="relative w-full h-60 overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-cyan-50">
                <img 
                  alt={product.name} 
                  src={product.image} 
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105" 
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 mt-5">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  <Link to={`/blog-overview/${product.id}`} className="hover:underline">
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {product.currency}
                </p>
              </div>
              
              {/* Futuristic corner accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}