import { Heart } from "lucide-react";
import React from "react";

const Product = () => {
  return (
    <div className="mycontainer">
      <h1 className="text-black text-3xl font-semibold mt-20">Product List</h1>
      <div className="flex items-center flex-col">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 sm:grid-cols-2">
        <div>
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\01.webp"
              alt="\Images\01.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            Boss Quite Comfort 45
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            The Bose QuietComfort 45 headphon
          </p>
          <div className="flex mt-5 gap-10">
            <h3 className="font-semibold text-black text-lg">$329.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\02.webp"
              alt="\Images\02.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            ASUS ROG Zephyrus G16
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            The ASUS ROG Zephyrus G16 gaming 
          </p>
          <div className="flex mt-5 gap-15">
            <h3 className="font-semibold text-black text-lg">$1999.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
          
        </div>
        <div>
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\03.webp"
              alt="\Images\03.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            Samsung Galaxy S23
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            The Samsung Galaxy S23 offers an all-screen
          </p>
          <div className="flex mt-5 gap-15">
            <h3 className="font-semibold text-black text-lg">$799.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
          
        </div>
        <div>
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\04.webp"
              alt="\Images\04.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            PlayStation 5
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            The PlayStation 5 takes gaming to the
          </p>
          <div className="flex mt-5 gap-15">
            <h3 className="font-semibold text-black text-lg">$499.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
          
        </div>
        <div> 
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\05.webp"
              alt="\Images\05.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            MacBook Pro 16
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            The MacBook Pro 16, powered by Apple's
          </p>
          <div className="flex mt-5 gap-12">
            <h3 className="font-semibold text-black text-lg">$2499.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
          
        </div>
        <div>
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\06.webp"
              alt="\Images\06.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            Garmin Venu 2
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            The Garmin Venu 2 smartwatch blend
          </p>
          <div className="flex mt-5 gap-15">
            <h3 className="font-semibold text-black text-lg">$349.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
          
        </div>
        <div>
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\07.webp"
              alt="\Images\07.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            Canon EOS R5
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            The Canon EOS R5 is a game-changing
          </p>
          <div className="flex mt-5 gap-13">
            <h3 className="font-semibold text-black text-lg">$3899.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\08.webp"
              alt="\Images\08.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            Apple AirPods Pro 2nd gen
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            Apple AirPods Pro (2nd Gen) with Mag
          </p>
          <div className="flex mt-5 gap-15">
            <h3 className="font-semibold text-black text-lg">$399.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
          
        </div>
        <div>
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\09.webp"
              alt="\Images\09.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            Sony WF-1000XM5
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            Sony WF-1000XM5 true wireless earbuds
          </p>
          <div className="flex mt-5 gap-15">
            <h3 className="font-semibold text-black text-lg">$299.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
          
        </div>
        <div>
          <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center mt-5">
            <img
              src="\Images\10.webp"
              alt="\Images\10.webp"
              className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
            />
            <button className="rounded-full shadow-md top-4 right-4 bg-white p-2 absolute group">
              <Heart className="text-gray-400" />{" "}
            </button>
          </div>
          <h2 className="font-semibold text-black text-lg mt-3 truncate">
            Samsung Projector 4k
          </h2>
          <p className="text-gray-400 text-sm max-sm:hidden">
            The Samsung 4K Projector offers an immersive
          </p>
          <div className="flex mt-5 gap-15">
            <h3 className="font-semibold text-black text-lg">$329.99</h3>
            <button className="max-sm:hidden rounded-full border border-gray-200 px-3 text-gray-500 hover:border-none hover:bg-gray-50">
              Buy Now
            </button>
          </div>
          
        </div>
      </div>
        <button className="border border-gray-200 py-3 px-15 hover:bg-gray-50 hover:border-gray-50 mt-20">See more</button>
        </div>
    </div>
  );
};

export default Product;
