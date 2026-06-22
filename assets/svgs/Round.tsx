const Round = ({ fill, color }: { fill: string; color: string }) => {
  return (
    <svg
      width="39"
      height="38"
      viewBox="0 0 39 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.890625"
        y="0.375"
        width="37.3557"
        height="37.3557"
        rx="18.6778"
        fill={fill}
        // fill="#ECF0FB"
      />
      <circle cx="19.5691" cy="19.0535" r="6.67065" fill={color} />
    </svg>
  );
};

export default Round;
