import React from "react";

const Featured = () => {
  return (
    <div className="mycontainer">
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-3xl font-semibold text-black">Featured Product</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {/* 1️⃣ Card 1 */}
        <div className="relative group">
          <img
            alt="Unparalleled Sound"
            loading="lazy"
            className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            src="/images/p1.png"
            style={{ color: "transparent" }}
          />
          <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
            <p className="font-medium text-xl lg:text-2xl">Unparalleled Sound</p>
            <p className="text-sm lg:text-base leading-5 max-w-60">
              Experience crystal-clear audio with premium headphones.
            </p>
            <button className="flex items-center gap-1.5 bg-orange-600 px-7 py-2 rounded">
              Buy now
            </button>
          </div>
        </div>

        {/* 2️⃣ Card 2 */}
        <div className="relative group">
          <img
            alt="Stay Connected"
            loading="lazy"
            className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            src="/images/p2.png"
            style={{ color: "transparent" }}
          />
          <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
            <p className="font-medium text-xl lg:text-2xl">Stay Connected</p>
            <p className="text-sm lg:text-base leading-5 max-w-60">
              Compact and stylish earphones for every occasion.
            </p>
            <button className="flex items-center gap-1.5 bg-orange-600 px-7 py-2 rounded">
              Buy now
            </button>
          </div>
        </div>

        {/* 3️⃣ Card 3 */}
        <div className="relative group">
          <img
            alt="Power in Every Pixel"
            loading="lazy"
            className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            src="/images/p3.png"
            style={{ color: "transparent" }}
          />
          <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
            <p className="font-medium text-xl lg:text-2xl">Power in Every Pixel</p>
            <p className="text-sm lg:text-base leading-5 max-w-60">
              Shop the latest laptops for work, gaming, and more.
            </p>
            <button className="flex items-center gap-1.5 bg-orange-600 px-7 py-2 rounded">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
