// import React from "react"

// export const Slider: React.FC = () => {
//   return (
//     <div>Slider</div>
//   )
// }

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderPropsType = {
  items: React.ReactNode[];
};

export const Slider: React.FC<SliderPropsType> = ({ items }) => {
  const responsive = {
    0: { items: 1 },
    1060: { items: 1 },
  };

  return (
    <AliceCarousel
      autoWidth
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      
    />
  );
};
