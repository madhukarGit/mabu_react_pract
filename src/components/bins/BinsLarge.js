const BinsHighlighted = ({ width, height, code, percentage, protien, tw }) => {
  console.log(`code ${code} percentage ${percentage}`);
  let free_of_available = (percentage * 71) / 100;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 30.5 118 212.5"
    >
      <g transform="translate(-269 -159)">
        <path
          d="M5.284,207V48.447H0V40.519H6.474L48.433,9.46V0H69.567V8.808l42.84,31.711H118v7.928h-4.4V207Zm.881-.881H112.716V48.447H6.164ZM117.119,47.566V41.4H.881v6.166H117.119ZM7.954,40.519H110.927L69.276,9.689H49.6ZM68.687,8.808V.881H49.313V8.808Z"
          transform="translate(269 195)"
          fill="#282828"
        />
        <g transform="translate(140.875)">
          <path
            d="M.375,6h-.75V0h.75Z"
            transform="translate(184.5 189.5)"
            fill="#282828"
          />
          <path
            d="M.375,6h-.75V0h.75Z"
            transform="translate(189.5 189.5)"
            fill="#282828"
          />
        </g>
      </g>
      <g fill="white">
        <rect
          width="103"
          height="72%"
          transform="translate(8 87 )"
          fill="#ff4d4f"
        />
        <rect
          width="103"
          height={`${free_of_available}%`} //71 is 100%
          transform="translate(8 88)"
          fill="#36cfc9"
        />
      </g>
      <text>
        <tspan x="42" y="68" style={{ fontSize: "11px", fontWeight: 700 }}>
          {code}
        </tspan>
        <tspan x="22" y="108" style={{ fontSize: "11px", fontWeight: 700 }}>
          Free {percentage}%
        </tspan>
        <tspan x="22" y="128" style={{ fontSize: "11px", fontWeight: 700 }}>
          Occupy {`${100 - percentage}`}%
        </tspan>
        <tspan x="44" y="160" style={{ fontSize: "11px", fontWeight: 700 }}>
          na
        </tspan>
        <tspan x="44" y="185" style={{ fontSize: "11px", fontWeight: 700 }}>
          {protien}
        </tspan>
        <tspan x="44" y="210" style={{ fontSize: "11px", fontWeight: 700 }}>
          na
        </tspan>
        <tspan x="44" y="230" style={{ fontSize: "11px", fontWeight: 700 }}>
          {tw}
        </tspan>
      </text>
    </svg>
  );
};

export default BinsHighlighted;
