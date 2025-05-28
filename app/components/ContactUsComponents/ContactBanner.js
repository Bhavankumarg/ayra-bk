import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <>
      <div>
        <Image
          src="/contact-us/contact-hero-banner.png"
          alt="Contact Banner"
          layout="responsive"
          width={700}
          height={300}
        />
      </div>
    </>
  );
};

export default ContactBanner;
