import { React } from "react";
const Home = (props) => {
  const { height, width, fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //enable-background="new 0 0 24 24"
      height={height}
      viewBox="0 0 24 24"
      width={width}
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <path
          fill={fill}
          d="M10.8,3.9l-6,4.5C4.3,8.78,4,9.37,4,10v9c0,1.1,0.9,2,2,2h4v-7h4v7h4c1.1,0,2-0.9,2-2v-9c0-0.63-0.3-1.22-0.8-1.6l-6-4.5 C12.49,3.37,11.51,3.37,10.8,3.9z"
        />
      </g>
    </svg>
  );
};
export default Home;
