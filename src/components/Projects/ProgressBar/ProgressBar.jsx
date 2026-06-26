import "./ProgressBar.css";
import { useState, useEffect } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(100);
    }, 100);
    return () => clearInterval(timer);
  }, []);
  const bars = [10, 30, 50, 70, 100];
  return (
    <>
      <h1> Progress Bar</h1>
      {bars.map((ele) => {
        return (
          <>
            <div className="outer">
              <div
                className="inner"
                style={{
                  width: `${ele}%`,
                  color: ele <= 11 ? "black" : "white",
                  transform: `translateX(${progress - 100}%)`,
                }}
              >
                {ele}%
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default ProgressBar;
``;
