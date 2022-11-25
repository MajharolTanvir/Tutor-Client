import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "100",
  textAlign: "center",
  background: "#364d79",
};

const Header = () => {
  return (
    <Carousel autoplay>
      <div className="flex">
        <h4 className="text-8xl text-white">Online master setup</h4>
        <Image
          style={contentStyle}
          src="/headerImage1.jpg"
          alt=""
          width={1000}
          height={800}
        ></Image>
      </div>
      <div>
        <Image
          style={contentStyle}
          src="/headerImage2.jpg"
          width={1000}
          height={800}
          alt=""
        ></Image>
      </div>
      <div>
        <Image
          style={contentStyle}
          src="/headerImage3.jpg"
          width={1000}
          height={800}
          alt=""
        ></Image>
      </div>
      <div>
        <Image
          style={contentStyle}
          src="/headerImage4.jpg"
          alt=""
          width={1000}
          height={800}
        ></Image>
      </div>
    </Carousel>
  );
};

export default Header;
