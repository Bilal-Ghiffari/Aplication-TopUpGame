import ItemReachead from "./Item";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ItemReachead
            ranting="290M+"
            desc="Players Top Up"
            color="color-palette-ranting-1"
          />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <ItemReachead
            ranting="12.500"
            desc="Games Available"
            color="color-palette-ranting-3"
          />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <ItemReachead
            ranting="99,9%"
            desc="Happy Players"
            color="color-palette-ranting-1"
          />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <ItemReachead
            ranting="4.7"
            desc="Rating Worldwide"
            color="color-palette-ranting-2"
          />
        </div>
      </div>
    </section>
  );
}
