import React from "react";

import img from "../img/404.png";

export default function Error() {
  return (
    <>
      <div className="container mb-4">
        <div className="row m-auto">
          <img src={img} className="img-fluid" alt="error img" />
        </div>
      </div>
    </>
  );
}
