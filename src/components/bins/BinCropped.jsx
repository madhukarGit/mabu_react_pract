const SmallBin = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20%"
      height="20%"
      viewBox="0 0 90 236"
    >
      <g transform="translate(-265.267 -158)">
        <path
          d="M3.716,180.067V48.447H0V40.519H4.553L34.067,9.461V0H48.933V8.808L79.066,40.519H83v7.928H79.9v131.62Zm.62-.732H79.284V48.447H4.336ZM82.381,47.566V41.4H.619v6.166H82.381ZM5.594,40.519h72.43l-29.3-30.83H34.891ZM48.314,8.808V.881H34.687V8.808Z"
          transform="translate(269.267 195)"
          fill="#878787"
        />
        <g transform="translate(307.306 189.5)">
          <path
            d="M.375,6h-.75V0h.75Z"
            transform="translate(0.375 0)"
            fill="#878787"
          />
          <path
            d="M.375,6h-.75V0h.75Z"
            transform="translate(5.375 0)"
            fill="#e0131c"
          />
        </g>
      </g>
      <rect
        width="74" /* red */
        height="54%" /*   54% is 100% */
        transform="translate(8 87)"
        fill="#ff4d4f"
      />
      <rect
        width="75" /*Free GREEN */
        height="35%" /* 54% is 100% **/
        transform="translate(8 88)"
        fill="#36cfc9"
      />
      <text>
        <tspan x="31" y="68">
          HRW
        </tspan>
        <tspan x="10" y="108">
          Free 25%
        </tspan>
        <tspan x="10" y="128">
          Occupy 75%
        </tspan>
        <tspan x="30" y="150">
          137
        </tspan>
        <tspan x="30" y="170">
          11
        </tspan>
        <tspan x="30" y="190">
          0.00
        </tspan>
        <tspan x="30" y="210">
          61.12
        </tspan>
      </text>
    </svg>
  );
};

export default SmallBin;
