import Auth from "./Auth";
import LinkMenu from "./menu";
import ToggleMenu from "./ToggleMenu";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/icon/logo.svg" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <LinkMenu title="Home" active />
              <LinkMenu title="Games" href="/games" />
              <LinkMenu title="Rewards" href="/rewards" />
              <LinkMenu title="Discover" href="/descover" />
              <LinkMenu title="Global Rank" href="/global-rank" />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
