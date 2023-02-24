import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { slide1, slide2, slide3 } from "../assets";

function Banner() {
  return (
    <div className="relative my-9">
      <div className="absolute w-full h-32 g-gradient-to-t from-gray-400 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src={slide1}
            className="h-[400px] object-cover"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={slide2}
            className="h-[400px] object-cover"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            className="h-[400px] object-cover"
            src={slide3}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
