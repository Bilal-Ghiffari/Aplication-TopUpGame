import React from "react";
import LinkFooter from "./LinkFooter/item";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <img src="/icon/logo.svg" width={60} height={60} alt="" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <LinkFooter
                      href=""
                      className="text-lg color-palette-1 text-decoration-none"
                      title="About Us"
                    />
                    <LinkFooter
                      href=""
                      className="text-lg color-palette-1 text-decoration-none"
                      title="Press Release"
                    />
                    <LinkFooter
                      href=""
                      className="text-lg color-palette-1 text-decoration-none"
                      title="Terms of Use"
                    />
                    <LinkFooter
                      href=""
                      className="text-lg color-palette-1 text-decoration-none"
                      title="Privacy & Policy"
                    />
                  </ul>
                </div>

                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <LinkFooter
                      href=""
                      className="text-lg color-palette-1 text-decoration-none"
                      title="Refund Policy"
                    />
                    <LinkFooter
                      href=""
                      className="text-lg color-palette-1 text-decoration-none"
                      title="Unlock Rewards"
                    />
                    <LinkFooter
                      href=""
                      className="text-lg color-palette-1 text-decoration-none"
                      title="Live Chattingy"
                    />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <LinkFooter
                      href="/mailto: hi@store.gg"
                      className="text-lg color-palette-1 text-decoration-none"
                      title="hi@store.gg"
                    />
                    <LinkFooter
                      href="/mailto: team@store.gg"
                      className="text-lg color-palette-1 text-decoration-none"
                      title="team@store.gg"
                    />
                    <LinkFooter
                      href="/http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan"
                      className="text-lg color-palette-1 text-decoration-none"
                      title="Pasific 12, Jakarta Selatan"
                    />
                    <LinkFooter
                      href="/tel: 02111229090"
                      className="text-lg color-palette-1 text-decoration-none"
                      title="021 - 1122 - 9090"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
