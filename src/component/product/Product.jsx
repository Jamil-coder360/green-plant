"use client";

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://perenual.com/api/v2/species-list?key=sk-g7Fa6a19b9b7997d217785')
      .then((res) => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
      })
      .then((data) => {
        setPlants(data.data || []);
      })
      .catch((err) => {
        console.error(err);
        setError('Unable to fetch plant data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h2 className="text-[#285A43] text-[36px] text-center font-normal leading-[140%] font-lato tracking-[4%]">
            What we offer to you
          </h2>
        </div>

        {loading && (
          <p className="text-center mt-10 text-[#285A43]">Loading plants...</p>
        )}

        {error && (
          <p className="text-center mt-10 text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {plants.slice(0,8).map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Product