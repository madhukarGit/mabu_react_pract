const BinGrainSVG = ({ color, suggestion, binNo }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      viewBox="0 0 62 62"
    >
      <g
        id="Group_29261"
        data-name="Group 29261"
        transform="translate(-1131 -545)"
      >
        <g
          id="Selection"
          transform="translate(1132 546)"
          fill="#f6f9fd"
          stroke={color}
        >
          <rect width="60" height="60" stroke="none" />
          <rect x="-0.5" y="-0.5" width="61" height="61" fill="none" />
        </g>
        <g
          id="Group_29102"
          data-name="Group 29102"
          transform="translate(879.726 380.075)"
        >
          <path
            id="Union_153"
            data-name="Union 153"
            d="M1.186,17l-.02-6.315H0V8.941H1.427l9.248-6.853V0h4.658V1.943l9.443,7h1.233v1.749h-.97L25.059,17Zm.173-.253H24.844V10.689H1.359ZM25.815,10.5V9.135H.194V10.5h25.62ZM1.753,8.941h22.7l-9.18-6.8H10.933Zm13.386-7V.194h-4.27V1.943Z"
            transform="translate(269.451 189.185)"
            fill="#656565"
          />
          <path
            id="Union_153_-_Outline"
            data-name="Union 153 - Outline"
            d="M25.287,17.232H1.061l-.021-6.315H-.125v-2.1H1.42L10.55,2.05V-.125h5.011V1.906l9.325,6.91h1.351v2.1h-.969Zm-23.7-.606H24.719v-5.71H1.586ZM.422,10.37H25.69V9.362H.422ZM2.339,8.816H23.967l-8.7-6.45h-4.22Zm8.758-7h3.917V.422H11.1Z"
            transform="translate(269.4 189.134)"
            fill="#656565"
          />
          <g
            id="Group_29070"
            data-name="Group 29070"
            transform="translate(281.648 184.925)"
          >
            <path
              id="Line_18286"
              data-name="Line 18286"
              d="M-.21,4.139H-.375V0H-.21Z"
              transform="translate(0.551 0.176)"
              fill="#656565"
            />
            <path
              id="Line_18286_-_Outline"
              data-name="Line 18286 - Outline"
              d="M.017,4.367H-.5V-.125H.017Z"
              transform="translate(0.5 0.125)"
              fill="#656565"
            />
            <path
              id="Line_18287"
              data-name="Line 18287"
              d="M-.21,4.139H-.375V0H-.21Z"
              transform="translate(1.648 0.176)"
              fill="#656565"
            />
            <path
              id="Line_18287_-_Outline"
              data-name="Line 18287 - Outline"
              d="M.017,4.367H-.5V-.125H.017Z"
              transform="translate(1.597 0.125)"
              fill="#656565"
            />
          </g>
        </g>
        <text
          id="Bin_04"
          data-name="Bin 04"
          transform="translate(1148 600)"
          fill="#656565"
          fontSize="8"
          fontFamily="OpenSans, Open Sans"
          letterSpacing="-0.017em"
        >
          <tspan x="0" y="0">
            Bin {binNo}
          </tspan>
        </text>
        {suggestion === "suggested" && (
          <text
            id="Suggested_"
            data-name="Suggested ! "
            transform="translate(1192 557)"
            fill="#d49836"
            fontSize="8"
            fontFamily="OpenSans, Open Sans"
            letterSpacing="-0.017em"
          >
            <tspan x="-54" y="0">
              Suggested !{" "}
            </tspan>
          </text>
        )}
        {suggestion === "NA Full" && (
          <text
            id="NA_Full_"
            data-name="NA Full!"
            transform="translate(1190 556)"
            fill="#ff4d4f"
            fontSize="10"
            fontFamily="OpenSans, Open Sans"
            letterSpacing="-0.017em"
          >
            <tspan x="-34" y="0">
              NA Full!
            </tspan>
          </text>
        )}
        {suggestion === "available" && (
          <text
            id="Available_"
            data-name="Available! "
            transform="translate(1192 557)"
            fill="#36cfc9"
            fontSize="10"
            fontFamily="OpenSans, Open Sans"
            letterSpacing="-0.017em"
          >
            <tspan x="-45" y="0">
              Available!{" "}
            </tspan>
          </text>
        )}
      </g>
    </svg>
  );
};

export default BinGrainSVG;
