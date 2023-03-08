import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
// import { FaBeer } from "react-icons/fa";

const images = [
  {
    url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const ReactCarousel = () => {
  return (
    <>
      {/* <FaBeer /> */}
      <div className="flex items-center justify-center">
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay
        />
      </div>
    </>
  );
};

export default ReactCarousel;
