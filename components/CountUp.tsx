
import React, { useEffect, useState } from 'react';
import { useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

interface CountUpProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
}

/**
 * A specialized component for animating number counting.
 * Avoids rendering MotionValue objects directly in JSX to prevent React Error #31.
 */
const CountUp: React.FC<CountUpProps> = ({ 
  to, 
  prefix = '', 
  suffix = '', 
  className = '',
  delay = 0 
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  // Use physics-based animation for a premium "snappy" feel
  const count = useSpring(0, {
    bounce: 0,
    stiffness: 50,
    damping: 25,
    restDelta: 0.001
  });

  // Transform the raw number into a formatted locale string
  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toLocaleString();
  });

  // Listen to the motion value and update state for rendering
  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      count.set(to);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [to, count, delay]);

  return (
    <span className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default CountUp;
