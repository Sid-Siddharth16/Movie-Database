import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import crow from "../assets/BannerData/crow.png";
import gladiator from "../assets/BannerData/gladiator-2.jpg";
import kesari from "../assets/BannerData/kesari.jpg";
import raid from "../assets/BannerData/raid-2.jpg";

const slideImages = [
  {
    url: crow,
    caption: 'Slide 1'
  },
  {
    url: gladiator,
    caption: 'Slide 2'
  },
  {
    url: kesari,
    caption: 'Slide 3'
  },
  {
    url: raid,
    caption: 'Slide 4'
  }
];

const SlideShow: React.FC = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Fade duration={3000} pauseOnHover={false}>
        {slideImages.map((slideImage, index) => (
          <div className="relative h-[400px] w-full" key={index}>
            <img
              src={slideImage.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill"
            />
            <span className="absolute bottom-5 left-5 bg-black bg-opacity-60 text-white text-lg px-4 py-2 rounded">
              {slideImage.caption}
            </span>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideShow;
