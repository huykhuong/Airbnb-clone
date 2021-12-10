import React from "react";
import Image from "next/image";

interface SmallCardProps {
  key: string;
  img: string;
  location: string;
  distance: string;
}

const SmallCard: React.FC<SmallCardProps> = (props) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 cursor-pointer transform transition duration-200 ease-out">
      {/* {Left} */}
      <div className="relative h-16 w-16">
        <Image src={props.img} layout="fill" className="rounded-lg" />
      </div>
      {/* {Right} */}
      <div>
        <h2>{props.location}</h2>
        <h3 className="text-gray-500">{props.distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
