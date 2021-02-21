import { React } from "react";

const AboutUs = (props) => {
  const { height, width, fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // enable-background="new 0 0 24 24"
      viewBox="0 0 24 24"
      fill="black"
      width={width}
      height={height}
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path
          fill={fill}
          d="M12,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S8,5.79,8,8C8,10.21,9.79,12,12,12z M18.39,14.56C16.71,13.7,14.53,13,12,13 c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22L4,19c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1l0-1.78 C20,16.1,19.39,15.07,18.39,14.56z"
        />
      </g>
    </svg>
  );
};
export default AboutUs;