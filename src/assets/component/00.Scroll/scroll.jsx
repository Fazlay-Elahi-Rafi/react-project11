import React, { useState, useEffect } from "react";

import { BsArrowBarUp } from "react-icons/bs";

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div className="">
      {show && (
        <BsArrowBarUp
          onClick={handleClick}
          className="scroll icon"
          aria-label="to top"
          component="span"
        />
      )}
    </div>
  );
};
export default Scroll;
