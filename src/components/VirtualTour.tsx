"use client";
import React, { useState, useRef, useEffect } from "react";
import Pannellum from "react-pannellum-next";

const VirtualTour = () => {
  const [currentScene, setCurrentScene] = useState("scene1");
  const pannellumRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const scenes = {
    scene1: {
      type: "equirectangular",
      panorama: "https://pannellum.org/images/alma.jpg",
      hotSpots: [
        {
          pitch: -2,
          yaw: 50,
          type: "scene",
          text: "Go to Scene 2",
          sceneId: "scene2",
        },
      ],
    },
    scene2: {
      type: "equirectangular",
      panorama: "https://pannellum.org/images/bma.jpg",
      hotSpots: [
        {
          pitch: -2,
          yaw: 50,
          type: "scene",
          text: "Go to Scene 3",
          sceneId: "scene3",
        },
        {
          pitch: -2,
          yaw: -100,
          type: "scene",
          text: "Go back to Scene 1",
          sceneId: "scene1",
        },
      ],
    },
    scene3: {
      type: "equirectangular",
      panorama: "https://pannellum.org/images/rio-1.jpg",
      hotSpots: [
        {
          pitch: -2,
          yaw: -100,
          type: "scene",
          text: "Go back to Scene 2",
          sceneId: "scene2",
        },
      ],
    },
  };

  const handleSceneChange = (sceneId) => {
    setCurrentScene(sceneId);
  };

  useEffect(() => {
    setLoading(true); // Set loading to true before loading a new scene
  }, [currentScene]);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <div style={{ position: "relative", height: "600px" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "3em",
          }}
        >
          Loading...
        </div>
      )}

      <Pannellum
        ref={pannellumRef}
        width="100%"
        height="100%"
        image={scenes[currentScene].panorama}
        config={{
          ...scenes[currentScene],
          onLoad: handleLoaded,
          hotSpots: scenes[currentScene].hotSpots?.map((hotSpot) => ({
            ...hotSpot,
            handleClick: (evt, hotspot) => {
              if (hotspot.type === "scene") {
                handleSceneChange(hotspot.sceneId);
              }
            },
          })),
        }}
      />
    </div>
  );
};
export default VirtualTour;
