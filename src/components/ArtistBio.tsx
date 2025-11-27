// import React from "react";
// import Image from "next/image"; // for the profile picture

// const ArtistBio = () => {
//   return (
//     <div className="bg-gray-50 py-16 font-sans -mt-10">
//       <div className="container mx-auto px-20 flex flex-col md:flex-row items-start gap-10  ">
//         {/* Left Section: Credentials and Bio */}
//         <div
//           className="md:flex-1 flex flex-col gap-6
//         "
//         >
//           {/* Credentials */}
//           <div
//             className="flex flex-col gap-4 bg-hero-background w-fit h-auto p-6 rounded-lg ml-5
//           "
//           >
//             <h3 className="text-orange-500 uppercase tracking-wider font-medium text-sm">
//               Credentials
//             </h3>
//             <ul className="flex flex-col gap-3">
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">One to Watch</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">National Exposure</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">Works on commission</p>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Right Section: Artist Image */}
//         {/* Artist Description */}
//         <div className=" flex md:flex-1  flex-col gap-4">
//           <p className="italic text-orange-500 text-xl">
//             « Art is the dream that is born with man, <br /> lives in the heart,
//             is nourished by feelings
//             <br /> and grows with diligence. »
//           </p>
//           <p className="text-gray-700">
//             Victor Hudson is an artist whose paintings have been exhibited in
//             the United States.
//           </p>
//           <p className="text-gray-700">
//             His love of Abstract, with its free brushstrokes, lines, and energy
//             has inspired her to venture into the abstract, beginning with
//             representational concepts. Victor's compositions are imbued with
//             bold contrasts.
//           </p>
//           <p className="text-gray-700">
//             His landscapes and abstract pieces are created using oils, and oil
//             pastels on canvas.
//           </p>
//         </div>

//         <div className="md:flex-1 relative rounded-md w-full md:w-96 h-96 overflow-hidden">
//           <Image
//             src="/images/artist1.webp" // Replace with your image path
//             alt="Victor Hudson"
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistBio;
// import React from "react";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// const lexend = Lexend({ weight: "300", subsets: ["latin"] });

// const ArtistBio = ({ prodName }) => {
//   return (
//     <div className="bg-gray-50 py-10 font-sans -mt-10">
//       <div className="container mx-auto px-4 md:px-10 flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-10">
//         {/* Left Section: Credentials and Bio */}
//         <div className="md:flex-1 flex flex-col gap-6 w-full">
//           {/* Credentials */}
//           <div className="flex flex-col gap-4 bg-hero-background w-full md:w-fit h-auto p-6 rounded-lg md:ml-32">
//             <h3 className="text-orange-500 uppercase tracking-wider font-medium text-sm">
//               Credentials
//             </h3>
//             <ul className="flex flex-col gap-3">
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">One to Watch</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">National Exposure</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">Works on commission</p>
//               </li>
//             </ul>
//           </div>
//           {/* Artist Description */}
//           <div className="flex md:flex-1 flex-col gap-4 w-full mt-6">
//             <p
//               className={`italic text-orange-500 text-xl  ${lexend.className}`}
//             >
//               « Art is the dream that is born with man, lives in the heart, is
//               nourished by feelings and grows with diligence. »
//             </p>
//             <h2 className={` ${lexend.className}`}>
//               {prodName === "1"
//                 ? `Asnake Melesse, born in 1978 in the heart of Ethiopia's vibrant capital, Addis Ababa, is a
// celebrated figure in the Ethiopian art scene. From a young age, Asnake displayed a natural talent
// for the visual arts, which he nurtured through formal education and extensive practical
// experience. His journey into the world of art began with a Diploma in Painting from Addis
// Ababa University's School of Fine Arts and Design in July 2002. This institution, renowned for
// producing some of Ethiopia's most influential artists, provided Asnake with the foundational
// skills and theoretical knowledge that would shape his future work.`
//                 : prodName === "2"
//                 ? `Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia, is a multifaceted artist and
// historian whose work bridges the worlds of visual art and historical scholarship. His early
// education at Dejazmach Fiqre Mariyam Elementary School and Lielt Tenagneworke Secondary
// School laid the groundwork for a lifelong pursuit of knowledge and creativity. Wendwesen's
// academic journey led him to Addis Ababa University, where he earned a BA degree in Applied
// History in 2004/5, followed by a BA degree in Painting from the School of Fine Arts and Design
// in 2005/6...`
//                 : `Robel Wolde, a distinguished Ethiopian artist, was born on September 14, 1993, in the vibrant
// capital city of Addis Ababa. From an early age, Robel found himself drawn to the natural beauty,
// rich history, and deep-rooted traditions of his homeland.\n This connection to his environment and
// heritage became the bedrock of his artistic inspiration. As a young artist, Robel was captivated
// by the way nature could convey emotions, the profound impact of historical events, and the
// beauty in the simplicity of everyday life. These elements became the core themes that he would
// later explore in his artwork.`}{" "}
//             </h2>
//           </div>
//         </div>

//         {/* Right Section: Artist Image */}
//         <div className="md:flex-1 relative rounded-md w-full h-72 md:h-96 overflow-hidden">
//           <Image
//             src={`/images/artist${prodName}/artist-${prodName}.webp`}
//             alt="Victor Hudson"
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistBio;
//------------------------------------------------------------------------------------------------
// "use client";

// import { useState, useCallback, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
// import { FcGoogle } from "react-icons/fc";
// import { useRouter } from "next/navigation";
// import { FaApple } from "react-icons/fa6";
// import Cookies from "js-cookie";

// const AuthWrapper = ({ closeModal, setModalVisible, loginModalOpen }) => {
//   const router = useRouter();
//   const [registerModalOpen, setRegisterModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [localLoginModalOpen, setLocalLoginModalOpen] =
//     useState(loginModalOpen);
//   const [alreadyLoggedInMessage, setAlreadyLoggedInMessage] = useState("");

//   useEffect(() => {
//     const storedLogin = Cookies.get("loggedIn");
//     if (storedLogin === "true") {
//       setLoggedIn(true);
//     }
//   }, []);

//   //LOGIN
//   const {
//     register: registerLogin,
//     handleSubmit: handleSubmitLogin,
//     formState: { errors: errorsLogin },
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmitLogin = (data) => {
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//       if (data.email === "test@test.com" && data.password === "password") {
//         toast.success("Logged In");
//         setLoggedIn(true);
//         Cookies.set("loggedIn", "true", { expires: 7 });
//         closeLoginModal(true); // Pass true to prevent modal close
//         router.push("/");
//       } else {
//         toast.error("Invalid Credentials");
//       }
//     }, 1000);
//   };

//   const openLoginModal = () => {
//     if (loggedIn) {
//       setAlreadyLoggedInMessage("You are already logged in.");
//       return;
//     }
//     setLocalLoginModalOpen(true);
//     setAlreadyLoggedInMessage("");
//   };
//   const closeLoginModal = (preventModalClose) => {
//     setLocalLoginModalOpen(false);
//     if (!preventModalClose) {
//       closeModal();
//     }
//   };

//   const toggleLoginModal = useCallback(() => {
//     closeLoginModal(true); // Prevent initial modal close
//     openRegisterModal();
//   }, []);

//   //REGISTER
//   const {
//     register: registerRegister,
//     handleSubmit: handleSubmitRegister,
//     formState: { errors: errorsRegister },
//   } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmitRegister = (data) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       toast.success("Account created!");
//       setLoggedIn(true);
//       Cookies.set("loggedIn", "true", { expires: 7 });
//       closeRegisterModal();
//       router.push("/");
//     }, 1000);
//   };

//   const openRegisterModal = () => {
//     if (loggedIn) {
//       setAlreadyLoggedInMessage("You are already logged in.");
//       return;
//     }
//     setRegisterModalOpen(true);
//     setAlreadyLoggedInMessage("");
//   };
//   const closeRegisterModal = () => {
//     setRegisterModalOpen(false);
//     closeModal();
//   };

//   const toggleRegisterModal = useCallback(() => {
//     closeRegisterModal();
//     openLoginModal();
//   }, []);

//   const handleGoogleLogin = () => {
//     const googleEmail = prompt("Enter your Google email:");
//     const googlePassword = prompt("Enter your Google password:");

//     if (googleEmail && googlePassword) {
//       // Simulate successful login
//       setLoggedIn(true);
//       Cookies.set("loggedIn", "true", { expires: 7 });
//       closeLoginModal(true);
//       toast.success("Logged in with Google");
//       router.push("/");
//     } else {
//       toast.error("Login Failed. Please enter a valid email or password.");
//     }
//   };
//   const handleAppleLogin = () => {
//     const appleEmail = prompt("Enter your Apple email:");
//     const applePassword = prompt("Enter your Apple password:");

//     if (appleEmail && applePassword) {
//       // Simulate successful login
//       setLoggedIn(true);
//       Cookies.set("loggedIn", "true", { expires: 7 });
//       closeLoginModal(true);
//       toast.success("Logged in with Apple");
//       router.push("/");
//     } else {
//       toast.error("Login Failed. Please enter a valid email or password.");
//     }
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//     Cookies.remove("loggedIn");
//     toast("Logged Out");
//     router.push("/");
//   };

//   return (
//     <>
//       {loggedIn && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg max-w-md w-full">
//             <p className="text-center text-lg font-semibold">
//               You are already logged in!
//             </p>
//             <button
//               onClick={() => {
//                 handleLogout();
//                 closeModal();
//               }}
//               className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none block w-full text-center"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//       {!loggedIn && localLoginModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg max-w-md w-full">
//             {alreadyLoggedInMessage && (
//               <p className="text-red-500 text-center mb-4">
//                 {alreadyLoggedInMessage}
//               </p>
//             )}
//             <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
//             <p className="text-gray-600 mb-6">Login to your account!</p>

//             <form
//               onSubmit={handleSubmitLogin(onSubmitLogin)}
//               className="space-y-4"
//             >
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   disabled={isLoading}
//                   {...registerLogin("email", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsLogin.email && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   disabled={isLoading}
//                   {...registerLogin("password", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsLogin.password && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
//               >
//                 {isLoading ? "Loading..." : "Continue"}
//               </button>
//               <hr className="my-4" />
//               <div className="flex flex-col gap-4 mt-3">
//                 <button
//                   onClick={handleAppleLogin}
//                   className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
//                 >
//                   <FaApple size={24} className="min-w-fit" />
//                   Continue with Apple
//                 </button>
//                 <button
//                   onClick={handleGoogleLogin}
//                   className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
//                 >
//                   <FcGoogle />
//                   Continue with Google
//                 </button>
//               </div>

//               <div className="text-center mt-4">
//                 <p>
//                   First time using Adulis?{" "}
//                   <span
//                     onClick={toggleLoginModal} // Use the toggle function
//                     className="text-blue-500 cursor-pointer hover:underline"
//                   >
//                     Create account
//                   </span>
//                 </p>
//               </div>
//             </form>

//             <button
//               onClick={() => closeLoginModal()}
//               className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {!loggedIn && registerModalOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg max-w-md w-full">
//             {alreadyLoggedInMessage && (
//               <p className="text-red-500 text-center mb-4">
//                 {alreadyLoggedInMessage}
//               </p>
//             )}
//             <h2 className="text-2xl font-bold mb-4">
//               Welcome to Adulis Ethiopian Art
//             </h2>
//             <p className="text-gray-600 mb-6">Create an account</p>

//             <form
//               onSubmit={handleSubmitRegister(onSubmitRegister)}
//               className="space-y-4"
//             >
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Name
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   disabled={isLoading}
//                   {...registerRegister("name", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsRegister.name && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   disabled={isLoading}
//                   {...registerRegister("email", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsRegister.email && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   disabled={isLoading}
//                   {...registerRegister("password", { required: true })}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 {errorsRegister.password && (
//                   <span className="text-red-500 text-sm">
//                     This field is required
//                   </span>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
//               >
//                 {isLoading ? "Loading..." : "Continue"}
//               </button>
//               <hr className="my-4" />
//               <div className="flex flex-col gap-4 mt-3">
//                 <button
//                   onClick={handleGoogleLogin}
//                   className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
//                 >
//                   <FcGoogle />
//                   Continue with Google
//                 </button>
//                 <button
//                   onClick={handleAppleLogin}
//                   className="flex items-center justify-center border border-gray-300 rounded py-2 gap-2"
//                 >
//                   <FaApple size={24} className="min-w-fit" />
//                   Continue with Apple
//                 </button>
//               </div>

//               <div className="text-center mt-4">
//                 <p>
//                   Already have an account?{" "}
//                   <span
//                     onClick={toggleRegisterModal} // Use the toggle function
//                     className="text-blue-500 cursor-pointer hover:underline"
//                   >
//                     Log in
//                   </span>
//                 </p>
//               </div>
//             </form>

//             <button
//               onClick={closeRegisterModal}
//               className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 focus:outline-none"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AuthWrapper;
// import React, { useState } from "react";
// import Image from "next/image"; // Correct import
// import { Lexend } from "@next/font/google";
// const lexend = Lexend({ weight: "300", subsets: ["latin"] });

// const StorySection = ({ bio, initialLines = 4 }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const text = bio || "";

//   const lines = text.split("\n");

//   const displayedText = isExpanded
//     ? text
//     : lines.slice(0, initialLines).join("\n");

//   const handleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // To render paragraph
//   const renderParagraphs = () => {
//     return displayedText.split("\n").map((paragraph, index) => (
//       <p key={index} className={`${lexend.className} text-gray-700`}>
//         {paragraph}
//       </p>
//     ));
//   };

//   const shouldShowButton = lines.length > initialLines;

//   return (
//     <div className="py-6 relative">
//       {renderParagraphs()}
//       {shouldShowButton && (
//         <div className="flex justify-end mt-2">
//           <button
//             onClick={handleReadMore}
//             className={`text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300 ${lexend.className}`}
//           >
//             {isExpanded ? "Read Less" : "Read More"}
//           </button>
//         </div>
//       )}
//       {!isExpanded && shouldShowButton && (
//         <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
//       )}
//     </div>
//   );
// };

// const ArtistBio = ({ artistData }) => {
//   const { id, bio, imageUrl } = artistData;

//   return (
//     <div key={id} className="bg-gray-50 py-10 font-sans -mt-10 relative">
//       <div className="container mx-auto px-4 md:px-10 flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-10">
//         {/* Left Section: Credentials and Bio */}
//         <div className="md:flex-1 flex flex-col gap-6 w-full">
//           {/* Credentials */}
//           <div className="flex flex-col gap-4 bg-hero-background w-full md:w-fit h-auto p-6 rounded-lg md:ml-32">
//             <h3 className="text-orange-500 uppercase tracking-wider font-medium text-sm">
//               Credentials
//             </h3>
//             <ul className="flex flex-col gap-3">
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">One to Watch</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">National Exposure</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">Works on commission</p>
//               </li>
//             </ul>
//           </div>
//           {/* Artist Description */}
//           <div className="flex md:flex-1 flex-col gap-4 w-full mt-6 relative">
//             <p
//               className={`italic text-orange-500 text-xl  ${lexend.className}`}
//             >
//               « Art is the dream that is born with man, lives in the heart, is
//               nourished by feelings and grows with diligence. »
//             </p>
//             <StorySection bio={bio} />
//           </div>
//         </div>

//         {/* Right Section: Artist Image */}
//         <div className="md:flex-1 relative rounded-md w-full h-72 md:h-96 overflow-hidden">
//           <Image
//             src={imageUrl}
//             alt={`Artist ${id}`}
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const ArtistsPage = () => {
//   const artistData = [
//     {
//       id: "1",
//       bio: `Bio 1: Asnake Melesse
//       Asnake Melesse, born in 1978 in the heart of Ethiopia's vibrant capital, Addis Ababa, is a
//       celebrated figure in the Ethiopian art scene. From a young age, Asnake displayed a natural talent
//       for the visual arts, which he nurtured through formal education and extensive practical
//       experience. His journey into the world of art began with a Diploma in Painting from Addis
//       Ababa University's School of Fine Arts and Design in July 2002. This institution, renowned for
//       producing some of Ethiopia's most influential artists, provided Asnake with the foundational
//       skills and theoretical knowledge that would shape his future work.

//       Asnake's artistic style is deeply rooted in the cultural and historical context of Ethiopia. His
//       works often explore the complexities of Ethiopian life, using a combination of traditional and
//       modern techniques. His ability to capture the essence of his subjects through a rich palette and
//       dynamic compositions has earned him recognition both locally and internationally. His education
//       was further enriched by a Basic Sculpture Workshop at the Australian Embassy, which expanded
//       his artistic repertoire and introduced him to the world of three-dimensional art. This experience
//       broadened his creative horizons and allowed him to experiment with different forms and
//       materials, adding depth and dimension to his paintings.

//       Over the years, Asnake has participated in numerous exhibitions that have solidified his
//       reputation as a masterful painter. His early career was marked by significant exhibitions at
//       venues such as Kirsten Art Studio and the Greek Club in 2003, which helped him gain initial
//       recognition in the Addis Ababa art scene. His work quickly caught the attention of art enthusiasts
//       and critics, leading to a series of exhibitions in 2004 at the Hilton Hotel, the Alliance Ethio-
//       Française, and the Embassy of Ireland.

//       Asnake's ability to connect with diverse audiences through his art led to a series of exhibitions in
//       2005, including notable shows at the Alliance Ethio-Française in Addis Ababa and Djibouti,
//       Alem Gallery, and Macush Gallery. His work during this period demonstrated a growing
//       maturity in his technique and a deeper exploration of Ethiopian themes and motifs. The School
//       of Fine Arts showcased his work in 2007, further establishing him as a prominent figure in the
//       Ethiopian art community.

//       In the following years, Asnake continued to build on his success, with exhibitions at Sidama
//       Lodge in 2010 and 2011, and a prestigious showcase at the Sheraton Addis Hotel in 2019. His
//       work has been praised for its ability to evoke strong emotional responses while maintaining a
//       deep connection to Ethiopian culture and history.

//       Asnake Melesse's career is a testament to his dedication to the arts and his ability to continually
//       evolve as an artist. His work not only reflects his personal experiences and cultural heritage but`,
//       imageUrl: "/images/artist1/artist-1.webp",
//     },
//     {
//       id: "2",
//       bio: `Bio 1: Wendwesen Kebede:
//       Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia, is an accomplished artist and
//       historian whose work has significantly contributed to the Ethiopian art scene. His journey began
//       in the small town of Dukem, where he completed his elementary education at Dejazmach Fiqre
//       Mariyam Elementary School and later attended Lielt Tenagneworke Secondary School.
//       Wendwesen's academic excellence earned him a place at Addis Ababa University, where he
//       pursued a BA degree in Applied History, graduating in 2004/5.

//       During his time at Addis Ababa University, Wendwesen's passion for art flourished. He
//       simultaneously enrolled in the School of Fine Arts and Design, where he pursued a BA degree in
//       Painting, graduating with distinction in 2005/6. His dual education in history and art uniquely
//       positioned him to explore the intersections between Ethiopian culture, history, and visual
//       expression. Wendwesen's academic achievements laid the foundation for a career that would
//       blend his deep knowledge of Ethiopian history with his artistic talents.

//       After completing his studies, Wendwesen embarked on a diverse career that included roles in
//       both governmental and private institutions. He worked as an educator, teaching history and art,
//       and also contributed to various media outlets as a cartoonist, layout designer, and journalist. His
//       involvement in radio programs like FM Addis 97.1 and Fana FM 98.1, where he narrated short
//       stories, demonstrated his versatility and commitment to sharing Ethiopian culture through
//       multiple mediums. Wendwesen's talent for storytelling extended to his work as a reporter and
//       journalist, where he won essay competitions organized by the Addis Ababa city government.

//       Wendwesen's artistic journey has been marked by numerous exhibitions, both in Ethiopia and
//       abroad. His works have been showcased at prestigious venues such as the Ethiopian National
//       Theater, the Russian Culture for Science (PUSHKIN), and the National Museum. Notably, his
//       one-man shows at the Ethiopian National Theater in 2008 and 2009 highlighted his ability to
//       create powerful visual narratives that resonate with diverse audiences. His participation in
//       international exhibitions, including those in New York, South Korea, Greece, Dubai, and
//       Colombia, further established his reputation as a globally recognized artist.

//       In addition to his artistic practice, Wendwesen is actively involved in the Ethiopian art
//       community. He currently serves as the Secretary General of the All Ethiopians Visual Artists
//       Association, where he plays a vital role in advocating for the rights and recognition of Ethiopian
//       artists. His contributions to the community extend beyond his artwork, as he has also organized
//       and participated in numerous art-related initiatives, including projects focused on hydro-politics
//       over the Blue Nile and global warming.

//       Wendwesen's work is deeply rooted in Ethiopian culture and history, reflecting his dedication to
//       preserving and promoting his country's rich heritage. His art is not just a visual experience but
//       also a means of educating and inspiring others. Through his paintings, writings, and public
//       service, Wendwesen Kebede continues to be a significant force in the Ethiopian art world,
//       leaving a lasting impact on both the local and international stages.`,
//       imageUrl: "/images/artist2/artist-2.webp",
//     },
//     {
//       id: "3",
//       bio: `Bio 1: Robel Wolde
//       Robel Wolde, a distinguished Ethiopian artist, was born on September 14, 1993, in the vibrant
//       capital city of Addis Ababa. From an early age, Robel found himself drawn to the natural beauty,
//       rich history, and deep-rooted traditions of his homeland. This connection to his environment and
//       heritage became the bedrock of his artistic inspiration. As a young artist, Robel was captivated
//       by the way nature could convey emotions, the profound impact of historical events, and the
//       beauty in the simplicity of everyday life. These elements became the core themes that he would
//       later explore in his artwork.

//       Robel's paintings are celebrated for their unique use of bright colors, which he employs to
//       symbolize hope and optimism. His ability to manipulate complementary colors creates a
//       dramatic visual experience for the viewer, drawing them into the narrative of each piece. Robel's
//       work is not just about aesthetics; it's about telling stories-stories of love, patriotism, religion,
//       and history. His compositions are meticulously balanced, with careful attention to line, light,
//       shadow, and reflection. This technical precision allows him to create works that are not only
//       visually striking but also emotionally resonant.

//       As a professional painter with over 12 years of studio experience, Robel has honed his craft to a
//       level of mastery. His dedication to his art is evident in every brushstroke, every hue, and every
//       detail. He views his art as a powerful tool for change, believing that through his work, he can
//       touch lives and inspire others. Robel is passionate about continuously improving his skills and
//       expanding his artistic horizons. His ambition is to share his truth with the world through
//       international exhibitions, where he hopes to connect with a global audience and showcase the
//       rich cultural heritage of Ethiopia.

//       Robel Wolde's journey as an artist is one of passion, dedication, and an unwavering commitment
//       to his craft. His work stands as a testament to the power of art to convey deep emotions, tell
//       powerful stories, and connect people across cultures. As he continues to evolve as an artist,
//       Robel remains steadfast in his mission to create art that not only reflects his personal experiences
//       and beliefs but also resonates with the universal human experience.`,
//       imageUrl: "/images/artist3/artist-3.webp",
//     },
//   ];

//   return (
//     <div>
//       {artistData.map((artist) => (
//         <ArtistBio key={artist.id} artistData={artist} />
//       ))}
//     </div>
//   );
// };

// export default ArtistsPage;
// import React, { useState } from "react";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { motion } from "framer-motion";

// const lexend = Lexend({ weight: "300", subsets: ["latin"] });

// const ArtistBio = ({ prodName }) => {
//   const bioText =
//     prodName === "1"
//       ? `Asnake Melesse, born in 1978 in the heart of Ethiopia's vibrant capital, Addis Ababa, is a celebrated figure in the Ethiopian art scene. From a young age, Asnake displayed a natural talent for the visual arts, which he nurtured through formal education and extensive practical experience. His journey into the world of art began with a Diploma in Painting from Addis Ababa University's School of Fine Arts and Design in July 2002. This institution, renowned for producing some of Ethiopia's most influential artists, provided Asnake with the foundational skills and theoretical knowledge that would shape his future work. Asnake's artistic style is deeply rooted in the cultural and historical context of Ethiopia. His works often explore the complexities of Ethiopian life, using a combination of traditional and modern techniques. His ability to capture the essence of his subjects through a rich palette and dynamic compositions has earned him recognition both locally and internationally. His education was further enriched by a Basic Sculpture Workshop at the Australian Embassy, which expanded his artistic repertoire and introduced him to the world of three-dimensional art. This experience broadened his creative horizons and allowed him to experiment with different forms and materials, adding depth and dimension to his paintings. Over the years, Asnake has participated in numerous exhibitions that have solidified his reputation as a masterful painter. His early career was marked by significant exhibitions at venues such as Kirsten Art Studio and the Greek Club in 2003, which helped him gain initial recognition in the Addis Ababa art scene. His work quickly caught the attention of art enthusiasts and critics, leading to a series of exhibitions in 2004 at the Hilton Hotel, the Alliance Ethio-Française, and the Embassy of Ireland. Asnake's ability to connect with diverse audiences through his art led to a series of exhibitions in 2005, including notable shows at the Alliance Ethio-Française in Addis Ababa and Djibouti, Alem Gallery, and Macush Gallery. His work during this period demonstrated a growing maturity in his technique and a deeper exploration of Ethiopian themes and motifs. The School of Fine Arts showcased his work in 2007, further establishing him as a prominent figure in the Ethiopian art community. In the following years, Asnake continued to build on his success, with exhibitions at Sidama Lodge in 2010 and 2011, and a prestigious showcase at the Sheraton Addis Hotel in 2019. His work has been praised for its ability to evoke strong emotional responses while maintaining a deep connection to Ethiopian culture and history. Asnake Melesse's career is a testament to his dedication to the arts and his ability to continually evolve as an artist. His work not only reflects his personal experiences and cultural heritage but`
//       : prodName === "2"
//       ? `Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia, is a multifaceted artist and historian whose work bridges the worlds of visual art and historical scholarship. His early education at Dejazmach Fiqre Mariyam Elementary School and Lielt Tenagneworke Secondary School laid the groundwork for a lifelong pursuit of knowledge and creativity. Wendwesen's academic journey led him to Addis Ababa University, where he earned a BA degree in Applied History in 2004/5, followed by a BA degree in Painting from the School of Fine Arts and Design in 2005/6. During his time at Addis Ababa University, Wendwesen's passion for art flourished. He simultaneously enrolled in the School of Fine Arts and Design, where he pursued a BA degree in Painting, graduating with distinction in 2005/6. His dual education in history and art uniquely positioned him to explore the intersections between Ethiopian culture, history, and visual expression. Wendwesen's academic achievements laid the foundation for a career that would blend his deep knowledge of Ethiopian history with his artistic talents. After completing his studies, Wendwesen embarked on a diverse career that included roles in both governmental and private institutions. He worked as an educator, teaching history and art, and also contributed to various media outlets as a cartoonist, layout designer, and journalist. His involvement in radio programs like FM Addis 97.1 and Fana FM 98.1, where he narrated short stories, demonstrated his versatility and commitment to sharing Ethiopian culture through multiple mediums. Wendwesen's talent for storytelling extended to his work as a reporter and journalist, where he won essay competitions organized by the Addis Ababa city government. Wendwesen's artistic journey has been marked by numerous exhibitions, both in Ethiopia and abroad. His works have been showcased at prestigious venues such as the Ethiopian National Theater, the Russian Culture for Science (PUSHKIN), and the National Museum. Notably, his one-man shows at the Ethiopian National Theater in 2008 and 2009 highlighted his ability to create powerful visual narratives that resonate with diverse audiences. His participation in international exhibitions, including those in New York, South Korea, Greece, Dubai, and Colombia, further established his reputation as a globally recognized artist. In addition to his artistic practice, Wendwesen is actively involved in the Ethiopian art community. He currently serves as the Secretary General of the All Ethiopians Visual Artists Association, where he plays a vital role in advocating for the rights and recognition of Ethiopian artists. His contributions to the community extend beyond his artwork, as he has also organized and participated in numerous art-related initiatives, including projects focused on hydro-politics over the Blue Nile and global warming. Wendwesen's work is deeply rooted in Ethiopian culture and history, reflecting his dedication to preserving and promoting his country's rich heritage. His art is not just a visual experience but also a means of educating and inspiring others. Through his paintings, writings, and public service, Wendwesen Kebede continues to be a significant force in the Ethiopian art world, leaving a lasting impact on both the local and international stages.`
//       : `Robel Wolde, a distinguished Ethiopian artist, was born on September 14, 1993, in the vibrant capital city of Addis Ababa. From an early age, Robel found himself drawn to the natural beauty, rich history, and deep-rooted traditions of his homeland. This connection to his environment and heritage became the bedrock of his artistic inspiration. As a young artist, Robel was captivated by the way nature could convey emotions, the profound impact of historical events, and the beauty in the simplicity of everyday life. These elements became the core themes that he would later explore in his artwork. Robel's paintings are celebrated for their unique use of bright colors, which he employs to symbolize hope and optimism. His ability to manipulate complementary colors creates a dramatic visual experience for the viewer, drawing them into the narrative of each piece. Robel's work is not just about aesthetics; it's about telling stories-stories of love, patriotism, religion, and history. His compositions are meticulously balanced, with careful attention to line, light, shadow, and reflection. This technical precision allows him to create works that are not only visually striking but also emotionally resonant. As a professional painter with over 12 years of studio experience, Robel has honed his craft to a level of mastery. His dedication to his art is evident in every brushstroke, every hue, and every detail. He views his art as a powerful tool for change, believing that through his work, he can touch lives and inspire others. Robel is passionate about continuously improving his skills and expanding his artistic horizons. His ambition is to share his truth with the world through international exhibitions, where he hopes to connect with a global audience and showcase the rich cultural heritage of Ethiopia. Robel Wolde's journey as an artist is one of passion, dedication, and an unwavering commitment to his craft. His work stands as a testament to the power of art to convey deep emotions, tell powerful stories, and connect people across cultures. As he continues to evolve as an artist, Robel remains steadfast in his mission to create art that not only reflects his personal experiences and beliefs but also resonates with the universal human experience.`;
//   const [isExpanded, setIsExpanded] = useState(false);
//   const paragraphs = bioText.split(/\.\s+/).filter(Boolean); // Split into paragraphs
//   const [visibleParagraphs, setVisibleParagraphs] = useState(
//     paragraphs.slice(0, 1)
//   );

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//     setVisibleParagraphs(isExpanded ? paragraphs.slice(0, 1) : paragraphs);
//   };

//   const lastThreeLines = isExpanded
//     ? paragraphs.slice(-1)[0]?.split("\n")?.slice(-3) || []
//     : paragraphs.length > 1
//     ? paragraphs.slice(-1)[0]?.split("\n")?.slice(-3) || []
//     : [];
//   const remainingParagraphs = isExpanded
//     ? paragraphs.slice(0, -1)
//     : paragraphs.length > 1
//     ? paragraphs.slice(0, -1).slice(1)
//     : [];

//   return (
//     <div className="bg-gray-50 py-10 font-sans -mt-10 relative">
//       <div className="container mx-auto px-4 md:px-10 flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-10">
//         {/* Left Section: Credentials and Bio */}
//         <div className="md:flex-1 flex flex-col gap-6 w-full">
//           {/* Credentials */}
//           <div className="flex flex-col gap-4 bg-hero-background w-full md:w-fit h-auto p-6 rounded-lg md:ml-32">
//             <h3 className="text-orange-500 uppercase tracking-wider font-medium text-sm">
//               Credentials
//             </h3>
//             <ul className="flex flex-col gap-3">
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">One to Watch</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">National Exposure</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">Works on commission</p>
//               </li>
//             </ul>
//           </div>
//           {/* Artist Description */}
//           <div className="flex md:flex-1 flex-col gap-4 w-full mt-6 relative">
//             <p
//               className={`italic text-orange-500 text-xl  ${lexend.className}`}
//             >
//               « Art is the dream that is born with man, lives in the heart, is
//               nourished by feelings and grows with diligence. »
//             </p>
//             <div className={` ${lexend.className} `}>
//               {paragraphs.length > 0 && (
//                 <p className="text-gray-700">{paragraphs[0]}</p>
//               )}
//               {remainingParagraphs.map((paragraph, index) => (
//                 <p key={index} className="text-gray-700">
//                   {paragraph}
//                 </p>
//               ))}
//               {lastThreeLines.map((line, index) => (
//                 <motion.p
//                   key={index}
//                   initial={{ opacity: 1 }}
//                   animate={{
//                     opacity: isExpanded
//                       ? 1
//                       : (lastThreeLines.length - index) * 0.33,
//                   }}
//                   className={`text-gray-700 fade-line`}
//                 >
//                   {line}
//                 </motion.p>
//               ))}
//             </div>
//             {!isExpanded && paragraphs.length > 1 && (
//               <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pb-2">
//                 <motion.button
//                   onClick={toggleExpanded}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300"
//                 >
//                   Read More
//                 </motion.button>
//                 <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
//               </div>
//             )}
//             {isExpanded && paragraphs.length > 1 && (
//               <div className="flex justify-center mt-4">
//                 <motion.button
//                   onClick={toggleExpanded}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300"
//                 >
//                   Read Less
//                 </motion.button>
//               </div>
//             )}
//           </div>
//         </div>
//         {/* Right Section: Artist Image */}
//         <div className="md:flex-1 relative rounded-md w-full h-72 md:h-96 overflow-hidden">
//           <Image
//             src={`/images/artist${prodName}/artist-${prodName}.webp`}
//             alt={`Artist ${prodName}`}
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistBio;
// import React, { useState } from "react";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { motion } from "framer-motion";
// const lexend = Lexend({ weight: "300", subsets: ["latin"] });

// const ArtistBio = ({ prodName }) => {
//   const bioText =
//     prodName === "1"
//       ? `Asnake Melesse, born in 1978 in the heart of Ethiopia's vibrant capital, Addis Ababa, is a celebrated figure in the Ethiopian art scene. From a young age, Asnake displayed a natural talent for the visual arts, which he nurtured through formal education and extensive practical experience. His journey into the world of art began with a Diploma in Painting from Addis Ababa University's School of Fine Arts and Design in July 2002. This institution, renowned for producing some of Ethiopia's most influential artists, provided Asnake with the foundational skills and theoretical knowledge that would shape his future work. Asnake's artistic style is deeply rooted in the cultural and historical context of Ethiopia. His works often explore the complexities of Ethiopian life, using a combination of traditional and modern techniques. His ability to capture the essence of his subjects through a rich palette and dynamic compositions has earned him recognition both locally and internationally. His education was further enriched by a Basic Sculpture Workshop at the Australian Embassy, which expanded his artistic repertoire and introduced him to the world of three-dimensional art. This experience broadened his creative horizons and allowed him to experiment with different forms and materials, adding depth and dimension to his paintings. Over the years, Asnake has participated in numerous exhibitions that have solidified his reputation as a masterful painter. His early career was marked by significant exhibitions at venues such as Kirsten Art Studio and the Greek Club in 2003, which helped him gain initial recognition in the Addis Ababa art scene. His work quickly caught the attention of art enthusiasts and critics, leading to a series of exhibitions in 2004 at the Hilton Hotel, the Alliance Ethio-Française, and the Embassy of Ireland. Asnake's ability to connect with diverse audiences through his art led to a series of exhibitions in 2005, including notable shows at the Alliance Ethio-Française in Addis Ababa and Djibouti, Alem Gallery, and Macush Gallery. His work during this period demonstrated a growing maturity in his technique and a deeper exploration of Ethiopian themes and motifs. The School of Fine Arts showcased his work in 2007, further establishing him as a prominent figure in the Ethiopian art community. In the following years, Asnake continued to build on his success, with exhibitions at Sidama Lodge in 2010 and 2011, and a prestigious showcase at the Sheraton Addis Hotel in 2019. His work has been praised for its ability to evoke strong emotional responses while maintaining a deep connection to Ethiopian culture and history. Asnake Melesse's career is a testament to his dedication to the arts and his ability to continually evolve as an artist. His work not only reflects his personal experiences and cultural heritage but`
//       : prodName === "2"
//       ? `Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia, is a multifaceted artist and historian whose work bridges the worlds of visual art and historical scholarship. His early education at Dejazmach Fiqre Mariyam Elementary School and Lielt Tenagneworke Secondary School laid the groundwork for a lifelong pursuit of knowledge and creativity. Wendwesen's academic journey led him to Addis Ababa University, where he earned a BA degree in Applied History in 2004/5, followed by a BA degree in Painting from the School of Fine Arts and Design in 2005/6. During his time at Addis Ababa University, Wendwesen's passion for art flourished. He simultaneously enrolled in the School of Fine Arts and Design, where he pursued a BA degree in Painting, graduating with distinction in 2005/6. His dual education in history and art uniquely positioned him to explore the intersections between Ethiopian culture, history, and visual expression. Wendwesen's academic achievements laid the foundation for a career that would blend his deep knowledge of Ethiopian history with his artistic talents. After completing his studies, Wendwesen embarked on a diverse career that included roles in both governmental and private institutions. He worked as an educator, teaching history and art, and also contributed to various media outlets as a cartoonist, layout designer, and journalist. His involvement in radio programs like FM Addis 97.1 and Fana FM 98.1, where he narrated short stories, demonstrated his versatility and commitment to sharing Ethiopian culture through multiple mediums. Wendwesen's talent for storytelling extended to his work as a reporter and journalist, where he won essay competitions organized by the Addis Ababa city government. Wendwesen's artistic journey has been marked by numerous exhibitions, both in Ethiopia and abroad. His works have been showcased at prestigious venues such as the Ethiopian National Theater, the Russian Culture for Science (PUSHKIN), and the National Museum. Notably, his one-man shows at the Ethiopian National Theater in 2008 and 2009 highlighted his ability to create powerful visual narratives that resonate with diverse audiences. His participation in international exhibitions, including those in New York, South Korea, Greece, Dubai, and Colombia, further established his reputation as a globally recognized artist. In addition to his artistic practice, Wendwesen is actively involved in the Ethiopian art community. He currently serves as the Secretary General of the All Ethiopians Visual Artists Association, where he plays a vital role in advocating for the rights and recognition of Ethiopian artists. His contributions to the community extend beyond his artwork, as he has also organized and participated in numerous art-related initiatives, including projects focused on hydro-politics over the Blue Nile and global warming. Wendwesen's work is deeply rooted in Ethiopian culture and history, reflecting his dedication to preserving and promoting his country's rich heritage. His art is not just a visual experience but also a means of educating and inspiring others. Through his paintings, writings, and public service, Wendwesen Kebede continues to be a significant force in the Ethiopian art world, leaving a lasting impact on both the local and international stages.`
//       : `Robel Wolde, a distinguished Ethiopian artist, was born on September 14, 1993, in the vibrant capital city of Addis Ababa. From an early age, Robel found himself drawn to the natural beauty, rich history, and deep-rooted traditions of his homeland. This connection to his environment and heritage became the bedrock of his artistic inspiration. As a young artist, Robel was captivated by the way nature could convey emotions, the profound impact of historical events, and the beauty in the simplicity of everyday life. These elements became the core themes that he would later explore in his artwork. Robel's paintings are celebrated for their unique use of bright colors, which he employs to symbolize hope and optimism. His ability to manipulate complementary colors creates a dramatic visual experience for the viewer, drawing them into the narrative of each piece. Robel's work is not just about aesthetics; it's about telling stories-stories of love, patriotism, religion, and history. His compositions are meticulously balanced, with careful attention to line, light, shadow, and reflection. This technical precision allows him to create works that are not only visually striking but also emotionally resonant. As a professional painter with over 12 years of studio experience, Robel has honed his craft to a level of mastery. His dedication to his art is evident in every brushstroke, every hue, and every detail. He views his art as a powerful tool for change, believing that through his work, he can touch lives and inspire others. Robel is passionate about continuously improving his skills and expanding his artistic horizons. His ambition is to share his truth with the world through international exhibitions, where he hopes to connect with a global audience and showcase the rich cultural heritage of Ethiopia. Robel Wolde's journey as an artist is one of passion, dedication, and an unwavering commitment to his craft. His work stands as a testament to the power of art to convey deep emotions, tell powerful stories, and connect people across cultures. As he continues to evolve as an artist, Robel remains steadfast in his mission to create art that not only reflects his personal experiences and beliefs but also resonates with the universal human experience.`;

//   const [isExpanded, setIsExpanded] = useState(false);
//   const paragraphs = bioText.split(/\.\s+/).filter(Boolean); // Split into paragraphs

//   const initialParagraphCount = Math.ceil(paragraphs.length / 3);
//   const initialText =
//     paragraphs.slice(0, initialParagraphCount).join(". ") + ".";
//   const remainingParagraphs = isExpanded
//     ? paragraphs
//     : paragraphs.slice(initialParagraphCount);

//   const lastThreeLines = isExpanded
//     ? paragraphs.slice(-1)[0]?.split("\n")?.slice(-3) || []
//     : paragraphs.length > 1
//     ? paragraphs.slice(-1)[0]?.split("\n")?.slice(-3) || []
//     : [];

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="bg-gray-50 py-10 font-sans -mt-10 relative">
//       <div className="container mx-auto px-4 md:px-10 flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-10">
//         {/* Left Section: Credentials and Bio */}
//         <div className="md:flex-1 flex flex-col gap-6 w-full">
//           {/* Credentials */}
//           <div className="flex flex-col gap-4 bg-hero-background w-full md:w-fit h-auto p-6 rounded-lg md:ml-32">
//             <h3 className="text-orange-500 uppercase tracking-wider font-medium text-sm">
//               Credentials
//             </h3>
//             <ul className="flex flex-col gap-3">
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0 z-200"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">One to Watch</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0 z-200"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">National Exposure</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0 z-200"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">Works on commission</p>
//               </li>
//             </ul>
//           </div>
//           {/* Artist Description */}
//           <div className="flex md:flex-1 flex-col gap-4 w-full mt-6 relative">
//             <p
//               className={`italic text-orange-500 text-xl  ${lexend.className}`}
//             >
//               « Art is the dream that is born with man, lives in the heart, is
//               nourished by feelings and grows with diligence. »
//             </p>
//             <div className={` ${lexend.className}`}>
//               <p className="text-gray-700">{initialText}</p>

//               {remainingParagraphs.map((paragraph, index) => (
//                 <p key={index} className="text-gray-700">
//                   {paragraph}
//                 </p>
//               ))}

//               {lastThreeLines.map((line, index) => (
//                 <motion.p
//                   key={index}
//                   initial={{ opacity: 1 }}
//                   animate={{
//                     opacity: isExpanded
//                       ? 1
//                       : (lastThreeLines.length - index) * 0.33,
//                   }}
//                   className={`text-gray-700 fade-line`}
//                 >
//                   {line}
//                 </motion.p>
//               ))}
//             </div>
//             {!isExpanded && paragraphs.length > 1 && (
//               <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pb-2">
//                 <motion.button
//                   onClick={toggleExpanded}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300"
//                 >
//                   Read More
//                 </motion.button>
//                 <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
//               </div>
//             )}
//             {isExpanded && paragraphs.length > 1 && (
//               <div className="flex justify-center mt-4">
//                 <motion.button
//                   onClick={toggleExpanded}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300"
//                 >
//                   Read Less
//                 </motion.button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Section: Artist Image */}
//         <div className="md:flex-1 relative rounded-md w-full h-72 md:h-96 overflow-hidden">
//           <Image
//             src={`/images/artist${prodName}/artist-${prodName}.webp`}
//             alt="Victor Hudson"
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistBio;
// import React, { useState } from "react";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { motion } from "framer-motion";
// const lexend = Lexend({ weight: "300", subsets: ["latin"] });

// const ArtistBio = ({ prodName }) => {
//   const bioText =
//     prodName === "1"
//       ? `Asnake Melesse, born in 1978 in the heart of Ethiopia's vibrant capital, Addis Ababa, is a celebrated figure in the Ethiopian art scene. From a young age, Asnake displayed a natural talent for the visual arts, which he nurtured through formal education and extensive practical experience. His journey into the world of art began with a Diploma in Painting from Addis Ababa University's School of Fine Arts and Design in July 2002. This institution, renowned for producing some of Ethiopia's most influential artists, provided Asnake with the foundational skills and theoretical knowledge that would shape his future work. Asnake's artistic style is deeply rooted in the cultural and historical context of Ethiopia. His works often explore the complexities of Ethiopian life, using a combination of traditional and modern techniques. His ability to capture the essence of his subjects through a rich palette and dynamic compositions has earned him recognition both locally and internationally. His education was further enriched by a Basic Sculpture Workshop at the Australian Embassy, which expanded his artistic repertoire and introduced him to the world of three-dimensional art. This experience broadened his creative horizons and allowed him to experiment with different forms and materials, adding depth and dimension to his paintings. Over the years, Asnake has participated in numerous exhibitions that have solidified his reputation as a masterful painter. His early career was marked by significant exhibitions at venues such as Kirsten Art Studio and the Greek Club in 2003, which helped him gain initial recognition in the Addis Ababa art scene. His work quickly caught the attention of art enthusiasts and critics, leading to a series of exhibitions in 2004 at the Hilton Hotel, the Alliance Ethio-Française, and the Embassy of Ireland. Asnake's ability to connect with diverse audiences through his art led to a series of exhibitions in 2005, including notable shows at the Alliance Ethio-Française in Addis Ababa and Djibouti, Alem Gallery, and Macush Gallery. His work during this period demonstrated a growing maturity in his technique and a deeper exploration of Ethiopian themes and motifs. The School of Fine Arts showcased his work in 2007, further establishing him as a prominent figure in the Ethiopian art community. In the following years, Asnake continued to build on his success, with exhibitions at Sidama Lodge in 2010 and 2011, and a prestigious showcase at the Sheraton Addis Hotel in 2019. His work has been praised for its ability to evoke strong emotional responses while maintaining a deep connection to Ethiopian culture and history. Asnake Melesse's career is a testament to his dedication to the arts and his ability to continually evolve as an artist. His work not only reflects his personal experiences and cultural heritage but`
//       : prodName === "2"
//       ? `Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia, is a multifaceted artist and historian whose work bridges the worlds of visual art and historical scholarship. His early education at Dejazmach Fiqre Mariyam Elementary School and Lielt Tenagneworke Secondary School laid the groundwork for a lifelong pursuit of knowledge and creativity. Wendwesen's academic journey led him to Addis Ababa University, where he earned a BA degree in Applied History in 2004/5, followed by a BA degree in Painting from the School of Fine Arts and Design in 2005/6. During his time at Addis Ababa University, Wendwesen's passion for art flourished. He simultaneously enrolled in the School of Fine Arts and Design, where he pursued a BA degree in Painting, graduating with distinction in 2005/6. His dual education in history and art uniquely positioned him to explore the intersections between Ethiopian culture, history, and visual expression. Wendwesen's academic achievements laid the foundation for a career that would blend his deep knowledge of Ethiopian history with his artistic talents. After completing his studies, Wendwesen embarked on a diverse career that included roles in both governmental and private institutions. He worked as an educator, teaching history and art, and also contributed to various media outlets as a cartoonist, layout designer, and journalist. His involvement in radio programs like FM Addis 97.1 and Fana FM 98.1, where he narrated short stories, demonstrated his versatility and commitment to sharing Ethiopian culture through multiple mediums. Wendwesen's talent for storytelling extended to his work as a reporter and journalist, where he won essay competitions organized by the Addis Ababa city government. Wendwesen's artistic journey has been marked by numerous exhibitions, both in Ethiopia and abroad. His works have been showcased at prestigious venues such as the Ethiopian National Theater, the Russian Culture for Science (PUSHKIN), and the National Museum. Notably, his one-man shows at the Ethiopian National Theater in 2008 and 2009 highlighted his ability to create powerful visual narratives that resonate with diverse audiences. His participation in international exhibitions, including those in New York, South Korea, Greece, Dubai, and Colombia, further established his reputation as a globally recognized artist. In addition to his artistic practice, Wendwesen is actively involved in the Ethiopian art community. He currently serves as the Secretary General of the All Ethiopians Visual Artists Association, where he plays a vital role in advocating for the rights and recognition of Ethiopian artists. His contributions to the community extend beyond his artwork, as he has also organized and participated in numerous art-related initiatives, including projects focused on hydro-politics over the Blue Nile and global warming. Wendwesen's work is deeply rooted in Ethiopian culture and history, reflecting his dedication to preserving and promoting his country's rich heritage. His art is not just a visual experience but also a means of educating and inspiring others. Through his paintings, writings, and public service, Wendwesen Kebede continues to be a significant force in the Ethiopian art world, leaving a lasting impact on both the local and international stages.`
//       : `Robel Wolde, a distinguished Ethiopian artist, was born on September 14, 1993, in the vibrant capital city of Addis Ababa. From an early age, Robel found himself drawn to the natural beauty, rich history, and deep-rooted traditions of his homeland. This connection to his environment and heritage became the bedrock of his artistic inspiration. As a young artist, Robel was captivated by the way nature could convey emotions, the profound impact of historical events, and the beauty in the simplicity of everyday life. These elements became the core themes that he would later explore in his artwork. Robel's paintings are celebrated for their unique use of bright colors, which he employs to symbolize hope and optimism. His ability to manipulate complementary colors creates a dramatic visual experience for the viewer, drawing them into the narrative of each piece. Robel's work is not just about aesthetics; it's about telling stories-stories of love, patriotism, religion, and history. His compositions are meticulously balanced, with careful attention to line, light, shadow, and reflection. This technical precision allows him to create works that are not only visually striking but also emotionally resonant. As a professional painter with over 12 years of studio experience, Robel has honed his craft to a level of mastery. His dedication to his art is evident in every brushstroke, every hue, and every detail. He views his art as a powerful tool for change, believing that through his work, he can touch lives and inspire others. Robel is passionate about continuously improving his skills and expanding his artistic horizons. His ambition is to share his truth with the world through international exhibitions, where he hopes to connect with a global audience and showcase the rich cultural heritage of Ethiopia. Robel Wolde's journey as an artist is one of passion, dedication, and an unwavering commitment to his craft. His work stands as a testament to the power of art to convey deep emotions, tell powerful stories, and connect people across cultures. As he continues to evolve as an artist, Robel remains steadfast in his mission to create art that not only reflects his personal experiences and beliefs but also resonates with the universal human experience.`;
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [initialText, setInitialText] = useState("");
//   const [remainingText, setRemainingText] = useState("");

//   const setInitialTextAndRemaining = (text) => {
//     const words = text.split(" ");
//     const initialWordCount = Math.ceil(words.length / 3);
//     setInitialText(words.slice(0, initialWordCount).join(" ") + "...");
//     setRemainingText(words.slice(initialWordCount).join(" "));
//   };

//   useState(() => {
//     setInitialTextAndRemaining(bioText);
//   }, []);

//   const lastThreeLines = isExpanded
//     ? remainingText.split("\n")?.slice(-3) || []
//     : [];

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="bg-gray-50 py-10 font-sans -mt-10 relative">
//       <div className="container mx-auto px-4 md:px-10 flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-10">
//         {/* Left Section: Credentials and Bio */}
//         <div className="md:flex-1 flex flex-col gap-6 w-full">
//           {/* Credentials */}
//           <div className="flex flex-col gap-4 bg-hero-background w-full md:w-fit h-auto p-6 rounded-lg md:ml-32">
//             <h3 className="text-orange-500 uppercase tracking-wider font-medium text-sm">
//               Credentials
//             </h3>
//             <ul className="flex flex-col gap-3">
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">One to Watch</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">National Exposure</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">Works on commission</p>
//               </li>
//             </ul>
//           </div>
//           {/* Artist Description */}
//           <div className="flex md:flex-1 flex-col gap-4 w-full mt-6 relative">
//             <p
//               className={`italic text-orange-500 text-xl  ${lexend.className}`}
//             >
//               « Art is the dream that is born with man, lives in the heart, is
//               nourished by feelings and grows with diligence. »
//             </p>
//             <div className={` ${lexend.className}`}>
//               <p className="text-gray-700">{initialText}</p>
//               {isExpanded && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                   }}
//                   className="text-gray-700"
//                 >
//                   {remainingText}
//                 </motion.p>
//               )}
//               {lastThreeLines.map((line, index) => (
//                 <motion.p
//                   key={index}
//                   initial={{ opacity: 1 }}
//                   animate={{
//                     opacity: isExpanded
//                       ? 1
//                       : (lastThreeLines.length - index) * 0.33,
//                   }}
//                   className={`text-gray-700 fade-line`}
//                 >
//                   {line}
//                 </motion.p>
//               ))}
//             </div>
//             {!isExpanded && remainingText.length > 0 && (
//               <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pb-2">
//                 <motion.button
//                   onClick={toggleExpanded}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300 z-20"
//                 >
//                   Read More
//                 </motion.button>
//                 <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
//               </div>
//             )}
//             {isExpanded && remainingText.length > 0 && (
//               <div className="flex justify-center mt-4">
//                 <motion.button
//                   onClick={toggleExpanded}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300 z-20"
//                 >
//                   Read Less
//                 </motion.button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Section: Artist Image */}
//         <div className="md:flex-1 relative rounded-md w-full h-72 md:h-96 overflow-hidden">
//           <Image
//             src={`/images/artist${prodName}/artist-${prodName}.webp`}
//             alt="Victor Hudson"
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistBio;
// import React, { useState } from "react";
// import Image from "next/image";
// import { Lexend } from "@next/font/google";
// import { motion } from "framer-motion";
// const lexend = Lexend({ weight: "300", subsets: ["latin"] });

// const ArtistBio = ({ prodName }) => {
//   const bioText =
//     prodName === "1"
//       ? `Asnake Melesse, born in 1978 in the heart of Ethiopia's vibrant capital, Addis Ababa, is a celebrated figure in the Ethiopian art scene. From a young age, Asnake displayed a natural talent for the visual arts, which he nurtured through formal education and extensive practical experience. His journey into the world of art began with a Diploma in Painting from Addis Ababa University's School of Fine Arts and Design in July 2002. This institution, renowned for producing some of Ethiopia's most influential artists, provided Asnake with the foundational skills and theoretical knowledge that would shape his future work. Asnake's artistic style is deeply rooted in the cultural and historical context of Ethiopia. His works often explore the complexities of Ethiopian life, using a combination of traditional and modern techniques. His ability to capture the essence of his subjects through a rich palette and dynamic compositions has earned him recognition both locally and internationally. His education was further enriched by a Basic Sculpture Workshop at the Australian Embassy, which expanded his artistic repertoire and introduced him to the world of three-dimensional art. This experience broadened his creative horizons and allowed him to experiment with different forms and materials, adding depth and dimension to his paintings. Over the years, Asnake has participated in numerous exhibitions that have solidified his reputation as a masterful painter. His early career was marked by significant exhibitions at venues such as Kirsten Art Studio and the Greek Club in 2003, which helped him gain initial recognition in the Addis Ababa art scene. His work quickly caught the attention of art enthusiasts and critics, leading to a series of exhibitions in 2004 at the Hilton Hotel, the Alliance Ethio-Française, and the Embassy of Ireland. Asnake's ability to connect with diverse audiences through his art led to a series of exhibitions in 2005, including notable shows at the Alliance Ethio-Française in Addis Ababa and Djibouti, Alem Gallery, and Macush Gallery. His work during this period demonstrated a growing maturity in his technique and a deeper exploration of Ethiopian themes and motifs. The School of Fine Arts showcased his work in 2007, further establishing him as a prominent figure in the Ethiopian art community. In the following years, Asnake continued to build on his success, with exhibitions at Sidama Lodge in 2010 and 2011, and a prestigious showcase at the Sheraton Addis Hotel in 2019. His work has been praised for its ability to evoke strong emotional responses while maintaining a deep connection to Ethiopian culture and history. Asnake Melesse's career is a testament to his dedication to the arts and his ability to continually evolve as an artist.`
//       : prodName === "2"
//       ? `Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia, is a multifaceted artist and historian whose work bridges the worlds of visual art and historical scholarship. His early education at Dejazmach Fiqre Mariyam Elementary School and Lielt Tenagneworke Secondary School laid the groundwork for a lifelong pursuit of knowledge and creativity. Wendwesen's academic journey led him to Addis Ababa University, where he earned a BA degree in Applied History in 2004/5, followed by a BA degree in Painting from the School of Fine Arts and Design in 2005/6. During his time at Addis Ababa University, Wendwesen's passion for art flourished. He simultaneously enrolled in the School of Fine Arts and Design, where he pursued a BA degree in Painting, graduating with distinction in 2005/6. His dual education in history and art uniquely positioned him to explore the intersections between Ethiopian culture, history, and visual expression. Wendwesen's academic achievements laid the foundation for a career that would blend his deep knowledge of Ethiopian history with his artistic talents. After completing his studies, Wendwesen embarked on a diverse career that included roles in both governmental and private institutions. He worked as an educator, teaching history and art, and also contributed to various media outlets as a cartoonist, layout designer, and journalist. His involvement in radio programs like FM Addis 97.1 and Fana FM 98.1, where he narrated short stories, demonstrated his versatility and commitment to sharing Ethiopian culture through multiple mediums. Wendwesen's talent for storytelling extended to his work as a reporter and journalist, where he won essay competitions organized by the Addis Ababa city government. Wendwesen's artistic journey has been marked by numerous exhibitions, both in Ethiopia and abroad. His works have been showcased at prestigious venues such as the Ethiopian National Theater, the Russian Culture for Science (PUSHKIN), and the National Museum. Notably, his one-man shows at the Ethiopian National Theater in 2008 and 2009 highlighted his ability to create powerful visual narratives that resonate with diverse audiences. His participation in international exhibitions, including those in New York, South Korea, Greece, Dubai, and Colombia, further established his reputation as a globally recognized artist. In addition to his artistic practice, Wendwesen is actively involved in the Ethiopian art community. He currently serves as the Secretary General of the All Ethiopians Visual Artists Association, where he plays a vital role in advocating for the rights and recognition of Ethiopian artists. His contributions to the community extend beyond his artwork, as he has also organized and participated in numerous art-related initiatives, including projects focused on hydro-politics over the Blue Nile and global warming. Wendwesen's work is deeply rooted in Ethiopian culture and history, reflecting his dedication to preserving and promoting his country's rich heritage. His art is not just a visual experience but also a means of educating and inspiring others. Through his paintings, writings, and public service, Wendwesen Kebede continues to be a significant force in the Ethiopian art world, leaving a lasting impact on both the local and international stages.`
//       : `Robel Wolde, a distinguished Ethiopian artist, was born on September 14, 1993, in the vibrant capital city of Addis Ababa. From an early age, Robel found himself drawn to the natural beauty, rich history, and deep-rooted traditions of his homeland. This connection to his environment and heritage became the bedrock of his artistic inspiration. As a young artist, Robel was captivated by the way nature could convey emotions, the profound impact of historical events, and the beauty in the simplicity of everyday life. These elements became the core themes that he would later explore in his artwork. Robel's paintings are celebrated for their unique use of bright colors, which he employs to symbolize hope and optimism. His ability to manipulate complementary colors creates a dramatic visual experience for the viewer, drawing them into the narrative of each piece. Robel's work is not just about aesthetics; it's about telling stories-stories of love, patriotism, religion, and history. His compositions are meticulously balanced, with careful attention to line, light, shadow, and reflection. This technical precision allows him to create works that are not only visually striking but also emotionally resonant. As a professional painter with over 12 years of studio experience, Robel has honed his craft to a level of mastery. His dedication to his art is evident in every brushstroke, every hue, and every detail. He views his art as a powerful tool for change, believing that through his work, he can touch lives and inspire others. Robel is passionate about continuously improving his skills and expanding his artistic horizons. His ambition is to share his truth with the world through international exhibitions, where he hopes to connect with a global audience and showcase the rich cultural heritage of Ethiopia. Robel Wolde's journey as an artist is one of passion, dedication, and an unwavering commitment to his craft. His work stands as a testament to the power of art to convey deep emotions, tell powerful stories, and connect people across cultures. As he continues to evolve as an artist, Robel remains steadfast in his mission to create art that not only reflects his personal experiences and beliefs but also resonates with the universal human experience.`;
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [initialText, setInitialText] = useState("");
//   const [remainingText, setRemainingText] = useState("");

//   const setInitialTextAndRemaining = (text) => {
//     const words = text.split(" ");
//     const initialWordCount = Math.ceil(words.length / 3);
//     setInitialText(words.slice(0, initialWordCount).join(" ") + "...");
//     setRemainingText(words.slice(initialWordCount).join(" "));
//   };

//   useState(() => {
//     setInitialTextAndRemaining(bioText);
//   }, [bioText]);

//   const lastThreeLines = isExpanded
//     ? remainingText.split("\n")?.slice(-3) || []
//     : [];

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="bg-transparent py-10 font-sans -mt-10 relative">
//       <div className="container mx-auto px-4 md:px-10 flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-10">
//         {/* Left Section: Credentials and Bio */}
//         <div className="md:flex-1 flex flex-col gap-6 w-full">
//           {/* Credentials */}
//           <div className="flex flex-col gap-4 bg-hero-background w-full md:w-fit h-auto p-6 rounded-lg md:ml-32">
//             <h3 className="text-orange-500 uppercase tracking-wider font-medium text-sm">
//               Credentials
//             </h3>
//             <ul className="flex flex-col gap-3">
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">One to Watch</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">National Exposure</p>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 text-green-500 flex-shrink-0"
//                   viewBox="0 0 512.016 512"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//                 <p className="text-gray-700">Works on commission</p>
//               </li>
//             </ul>
//           </div>
//           {/* Artist Description */}
//           <div className="flex md:flex-1 flex-col gap-4 w-full mt-6 relative">
//             <p
//               className={`italic text-orange-500 text-xl  ${lexend.className}`}
//             >
//               « Art is the dream that is born with man, lives in the heart, is
//               nourished by feelings and grows with diligence. »
//             </p>
//             <div className={` ${lexend.className}`}>
//               <p className="text-gray-700">{initialText}</p>
//               {isExpanded && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                   }}
//                   className="text-gray-700"
//                 >
//                   {remainingText}
//                 </motion.p>
//               )}
//               {lastThreeLines.map((line, index) => (
//                 <motion.p
//                   key={index}
//                   initial={{ opacity: 1 }}
//                   animate={{
//                     opacity: isExpanded
//                       ? 1
//                       : (lastThreeLines.length - index) * 0.33,
//                   }}
//                   className={`text-gray-700 fade-line`}
//                 >
//                   {line}
//                 </motion.p>
//               ))}
//             </div>
//             {!isExpanded && remainingText.length > 0 && (
//               <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pb-2">
//                 <motion.button
//                   onClick={toggleExpanded}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300 z-20"
//                 >
//                   Read More
//                 </motion.button>
//                 <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
//               </div>
//             )}
//             {isExpanded && remainingText.length > 0 && (
//               <div className="flex justify-center mt-4">
//                 <motion.button
//                   onClick={toggleExpanded}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-300 z-20"
//                 >
//                   Read Less
//                 </motion.button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Section: Artist Image */}
//         <div className="md:flex-1 relative rounded-md w-full h-72 md:h-96 overflow-hidden">
//           <Image
//             src={`/images/artist${prodName}/artist-${prodName}.webp`}
//             alt="Victor Hudson"
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistBio;
"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Lexend, Poppins } from "@next/font/google";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
const lexend = Lexend({ weight: "300", subsets: ["latin"] });
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],

  // bold
});

const ArtistBio = ({ prodName }) => {
  const pathname = usePathname();
  const bioText =
    prodName === "1"
      ? `Asnake Melesse, born in 1978 in the heart of Ethiopia's vibrant capital, Addis Ababa, is a celebrated figure in the Ethiopian art scene. From a young age, Asnake displayed a natural talent for the visual arts, which he nurtured through formal education and extensive practical experience. His journey into the world of art began with a Diploma in Painting from Addis Ababa University's School of Fine Arts and Design in July 2002. This institution, renowned for producing some of Ethiopia's most influential artists, provided Asnake with the foundational skills and theoretical knowledge that would shape his future work. Asnake's artistic style is deeply rooted in the cultural and historical context of Ethiopia. His works often explore the complexities of Ethiopian life, using a combination of traditional and modern techniques. His ability to capture the essence of his subjects through a rich palette and dynamic compositions has earned him recognition both locally and internationally. His education was further enriched by a Basic Sculpture Workshop at the Australian Embassy, which expanded his artistic repertoire and introduced him to the world of three-dimensional art. This experience broadened his creative horizons and allowed him to experiment with different forms and materials, adding depth and dimension to his paintings. Over the years, Asnake has participated in numerous exhibitions that have solidified his reputation as a masterful painter. His early career was marked by significant exhibitions at venues such as Kirsten Art Studio and the Greek Club in 2003, which helped him gain initial recognition in the Addis Ababa art scene. His work quickly caught the attention of art enthusiasts and critics, leading to a series of exhibitions in 2004 at the Hilton Hotel, the Alliance Ethio-Française, and the Embassy of Ireland. Asnake's ability to connect with diverse audiences through his art led to a series of exhibitions in 2005, including notable shows at the Alliance Ethio-Française in Addis Ababa and Djibouti, Alem Gallery, and Macush Gallery. His work during this period demonstrated a growing maturity in his technique and a deeper exploration of Ethiopian themes and motifs. The School of Fine Arts showcased his work in 2007, further establishing him as a prominent figure in the Ethiopian art community. In the following years, Asnake continued to build on his success, with exhibitions at Sidama Lodge in 2010 and 2011, and a prestigious showcase at the Sheraton Addis Hotel in 2019. His work has been praised for its ability to evoke strong emotional responses while maintaining a deep connection to Ethiopian culture and history. Asnake Melesse's career is a testament to his dedication to the arts and his ability to continually evolve as an artist.`
      : prodName === "2"
      ? `Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia, is a multifaceted artist and historian whose work bridges the worlds of visual art and historical scholarship. His early education at Dejazmach Fiqre Mariyam Elementary School and Lielt Tenagneworke Secondary School laid the groundwork for a lifelong pursuit of knowledge and creativity. Wendwesen's academic journey led him to Addis Ababa University, where he earned a BA degree in Applied History in 2004/5, followed by a BA degree in Painting from the School of Fine Arts and Design in 2005/6. During his time at Addis Ababa University, Wendwesen's passion for art flourished. He simultaneously enrolled in the School of Fine Arts and Design, where he pursued a BA degree in Painting, graduating with distinction in 2005/6. His dual education in history and art uniquely positioned him to explore the intersections between Ethiopian culture, history, and visual expression. Wendwesen's academic achievements laid the foundation for a career that would blend his deep knowledge of Ethiopian history with his artistic talents. After completing his studies, Wendwesen embarked on a diverse career that included roles in both governmental and private institutions. He worked as an educator, teaching history and art, and also contributed to various media outlets as a cartoonist, layout designer, and journalist. His involvement in radio programs like FM Addis 97.1 and Fana FM 98.1, where he narrated short stories, demonstrated his versatility and commitment to sharing Ethiopian culture through multiple mediums. Wendwesen's talent for storytelling extended to his work as a reporter and journalist, where he won essay competitions organized by the Addis Ababa city government. Wendwesen's artistic journey has been marked by numerous exhibitions, both in Ethiopia and abroad. His works have been showcased at prestigious venues such as the Ethiopian National Theater, the Russian Culture for Science (PUSHKIN), and the National Museum. Notably, his one-man shows at the Ethiopian National Theater in 2008 and 2009 highlighted his ability to create powerful visual narratives that resonate with diverse audiences. His participation in international exhibitions, including those in New York, South Korea, Greece, Dubai, and Colombia, further established his reputation as a globally recognized artist. In addition to his artistic practice, Wendwesen is actively involved in the Ethiopian art community. He currently serves as the Secretary General of the All Ethiopians Visual Artists Association, where he plays a vital role in advocating for the rights and recognition of Ethiopian artists. His contributions to the community extend beyond his artwork, as he has also organized and participated in numerous art-related initiatives, including projects focused on hydro-politics over the Blue Nile and global warming. Wendwesen's work is deeply rooted in Ethiopian culture and history, reflecting his dedication to preserving and promoting his country's rich heritage. His art is not just a visual experience but also a means of educating and inspiring others. Through his paintings, writings, and public service, Wendwesen Kebede continues to be a significant force in the Ethiopian art world, leaving a lasting impact on both the local and international stages.`
      : `Robel Wolde, a distinguished Ethiopian artist, was born on September 14, 1993, in the vibrant capital city of Addis Ababa. From an early age, Robel found himself drawn to the natural beauty, rich history, and deep-rooted traditions of his homeland. This connection to his environment and heritage became the bedrock of his artistic inspiration. As a young artist, Robel was captivated by the way nature could convey emotions, the profound impact of historical events, and the beauty in the simplicity of everyday life. These elements became the core themes that he would later explore in his artwork. Robel's paintings are celebrated for their unique use of bright colors, which he employs to symbolize hope and optimism. His ability to manipulate complementary colors creates a dramatic visual experience for the viewer, drawing them into the narrative of each piece. Robel's work is not just about aesthetics; it's about telling stories-stories of love, patriotism, religion, and history. His compositions are meticulously balanced, with careful attention to line, light, shadow, and reflection. This technical precision allows him to create works that are not only visually striking but also emotionally resonant. As a professional painter with over 12 years of studio experience, Robel has honed his craft to a level of mastery. His dedication to his art is evident in every brushstroke, every hue, and every detail. He views his art as a powerful tool for change, believing that through his work, he can touch lives and inspire others. Robel is passionate about continuously improving his skills and expanding his artistic horizons. His ambition is to share his truth with the world through international exhibitions, where he hopes to connect with a global audience and showcase the rich cultural heritage of Ethiopia. Robel Wolde's journey as an artist is one of passion, dedication, and an unwavering commitment to his craft. His work stands as a testament to the power of art to convey deep emotions, tell powerful stories, and connect people across cultures. As he continues to evolve as an artist, Robel remains steadfast in his mission to create art that not only reflects his personal experiences and beliefs but also resonates with the universal human experience.`;
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialText, setInitialText] = useState("");
  const [remainingText, setRemainingText] = useState("");

  const setInitialTextAndRemaining = (text) => {
    const words = text.split(" ");
    const initialWordCount = Math.ceil(words.length / 3);
    setInitialText(words.slice(0, initialWordCount).join(" ") + "...");
    setRemainingText(words.slice(initialWordCount).join(" "));
  };

  useEffect(() => {
    setInitialTextAndRemaining(bioText);
  }, [bioText]);

  const lastThreeLines = isExpanded
    ? remainingText.split("\n")?.slice(-3) || []
    : [];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
  
    <div className="bg-transparent py-10 font-sans -mt-10 relative">
      <div className="container mx-auto px-4 md:px-10 flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-10">
        {/* Left Section: Credentials and Bio */}
        <div className="md:flex-1 flex flex-col gap-6 w-full">
          {/* Credentials */}
          {/* <div className="flex flex-col gap-4 bg-hero-background w-full md:w-fit h-auto p-6 rounded-lg md:ml-32">
            <h3 className="text-orange-500 uppercase tracking-wider font-medium text-sm">
              Credentials
            </h3> */}
            {/* <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500 flex-shrink-0"
                  viewBox="0 0 512.016 512"
                  aria-hidden="true"
                >
                  <path
                    d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
                    fill="currentColor"
                  ></path>
                  <path
                    d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-gray-700">One to Watch</p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500 flex-shrink-0"
                  viewBox="0 0 512.016 512"
                  aria-hidden="true"
                >
                  <path
                    d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
                    fill="currentColor"
                  ></path>
                  <path
                    d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-gray-700">National Exposure</p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500 flex-shrink-0"
                  viewBox="0 0 512.016 512"
                  aria-hidden="true"
                >
                  <path
                    d="m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0"
                    fill="currentColor"
                  ></path>
                  <path
                    d="m261.332031 288.007812c-4.09375 0-8.191406-1.558593-11.304687-4.691406l-96-96c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.632812 0l84.695313 84.695312 223.335937-223.339844c6.253906-6.25 16.386719-6.25 22.636719 0s6.25 16.382813 0 22.632813l-234.667969 234.667969c-3.136718 3.113281-7.230468 4.671874-11.328125 4.671874zm0 0"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-gray-700">Works on commission</p>
              </li>
            </ul> */}
          {/* </div> */}
          {/* Artist Description */}
          <div className="flex md:flex-1 flex-col gap-4 w-full mt-6 relative">
            { pathname === "/collections/1" && <p
              className={`italic text-orange-500 text-xl  ${lexend.className}`}
            >
              « A Master of Ethiopian Spiritual Narratives. » -Adulis
            </p>}
            { pathname === "/collections/2" && <p
              className={`italic text-orange-500 text-xl  ${lexend.className}`}
            >
              « The Historian-Painter of Ethiopia » -Adulis
            </p>}
            { pathname === "/collections/3" && <p
              className={`italic text-orange-500 text-xl  ${lexend.className}`}
            >
              « Painting Ethiopia’s Soul » -Adulis
            </p>}
            <div className={` ${lexend.className}`}>
              <p className="text-gray-700">{initialText}</p>

              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  className="text-gray-700"
                >
                  {remainingText}
                </motion.p>
              )}
              {lastThreeLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: isExpanded
                      ? 1
                      : (lastThreeLines.length - index) * 0.33,
                  }}
                  className={`text-gray-700 fade-line`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            {!isExpanded && remainingText.length > 0 && (
              <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pb-2">
                <motion.button
                  onClick={toggleExpanded}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="text-hero-background  rounded-md px-2 hover:bg-hero-background hover:scale-105 hover:text-orange-500 cursor-pointer transition-colors duration-300 font-extrabold bg-orange-500"
                >
                  Read More
                </motion.button>
                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
              </div>
            )}
            {isExpanded && remainingText.length > 0 && (
              <div className="flex justify-center mt-4">
                <motion.button
                  onClick={toggleExpanded}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="text-hero-background  rounded-md px-2 hover:bg-hero-background hover:scale-105 hover:text-orange-500 cursor-pointer transition-colors duration-300 font-extrabold bg-orange-500"
                >
                  Read Less
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Artist Image */}
        <div className="md:flex-1 relative rounded-md w-full h-72 md:h-96 overflow-hidden">
          <Image
            src={`/images/artist${prodName}/artist-${prodName}.webp`}
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
    <h1 className={`text-2xl text-center mx-auto ${poppins.className}`}>
        All Artists
      </h1>
      <div className="py-16 font-sans">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Product 1 */}
          {(
            <div className="flex flex-col items-center">
              <div
                className="w-full h-72 relative overflow-hidden rounded"
              >
                <Link href={"/collections/1"}>
                  <Image
                    src={ "/images/artist1/artist1.webp"}
                    alt="Abstract Canvas Art"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="mt-4 text-center">
                <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
                Asnake Melesse
                </h3>
                <p className="text-gray-600 text-sm mt-1">A Master of Ethiopian Spiritual Narratives</p>
              </div>
            </div>
          )}

          {/* Product 2 */}
          { (
            <div className="flex flex-col items-center">
              <div
                className="w-full h-72 relative overflow-hidden rounded"
              >
                <Link href={"/collections/2"}>
                  <Image
                    src={ "/images/artist2/artist2.webp"}
                    alt="Abstract Canvas Art"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="mt-4 text-center">
                <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
                Wendwesen Kebede
                </h3>
                <p className="text-gray-600 text-sm mt-1">The Historian-Painter of Ethiopia</p>
              </div>
            </div>
          )}

          {/* Product 3 */}
          {(
            <div className="flex flex-col items-center">
              <div
                className="w-full h-72 relative overflow-hidden rounded"
              >
                <Link href={"/collections/3"}>
                  <Image
                    src={ "/images/artist3/artist3.webp"}
                    alt="Abstract Canvas Art"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="mt-4 text-center">
                <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
                Robel Wolde
                </h3>
                <p className="text-gray-600 text-sm mt-1">Painting Ethiopia’s Soul</p>
              </div>
            </div>
          )}
        </div>
      </div>{" "}
  </>
  );
};

export default ArtistBio;
