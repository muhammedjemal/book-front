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
