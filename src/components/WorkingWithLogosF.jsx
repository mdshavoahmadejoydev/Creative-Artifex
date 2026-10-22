import React from "react";
import Image from '../components/Image'

const WorkingWithLogosF = ({src, className}) => {
  return (
    <Image
      src={src}
      alt={`company logo`}
      className={`h-12 object-cover object-center ${className}`}
    />
  );
};

export default WorkingWithLogosF;
