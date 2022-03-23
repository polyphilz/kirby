import React from "react";
import CloseIcon from "@mui/icons-material/Close";

interface CircleButtonProps {
  callback: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  callback,
}: CircleButtonProps) => {
  return (
    <button className="h-10 w-10 rounded-full bg-dark-red-1" onClick={callback}>
      <CloseIcon />
    </button>
  );
};

export default CircleButton;
