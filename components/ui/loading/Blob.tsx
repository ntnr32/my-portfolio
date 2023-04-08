import React, { SVGProps } from "react";

function Blob(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        strokeWidth="0"
        d="M21.9-18.6c8 4.7 17.1 11.7 18.4 19.9 1.4 8.3-5.1 17.9-13.1 25.5-8 7.7-17.6 13.4-24.6 10.8C-4.4 35-8.7 24-13 16.4c-4.2-7.7-8.3-12-10.6-18.7-2.3-6.7-2.8-15.6 1.4-20.4C-17.9-27.4-9-27.9-1-26.9c7.9 1 14.9 3.6 22.9 8.3z"
        transform="translate(50 50)"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
  );
}

export default Blob;
