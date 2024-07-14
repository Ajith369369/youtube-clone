import React, { useRef, useState, useEffect } from "react";
import "./Chip.css";

function HorizontalScroll() {
  const scrollContainer = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  // The state showLeftButton tracks the visibility of the left button.
  const [showRightButton, setShowRightButton] = useState(true);
  // The state showRightButton tracks the visibility of the right button.
  // The left and right buttons are only rendered if their respective state variables are true.

  const updateButtons = () => {
    // This function updates the visibility of the buttons based on the current scroll position of the container. It checks, if the scroll position is at the beginning or end of the container.
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;

    setShowLeftButton(scrollLeft > 0);
    // The line setShowLeftButton(scrollLeft > 0); is used to update the visibility of the left scroll button based on the current scroll position of the container. Specifically, this checks if the scrollLeft position of the container is greater than 0. If it is, it means that the user has scrolled the container to the right and therefore, the left button should be shown to allow scrolling back to the left. If scrollLeft is 0, the left button is hidden because there's no need to scroll left anymore.

    setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    // The line setShowRightButton(scrollLeft + clientWidth < scrollWidth); ensures that the right button is shown only if there is more content to scroll through. Specifically, it checks whether the current scroll position (scrollLeft) plus the visible width of the container (clientWidth) is less than the total scrollable width (scrollWidth). If this condition is true, it means that there is more content to the right, so the right button should be visible.
  };

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

  useEffect(() => {
    // This hook sets up an event listener for the scroll event on the container and updates the button visibility whenever the container is scrolled. It also cleans up the event listener when the component is unmounted.
    updateButtons();
    scrollContainer.current.addEventListener("scroll", updateButtons);
    return () => {
      scrollContainer.current.removeEventListener("scroll", updateButtons);
    };
  }, []);

  return (
    <div className="scroll-div">
      <div className="scroll-container">
        {showLeftButton && (
          <button className={`scroll-button left ${!showLeftButton ? "hidden" : ""}`} onClick={scrollLeft}>
            &lt;
          </button>
        )}
        <div className="scroll-content" ref={scrollContainer}>
          <div className="scroll-item">All</div>
          <div className="scroll-item">Mahabharat</div>
          <div className="scroll-item">Krishna</div>
          <div className="scroll-item">Transformers</div>
          <div className="scroll-item">Optimus Prime</div>
          <div className="scroll-item">Karna</div>
          <div className="scroll-item">Arjun</div>
          <div className="scroll-item">Pacific Rim</div>
          <div className="scroll-item">Mahabharat Title Song</div>
          <div className="scroll-item">Mahabharat Soundtracks</div>
          <div className="scroll-item">Trailer</div>
          <div className="scroll-item">Paramount Pictures</div>
          <div className="scroll-item">Warner Bros Pictures</div>
          <div className="scroll-item">Recently uploaded</div>
        </div>
        {showRightButton && (
          <button className="scroll-button right" onClick={scrollRight}>
            &gt;
          </button>
        )}
      </div>
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
