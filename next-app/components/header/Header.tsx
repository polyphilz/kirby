import React from "react";

interface HeaderProps {
  text: string;
  underlineBarWidthPx: number;
}

const Header: React.FC<HeaderProps> = ({
  text,
  underlineBarWidthPx,
}: HeaderProps) => {
  const underlineBarStyles = {
    width: `${underlineBarWidthPx}px`,
  };

  return (
    <div className="font-Mukta relative pb-4">
      <h1 className="text-4xl relative z-10">{text}</h1>
      <div
        style={underlineBarStyles}
        className="absolute bg-gradient-to-r from-light-pink-1 to-dark-pink-1 h-4 top-5 -left-1 z-0"
      ></div>
    </div>
  );
};

export default Header;
