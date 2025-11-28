
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
          text: "",
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
