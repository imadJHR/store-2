"use client";

import React, { useEffect, useState } from "react";
import { Link } from "next/navigation";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updateList = data.filter((e) => e.category === cat);
    setFilter(updateList);
  };

  return (
    <>
      <div className="flex gap-4 justify-center ">
        <button
          className="text-md  hover:text-gray-600 hover:underline  w-11 h-9"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="text-md  hover:text-gray-600 hover:underline    w-auto  h-9"
          onClick={() => filterProduct("men's clothing")}
        >
          Men clothing
        </button>
        <button
          className="  hover:text-gray-600 w-auto hover:underline  text-md h-9"
          onClick={() => filterProduct("women's clothing")}
        >
          Women clothing
        </button>
        <button
          className="text-md  hover:text-gray-600  hover:underline   w-auto h-9"
          onClick={() => filterProduct("electronics")}
        >
          Electronic
        </button>
        <button
          className="text-md  hover:text-gray-600 hover:underline  w-auto h-9"
          onClick={() => filterProduct("jewelery")}
        >
          jewelery
        </button>
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {filter.map((product) => {
          return (
            <section className="">
              <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                  <img
                    src={product.image}
                    alt="Product"
                    class="h-80 w-72 object-cover rounded-t-xl"
                  />
                  <div class="px-4 py-3 w-72">
                    <span class="text-gray-400 mr-3 uppercase text-xs">{}</span>
                    <p class="text-lg font-bold text-black truncate block capitalize">
                      {product.title}
                    </p>
                    <div class="flex items-center">
                      <p class="text-lg font-semibold text-black cursor-auto my-3">
                        ${product.price}
                      </p>

                      

                   
                   <div class="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-bag-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div>
                   
                    </div>
                  </div>
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Products;
