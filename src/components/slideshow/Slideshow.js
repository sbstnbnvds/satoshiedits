import React from "react";
import './Slideshow.css'
import Autoplay from "./Autoplay";
import bannervid1 from "../../assets/img/bannervid1.mp4"
import bannervid2 from "../../assets/img/bannervid2.mp4"
import bannervid3 from "../../assets/img/bannervid3.mp4"

const sourceString = "https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
const vids = [bannervid1, bannervid2, bannervid3];
const delay = 3000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === vids.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {vids.map((video, index) => (
          <div className="slide" key={index}>
            <Autoplay sourceVideo={video} />
          </div>
        ))}
      </div>
      {/* 
      <div className="slideshowDots">
        {vids.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
}


export default Slideshow