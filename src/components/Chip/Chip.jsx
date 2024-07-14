import React, { useRef } from "react";
import "./Chip.css";

function HorizontalScroll() {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="scroll-content" ref={scrollContainer}>
        <div className="scroll-item">Item 1</div>
        <div className="scroll-item">Item 2</div>
        <div className="scroll-item">Item 3</div>
        <div className="scroll-item">Item 4</div>
        <div className="scroll-item">Item 5</div>
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

function Chip() {
  return (
    <>
      <HorizontalScroll />
    </>
  );
}

export default Chip;
