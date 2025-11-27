// // "use client";

// // import React, { useRef, useEffect } from "react";
// // import pannellum from "pannellum";
// // import "pannellum/build/pannellum.css";

// // const PanoramaViewer = ({ panoData }) => {
// //   const pannellumDiv = useRef(null);

// //   useEffect(() => {
// //     let panoViewer;

// //     if (pannellumDiv.current && panoData.image) {
// //       panoViewer = pannellum.viewer(pannellumDiv.current, {
// //         type: "equirectangular",
// //         panorama: panoData.image,
// //         autoLoad: true,
// //         hotSpots: panoData.hotspots.map((hotspot) => ({
// //           pitch: hotspot.y || 0,
// //           yaw: hotspot.x || 0,
// //           cssClass: "custom-hotspot",
// //           clickHandlerFunc: hotspot.handleClick || (() => {}),
// //         })),
// //       });
// //     }

// //     return () => {
// //       if (panoViewer) panoViewer.destroy();
// //     };
// //   }, [panoData]);

// //   return (
// //     <div
// //       id="panorama-viewer"
// //       ref={pannellumDiv}
// //       style={{ height: "100vh", width: "100%" }}
// //     ></div>
// //   );
// // };

// // export default PanoramaViewer;
"use client";
import React, { useEffect } from "react";
import ReactPannellum from "react-pannellum";

const PanoramaViewer = ({ image, hotspots, onHotspotClick }) => {
  useEffect(() => {
    hotspots.forEach((hotspot) => {
      ReactPannellum.addHotSpot(
        {
          pitch: hotspot.pitch,
          yaw: hotspot.yaw,
          type: "info",
          text: "Adulis Ethiopian Art",
          clickHandlerFunc: () => onHotspotClick(hotspot.target),
        },
        "sceneId"
      );
    });
  }, [hotspots, onHotspotClick]);
  return (
    <div className="mt-4">
      <ReactPannellum
        id="panorama"
        sceneId="sceneId"
        imageSource={image}
        autoLoad
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PanoramaViewer;
// //------------------
//
