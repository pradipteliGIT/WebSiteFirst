import React from "react";
const Hamburger = (props) => {
  const { height, width, fill, setSidebar } = props;
  return (
    <div className="app-header-title__icon" onClick={setSidebar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox="0 0 24 24"
        width={width}
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <g>
              <path
                fill={fill}
                d="M2,17L2,17c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H3C2.45,16,2,16.45,2,17z M2,12L2,12 c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H3C2.45,11,2,11.45,2,12z M2,7L2,7c0,0.55,0.45,1,1,1h18 c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H3C2.45,6,2,6.45,2,7z"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Hamburger;
