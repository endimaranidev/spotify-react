import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  image: string | StaticImageData;
  index: number;
}

const colors = [
  "rgb(0, 100, 80)",
  "rgb(132, 0, 231)",
  "rgb(30, 50, 100)",
  "rgb(140, 25, 50)",
  "rgb(232, 17, 91)",
  "rgb(83, 122, 161)",
  "rgb(142, 102, 172)",
  "rgb(20, 138, 8)",
  "rgb(30, 50, 100)",
  "rgb(233, 20, 41)",
  "rgb(80, 55, 80)",
  "rgb(216, 64, 0)",
  "rgb(186, 93, 7)",
  "rgb(0, 30, 80)",
  "rgb(60, 30, 80)",
];

const Card = ({ name, image, index }: CardProps) => {
    
  const bgColor = colors[index % colors.length];

  return (
    <a href="#" className="cards" style={{ backgroundColor: bgColor }}>
      <div>
        <Image className="card" src={image} alt={name} />
        <span>{name}</span>
      </div>
    </a>
  );
};

export default Card;
