import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { useDoubleTap } from "use-double-tap";
import { useGesture } from "react-use-gesture";

interface ZoomableImageProps {
  src: string;
  alt: string;
  isOpen: boolean;
  width: number;
  height: number;
  images: { src: string; alt: string }[];
  currentImgIndex: number;
  setCurrentImgIndex: (index: number) => void;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  isOpen,
  width,
  height,
  images,
  currentImgIndex,
  setCurrentImgIndex,
}): JSX.Element => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleZoom = useCallback(
    (
      event?:
        | React.MouseEvent<HTMLImageElement>
        | React.TouchEvent<HTMLImageElement>
    ) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        if (event) {
          const clientX =
            (event as React.MouseEvent<HTMLImageElement>).clientX ||
            (event as React.TouchEvent<HTMLImageElement>).touches[0].clientX;
          const clientY =
            (event as React.MouseEvent<HTMLImageElement>).clientY ||
            (event as React.TouchEvent<HTMLImageElement>).touches[0].clientY;
          setOrigin({
            x: clientX - rect.left,
            y: clientY - rect.top,
          });
        } else {
          setOrigin({
            x: rect.width / 2,
            y: rect.height / 2,
          });
        }
      }
      setZoomLevel((prevZoom) => (prevZoom === 1 ? 2 : 1));
      setPosition({ x: 0, y: 0 });
    },
    []
  );

  const handleSlide = useCallback(
    (direction: "left" | "right") => {
      if (isOpen && zoomLevel === 1) {
        const nextIndex =
          (currentImgIndex + (direction === "right" ? 1 : -1) + images.length) %
          images.length;
        setCurrentImgIndex(nextIndex);
      }
    },
    [currentImgIndex, images, setCurrentImgIndex, isOpen, zoomLevel]
  );

  const bind = useGesture(
    {
      onDragStart: () => {
        if (isOpen && zoomLevel > 1) {
          setIsDragging(true);
        }
      },
      onDrag: ({ offset: [x, y], dragging, direction }) => {
        if (isOpen && zoomLevel > 1 && dragging) {
          setPosition({ x, y });
        } else if (isOpen && zoomLevel === 1 && dragging) {
          if (direction[0] < 0) {
            handleSlide("right");
          } else if (direction[0] > 0) {
            handleSlide("left");
          }
        } else {
          setPosition({ x: 0, y: 0 });
        }
      },
      onDragEnd: () => {
        setIsDragging(false);
      },
    },
    {
      drag: {
        // @ts-ignore
        axis: "xy",
      },
    }
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      {...bind()}
    >
      <Image
        ref={imageRef}
        onClick={(event) => {
          if (isOpen) {
            handleZoom(event);
          }
        }}
        src={src}
        alt={alt}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          display: "block",
          objectFit: "contain",
          transition: "transform 0.3s ease-in-out",
          transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
          transformOrigin: `${origin.x}px ${origin.y}px`,
          position: isOpen && zoomLevel > 1 ? "fixed" : "static",
          top: isOpen && zoomLevel > 1 ? 0 : "auto",
          left: isOpen && zoomLevel > 1 ? 0 : "auto",
          right: isOpen && zoomLevel > 1 ? 0 : "auto",
          bottom: isOpen && zoomLevel > 1 ? 0 : "auto",
          zIndex: isOpen && zoomLevel > 1 ? 1000 : "auto",
          cursor: isOpen ? "zoom-in" : "default",
          userSelect: isDragging ? "none" : "auto",
        }}
        width={width}
        height={height}
        {...useDoubleTap((event) => {
          if (isOpen) {
            handleZoom(event);
          }
        })}
      />
    </div>
  );
};

export default ZoomableImage;
