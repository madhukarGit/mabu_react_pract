const SmallBin = ({ height, width, code, percentage }) => {
  let free_of_available = (percentage * 69) / 100;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="4 31.5 83 185.57"
    >
      <g transform="translate(-265.267 -158)">
        <path
          d="M3.716,180.067V48.447H0V40.519H4.553L34.067,9.461V0H48.933V8.808L79.066,40.519H83v7.928H79.9v131.62Zm.62-.732H79.284V48.447H4.336ZM82.381,47.566V41.4H.619v6.166H82.381ZM5.594,40.519h72.43l-29.3-30.83H34.891ZM48.314,8.808V.881H34.687V8.808Z"
          transform="translate(269.267 195)"
          fill="#282828"
        />
        <g transform="translate(307.306 189.5)">
          <path
            d="M.375,6h-.75V0h.75Z"
            transform="translate(0.375 0)"
            fill="#282828"
          />
          <path
            d="M.375,6h-.75V0h.75Z"
            transform="translate(5.375 0)"
            fill="#282828"
          />
        </g>
      </g>
      <rect
        width="74"
        height="69%"
        transform="translate(8 87)"
        fill="#ff4d4f"
      />
      <rect
        width="74"
        height={`${free_of_available}%`}
        transform="translate(8 88)"
        fill="#36cfc9"
      />

      <text>
        <tspan x="31" y="68" style={{ fontSize: "9px", fontWeight: 700 }}>
          {code}
        </tspan>
        <tspan x="20" y="108" style={{ fontSize: "11px", fontWeight: 700 }}>
          Free {percentage}%
        </tspan>
        <tspan x="15" y="128" style={{ fontSize: "10px", fontWeight: 700 }}>
          Occupy {`${100 - percentage}`}%
        </tspan>
        <tspan x="30" y="150" style={{ fontSize: "11px", fontWeight: 700 }}>
          na
        </tspan>
        <tspan x="30" y="170" style={{ fontSize: "11px", fontWeight: 700 }}>
          11
        </tspan>
        <tspan x="30" y="190" style={{ fontSize: "11px", fontWeight: 700 }}>
          na
        </tspan>
        <tspan x="30" y="210" style={{ fontSize: "11px", fontWeight: 700 }}>
          61.12
        </tspan>
      </text>
    </svg>
  );
};

export default SmallBin;
