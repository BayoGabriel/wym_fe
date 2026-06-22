export default function Send_Money_Second() {
  return (
    <svg
      width="311"
      height="68"
      viewBox="0 0 311 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 61.668H65.565C81.0289 61.668 93.565 49.1319 93.565 33.668C93.565 18.204 106.101 5.66797 121.565 5.66797H308.333"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
        shapeRendering="crispEdges"
      />
      <path
        d="M3 61.668H65.565C81.0289 61.668 93.565 49.1319 93.565 33.668C93.565 18.204 106.101 5.66797 121.565 5.66797H308.333"
        stroke="white"
        strokeWidth="4"
        strokeDasharray="30 300"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-330"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      <defs>
        <linearGradient
          id="paint0_linear"
          x1="3"
          y1="61.0091"
          x2="278.455"
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
