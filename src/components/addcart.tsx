// import React from "react";
// import { FaStripe } from "react-icons/fa"; // Import Stripe icon from react-icons library
// import confetti from "canvas-confetti";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: { y: 0.6 },
//   });
// };

// const StripeButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//     >
//       <FaStripe className="mr-2 h-5 w-5" /> {/* Stripe Icon */}
//       Buy Now
//     </button>
//   );
// };

// const AddToCartButton = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const { selectedSize, selectedNumberVar, variant, quantity, pathname } =
//     cartData;

//   const handleAddToCart = () => {
//     // Trigger the confetti effect
//     handleClick();

//     // Placeholder logic for adding to cart
//     alert(
//       `Added to Cart!
//       Size: ${selectedSize}
//       Number Variant: ${selectedNumberVar}
//       Variant: ${variant}
//       Quantity: ${quantity}
//       Pathname: ${pathname}`
//     );
//   };

//   const handleStripeCheckout = () => {
//     // Placeholder logic for Stripe checkout
//     alert("Start Stripe Checkout!");
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <AddToCartButton onClick={handleAddToCart} />
//       <StripeButton onClick={handleStripeCheckout} />
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const StripeButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//     >
//       <FaStripe className="mr-2 h-5 w-5" /> {/* Stripe Icon */}
//       Buy Now
//     </button>
//   );
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const { selectedSize, selectedNumberVar, variant, quantity, pathname } =
//     cartData;

//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = Cookies.get("cart");
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     Cookies.set("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleAddToCart = () => {
//     const existingItemIndex = cartItems.findIndex(
//       (item) => item.pathname === pathname
//     );

//     if (existingItemIndex !== -1) {
//       // Product already in cart, increase quantity
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       setCartItems(updatedCart);
//     } else {
//       // New product
//       setCartItems([
//         ...cartItems,
//         { selectedSize, selectedNumberVar, variant, quantity, pathname },
//       ]);
//     }
//   };

//   const handleStripeCheckout = () => {
//     // Handle the start checkout with stripe logic here
//     alert("Start Stripe Checkout!"); // placeholder action
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <StripeButton onClick={handleStripeCheckout} />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100"
//               >
//                 <p>
//                   <strong>Product:</strong> {item.pathname}
//                 </p>
//                 <p>
//                   <strong>Size:</strong> {item.selectedSize}
//                 </p>
//                 <p>
//                   <strong>Number:</strong> {item.selectedNumberVar}
//                 </p>
//                 <p>
//                   <strong>Variant:</strong> {item.variant}
//                 </p>
//                 <p>
//                   <strong>Quantity:</strong> {item.quantity}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const StripeButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//     >
//       <FaStripe className="mr-2 h-5 w-5" />
//       Buy Now
//     </button>
//   );
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = Cookies.get("cart");
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     Cookies.set("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleAddToCart = () => {
//     const existingItemIndex = cartItems.findIndex(
//       (item) => item.pathname === pathname
//     );

//     if (existingItemIndex !== -1) {
//       // Product already in cart, increase quantity
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       setCartItems(updatedCart);
//     } else {
//       // New product
//       setCartItems([
//         ...cartItems,
//         { selectedSize, selectedNumberVar, variant, quantity, pathname },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     setCartItems(updatedCart);
//   };

//   const handleCheckout = () => {
//     // Replace this alert with your actual navigation/checkout logic
//     // alert("Proceeding to Checkout!");
//     router.push("/checkout");
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <StripeButton onClick={handleCheckout} />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong> {item.pathname}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Number:</strong> {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Variant:</strong> {item.variant}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               View Cart
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const StripeButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//     >
//       <FaStripe className="mr-2 h-5 w-5" />
//       Buy Now
//     </button>
//   );
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = Cookies.get("cart");
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     Cookies.set("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleAddToCart = () => {
//     const existingItemIndex = cartItems.findIndex(
//       (item) => item.pathname === pathname
//     );

//     if (existingItemIndex !== -1) {
//       // Product already in cart, increase quantity
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       setCartItems(updatedCart);
//     } else {
//       // New product
//       setCartItems([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney,
//         },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     setCartItems(updatedCart);
//   };

//   const handleCheckout = () => {
//     // Replace this alert with your actual navigation/checkout logic
//     router.push("/checkout");
//   };
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <StripeButton onClick={handleCheckout} />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong> {item.pathname}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Number:</strong> {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Variant:</strong> {item.variant}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const StripeButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//     >
//       <FaStripe className="mr-2 h-5 w-5" />
//       Buy Now
//     </button>
//   );
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };

//   useEffect(() => {
//     const storedCart = Cookies.get("cart");
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     Cookies.set("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleAddToCart = () => {
//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       // Product already in cart with the same variation, increase quantity
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       setCartItems(updatedCart);
//     } else {
//       // New product variant
//       setCartItems([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice, // Use the calculated price
//         },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     setCartItems(updatedCart);
//   };

//   const handleCheckout = () => {
//     router.push("/checkout");
//   };
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <StripeButton onClick={handleCheckout} />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong> {item.pathname}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Number:</strong> {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Variant:</strong> {item.variant}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const StripeButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//     >
//       <FaStripe className="mr-2 h-5 w-5" />
//       Buy Now
//     </button>
//   );
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };

//   useEffect(() => {
//     const storedCart = Cookies.get("cart");
//     if (storedCart) {
//       try {
//         setCartItems(JSON.parse(storedCart));
//       } catch (e) {
//         console.error("Error parsing cart cookie:", e);
//         setCartItems([]); // Clear the cart if the format is incorrect.
//         Cookies.remove("cart");
//       }
//     }
//   }, []);
//   useEffect(() => {
//     Cookies.set("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleAddToCart = () => {
//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       setCartItems(updatedCart);
//     } else {
//       setCartItems([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//         },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     setCartItems(updatedCart);
//   };

//   const handleCheckout = () => {
//     console.log("Cart data for checkout:", cartItems); // This is the new line for console.log
//     // router.push("/checkout");
//   };
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <StripeButton onClick={handleCheckout} />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong> {item.pathname}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Number:</strong> {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Variant:</strong> {item.variant}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const StripeButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//     >
//       <FaStripe className="mr-2 h-5 w-5" />
//       Buy Now
//     </button>
//   );
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };

//   useEffect(() => {
//     const storedCart = Cookies.get("cart");
//     if (storedCart) {
//       try {
//         setCartItems(JSON.parse(storedCart));
//       } catch (e) {
//         console.error("Error parsing cart cookie:", e);
//         setCartItems([]); // Clear the cart if the format is incorrect.
//         Cookies.remove("cart");
//       }
//     } else {
//       setCartItems([]); // if there is no cart set it to empty
//     }
//   }, []);
//   useEffect(() => {
//     Cookies.set("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleAddToCart = () => {
//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       setCartItems(updatedCart);
//     } else {
//       setCartItems([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//         },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     setCartItems(updatedCart);
//   };

//   const handleCheckout = () => {
//     console.log("Cart data for checkout:", cartItems); // This is the new line for console.log
//     router.push("/checkout");
//   };
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <StripeButton onClick={handleCheckout} />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong> {item.pathname}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Number:</strong> {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Variant:</strong> {item.variant}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const StripeButton = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//   >
//     <FaStripe className="mr-2 h-5 w-5" />
//     Buy Now
//   </button>
// );

// const AddToCartButton = () => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };

//   useEffect(() => {
//     const storedCart = Cookies.get("cart");
//     if (storedCart) {
//       try {
//         setCartItems(JSON.parse(storedCart));
//       } catch (e) {
//         console.error("Error parsing cart cookie:", e);
//         setCartItems([]); // Clear the cart if the format is incorrect.
//         Cookies.remove("cart");
//       }
//     } else {
//       setCartItems([]); // if there is no cart set it to empty
//     }
//   }, []); // Empty dependency array makes this run once on mount

//   useEffect(() => {
//     Cookies.set("cart", JSON.stringify(cartItems));
//   }, [cartItems]); // Update the cookie whenever cartItems change

//   const handleAddToCart = () => {
//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       setCartItems(updatedCart);
//     } else {
//       setCartItems([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//         },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     setCartItems(updatedCart);
//   };

//   const handleCheckout = () => {
//     console.log("Cart data for checkout:", cartItems);
//     router.push("/checkout");
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <StripeButton onClick={handleCheckout} />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong> {item.pathname}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Number:</strong> {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Variant:</strong> {item.variant}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> ${item.amountOfMoney.toFixed(2)}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">
//               Total: ${calculateTotal().toFixed(2)}
//             </div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect, useCallback } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const StripeButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//     >
//       <FaStripe className="mr-2 h-5 w-5" />
//       Buy Now
//     </button>
//   );
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState(() => {
//     const storedCart = Cookies.get("cart");
//     try {
//       return storedCart ? JSON.parse(storedCart) : [];
//     } catch (e) {
//       console.error("Error parsing cart cookie:", e);
//       Cookies.remove("cart");
//       return [];
//     }
//   });
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };

//   // Use useCallback to memoize updateCart
//   const updateCart = useCallback((newCartItems) => {
//     setCartItems(newCartItems);
//     Cookies.set("cart", JSON.stringify(newCartItems));
//   }, []);

//   const handleAddToCart = () => {
//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );
//     if (existingItemIndex !== -1) {
//       // Product already in cart with the same variation, increase quantity
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       updateCart(updatedCart);
//     } else {
//       updateCart([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//         },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     updateCart(updatedCart);
//   };
//   const handleCheckout = () => {
//     console.log("Cart data for checkout:", cartItems);
//     router.push("/checkout");
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <StripeButton onClick={handleCheckout} />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong> {item.pathname}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Number:</strong> {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Variant:</strong> {item.variant}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect, useCallback } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const StripeButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center w-full px-4 py-3 rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 active:bg-indigo-800 text-white font-semibold text-base"
//     >
//       <FaStripe className="mr-2 h-5 w-5" />
//       Buy Now
//     </button>
//   );
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     className="px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//   >
//     ADD TO CART
//   </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState(() => {
//     if (typeof window === "undefined") {
//       return []; // return empty array if it is the server side
//     }
//     const storedCart = Cookies.get("cart");
//     try {
//       return storedCart ? JSON.parse(storedCart) : [];
//     } catch (e) {
//       console.error("Error parsing cart cookie:", e);
//       Cookies.remove("cart");
//       return [];
//     }
//   });
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };

//   // Use useCallback to memoize updateCart
//   const updateCart = useCallback((newCartItems) => {
//     setCartItems(newCartItems);
//     if (typeof window !== "undefined") {
//       // check if window is defined to be sure that you are in the client side
//       Cookies.set("cart", JSON.stringify(newCartItems));
//     }
//   }, []);

//   const handleAddToCart = () => {
//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );
//     if (existingItemIndex !== -1) {
//       // Product already in cart with the same variation, increase quantity
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       updateCart(updatedCart);
//     } else {
//       updateCart([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//         },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     updateCart(updatedCart);
//   };

//   const handleCheckout = () => {
//     console.log("Cart data for checkout:", cartItems);
//     router.push("/checkout");
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <StripeButton onClick={handleCheckout} />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong> {item.pathname}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Number:</strong> {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Variant:</strong> {item.variant}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect, useCallback } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     // className=" w-full px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//     className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-orange-500 bg-hero-background px-3 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
//   >
//     <span className="relative z-5">ADD TO CART</span>
//   </button>
//   //   <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-orange-500 bg-hero-background px-3 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
//   // </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };
//   const updateCart = useCallback((newCartItems) => {
//     setCartItems(newCartItems);
//     if (typeof window !== "undefined") {
//       Cookies.set("cart", JSON.stringify(newCartItems));
//     }
//   }, []);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedCart = Cookies.get("cart");
//       try {
//         if (storedCart) {
//           setCartItems(JSON.parse(storedCart));
//         }
//       } catch (error) {
//         console.error("Error parsing cart cookie:", error);
//         Cookies.remove("cart");
//         setCartItems([]);
//       }
//     }
//   }, []);

//   const handleAddToCart = () => {
//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       updateCart(updatedCart);
//     } else {
//       updateCart([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//         },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     updateCart(updatedCart);
//   };
//   const handleCheckout = () => {
//     alert(JSON.stringify(cartItems, null, 2));
//     router.push("/checkout");
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       {/* <StripeButton onClick={handleCheckout} /> */}

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong>{" "}
//                     {item.pathname === "/products/2"
//                       ? "Art Numer Two"
//                       : item.pathname === "/products/1"
//                       ? "Art Numer One"
//                       : item.pathname === "/products/3"
//                       ? "Art Numer Three"
//                       : "Not Specified"}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Unique Print Number:</strong>{" "}
//                     {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Stretch / Frame Type:</strong>{" "}
//                     {item.variant === "customVariant"
//                       ? "None"
//                       : item.variant === "variant1"
//                       ? "Rolled Canvas ($200)"
//                       : item.variant === "variant2"
//                       ? "Frameless Stretch ($210)"
//                       : item.variant === "variant3"
//                       ? "Stretch+Gold Frame ($282)"
//                       : item.variant === "variant4"
//                       ? "Stretch+Silver Frame ($225)"
//                       : item.variant === "variant5"
//                       ? "Stretch+Black Frame ($244)"
//                       : item.variant === "variant6"
//                       ? "Stretch+White Frame ($260)"
//                       : item.variant === "variant7"
//                       ? "Stretch+Wood Frame ($270)"
//                       : "Not Found"}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
//-----------------------------------------------------
// src/app/MyCartCheckout.tsx
// import React, { useState, useEffect, useCallback } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     onClick={handleClick}
//     type="button"
//     // className=" w-full px-4 py-3 rounded border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-200 text-orange-600 font-semibold text-base"
//     className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-orange-500 bg-hero-background px-3 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
//   >
//     <span className="relative z-5">ADD TO CART</span>
//   </button>
//   //   <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-orange-500 bg-hero-background px-3 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full">
//   // </button>
// );

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };
//   const updateCart = useCallback((newCartItems) => {
//     setCartItems(newCartItems);
//     if (typeof window !== "undefined") {
//       Cookies.set("cart", JSON.stringify(newCartItems));
//     }
//   }, []);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedCart = Cookies.get("cart");
//       try {
//         if (storedCart) {
//           setCartItems(JSON.parse(storedCart));
//         }
//       } catch (error) {
//         console.error("Error parsing cart cookie:", error);
//         Cookies.remove("cart");
//         setCartItems([]);
//       }
//     }
//   }, []);

//   const handleAddToCart = () => {
//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       updateCart(updatedCart);
//     } else {
//       updateCart([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//         },
//       ]);
//     }
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     updateCart(updatedCart);
//   };

//   const handleCheckout = async () => {
//     console.log("handleCheckout is executed");
//     try {
//       const response = await fetch("/api/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(cartItems),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error(
//           "Failed to create checkout session:",
//           errorData.error || "Unknown error"
//         );
//         alert("Failed to initiate checkout, please try again.");
//         return;
//       }

//       const { sessionId } = await response.json();
//       console.log("sessionId:", sessionId);
//       window.location.href = `https://checkout.stripe.com/c/pay/${sessionId}`;
//     } catch (error: any) {
//       console.error("Error initiating checkout:", error);
//       alert("Failed to initiate checkout, please try again.");
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       {/* <StripeButton onClick={handleCheckout} /> */}

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong>{" "}
//                     {item.pathname === "/products/2"
//                       ? "Art Numer Two"
//                       : item.pathname === "/products/1"
//                       ? "Art Numer One"
//                       : item.pathname === "/products/3"
//                       ? "Art Numer Three"
//                       : "Not Specified"}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Unique Print Number:</strong>{" "}
//                     {item.selectedNumberVar}
//                   </p>
//                   <p>
//                     <strong>Stretch / Frame Type:</strong>{" "}
//                     {item.variant === "customVariant"
//                       ? "None"
//                       : item.variant === "variant1"
//                       ? "Rolled Canvas ($200)"
//                       : item.variant === "variant2"
//                       ? "Frameless Stretch ($210)"
//                       : item.variant === "variant3"
//                       ? "Stretch+Gold Frame ($282)"
//                       : item.variant === "variant4"
//                       ? "Stretch+Silver Frame ($225)"
//                       : item.variant === "variant5"
//                       ? "Stretch+Black Frame ($244)"
//                       : item.variant === "variant6"
//                       ? "Stretch+White Frame ($260)"
//                       : item.variant === "variant7"
//                       ? "Stretch+Wood Frame ($270)"
//                       : "Not Found"}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// import { createPopper } from "@popperjs/core";
// import { motion, AnimatePresence } from "framer-motion";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     type="button"
//     className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-orange-500 bg-hero-background px-3 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
//   >
//     <span className="relative z-5">ADD TO CART</span>
//   </button>
// );

// const NumberDropdown = ({ onSelect, cartItems, pathname }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(null);
//   const dropdownRef = useRef(null);
//   const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
//   const [hoveredNumber, setHoveredNumber] = useState(null);
//   const popperInstances = useRef({});
//   const tooltipElements = useRef({});

//   // Disable numbers already used for this pathname
//   let disabledNumbers = cartItems
//     .filter(
//       (item) => item.pathname === pathname && item.uniqueNumber !== undefined
//     )
//     .map((item) => parseInt(item.uniqueNumber));
//   // add [2,4,1,7] to the disabledNumbers array
//   disabledNumbers = disabledNumbers.concat([2, 4, 1, 7]);

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleNumberClick = (number) => {
//     if (!disabledNumbers.includes(number)) {
//       setSelectedValue(number);
//       onSelect(number);
//       setIsOpen(false);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       // Clean up all Popper instances on component unmount
//       for (const key in popperInstances.current) {
//         for (const key in popperInstances.current) {
//           popperInstances.current[key].destroy();
//         }
//       }
//     };
//   }, []);

//   const handleMouseEnter = (number, event) => {
//     if (disabledNumbers.includes(number)) {
//       setHoveredNumber(number);
//       const button = event.target;
//       if (!tooltipElements.current[number]) {
//         const tooltip = document.createElement("div");
//         tooltip.textContent = "Sorry, this print number is taken!";
//         tooltip.classList.add(
//           "absolute",
//           "bg-gray-800",
//           "text-white",
//           "text-xs",
//           "py-1",
//           "px-2",
//           "rounded",
//           "z-50",
//           "whitespace-nowrap",
//           "pointer-events-none"
//         );
//         button.parentNode.appendChild(tooltip);
//         tooltipElements.current[number] = tooltip;
//       } else {
//         tooltipElements.current[number].style.display = "block";
//       }
//       if (!popperInstances.current[number]) {
//         popperInstances.current[number] = createPopper(
//           button,
//           tooltipElements.current[number],
//           {
//             placement: "bottom",
//           }
//         );
//       }
//     }
//   };

//   const handleMouseLeave = (number) => {
//     setHoveredNumber(null);
//     if (tooltipElements.current[number]) {
//       tooltipElements.current[number].style.display = "none";
//     }
//   };

//   const dropdownVariants = {
//     hidden: { opacity: 0, scaleY: 0.9 },
//     visible: {
//       opacity: 1,
//       scaleY: 1,
//       transition: { duration: 0.3 },
//     },
//     exit: { opacity: 0, scaleY: 0.9, transition: { duration: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.02 },
//     }),
//     exit: { opacity: 0, y: -10 },
//   };

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       <button
//         type="button"
//         className="inline-flex justify-center w-full px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         onClick={toggleDropdown}
//       >
//         {selectedValue === null ? "SELECT YOUR PRINT NUMBER" : selectedValue}
//         <svg
//           className={`ml-2 -mr-1 h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute z-10 mt-1 w-72 bg-white rounded-md shadow-lg focus:outline-none overflow-hidden max-h-[300px] overflow-y-auto grid grid-cols-5"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={dropdownVariants}
//             style={{ transformOrigin: "top" }}
//           >
//             {numbers.map((number, index) => {
//               const isDisabled = disabledNumbers.includes(number);
//               return (
//                 <motion.div
//                   key={number}
//                   className="relative"
//                   onMouseEnter={(e) => handleMouseEnter(number, e)}
//                   onMouseLeave={() => handleMouseLeave(number)}
//                 >
//                   <motion.div
//                     className={`block px-4 py-2 text-gray-700 cursor-pointer text-center
//                                     ${
//                                       isDisabled
//                                         ? "bg-yellow-100 text-gray-400 opacity-50 pointer-events-none"
//                                         : "hover:bg-green-200"
//                                     } ${
//                       selectedValue === number ? "bg-green-500 text-white" : ""
//                     }`}
//                     onClick={() => handleNumberClick(number)}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     custom={index}
//                   >
//                     {number}
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };
//   const updateCart = useCallback((newCartItems) => {
//     setCartItems(newCartItems);
//     if (typeof window !== "undefined") {
//       Cookies.set("cart", JSON.stringify(newCartItems));
//     }
//   }, []);

//   const [selectedNumber, setSelectedNumber] = useState(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedCart = Cookies.get("cart");
//       try {
//         if (storedCart) {
//           setCartItems(JSON.parse(storedCart));
//         }
//       } catch (error) {
//         console.error("Error parsing cart cookie:", error);
//         Cookies.remove("cart");
//         setCartItems([]);
//       }
//     }
//   }, []);
//   const handleSelectNumber = (number) => {
//     setSelectedNumber(number);
//     // You can now use this number in the cart logic
//   };

//   const handleAddToCart = () => {
//     if (selectedNumber === null) {
//       alert("Please select a print number before adding to cart");
//       return;
//     }
//     const existingItem = cartItems.find(
//       (item) =>
//         item.pathname === pathname && item.uniqueNumber === selectedNumber
//     );

//     if (existingItem) {
//       alert(
//         "Please choose another print number because print numbers are unique so if you wanted to add other products select a new print number"
//       );
//       return;
//     }

//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       updateCart(updatedCart);
//     } else {
//       updateCart([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//           uniqueNumber: selectedNumber,
//         },
//       ]);
//     }
//     handleClick();
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     updateCart(updatedCart);
//   };
//   const handleCheckout = () => {
//     alert(JSON.stringify(cartItems, null, 2));
//     router.push("/checkout");
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>

//       <NumberDropdown
//         onSelect={handleSelectNumber}
//         cartItems={cartItems}
//         pathname={pathname}
//       />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong>{" "}
//                     {item.pathname === "/products/2"
//                       ? "Art Numer Two"
//                       : item.pathname === "/products/1"
//                       ? "Art Numer One"
//                       : item.pathname === "/products/3"
//                       ? "Art Numer Three"
//                       : "Not Specified"}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Unique Print Number:</strong> {item.uniqueNumber}
//                   </p>
//                   <p>
//                     <strong>Stretch / Frame Type:</strong>{" "}
//                     {item.variant === "customVariant"
//                       ? "None"
//                       : item.variant === "variant1"
//                       ? "Rolled Canvas ($200)"
//                       : item.variant === "variant2"
//                       ? "Frameless Stretch ($210)"
//                       : item.variant === "variant3"
//                       ? "Stretch+Gold Frame ($282)"
//                       : item.variant === "variant4"
//                       ? "Stretch+Silver Frame ($225)"
//                       : item.variant === "variant5"
//                       ? "Stretch+Black Frame ($244)"
//                       : item.variant === "variant6"
//                       ? "Stretch+White Frame ($260)"
//                       : item.variant === "variant7"
//                       ? "Stretch+Wood Frame ($270)"
//                       : "Not Found"}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// import { createPopper } from "@popperjs/core";
// import { motion, AnimatePresence } from "framer-motion";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     type="button"
//     className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-orange-500 bg-hero-background px-3 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
//   >
//     <span className="relative z-5">ADD TO CART</span>
//   </button>
// );

// const NumberDropdown = ({ onSelect, cartItems, pathname }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(null);
//   const dropdownRef = useRef(null);
//   const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
//   const [hoveredNumber, setHoveredNumber] = useState(null);
//   const popperInstances = useRef({});
//   const tooltipElements = useRef({});

//   // Disable numbers already used for this pathname
//   const disabledNumbers = cartItems
//     .filter(
//       (item) => item.pathname === pathname && item.uniqueNumber !== undefined
//     )
//     .map((item) => parseInt(item.uniqueNumber));

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleNumberClick = (number) => {
//     if (!disabledNumbers.includes(number)) {
//       setSelectedValue(number);
//       onSelect(number);
//       setIsOpen(false);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       // Clean up all Popper instances on component unmount
//       for (const key in popperInstances.current) {
//         for (const key in popperInstances.current) {
//           popperInstances.current[key].destroy();
//         }
//       }
//     };
//   }, []);

//   const handleMouseEnter = (number, event) => {
//     if (disabledNumbers.includes(number)) {
//       setHoveredNumber(number);
//       const button = event.target;
//       if (!tooltipElements.current[number]) {
//         const tooltip = document.createElement("div");
//         tooltip.textContent = "Sorry, this print number is taken!";
//         tooltip.classList.add(
//           "absolute",
//           "bg-gray-800",
//           "text-white",
//           "text-xs",
//           "py-1",
//           "px-2",
//           "rounded",
//           "z-50",
//           "whitespace-nowrap",
//           "pointer-events-none"
//         );
//         button.parentNode.appendChild(tooltip);
//         tooltipElements.current[number] = tooltip;
//       } else {
//         tooltipElements.current[number].style.display = "block";
//       }
//       if (!popperInstances.current[number]) {
//         popperInstances.current[number] = createPopper(
//           button,
//           tooltipElements.current[number],
//           {
//             placement: "bottom",
//           }
//         );
//       }
//     }
//   };

//   const handleMouseLeave = (number) => {
//     setHoveredNumber(null);
//     if (tooltipElements.current[number]) {
//       tooltipElements.current[number].style.display = "none";
//     }
//   };

//   const dropdownVariants = {
//     hidden: { opacity: 0, scaleY: 0.9 },
//     visible: {
//       opacity: 1,
//       scaleY: 1,
//       transition: { duration: 0.3 },
//     },
//     exit: { opacity: 0, scaleY: 0.9, transition: { duration: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.02 },
//     }),
//     exit: { opacity: 0, y: -10 },
//   };

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       <button
//         type="button"
//         className="inline-flex justify-center w-full px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         onClick={toggleDropdown}
//       >
//         {selectedValue === null ? "SELECT YOUR PRINT NUMBER" : selectedValue}
//         <svg
//           className={`ml-2 -mr-1 h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute z-10 mt-1 w-72 bg-white rounded-md shadow-lg focus:outline-none overflow-hidden max-h-[300px] overflow-y-auto grid grid-cols-5"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={dropdownVariants}
//             style={{ transformOrigin: "top" }}
//           >
//             {numbers.map((number, index) => {
//               const isDisabled = disabledNumbers.includes(number);
//               return (
//                 <motion.div
//                   key={number}
//                   className="relative"
//                   onMouseEnter={(e) => handleMouseEnter(number, e)}
//                   onMouseLeave={() => handleMouseLeave(number)}
//                 >
//                   <motion.div
//                     className={`block px-4 py-2 text-gray-700 cursor-pointer text-center
//                                     ${
//                                       isDisabled
//                                         ? "bg-yellow-100 text-gray-400 opacity-50 pointer-events-none"
//                                         : "hover:bg-green-200"
//                                     } ${
//                       selectedValue === number ? "bg-green-500 text-white" : ""
//                     }`}
//                     onClick={() => handleNumberClick(number)}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     custom={index}
//                   >
//                     {number}
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const Tooltip = ({ message, isOpen, onClose, targetRef }) => {
//   const tooltipRef = useRef(null);
//   useEffect(() => {
//     if (isOpen && targetRef.current && tooltipRef.current) {
//       createPopper(targetRef.current, tooltipRef.current, {
//         placement: "top", // Adjust placement as needed
//       });
//     }
//   }, [isOpen, targetRef, tooltipRef]);

//   const tooltipVariants = {
//     open: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
//     closed: {
//       opacity: 0,
//       y: -10,
//       transition: { duration: 0.2, ease: "easeIn" },
//     },
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           ref={tooltipRef}
//           className="absolute z-50 bg-gray-800 text-white text-sm py-2 px-3 rounded shadow-lg whitespace-nowrap"
//           initial="closed"
//           animate="open"
//           exit="closed"
//           variants={tooltipVariants}
//         >
//           {message}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };
//   const updateCart = useCallback((newCartItems) => {
//     setCartItems(newCartItems);
//     if (typeof window !== "undefined") {
//       Cookies.set("cart", JSON.stringify(newCartItems));
//     }
//   }, []);

//   const [selectedNumber, setSelectedNumber] = useState(null);
//   const [tooltipMessage, setTooltipMessage] = useState("");
//   const [isTooltipOpen, setIsTooltipOpen] = useState(false);
//   const tooltipTargetRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedCart = Cookies.get("cart");
//       try {
//         if (storedCart) {
//           setCartItems(JSON.parse(storedCart));
//         }
//       } catch (error) {
//         console.error("Error parsing cart cookie:", error);
//         Cookies.remove("cart");
//         setCartItems([]);
//       }
//     }
//   }, []);
//   const handleSelectNumber = (number) => {
//     setSelectedNumber(number);
//     // You can now use this number in the cart logic
//   };
//   const closeTooltip = () => {
//     setIsTooltipOpen(false);
//   };

//   const handleAddToCart = () => {
//     if (selectedNumber === null) {
//       setTooltipMessage("Please select a print number before adding to cart");
//       setIsTooltipOpen(true);
//       return;
//     }
//     const existingItem = cartItems.find(
//       (item) =>
//         item.pathname === pathname && item.uniqueNumber === selectedNumber
//     );

//     if (existingItem) {
//       setTooltipMessage(
//         "Please choose another print number because print numbers are unique so if you wanted to add other products select a new print number"
//       );
//       setIsTooltipOpen(true);
//       return;
//     }

//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       updateCart(updatedCart);
//     } else {
//       updateCart([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//           uniqueNumber: selectedNumber,
//         },
//       ]);
//     }
//     handleClick();
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     updateCart(updatedCart);
//   };
//   const handleCheckout = () => {
//     alert(JSON.stringify(cartItems, null, 2));
//     router.push("/checkout");
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3 relative">
//       <div onClick={handleAddToCart} ref={tooltipTargetRef}>
//         <AddToCartButton />
//         <Tooltip
//           message={tooltipMessage}
//           isOpen={isTooltipOpen}
//           onClose={closeTooltip}
//           targetRef={tooltipTargetRef}
//         />
//       </div>

//       <NumberDropdown
//         onSelect={handleSelectNumber}
//         cartItems={cartItems}
//         pathname={pathname}
//       />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong>{" "}
//                     {item.pathname === "/products/2"
//                       ? "Art Numer Two"
//                       : item.pathname === "/products/1"
//                       ? "Art Numer One"
//                       : item.pathname === "/products/3"
//                       ? "Art Numer Three"
//                       : "Not Specified"}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Unique Print Number:</strong> {item.uniqueNumber}
//                   </p>
//                   <p>
//                     <strong>Stretch / Frame Type:</strong>{" "}
//                     {item.variant === "customVariant"
//                       ? "None"
//                       : item.variant === "variant1"
//                       ? "Rolled Canvas ($200)"
//                       : item.variant === "variant2"
//                       ? "Frameless Stretch ($210)"
//                       : item.variant === "variant3"
//                       ? "Stretch+Gold Frame ($282)"
//                       : item.variant === "variant4"
//                       ? "Stretch+Silver Frame ($225)"
//                       : item.variant === "variant5"
//                       ? "Stretch+Black Frame ($244)"
//                       : item.variant === "variant6"
//                       ? "Stretch+White Frame ($260)"
//                       : item.variant === "variant7"
//                       ? "Stretch+Wood Frame ($270)"
//                       : "Not Found"}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
//........................
// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// import { createPopper } from "@popperjs/core";
// import { motion, AnimatePresence } from "framer-motion";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     type="button"
//     className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-orange-500 bg-hero-background px-3 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
//   >
//     <span className="relative z-5">ADD TO CART</span>
//   </button>
// );

// const NumberDropdown = ({ onSelect, cartItems, pathname }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(null);
//   const dropdownRef = useRef(null);
//   const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
//   const [hoveredNumber, setHoveredNumber] = useState(null);
//   const popperInstances = useRef({});
//   const tooltipElements = useRef({});

//   // Disable numbers already used for this pathname
//   const disabledNumbers = cartItems
//     .filter(
//       (item) => item.pathname === pathname && item.uniqueNumber !== undefined
//     )
//     .map((item) => parseInt(item.uniqueNumber));

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleNumberClick = (number) => {
//     if (!disabledNumbers.includes(number)) {
//       setSelectedValue(number);
//       onSelect(number);
//       setIsOpen(false);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       // Clean up all Popper instances on component unmount
//       for (const key in popperInstances.current) {
//         for (const key in popperInstances.current) {
//           popperInstances.current[key].destroy();
//         }
//       }
//     };
//   }, []);

//   const handleMouseEnter = (number, event) => {
//     if (disabledNumbers.includes(number)) {
//       setHoveredNumber(number);
//       const button = event.target;
//       if (!tooltipElements.current[number]) {
//         const tooltip = document.createElement("div");
//         tooltip.textContent = "Sorry, this print number is taken!";
//         tooltip.classList.add(
//           "absolute",
//           "bg-gray-800",
//           "text-white",
//           "text-xs",
//           "py-1",
//           "px-2",
//           "rounded",
//           "z-50",
//           "whitespace-nowrap",
//           "pointer-events-none"
//         );
//         button.parentNode.appendChild(tooltip);
//         tooltipElements.current[number] = tooltip;
//       } else {
//         tooltipElements.current[number].style.display = "block";
//       }
//       if (!popperInstances.current[number]) {
//         popperInstances.current[number] = createPopper(
//           button,
//           tooltipElements.current[number],
//           {
//             placement: "bottom",
//           }
//         );
//       }
//     }
//   };

//   const handleMouseLeave = (number) => {
//     setHoveredNumber(null);
//     if (tooltipElements.current[number]) {
//       tooltipElements.current[number].style.display = "none";
//     }
//   };

//   const dropdownVariants = {
//     hidden: { opacity: 0, scaleY: 0.9 },
//     visible: {
//       opacity: 1,
//       scaleY: 1,
//       transition: { duration: 0.3 },
//     },
//     exit: { opacity: 0, scaleY: 0.9, transition: { duration: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.02 },
//     }),
//     exit: { opacity: 0, y: -10 },
//   };

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       <button
//         type="button"
//         className="inline-flex justify-center w-full px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         onClick={toggleDropdown}
//       >
//         {selectedValue === null ? "SELECT YOUR PRINT NUMBER" : selectedValue}
//         <svg
//           className={`ml-2 -mr-1 h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute z-10 mt-1 w-72 bg-white rounded-md shadow-lg focus:outline-none overflow-hidden max-h-[300px] overflow-y-auto grid grid-cols-5"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={dropdownVariants}
//             style={{ transformOrigin: "top" }}
//           >
//             {numbers.map((number, index) => {
//               const isDisabled = disabledNumbers.includes(number);
//               return (
//                 <motion.div
//                   key={number}
//                   className="relative"
//                   onMouseEnter={(e) => handleMouseEnter(number, e)}
//                   onMouseLeave={() => handleMouseLeave(number)}
//                 >
//                   <motion.div
//                     className={`block px-4 py-2 text-gray-700 cursor-pointer text-center
//                                     ${
//                                       isDisabled
//                                         ? "bg-yellow-100 text-gray-400 opacity-50 pointer-events-none"
//                                         : "hover:bg-green-200"
//                                     } ${
//                       selectedValue === number ? "bg-green-500 text-white" : ""
//                     }`}
//                     onClick={() => handleNumberClick(number)}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     custom={index}
//                   >
//                     {number}
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const Modal = ({ isOpen, onClose, message }) => {
//   const modalVariants = {
//     open: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.2, ease: "easeOut" },
//     },
//     closed: {
//       opacity: 0,
//       scale: 0.95,
//       transition: { duration: 0.1, ease: "easeIn" },
//     },
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
//           initial="closed"
//           animate="open"
//           exit="closed"
//           variants={modalVariants}
//         >
//           <motion.div
//             className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <p className="mb-4">{message}</p>
//             <button
//               onClick={onClose}
//               className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Got it
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };
//   const updateCart = useCallback((newCartItems) => {
//     setCartItems(newCartItems);
//     if (typeof window !== "undefined") {
//       Cookies.set("cart", JSON.stringify(newCartItems));
//     }
//   }, []);

//   const [selectedNumber, setSelectedNumber] = useState(null);
//   const [modalMessage, setModalMessage] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedCart = Cookies.get("cart");
//       try {
//         if (storedCart) {
//           setCartItems(JSON.parse(storedCart));
//         }
//       } catch (error) {
//         console.error("Error parsing cart cookie:", error);
//         Cookies.remove("cart");
//         setCartItems([]);
//       }
//     }
//   }, []);
//   const handleSelectNumber = (number) => {
//     setSelectedNumber(number);
//     // You can now use this number in the cart logic
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleAddToCart = () => {
//     if (selectedNumber === null) {
//       setModalMessage("Please select a print number before adding to cart");
//       setIsModalOpen(true);
//       return;
//     }
//     const existingItem = cartItems.find(
//       (item) =>
//         item.pathname === pathname && item.uniqueNumber === selectedNumber
//     );

//     if (existingItem) {
//       setModalMessage(
//         "To add another product, please choose a different print number. Each item in your cart requires a unique print number."
//       );
//       setIsModalOpen(true);
//       return;
//     }

//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       updateCart(updatedCart);
//     } else {
//       updateCart([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//           uniqueNumber: selectedNumber,
//         },
//       ]);
//     }
//     handleClick();
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     updateCart(updatedCart);
//   };
//   const handleCheckout = () => {
//     alert(JSON.stringify(cartItems, null, 2));
//     router.push("/checkout");
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3 relative">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
//       <NumberDropdown
//         onSelect={handleSelectNumber}
//         cartItems={cartItems}
//         pathname={pathname}
//       />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong>{" "}
//                     {item.pathname === "/products/2"
//                       ? "Art Numer Two"
//                       : item.pathname === "/products/1"
//                       ? "Art Numer One"
//                       : item.pathname === "/products/3"
//                       ? "Art Numer Three"
//                       : "Not Specified"}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Unique Print Number:</strong> {item.uniqueNumber}
//                   </p>
//                   <p>
//                     <strong>Stretch / Frame Type:</strong>{" "}
//                     {item.variant === "customVariant"
//                       ? "None"
//                       : item.variant === "variant1"
//                       ? "Rolled Canvas ($200)"
//                       : item.variant === "variant2"
//                       ? "Frameless Stretch ($210)"
//                       : item.variant === "variant3"
//                       ? "Stretch+Gold Frame ($282)"
//                       : item.variant === "variant4"
//                       ? "Stretch+Silver Frame ($225)"
//                       : item.variant === "variant5"
//                       ? "Stretch+Black Frame ($244)"
//                       : item.variant === "variant6"
//                       ? "Stretch+White Frame ($260)"
//                       : item.variant === "variant7"
//                       ? "Stretch+Wood Frame ($270)"
//                       : "Not Found"}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { FaStripe } from "react-icons/fa";
// import confetti from "canvas-confetti";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// import { createPopper } from "@popperjs/core";
// import { motion, AnimatePresence } from "framer-motion";

// const handleClick = () => {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: {
//       y: 0.6,
//     },
//   });
// };

// const AddToCartButton = ({}) => (
//   <button
//     id="hs-run-on-click-run-confetti"
//     type="button"
//     className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-orange-500 bg-hero-background px-3 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
//   >
//     <span className="relative z-5">ADD TO CART</span>
//   </button>
// );

// const NumberDropdown = ({ onSelect, cartItems, pathname }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState(null);
//   const dropdownRef = useRef(null);
//   const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
//   const [hoveredNumber, setHoveredNumber] = useState(null);
//   const popperInstances = useRef({});
//   const tooltipElements = useRef({});

//   // Disable numbers already used for this pathname
//   const disabledNumbers = cartItems
//     .filter(
//       (item) => item.pathname === pathname && item.uniqueNumber !== undefined
//     )
//     .map((item) => parseInt(item.uniqueNumber));

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleNumberClick = (number) => {
//     if (!disabledNumbers.includes(number)) {
//       setSelectedValue(number);
//       onSelect(number);
//       setIsOpen(false);
//     }
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       // Clean up all Popper instances on component unmount
//       for (const key in popperInstances.current) {
//         for (const key in popperInstances.current) {
//           popperInstances.current[key].destroy();
//         }
//       }
//     };
//   }, []);

//   const handleMouseEnter = (number, event) => {
//     if (disabledNumbers.includes(number)) {
//       setHoveredNumber(number);
//       const button = event.target;
//       if (!tooltipElements.current[number]) {
//         const tooltip = document.createElement("div");
//         tooltip.textContent = "Sorry, this print number is taken!";
//         tooltip.classList.add(
//           "absolute",
//           "bg-gray-800",
//           "text-white",
//           "text-xs",
//           "py-1",
//           "px-2",
//           "rounded",
//           "z-50",
//           "whitespace-nowrap",
//           "pointer-events-none"
//         );
//         button.parentNode.appendChild(tooltip);
//         tooltipElements.current[number] = tooltip;
//       } else {
//         tooltipElements.current[number].style.display = "block";
//       }
//       if (!popperInstances.current[number]) {
//         popperInstances.current[number] = createPopper(
//           button,
//           tooltipElements.current[number],
//           {
//             placement: "bottom",
//           }
//         );
//       }
//     }
//   };

//   const handleMouseLeave = (number) => {
//     setHoveredNumber(null);
//     if (tooltipElements.current[number]) {
//       tooltipElements.current[number].style.display = "none";
//     }
//   };

//   const dropdownVariants = {
//     hidden: { opacity: 0, scaleY: 0.9 },
//     visible: {
//       opacity: 1,
//       scaleY: 1,
//       transition: { duration: 0.3 },
//     },
//     exit: { opacity: 0, scaleY: 0.9, transition: { duration: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.02 },
//     }),
//     exit: { opacity: 0, y: -10 },
//   };

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       <button
//         type="button"
//         className="inline-flex justify-center w-full px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         onClick={toggleDropdown}
//       >
//         {selectedValue === null ? "SELECT YOUR PRINT NUMBER" : selectedValue}
//         <svg
//           className={`ml-2 -mr-1 h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="absolute z-10 mt-1 w-72 bg-white rounded-md shadow-lg focus:outline-none overflow-hidden max-h-[300px] overflow-y-auto grid grid-cols-5"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={dropdownVariants}
//             style={{ transformOrigin: "top" }}
//           >
//             {numbers.map((number, index) => {
//               const isDisabled = disabledNumbers.includes(number);
//               return (
//                 <motion.div
//                   key={number}
//                   className="relative"
//                   onMouseEnter={(e) => handleMouseEnter(number, e)}
//                   onMouseLeave={() => handleMouseLeave(number)}
//                 >
//                   <motion.div
//                     className={`block px-4 py-2 text-gray-700 cursor-pointer text-center
//                                     ${
//                                       isDisabled
//                                         ? "bg-yellow-100 text-gray-400 opacity-50 pointer-events-none"
//                                         : "hover:bg-green-200"
//                                     } ${
//                       selectedValue === number ? "bg-green-500 text-white" : ""
//                     }`}
//                     onClick={() => handleNumberClick(number)}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     custom={index}
//                   >
//                     {number}
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const Modal = ({ isOpen, onClose, message }) => {
//   const modalVariants = {
//     open: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.2, ease: "easeOut" },
//     },
//     closed: {
//       opacity: 0,
//       scale: 0.95,
//       transition: { duration: 0.1, ease: "easeIn" },
//     },
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
//           initial="closed"
//           animate="open"
//           exit="closed"
//           variants={modalVariants}
//           onClick={onClose} // Close modal on backdrop click
//         >
//           <motion.div
//             className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
//             onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing modal when clicking inside
//           >
//             <p className="mb-4">{message}</p>
//             <button
//               onClick={onClose}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Close
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default function MyCartCheckout({ cartData }) {
//   const {
//     selectedSize,
//     selectedNumberVar,
//     variant,
//     quantity,
//     pathname,
//     amountOfMoney,
//   } = cartData;
//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([]);
//   const variantPrices = {
//     variant1: 200,
//     variant2: 210,
//     variant3: 282,
//     variant4: 225,
//     variant5: 244,
//     variant6: 260,
//     variant7: 270,
//   };
//   const updateCart = useCallback((newCartItems) => {
//     setCartItems(newCartItems);
//     if (typeof window !== "undefined") {
//       Cookies.set("cart", JSON.stringify(newCartItems));
//     }
//   }, []);

//   const [selectedNumber, setSelectedNumber] = useState(null);
//   const [modalMessage, setModalMessage] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedCart = Cookies.get("cart");
//       try {
//         if (storedCart) {
//           setCartItems(JSON.parse(storedCart));
//         }
//       } catch (error) {
//         console.error("Error parsing cart cookie:", error);
//         Cookies.remove("cart");
//         setCartItems([]);
//       }
//     }
//   }, []);
//   const handleSelectNumber = (number) => {
//     setSelectedNumber(number);
//     // You can now use this number in the cart logic
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleAddToCart = () => {
//     if (selectedNumber === null) {
//       setModalMessage("Please select a print number before adding to cart");
//       setIsModalOpen(true);
//       return;
//     }
//     const existingItem = cartItems.find(
//       (item) =>
//         item.pathname === pathname && item.uniqueNumber === selectedNumber
//     );

//     if (existingItem) {
//       setModalMessage(
//         "Please choose another print number because print numbers are unique so if you wanted to add other products select a new print number"
//       );
//       setIsModalOpen(true);
//       return;
//     }

//     const variantPrice = variantPrices[variant] || 0;
//     const itemPrice = amountOfMoney + variantPrice;

//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.pathname === pathname &&
//         item.variant === variant &&
//         item.selectedSize === selectedSize &&
//         item.selectedNumberVar === selectedNumberVar
//     );

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += quantity;
//       updateCart(updatedCart);
//     } else {
//       updateCart([
//         ...cartItems,
//         {
//           selectedSize,
//           selectedNumberVar,
//           variant,
//           quantity,
//           pathname,
//           amountOfMoney: itemPrice,
//           uniqueNumber: selectedNumber,
//         },
//       ]);
//     }
//     handleClick();
//   };

//   const handleRemoveFromCart = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     updateCart(updatedCart);
//   };
//   const handleCheckout = () => {
//     alert(JSON.stringify(cartItems, null, 2));
//     router.push("/checkout");
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.amountOfMoney * item.quantity;
//     }, 0);
//   };

//   return (
//     <div className="flex flex-col gap-3 relative">
//       <div onClick={handleAddToCart}>
//         <AddToCartButton />
//       </div>
//       <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />
//       <NumberDropdown
//         onSelect={handleSelectNumber}
//         cartItems={cartItems}
//         pathname={pathname}
//       />

//       <div className="mt-4">
//         {cartItems.length > 0 ? (
//           <div className="border-t pt-4">
//             <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
//               >
//                 <div>
//                   <p>
//                     <strong>Product:</strong>{" "}
//                     {item.pathname === "/products/2"
//                       ? "Art Numer Two"
//                       : item.pathname === "/products/1"
//                       ? "Art Numer One"
//                       : item.pathname === "/products/3"
//                       ? "Art Numer Three"
//                       : "Not Specified"}
//                   </p>
//                   <p>
//                     <strong>Size:</strong> {item.selectedSize}
//                   </p>
//                   <p>
//                     <strong>Unique Print Number:</strong> {item.uniqueNumber}
//                   </p>
//                   <p>
//                     <strong>Stretch / Frame Type:</strong>{" "}
//                     {item.variant === "customVariant"
//                       ? "None"
//                       : item.variant === "variant1"
//                       ? "Rolled Canvas ($200)"
//                       : item.variant === "variant2"
//                       ? "Frameless Stretch ($210)"
//                       : item.variant === "variant3"
//                       ? "Stretch+Gold Frame ($282)"
//                       : item.variant === "variant4"
//                       ? "Stretch+Silver Frame ($225)"
//                       : item.variant === "variant5"
//                       ? "Stretch+Black Frame ($244)"
//                       : item.variant === "variant6"
//                       ? "Stretch+White Frame ($260)"
//                       : item.variant === "variant7"
//                       ? "Stretch+Wood Frame ($270)"
//                       : "Not Found"}
//                   </p>
//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> {item.amountOfMoney}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCart(index)}
//                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
//             >
//               Continue to Checkout
//             </button>
//           </div>
//         ) : (
//           <p>When you add products to your cart, the info will appear here.</p>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaStripe } from "react-icons/fa";
import confetti from "canvas-confetti";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { createPopper } from "@popperjs/core";
import { motion, AnimatePresence } from "framer-motion";

const handleClick = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      y: 0.6,
    },
  });
};

const AddToCartButton = ({}) => (
  <button
    id="hs-run-on-click-run-confetti"
    type="button"
    className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-orange-500 bg-hero-background px-3 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
  >
    <span className="relative z-5">ADD TO CART</span>
  </button>
);

const NumberDropdown = ({ onSelect, cartItems, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const dropdownRef = useRef(null);
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const [hoveredNumber, setHoveredNumber] = useState(null);
  const popperInstances = useRef({});
  const tooltipElements = useRef({});

  // Disable numbers already used for this pathname
  let disabledNumbers = cartItems
    .filter(
      (item) => item.pathname === pathname && item.uniqueNumber !== undefined
    )
    .map((item) => parseInt(item.uniqueNumber));
  disabledNumbers = disabledNumbers.concat([2, 4, 1, 22, 50, 10, 5, 7, 100]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNumberClick = (number) => {
    if (!disabledNumbers.includes(number)) {
      setSelectedValue(number);
      onSelect(number);
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Clean up all Popper instances on component unmount
      for (const key in popperInstances.current) {
        for (const key in popperInstances.current) {
          popperInstances.current[key].destroy();
        }
      }
    };
  }, []);

  const handleMouseEnter = (number, event) => {
    if (disabledNumbers.includes(number)) {
      setHoveredNumber(number);
      const button = event.target;
      if (!tooltipElements.current[number]) {
        const tooltip = document.createElement("div");
        tooltip.textContent = "Sorry, this print number is taken!";
        tooltip.classList.add(
          "absolute",
          "bg-gray-800",
          "text-white",
          "text-xs",
          "py-1",
          "px-2",
          "rounded",
          "z-50",
          "whitespace-nowrap",
          "pointer-events-none"
        );
        button.parentNode.appendChild(tooltip);
        tooltipElements.current[number] = tooltip;
      } else {
        tooltipElements.current[number].style.display = "block";
      }
      if (!popperInstances.current[number]) {
        popperInstances.current[number] = createPopper(
          button,
          tooltipElements.current[number],
          {
            placement: "bottom",
          }
        );
      }
    }
  };

  const handleMouseLeave = (number) => {
    setHoveredNumber(null);
    if (tooltipElements.current[number]) {
      tooltipElements.current[number].style.display = "none";
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scaleY: 0.9 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, scaleY: 0.9, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.02 },
    }),
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={toggleDropdown}
      >
        {selectedValue === null ? "SELECT YOUR PRINT NUMBER" : selectedValue}
        <svg
          className={`ml-2 -mr-1 h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-10 mt-1 w-72 bg-white rounded-md shadow-lg focus:outline-none overflow-hidden max-h-[300px] overflow-y-auto grid grid-cols-5"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            style={{ transformOrigin: "top" }}
          >
            {numbers.map((number, index) => {
              const isDisabled = disabledNumbers.includes(number);
              return (
                <motion.div
                  key={number}
                  className="relative"
                  onMouseEnter={(e) => handleMouseEnter(number, e)}
                  onMouseLeave={() => handleMouseLeave(number)}
                >
                  <motion.div
                    className={`block px-4 py-2 text-gray-700 cursor-pointer text-center
                                    ${
                                      isDisabled
                                        ? "bg-yellow-100 text-gray-400 opacity-50 pointer-events-none"
                                        : "hover:bg-green-200"
                                    } ${
                      selectedValue === number ? "bg-green-500 text-white" : ""
                    }`}
                    onClick={() => handleNumberClick(number)}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={index}
                  >
                    {number}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Modal = ({ isOpen, onClose, message }) => {
  const modalVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.1, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial="closed"
          animate="open"
          exit="closed"
          variants={modalVariants}
          onClick={onClose} // Close modal on backdrop click
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md flex flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing modal when clicking inside
          >
            <p className="mb-4">{message}</p>
            <div className="flex justify-end">
              {" "}
              {/* WRAPPED BUTTON IN THIS DIV */}
              <button
                onClick={onClose}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function MyCartCheckout({ cartData }) {
  const { selectedSize, selectedNumberVar, variant, pathname, amountOfMoney } =
    cartData;
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const variantPrices = {
    variant1: 200,
    variant2: 210,
    variant3: 282,
    variant4: 225,
    variant5: 244,
    variant6: 260,
    variant7: 270,
  };
  // const updateCart = useCallback((newCartItems) => {
  //   setCartItems(newCartItems);
  //   if (typeof window !== "undefined") {
  //     Cookies.set("cart", JSON.stringify(newCartItems));
  //   }
  // }, []);

  const updateCart = useCallback((newCartItems) => {
    setCartItems(newCartItems);
    if (typeof window !== "undefined") {
      Cookies.set("cart", JSON.stringify(newCartItems), {
        domain: ".adulisethiopianart.com",
        secure: true,
        sameSite: "Lax",
      });
    }
  }, []);

  const [selectedNumber, setSelectedNumber] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = Cookies.get("cart");
      try {
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Error parsing cart cookie:", error);
        Cookies.remove("cart");
        setCartItems([]);
      }
    }
  }, []);
  const handleSelectNumber = (number) => {
    setSelectedNumber(number);
    // You can now use this number in the cart logic
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    if (selectedNumber === null) {
      setModalMessage("Please select a print number before adding to cart");
      setIsModalOpen(true);
      return;
    }
    const existingItem = cartItems.find(
      (item) =>
        item.pathname === pathname && item.uniqueNumber === selectedNumber
    );

    if (existingItem) {
      setModalMessage(
        "To add another product, please choose a different print number. Each item in your cart requires a unique print number."
      );
      setIsModalOpen(true);
      return;
    }

    const variantPrice = variantPrices[variant] || 0;
    const itemPrice = amountOfMoney + variantPrice;

    updateCart([
      ...cartItems,
      {
        selectedSize,
        selectedNumberVar,
        variant,
        pathname,
        amountOfMoney: itemPrice,
        uniqueNumber: selectedNumber,
      },
    ]);

    handleClick();
  };

  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    updateCart(updatedCart);
  };
  const handleCheckout = () => {
    router.push("https://checkout.adulisethiopianart.com/");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.amountOfMoney;
    }, 0);
  };

  return (
    <div className="flex flex-col gap-3 relative">
      <NumberDropdown
        onSelect={handleSelectNumber}
        cartItems={cartItems}
        pathname={pathname}
      />
      <div onClick={handleAddToCart}>
        <AddToCartButton />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} message={modalMessage} />

      <div className="mt-4">
        {cartItems.length > 0 ? (
          <div className="border-t pt-4">
            <h4 className="text-lg font-semibold mb-2">Your Cart:</h4>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="mb-2 p-2 border rounded-md bg-gray-100 flex items-center justify-between"
              >
                <div>
                  <p>
                    <strong>Product:</strong>{" "}
                    {item.pathname === "/products/2"
                      ? "Ethiopia as the Mother of Africa"
                      : item.pathname === "/products/1"
                      ? "Sacred Procession"
                      : item.pathname === "/products/3"
                      ? "The Journey for Water"
                      : "Not Specified"}
                  </p>
                  {/* <p>
                    <strong>Size:</strong> {item.selectedSize}
                  </p> */}
                  <p>
                    <strong>Unique Print Number:</strong> {item.uniqueNumber}
                  </p>
                  <p>
                    <strong>Stretch / Frame Type:</strong>{" "}
                    {item.variant === "customVariant"
                      ? "None"
                      : item.variant === "variant1"
                      ? "Rolled Canvas ($200)"
                      : item.variant === "variant2"
                      ? "Frameless Stretch ($210)"
                      : item.variant === "variant3"
                      ? "Stretch+Gold Frame ($282)"
                      : item.variant === "variant4"
                      ? "Stretch+Silver Frame ($225)"
                      : item.variant === "variant5"
                      ? "Stretch+Black Frame ($244)"
                      : item.variant === "variant6"
                      ? "Stretch+White Frame ($260)"
                      : item.variant === "variant7"
                      ? "Stretch+Wood Frame ($270)"
                      : "Not Found"}
                  </p>

                  <p>
                    <strong>Price:</strong> {item.amountOfMoney}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4 font-bold">Total: ${calculateTotal()}</div>
            <button
              onClick={handleCheckout}
              className="mt-4 w-full px-4 py-3 rounded bg-green-600 hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-800 text-white font-semibold text-base"
            >
              Continue to Checkout
            </button>
          </div>
        ) : (
          <p>When you add products to your cart, the info will appear here.</p>
        )}
      </div>
    </div>
  );
}
