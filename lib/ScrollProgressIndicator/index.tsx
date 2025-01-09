import { FC } from "react";
import { useScroll } from "react-basic-utils";
import styles from "./styles.module.css";

type ScrollProgressIndicatorProps = {
  startColor: string;
  endColor: string;
  position?: "top" | "bottom";
  height?: number;
};

export const ScrollProgressIndicator: FC<ScrollProgressIndicatorProps> = ({
  startColor,
  endColor,
  position = "top",
  height = 7,
}) => {
  const scrollPosition = useScroll(window);
  const scrollProgress =
    (scrollPosition / (document.body.scrollHeight - window.screen.height)) *
    100;

  return (
    <div
      className={position === "top" ? styles.top : styles.bottom}
      style={{
        zIndex: 9999,
        position: "fixed",
        left: 0,
        height: `${height}px`,
        maxWidth: "100%",
        backgroundImage: `linear-gradient(to bottom right, ${startColor}, ${endColor})`,
        width: `${scrollProgress}%`,
      }}
    />
  );
};
