import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <>
      <div className="mt-10 lg:mt-32">
        <Image
          width={1200}
          height={1000}
          src="/contact-us/map.png"
          alt="Map"
          layout="responsive"
        />
      </div>
    </>
  );
};

export default Map;
