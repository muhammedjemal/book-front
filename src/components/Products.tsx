import React from "react";
import Image from "next/image"; // for the product images

const ProductGrid = () => {
  return (
    <div className=" py-16 font-sans">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <div className="w-full h-72 relative overflow-hidden rounded">
            <Image
              src="/images/5.jpg" // Replace with your image path
              alt="Abstract Canvas Art"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
              ABSTRACT CANVAS ART #AB470
            </h3>
            <p className="text-gray-600 text-sm mt-1">FROM BR21,843.00</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <div className="w-full h-72 relative overflow-hidden rounded">
            <Image
              src="/images/3.jpg" // Replace with your image path
              alt="Flower Canvas Art"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
              FLOWER CANVAS ART #FL022
            </h3>
            <p className="text-gray-600 text-sm mt-1">FROM BR21,843.00</p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center">
          <div className="w-full h-72 relative overflow-hidden rounded">
            <Image
              src="/images/4.jpg" // Replace with your image path
              alt="Minimalist Canvas Art"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
              MINIMALIST CANVAS ART #MI084
            </h3>
            <p className="text-gray-600 text-sm mt-1">FROM BR26,003.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
