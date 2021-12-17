import React from "react";

export default function ItemStory() {
  return (
    <div className="col-lg-5 col-12 ps-lg-60">
      <div className="">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Win the battle.
          <br /> Be the Champion.
        </h2>
        <p className="text-lg color-palette-1 mb-30">
          Kami menyediakan jutaan cara untuk
          <br className="d-sm-block d-none" />
          membantu players menjadi
          <br className="d-sm-block d-none" /> pemenang sejati
        </p>
        <div className="d-md-block d-flex flex-column w-100">
          <a
            className="btn btn-read text-lg rounded-pill"
            href="#"
            role="button"
          >
            Read Story
          </a>
        </div>
      </div>
    </div>
  );
}
