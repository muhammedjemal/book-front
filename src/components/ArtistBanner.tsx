// import React from "react";
// import Image from "next/image"; // for the profile picture

// const AboutArtistBanner = () => {
//   return (
//     <>
//       <h4 className="text-2xl font-bold mb-4 text-center pt-6 ">
//         About Artist
//       </h4>
//       <div className=" py-16 pt-9 font-sans">
//         <div className="container mx-auto px-44  flex flex-col md:flex-row items-center gap-5">
//           <div className="relative rounded-full w-48 h-48 overflow-hidden">
//             <Image
//               src="/images/artist1.webp" // Replace with your image path
//               alt="Jake Wilson"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//           <div className="md:flex-1 flex flex-col gap-2">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="text-base font-medium text-gray-800">
//                   Jake Wilson
//                 </h2>
//                 <p className="text-gray-600 text-base">Painter</p>
//                 <p className="text-gray-700  text-base">View Profile</p>
//               </div>
//               <button className="bg-orange-500 text-white font-medium px-6 py-3 rounded hover:bg-orange-600">
//                 VIEW PROFILE
//               </button>
//             </div>
//           </div>
//         </div>
//         <h2 className="text-gray-700 mt-4 px-44 text-justify text-base">
//           Jake Wilsons abstract paintings delve into themes of serenity and
//           finding peace amidst chaos, with the central aim of emphasizing hope
//           and positivity. Jake hopes the viewer will see the world as a better
//           place in which to exist. All his compositions are created using oils
//           on canvas, which he stretches, sizes, and primes himself.
//         </h2>
//         <div className="mt-8 px-44">
//           <h3 className="text-gray-800 uppercase font-medium">
//             Artist Recognition
//           </h3>
//           <div className="flex items-center gap-10 mt-3">
//             <div className="flex items-center gap-2">
//               <div className="p-1 rounded-full border-2 border-yellow-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-5 h-5 text-yellow-400"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 013 2.801z"
//                   />
//                 </svg>
//               </div>
//               <p className="text-gray-700">
//                 Artist featured by Artismore in a collection
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="p-1 rounded-full border-2 border-yellow-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-5 h-5 text-yellow-400"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 013 2.801z"
//                   />
//                 </svg>
//               </div>
//               <p className="text-gray-700">Featured in One to Watch</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutArtistBanner;
import React from "react";
import Image from "next/image"; // for the profile picture
import { Lexend } from "@next/font/google";
import Link from "next/link";
const lexend = Lexend({ weight: "300", subsets: ["latin"] });

const AboutArtistBanner = ({ prodName }) => {
  return (
    <>
      <h4
        className={`text-2xl font-bold mb-4 text-center pt-6 ${lexend.className}`}
      >
        About Artist
      </h4>
      <div className=" py-16 pt-9 font-sans">
        <div className="container mx-auto px-4 sm:px-12 md:px-24 lg:px-44  flex flex-col md:flex-row items-center gap-5">
          <div className="relative rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden">
            <Image
              src={`/images/artist${prodName}/artist${prodName}.webp`} // Replace with your image path
              alt="Artist Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="md:flex-1 flex flex-col gap-2">
            <div className="flex justify-between items-center text-center md:text-start">
              <div>
                <h2
                  className={`text-base font-medium text-gray-800  ${lexend.className}`}
                >
                  {prodName === "1"
                    ? " Asnake Melesse"
                    : prodName === "2"
                    ? " Wendwesen Kebede"
                    : "Robel Wolde"}
                </h2>
                <p className={`text-gray-600 text-base ${lexend.className}`}>
                  Painter
                </p>
              </div>
            </div>
          </div>
          <Link href={`/collections/${prodName}`}>
            <button
              className={`bg-orange-500 text-white font-medium px-4 sm:px-6 py-3 rounded hover:bg-orange-600 ${lexend.className}`}
            >
              VIEW PROFILE
            </button>
          </Link>
        </div>
        <h2
          className={`text-gray-700 mt-4 px-4 sm:px-12 md:px-24 lg:px-44 text-justify text-base ${lexend.className}`}
        >
          {prodName === "1"
            ? `Asnake Melesse, born in 1978 in the heart of Ethiopia's vibrant capital, Addis Ababa, is a 
celebrated figure in the Ethiopian art scene. From a young age, Asnake displayed a natural talent 
for the visual arts, which he nurtured through formal education and extensive practical 
experience. His journey into the world of art began with a Diploma in Painting from Addis 
Ababa University's School of Fine Arts and Design in July 2002. This institution, renowned for 
producing some of Ethiopia's most influential artists, provided Asnake with the foundational 
skills and theoretical knowledge that would shape his future work.`
            : prodName === "2"
            ? `Wendwesen Kebede Abera, born in 1983 in Dukem, Ethiopia, is a multifaceted artist and 
historian whose work bridges the worlds of visual art and historical scholarship. His early 
education at Dejazmach Fiqre Mariyam Elementary School and Lielt Tenagneworke Secondary 
School laid the groundwork for a lifelong pursuit of knowledge and creativity. Wendwesen's 
academic journey led him to Addis Ababa University, where he earned a BA degree in Applied 
History in 2004/5, followed by a BA degree in Painting from the School of Fine Arts and Design 
in 2005/6...`
            : `Robel Wolde, a distinguished Ethiopian artist, was born on September 14, 1993, in the vibrant 
capital city of Addis Ababa. From an early age, Robel found himself drawn to the natural beauty, 
rich history, and deep-rooted traditions of his homeland. This connection to his environment and 
heritage became the bedrock of his artistic inspiration. As a young artist, Robel was captivated 
by the way nature could convey emotions, the profound impact of historical events, and the 
beauty in the simplicity of everyday life. These elements became the core themes that he would 
later explore in his artwork.`}
        </h2>
        <div className="mt-8 px-4 sm:px-12 md:px-24 lg:px-44">
          <h3
            className={`text-gray-800 uppercase test-base ${lexend.className}`}
          >
            Artist Recognition
          </h3>
          <div className="flex items-center gap-5 sm:gap-10 mt-3">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-full border-2 border-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 013 2.801z"
                  />
                </svg>
              </div>
              <p className={`text-gray-700 text-base ${lexend.className}`}>
                Artist featured by Adulis in a collection
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-full border-2 border-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 013 2.801z"
                  />
                </svg>
              </div>
              <p className={`text-gray-700 text-base  ${lexend.className}`}>
                Featured in One to Watch
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArtistBanner;
