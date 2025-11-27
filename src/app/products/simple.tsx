"use client";

import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Hello Next.js!</h1>
      <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
        <a
          data-lg-size="1406-1390"
          className="gallery-item m-2"
          data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4>"
        >
          <img
            className="img-responsive max-w-xs"
            src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            alt="unsplash image"
          />
        </a>
        <a
          data-lg-size="1400-1400"
          className="gallery-item m-2"
          data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4>"
        >
          <img
            className="img-responsive max-w-xs"
            src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG00by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            alt="unsplash image"
          />
        </a>
        <a
          data-lg-size="1400-1400"
          className="gallery-item m-2"
          data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4>"
        >
          <img
            className="img-responsive max-w-xs"
            src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG00by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
            alt="unsplash image"
          />
        </a>
        <a
          data-lg-size="1400-1400"
          className="gallery-item m-2"
          data-iframe="true"
          data-src="https://www.lightgalleryjs.com/pdf/sample.pdf"
        >
          <img
            className="img-responsive max-w-xs"
            src="https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG00by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80"
            alt="unsplash image"
          />
        </a>
        <a
          className="gallery-item m-2"
          data-src="https://www.youtube.com/watch?v=egyIeygdS_E&mute=0"
          key="4"
        >
          <img
            style={{ maxWidth: "400px" }}
            className="img-responsive max-w-xs"
            alt="youtube thumbnail"
            src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
          />
        </a>
      </LightGallery>
    </div>
  );
};

export default App;
