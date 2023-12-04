import { ReactNode, useEffect, useState } from "react";

type TooltipProps = {
  children: ReactNode;
  text: string;
};
const Tooltip = ({ children, text }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isHovered) {
      setIsVisible(true);
    } else {
      timeoutId = setTimeout(() => setIsVisible(false), 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHovered]);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block"
    >
      {children}

      {isVisible && (
        <div className="absolute top-full left-1/2 translate-x-[-50%] bg-black opacity-60 text-white p-[0.5rem] rounded-md z-10 transition-opacity duration-300">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
