// // components/VirtualTour.js
// import React from 'react';

// const VirtualTour = () => {
//   const tourUrl = "https://www.3dvista.com/samples/real_estate_virtual_tour.html"; // Replace with the URL of the chosen demo tour

//   return (
//     <div style={{ position: "relative", height: "100vh", width: "100%" }}>
//       <iframe
//         src={tourUrl}
//         style={{
//           width: "100%",
//           height: "100%",
//           border: "none",
//           position: "absolute",
//           top: "0",
//           left: "0",
//         }}
//         title="3DVista Virtual Tour"
//       />
//     </div>
//   );
// };

// export default VirtualTour;
// components/VirtualTour.js
import React from 'react';

const VirtualTour = ({link}) => {
  // const tourUrl = "link"; 

  return (
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={link}
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
        title="3DVista Virtual Tour"
      />
    </div>
  );
};

export default VirtualTour;
