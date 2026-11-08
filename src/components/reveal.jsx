import { useEffect, useRef, useState } from "react";

const offsets = {
  up: ["0px", "28px"],
  left: ["-48px", "0px"],
  right: ["48px", "0px"],
};

export default function Reveal({ children, delay = 0, from = "up", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [rx, ry] = offsets[from] || offsets.up;
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, "--rx": rx, "--ry": ry }}
    >
      {children}
    </div>
  );
}
