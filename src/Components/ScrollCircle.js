import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import '../Styles/ScrollCircle.css';

export default function ScrollCircle() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
      setShow(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <div className="scroll-circle-wrapper" onClick={scrollToTop}>
        <svg className="progress-ring" width="70" height="70">
          <circle
            className="progress-ring-bg"
            strokeWidth="4"
            r="30"
            cx="35"
            cy="35"
          />
          <circle
            className="progress-ring-fill"
            strokeWidth="4"
            r="30"
            cx="35"
            cy="35"
            style={{
              strokeDasharray: 188.4,
              strokeDashoffset: 188.4 - (188.4 * progress) / 100,
            }}
          />
        </svg>

        <div className="scroll-circle-btn">
          <FaArrowUp />
        </div>
      </div>
    )
  );
}
