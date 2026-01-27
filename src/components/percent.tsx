const PercentRing = ({ percent = 3, size = 144, stroke = 18 }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="rotate-90"
    >
      {/* Círculo base */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e8bf8d"
        strokeWidth={stroke}
        strokeLinecap="butt"
      />

      {/* Segmento 3% */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#da7d33"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="butt"
      />
    </svg>
  );
};

export default PercentRing;
