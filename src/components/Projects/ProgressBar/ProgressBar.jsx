import "./ProgressBar.css";
import { useState, useEffect } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);
  const bars = [10, 30, 50, 70, 100];
  return (
    <>
      <h1>Progress Bar</h1>
      {bars.map((bar) => {
        return (
          <>
            <div className="outer">
              <div
                className="inner"
                style={{
                  width: `${bar}%`,
                  //width of the inner bar is set to the value of the bar variable,
                  // which is a percentage of the outer bar's width
                  color: bar <= 10 ? "black" : "white",
                  transform: `translateX(${progress - 100}%)`,
                  //to add transition effect, we can use transform property to
                  // move the inner bar from left to right as the progress increases
                }}
              >
                {bar}%
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default ProgressBar;
