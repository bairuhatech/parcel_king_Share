import React from 'react'
import { Carousel } from "react-bootstrap";
import CarouselImage1 from "../../../asset/image/p.png";
import CarouselImage2 from "../../../asset/image/Van1.jpg";
import CarouselImage3 from "../../../asset/image/truckLoad.jpg";
import CarouselImage4 from "../../../asset/image/storage.jpg";

const MyCarousel = () => {
  return (
    
    <div>
        <Carousel fade>
            <Carousel.Item>
              <img
                src={CarouselImage1}
                className="carouselimage"
                alt="Image 1"
              />
              <Carousel.Caption>
                <div className="moreblog-text2">
                  Top 5 Reasons to Choose Parcel King for Furniture Assembly
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={CarouselImage2}
                className="carouselimage"
                alt="Image 2"
              />
              <Carousel.Caption>
                <div className="moreblog-text2">
                  Top 5 Reasons To Choose Parcel King for Delivery
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={CarouselImage3}
                className="carouselimage"
                alt="Image 3"
              />
              <Carousel.Caption>
                <div className="moreblog-text2">
                  On-Demand Delivery Scheduling & Last Mile Carrier Tracking Is
                  Empowering a Better CX
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={CarouselImage4}
                className="carouselimage"
                alt="Image 4"
              />
              <Carousel.Caption>
                <div className="moreblog-text2">
                  How Service Professional Apps Are Empowering Consumers
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
    </div>
  );
};

export default MyCarousel