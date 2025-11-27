// import React from 'react';
// import { useState } from 'react';

// interface MetaProps {
//   views: number;
//   favorites: number;
// }

// const ProductMeta: React.FC<MetaProps> = ({ views, favorites }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleFavoriteClick = () => {
//     setIsFavorite(!isFavorite);
//     // Here, you'd typically call an API to update the favorite status on the server
//     // For this example, we're just toggling the local state.
//     console.log("Favorite clicked!");
//   };

//   return (
//     <div
//       data-meta="true"
//       data-context="gallery"
//       className="relative flex items-center gap-2 justify-between text-gray-300"
//     >
//       {/* Views Counter */}
//       <div
//         data-meta="true"
//         data-type="views"
//         className="flex items-center gap-1"
//       >
//         <p className="text-xs">{views} Views</p>
//       </div>

//       {/* Favorite Button */}
//       <div
//         data-meta="true"
//         data-type="favorite"
//         className="flex items-center gap-1"
//       >
//         <button
//           data-action="post"
//           data-type="action"
//           title="Add to Favorites"
//           className={` focus:outline-none transition-colors duration-200 ${
//             isFavorite ? 'text-red-500' : 'text-gray-600'
//           }`}
//           onClick={handleFavoriteClick}
//           aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//         >
//           <svg
//             className="h-5 w-5"
//             viewBox="0 0 23 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M22 6.54C22 3.48 19.384 1 16.156 1c-1.9 0-3.59.861-4.656 2.194C10.433 1.86 8.744 1 6.844 1 3.616 1 1 3.48 1 6.54 1 7.85 1.482 9.052 2.283 10c.11.13 9.226 9.999 9.226 9.999l9.21-10A5.34 5.34 0 0 0 22 6.54z"
//               stroke="currentColor"
//               fill={isFavorite ? 'red' : 'none'}
//               fillRule="evenodd"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//         <p className="text-xs">{favorites}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductMeta;
import React from 'react';
import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'; // Install Heroicons: npm install @heroicons/react

interface MetaProps {
  views: number;
  favorites: number;
}

const ProductMeta: React.FC<MetaProps> = ({ views, favorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    // Here, you'd typically call an API to update the favorite status on the server
    // For this example, we're just toggling the local state.
    console.log("Favorite clicked!");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      data-meta="true"
      data-context="gallery"
      className="relative flex items-center gap-2 justify-between text-gray-300"
    >
      {/* Views Counter */}
      <div
        data-meta="true"
        data-type="views"
        className="flex items-center gap-1 group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ShoppingCartIcon className={`h-5 w-5 ${isHovered ? 'text-white' : 'text-gray-400'} transition-colors duration-200`} />
        {/* <p className={`text-xs ${isHovered ? 'text-white' : 'text-gray-400'} transition-colors duration-200`}>{views} Views</p> */}
      </div>

      {/* Favorite Button */}
      <div
        data-meta="true"
        data-type="favorite"
        className="flex items-center gap-1"
      >
        <button
          data-action="post"
          data-type="action"
          title="Add to Favorites"
          className={` focus:outline-none transition-colors duration-200 ${
            isFavorite ? 'text-red-500' : 'text-gray-600'
          }`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 23 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 6.54C22 3.48 19.384 1 16.156 1c-1.9 0-3.59.861-4.656 2.194C10.433 1.86 8.744 1 6.844 1 3.616 1 1 3.48 1 6.54 1 7.85 1.482 9.052 2.283 10c.11.13 9.226 9.999 9.226 9.999l9.21-10A5.34 5.34 0 0 0 22 6.54z"
              stroke="currentColor"
              fill={isFavorite ? 'red' : 'none'}
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="text-xs">{favorites}</p>
      </div>
    </div>
  );
};

export default ProductMeta;