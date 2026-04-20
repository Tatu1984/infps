import { useRef, useState, useEffect, useCallback, ReactNode } from "react";
import { Link } from "react-router-dom";
import { isTouchDevice, rafThrottle } from "@/utils/device";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({
  children,
  href = "#",
  className = "",
  onClick,
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseMove = useCallback(
    rafThrottle((e: React.MouseEvent) => {
      if (isTouch) return;
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * 0.3, y: y * 0.3 });
    }),
    [isTouch]
  );

  const handleMouseLeave = useCallback(() => setPosition({ x: 0, y: 0 }), []);

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const isAnchor = href.startsWith("#");

  const commonProps = {
    ref: buttonRef,
    className: `magnetic-button ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: isTouch ? undefined : `translate(${position.x}px, ${position.y}px)`,
    },
    onClick,
  };

  const content = (
    <>
      <span className="magnetic-button-inner">{children}</span>
      <span className="magnetic-button-glow" />
    </>
  );

  if (isExternal || isAnchor) {
    return <a {...commonProps} href={href}>{content}</a>;
  }

  return <Link {...commonProps} to={href}>{content}</Link>;
};
