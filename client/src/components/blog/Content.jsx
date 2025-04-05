import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data/blog';
import Loading from '../../components/loadingscreen/Loading';

export default function BlogContent() {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  useEffect(() => {
    if (loading) return;

    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const containerWidth = container.offsetWidth;
    const contentWidth = content.scrollWidth;

    // Only start scrolling if content overflows
    if (contentWidth <= containerWidth) return;

    const scrollInterval = setInterval(() => {
      setCurrentIndex(prev => {
        // Calculate how many cards fit in the container
        const cardWidth = content.firstChild?.offsetWidth + 24; // 24px for gap
        const visibleCards = Math.floor(containerWidth / cardWidth);

        // Move by one card each time, reset when we reach the end
        return (prev + 1) % (blogData.length - visibleCards + 1);
      });
    }, 2000); // Move once per second

    return () => clearInterval(scrollInterval);
  }, [loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#112D4E]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="mt-5 bg-[#F9F7F7] py-10 px-6 rounded-xl shadow-lg border border-[#3F72AF]">
      <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-[#112D4E]">Trending Destinations</h2>
        </div>

        <div
          ref={containerRef}
          className="mt-6 overflow-hidden"
        >
          <div
            ref={contentRef}
            className="flex gap-x-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (256 + 24)}px)` // 256px card width + 24px gap
            }}
          >
            {blogData.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 p-4 bg-[#DBE2EF] rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="w-full h-56 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-80 lg:h-72 xl:h-80">
                  <img alt={product.name} src={product.image} className="object-cover w-full h-full rounded-md" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#3F72AF] hover:text-[#112D4E] transition">
                  <Link to={`/blog-overview/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-[#112D4E] font-medium">{product.currency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}