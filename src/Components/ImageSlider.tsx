import { useEffect, useState } from "react";
import image1 from "../Images/carousel/image1.jpg";
import image2 from "../Images/carousel/image2.jpg";
import image3 from "../Images/carousel/image3.jpg";
import image4 from "../Images/carousel/image4.jpg";
import image5 from "../Images/carousel/image5.jpg";
import image6 from "../Images/carousel/image6.jpg";
import image7 from "../Images/carousel/image7.jpg";
import image8 from "../Images/carousel/image8.jpg";
import "../Styles/ImageSlide.css";

export const ImageSlider = () => {
  const imagesArr = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const next = () => {
    setCurrentIndex((prevCurr) => {
      const currentValue = prevCurr === imagesArr.length ? 0 : ++prevCurr;
      return currentValue;
    });
  };

  // const prev = () => {
  //   setCurrentIndex((prevCurr) => {
  //     const currentValue = prevCurr === 0 ? imagesArr.length : --prevCurr;

  //     return currentValue;
  //   });
  // };

  useEffect(() => {
    const id=setInterval(() => {
      console.log(-currentIndex * 100);
      
      next();
    }, 5000);

    return ()=>clearInterval(id)
  }, []);

  return (
    <div className="slider-container">
      {imagesArr?.map((imgSrc) => (
        <img
          className="slider-image"
          key={imgSrc}
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          src={imgSrc}
        />
      ))}
    </div>
  );
};
