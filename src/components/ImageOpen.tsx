import React, { useState, useRef } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

Modal.setAppElement("#__next"); // Or the appropriate root element of your app

const ImageWithModal = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const mainImageRef = useRef(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setZoomLevel(1); // Reset zoom
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setZoomLevel(1); // Reset zoom
  };

  const handleZoom = () => {
    setZoomLevel((prevZoom) => (prevZoom === 1 ? 2 : 1));
  };

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      overflow: "hidden",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  const zoomStyles = {
    transform: `scale(${zoomLevel})`,
    transformOrigin: "center", // Maintain the center zoom
    transition: "transform 0.3s ease-in-out", //Smooth zooming
  };

  return (
    <>
      <CardContainer className="inter-var z-200">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
            onClick={openModal} // Open modal on click
            style={{ cursor: "pointer" }}
          >
            <div className="relative z-[999]">
              <Image
                ref={mainImageRef}
                className="object-contain w-screen"
                style={{
                  width: "100%",
                  height: "auto", // Maintain aspect ratio
                }}
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={1000}
                height={1000}
              />
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <div className="w-full h-full relative flex justify-center items-center">
          <div
            className="relative z-[999] overflow-hidden"
            style={{ width: "100%", height: "auto" }}
          >
            <Image
              onClick={handleZoom}
              className="object-contain w-full h-auto"
              style={{ ...zoomStyles, cursor: "zoom-in" }}
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={1000}
              height={1000}
            />
          </div>

          <div className="absolute bottom-4 w-full flex justify-center gap-4">
            <button
              className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ImageWithModal;
