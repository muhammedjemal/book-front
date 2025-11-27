// // "use client";
// // import React, { useState } from "react";
// // import PanoramaViewer from "./2";
// // import "./3.css"; // import css file for styles
// // const VirtualTour = ({ panoData }) => {
// //   const [currentPano, setCurrentPano] = useState(panoData[0]);
// //   const onHotSpotClick = (hotspotId) => {
// //     const target = currentPano.hotspots.find(
// //       (hotspot) => hotspot.id == hotspotId
// //     );
// //     if (target) {
// //       const newPano = panoData.find((pano) => pano.id === target.target);
// //       if (newPano) {
// //         setCurrentPano(newPano);
// //       }
// //     }
// //   };

// //   const updatedPanoData = {
// //     ...currentPano,
// //     hotspots: currentPano.hotspots.map((hotspot) => ({
// //       ...hotspot,
// //       handleClick: () => onHotSpotClick(hotspot.id),
// //     })),
// //   };
// //   return (
// //     <div className="virtual-tour">
// //       <PanoramaViewer panoData={updatedPanoData} />
// //     </div>
// //   );
// // };

// // export default VirtualTour;
// "use client";

// import React, { useState } from "react";
// import PanoramaViewer from "./2";

// const VirtualTour = ({ panoData }) => {
//   const [currentPano, setCurrentPano] = useState(panoData[0]);

//   const onHotSpotClick = (hotspotId) => {
//     const targetHotspot = currentPano.hotspots.find(
//       (hotspot) => hotspot.id === hotspotId
//     );

//     if (targetHotspot) {
//       const newPano = panoData.find((pano) => pano.id === targetHotspot.target);
//       if (newPano) {
//         setCurrentPano(newPano);
//       }
//     }
//   };

//   const updatedPanoData = {
//     ...currentPano,
//     hotspots: currentPano.hotspots.map((hotspot) => ({
//       ...hotspot,
//       handleClick: () => onHotSpotClick(hotspot.id),
//     })),
//   };

//   return (
//     <div className="virtual-tour">
//       <PanoramaViewer panoData={updatedPanoData} />
//     </div>
//   );
// };

// export default VirtualTour;
"use client";
import React, { useState, useCallback } from "react";
import PanoramaViewer from "./2";

const VirtualTour = ({ panoData }) => {
  const [currentPano, setCurrentPano] = useState(panoData[0]);

  const handleHotspotClick = useCallback(
    (targetId) => {
      const nextPano = panoData.find((pano) => pano.id === targetId);
      if (nextPano) {
        setCurrentPano(nextPano);
      }
    },
    [panoData]
  );

  return (
    <PanoramaViewer
      image={currentPano.image}
      hotspots={currentPano.hotspots}
      onHotspotClick={handleHotspotClick}
    />
  );
};

export default VirtualTour;
// //--------------------------------------
