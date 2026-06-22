export default function Send_Money_First() {
  return (
    <svg
      width="311"
      height="68"
      viewBox="0 0 311 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M308 61.668H245.435C229.971 61.668 217.435 49.1319 217.435 33.668C217.435 18.204 204.899 5.66797 189.435 5.66797H2.66666"
          stroke="url(#paint0_linear)"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
        <path
          d="M308 61.668H245.435C229.971 61.668 217.435 49.1319 217.435 33.668C217.435 18.204 204.899 5.66797 189.435 5.66797H2.66666"
          stroke="white"
          strokeWidth="4"
          strokeDasharray="30 300"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-330"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      <defs>
        <filter
          id="filter0_d"
          x="-0.000651121"
          y="4.66797"
          width="310.667"
          height="63.3333"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.66667" />
          <feGaussianBlur stdDeviation="1.33333" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.74 0 0 0 0 0.74 0 0 0 0 0.74 0 0 0 0.14 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>

        <linearGradient
          id="paint0_linear"
          x1="308"
          y1="61.0091"
          x2="32.5452"
          y2="-29.9586"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.335589" stopColor="#FFA034" />
          <stop offset="1" stopColor="#FFA034" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
