
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
