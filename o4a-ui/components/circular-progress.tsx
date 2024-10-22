import { FC } from "react";
import { Circle, Svg } from "react-native-svg";

const CircularProgress: FC<{
  radius: number;
  strokeWidth: number;
  percentage: number;
  color?: string;
  backgroundColor?: string;
}> = ({
  radius,
  strokeWidth,
  percentage,
  color = "#2dae77",
  backgroundColor = "#dbfbed",
}) => {
  const circumference = 2 * Math.PI * radius; // Circumference of the full circle
  const progress = (percentage / 100) * circumference; // Calculate how much of the circle to show

  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      {/* Background Circle */}
      <Circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Foreground Circle for Progress */}
      <Circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={`${progress}, ${circumference}`}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default CircularProgress;
