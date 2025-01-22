import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  ReactNode,
  FC,
  forwardRef,
  Children,
  MutableRefObject,
  RefAttributes,
} from "react";
import "./marquee.scss";

type MarqueeProps = {
  pauseOnHover?: boolean;
  pauseOnClick?: boolean;
  speed?: number;
  delay?: number;
  loop?: number;
  children?: ReactNode;
} & RefAttributes<HTMLDivElement>;

export const Marquee: FC<MarqueeProps> = forwardRef(function Marquee(
  {
    pauseOnHover = false,
    pauseOnClick = false,
    speed = 50,
    delay = 0,
    children,
  },
  ref
) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = (ref as MutableRefObject<HTMLDivElement>) || rootRef;
  const marqueeRef = useRef<HTMLDivElement>(null);

  const calculateWidth = useCallback(() => {
    if (marqueeRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const marqueeRect = marqueeRef.current.getBoundingClientRect();
      let containerWidth = containerRect.width;
      let marqueeWidth = marqueeRect.width;

      if (containerWidth && marqueeWidth) {
        setMultiplier(
          marqueeWidth < containerWidth
            ? Math.ceil(containerWidth / marqueeWidth)
            : 1
        );
      } else {
        setMultiplier(1);
      }

      setContainerWidth(containerWidth);
      setMarqueeWidth(marqueeWidth);
    }
  }, [containerRef]);

  useEffect(() => {
    if (!isMounted) return;

    calculateWidth();
    if (marqueeRef.current && containerRef.current) {
      const resizeObserver = new ResizeObserver(() => calculateWidth());
      resizeObserver.observe(containerRef.current);
      resizeObserver.observe(marqueeRef.current);
      return () => {
        if (!resizeObserver) return;
        resizeObserver.disconnect();
      };
    }
  }, [calculateWidth, containerRef, isMounted]);

  useEffect(() => {
    calculateWidth();
  }, [calculateWidth, children]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const duration = useMemo(() => {
    return marqueeWidth < containerWidth
      ? containerWidth / speed
      : marqueeWidth / speed;
  }, [containerWidth, marqueeWidth, speed]);

  const containerStyle = useMemo(
    () => ({
      ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
      ["--pause-on-click" as string]:
        (pauseOnHover && !pauseOnClick) || pauseOnClick ? "paused" : "running",
    }),
    [pauseOnHover, pauseOnClick]
  );

  const marqueeStyle = useMemo(
    () => ({
      ["--duration" as string]: `${duration}s`,
      ["--delay" as string]: `${delay}s`,
    }),
    [duration, delay]
  );

  const multiplyChildren = useCallback(
    (multiplier: number) => {
      return [
        ...Array(
          Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0
        ),
      ].map((_, i) => (
        <Fragment key={i}>
          {Children.map(children, (child) => {
            return <div>{child}</div>;
          })}
        </Fragment>
      ));
    },
    [children]
  );

  return !isMounted ? null : (
    <div
      ref={containerRef}
      className={"marquee-container"}
      style={containerStyle}
    >
      <div className="marquee" style={marqueeStyle}>
        <div className="initial-child-container" ref={marqueeRef}>
          {Children.map(children, (child) => {
            return <div>{child}</div>;
          })}
        </div>
        {multiplyChildren(multiplier - 1)}
      </div>
      <div className="marquee" style={marqueeStyle}>
        {multiplyChildren(multiplier)}
      </div>
    </div>
  );
});
